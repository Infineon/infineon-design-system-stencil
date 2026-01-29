import { McpServer } from '@modelcontextprotocol/sdk/server/mcp.js';
import { StdioServerTransport } from '@modelcontextprotocol/sdk/server/stdio.js';

import { z } from 'zod';
import {
  buildComponentIndex,
  getComponentDoc,
  getDdsVersion,
} from './runtime/dds.js';

const FrameworkSchema = z.enum(['html', 'react', 'vue', 'angular']);
const IncludeSchema = z.enum(['properties', 'events', 'slots', 'css', 'examples']);

const ListComponentsInputSchema = z
  .object({
    framework: FrameworkSchema,
  })
  .strict();

const GetComponentInputSchema = z
  .object({
    component: z.string().min(1),
    framework: FrameworkSchema,
    include: z.array(IncludeSchema).optional(),
  })
  .strict();

export async function startServer() {
  const server = new McpServer({
    name: 'dds-mcp',
    version: '1.0.0',
  });

  server.registerTool(
    'dds.listComponents',
    {
      description: 'List components of the digital design system (DDS).',
      inputSchema: ListComponentsInputSchema,
    },
    async ({ framework }) => {
      const version = await getDdsVersion();
      const md = await buildComponentIndex({
        version,
        framework,
      });

      return { content: [{ type: 'text', text: md }] };
    }
  );

  server.registerTool(
    'dds.getComponent',
    {
      description: 'Get component docs of the digital design system (DDS) including properties, events, slots, css, and examples.',
      inputSchema: GetComponentInputSchema,
    },
    async ({ component, framework, include }) => {
      const version = await getDdsVersion();
      const md = await getComponentDoc({
        version,
        component,
        framework,
        include: include ?? ['properties', 'events', 'slots', 'css', 'examples'],
      });

      return { content: [{ type: 'text', text: md }] };
    }
  );

  const transport = new StdioServerTransport();
  await server.connect(transport);
}

// Start server if run directly
if (import.meta.url === `file://${process.argv[1]}`) {
  startServer();
}
