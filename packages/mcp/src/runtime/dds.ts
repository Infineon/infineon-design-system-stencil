import { loadStencilDocs } from '../sources/stencilDocs.js';
import { loadBundledExamples } from '../sources/examples.js';
import { loadFoundationStories } from '../sources/foundations.js';
import {
  renderComponentDocMarkdown,
  renderComponentIndexMarkdown,
} from '../views/markdown.js';
import type {
  ComponentDocRequest,
  ComponentIndexRequest,
  DdsDataSource,
} from './types.js';
import { readFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

let cachedSource: Promise<DdsDataSource> | undefined;

export async function getDdsVersion(): Promise<string> {
  const pkgPath = join(__dirname, '../../package.json');
  const pkgJson = JSON.parse(await readFile(pkgPath, 'utf-8'));
  return pkgJson.version;
}

export async function buildComponentIndex(
  req: ComponentIndexRequest
): Promise<string> {
  const source = await getSource();
  return renderComponentIndexMarkdown(req, source);
}

export async function getComponentDoc(
  req: ComponentDocRequest
): Promise<string> {
  const source = await getSource();
  return renderComponentDocMarkdown(req, source);
}

export async function getSource(): Promise<DdsDataSource> {
  if (!cachedSource) {
    cachedSource = (async () => {
      const docs = await loadStencilDocs();
      const examples = await loadBundledExamples();
      const foundations = await loadFoundationStories();
      return {
        docs,
        examples,
        foundations,
      };
    })();
  }

  return cachedSource;
}
