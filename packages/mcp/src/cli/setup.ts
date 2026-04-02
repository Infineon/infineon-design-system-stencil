import { existsSync, mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';
import { createInterface } from 'node:readline';

interface McpConfig {
  servers?: {
    [key: string]: {
      command: string;
      args?: string[];
      env?: Record<string, string>;
    };
  };
}

function getWorkspaceConfigPath(): string {
  return join(process.cwd(), '.vscode');
}

function isInWorkspace(): boolean {
  // Check if we're in a directory that looks like a workspace
  const possibleWorkspaceMarkers = [
    '.git',
    '.vscode',
    'package.json',
    'pnpm-workspace.yaml',
    'lerna.json',
  ];
  
  return possibleWorkspaceMarkers.some(marker => 
    existsSync(join(process.cwd(), marker))
  );
}

async function askQuestion(question: string): Promise<string> {
  const rl = createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  return new Promise((resolve) => {
    rl.question(question, (answer) => {
      rl.close();
      resolve(answer.trim());
    });
  });
}

function getMcpCommand() {
  // Use npx --no to require local installation (doesn't auto-download)
  // This ensures the DDS version matches the MCP version
  return {
    command: 'npx',
    args: ['--no', '@infineon/design-system-mcp'],
  };
}

export async function runSetup(): Promise<void> {
  console.log('🚀 DDS MCP Setup\n');
  console.log('This will configure the DDS MCP server in VS Code for this workspace.\n');

  // Check if in a workspace
  if (!isInWorkspace()) {
    console.error('❌ Error: Not in a workspace directory.');
    console.error('   Please run this command from your project root (where package.json is located).');
    process.exit(1);
  }

  const configDir = getWorkspaceConfigPath();
  const mcpConfigPath = join(configDir, 'mcp.json');
  
  console.log(`📂 Configuration file: ${mcpConfigPath}`);
  
  // Ensure the config directory exists
  if (!existsSync(configDir)) {
    console.log(`Creating directory: ${configDir}`);
    mkdirSync(configDir, { recursive: true });
  }
  
  // Read existing config or create new one
  let config: McpConfig = {};
  
  if (existsSync(mcpConfigPath)) {
    console.log(`\nReading existing configuration...`);
    try {
      const content = readFileSync(mcpConfigPath, 'utf-8');
      config = JSON.parse(content);
    } catch {
      console.error('⚠️  Warning: Could not parse existing mcp.json. Creating a backup.');
      const backupPath = `${mcpConfigPath}.backup.${Date.now()}`;
      writeFileSync(backupPath, readFileSync(mcpConfigPath));
      console.log(`   Backup saved to: ${backupPath}`);
    }
  }
  
  // Initialize servers if it doesn't exist
  if (!config.servers) {
    config.servers = {};
  }
  
  // Check if design-system is already configured
  if (config.servers['design-system']) {
    const answer = await askQuestion(
      '\n⚠️  DDS MCP is already configured. Do you want to overwrite it? (y/N): '
    );
    if (answer.toLowerCase() !== 'y') {
      console.log('\n✅ Setup cancelled. Existing configuration preserved.');
      return;
    }
  }
  
  // Check if locally installed
  const localInstalled = existsSync(join(process.cwd(), 'node_modules', '@infineon', 'design-system-mcp'));
  
  // Add DDS MCP configuration
  const mcpCommand = getMcpCommand();
  config.servers['design-system'] = {
    command: mcpCommand.command,
    args: mcpCommand.args,
  };
  
  // Write the updated config
  console.log('\n📝 Writing configuration...');
  writeFileSync(mcpConfigPath, JSON.stringify(config, null, 2), 'utf-8');
  
  console.log(`✅ Configuration saved to: ${mcpConfigPath}`);
  console.log('\n📋 Configuration added:');
  console.log(JSON.stringify({ servers: { 'design-system': config.servers['design-system'] } }, null, 2));
  
  console.log('\n🎉 Setup complete!');
  console.log('\n📖 Next steps:');
  
  if (!localInstalled) {
    console.log('   ⚠️  Local installation not detected. Install the package:');
    console.log('      pnpm add -D @infineon/design-system-mcp');
    console.log('   💡 Tip: Install the same version as your DDS package for compatibility');
    console.log('');
  }
  
  console.log('   1. Restart VS Code or GitHub Copilot');
  console.log('   2. The DDS MCP server should now be available to your AI assistant');
  console.log('\n💡 Tip: Commit .vscode/mcp.json and package.json to share this setup with your team');
  console.log('\n💡 Tip: You can test the tools using @mcp in GitHub Copilot Chat');
  console.log('   Example: "@mcp dds.listComponents for react"');
  console.log();
}
