import { runSetup } from './setup.js';

// Injected at build time by esbuild
declare const __PACKAGE_VERSION__: string;

function showHelp(): void {
  console.log(`Infineon Design System MCP Integration

Usage:
  dds-mcp                 Start the MCP server (stdio mode)
  dds-mcp setup           Configure the MCP server in your workspace
  dds-mcp --help, -h      Show this help message
  dds-mcp --version, -v   Show version information

Commands:
  setup                   Configure .vscode/mcp.json for this workspace
                          (Must be run from your project root)

Examples:
  # Install in your project
  pnpm add -D @infineon/design-system-mcp
  
  # Run setup wizard
  dds-mcp setup
  
  # Start the MCP server (usually called automatically by VS Code)
  dds-mcp
`);
}

function showVersion(): void {
  console.log(`dds-mcp version ${__PACKAGE_VERSION__}`);
}

export async function handleCli(args: string[]): Promise<'exit' | 'continue'> {
  const command = args[0];

  switch (command) {
    case 'setup':
      await runSetup();
      return 'exit';
    
    case '--help':
    case '-h':
    case 'help':
      showHelp();
      return 'exit';
    
    case '--version':
    case '-v':
    case 'version':
      showVersion();
      return 'exit';
    
    case undefined:
      // No command provided, start the server
      return 'continue';
    
    default:
      console.error(`Unknown command: ${command}`);
      console.error('Run "dds-mcp --help" for usage information');
      process.exit(1);
  }
}
