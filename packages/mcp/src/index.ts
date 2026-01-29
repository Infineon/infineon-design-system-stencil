import { McpServer } from '@modelcontextprotocol/sdk/server/mcp.js';
import { StdioServerTransport } from '@modelcontextprotocol/sdk/server/stdio.js';

import { z } from 'zod';
import {
  buildComponentIndex,
  getComponentDoc,
  getDdsVersion,
  getSource,
} from './runtime/dds.js';
import { normalizeComponentName } from './views/frameworkNotes.js';

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

const GetFoundationInputSchema = z
  .object({
    story: z.string().min(1).describe('Story slug, e.g. "foundations/color" or "setup/gettingstarted"'),
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
        component: normalizeComponentName(component),
        framework,
        include: include ?? ['properties', 'events', 'slots', 'css', 'examples'],
      });

      return { content: [{ type: 'text', text: md }] };
    }
  );

  server.registerTool(
    'dds.listFoundations',
    {
      description: 'List all available foundation stories (design tokens, typography, colors, spacing, etc.) and setup guides.',
      inputSchema: z.object({}),
    },
    async () => {
      const source = await getSource();
      const foundations = source.foundations || new Map();
      
      const categories = new Map<string, string[]>();
      for (const [slug, story] of foundations) {
        if (!categories.has(story.category)) {
          categories.set(story.category, []);
        }
        categories.get(story.category)!.push(`- **${slug}**: ${story.title}`);
      }
      
      const lines: string[] = ['# DDS Foundation Stories & Guides', ''];
      for (const [category, stories] of categories) {
        lines.push(`## ${category}`, '', ...stories, '');
      }
      
      return { content: [{ type: 'text', text: lines.join('\n') }] };
    }
  );

  server.registerTool(
    'dds.getFoundation',
    {
      description: 'Get a specific foundation story (e.g. Color, Typography, Spacing) or setup guide.',
      inputSchema: GetFoundationInputSchema,
    },
    async ({ story }) => {
      const source = await getSource();
      const foundations = source.foundations || new Map();
      const foundationStory = foundations.get(story.toLowerCase());
      
      if (!foundationStory) {
        return { 
          content: [{ 
            type: 'text', 
            text: `Foundation story "${story}" not found. Use dds.listFoundations to see available stories.` 
          }] 
        };
      }
      
      const md = [
        `# ${foundationStory.title}`,
        '',
        `*Category: ${foundationStory.category}*`,
        '',
        foundationStory.content,
      ].join('\n');
      
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
