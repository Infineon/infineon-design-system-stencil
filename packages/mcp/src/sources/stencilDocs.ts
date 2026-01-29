import fs from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

import type { StencilDocs, StencilDocsComponent } from '../runtime/types.js';

export async function loadStencilDocs(): Promise<StencilDocs | undefined> {
  const docsJsonPath = await resolveDocsJsonPath();
  if (!docsJsonPath) return undefined;

  const raw = await fs.readFile(docsJsonPath, 'utf8');
  const parsed = JSON.parse(raw) as unknown;

  // Stencil docs.json typically looks like { components: [...] }
  if (!parsed || typeof parsed !== 'object') return undefined;

  const components = (parsed as any).components;
  if (!Array.isArray(components)) return undefined;

  const normalized: StencilDocsComponent[] = components
    .map((c: any) => normalizeComponent(c))
    .filter((c: StencilDocsComponent | undefined): c is StencilDocsComponent =>
      Boolean(c)
    );

  return { components: normalized };
}

async function resolveDocsJsonPath(): Promise<string | undefined> {
  // Stencil outputs docs.json directly to packages/mcp/assets/docs.json
  // Then build copies it to dist/assets/docs.json
  const bundledPath = resolveBundledDocsJsonPath();
  try {
    await fs.access(bundledPath);
    return bundledPath;
  } catch {
    return undefined;
  }
}

function resolveBundledDocsJsonPath(): string {
  // Compiled location: dist/sources/stencilDocs.js
  // Bundled assets live in dist/assets/docs.json
  const here = path.dirname(fileURLToPath(import.meta.url));
  return path.resolve(here, '..', 'assets', 'docs.json');
}

function normalizeComponent(c: any): StencilDocsComponent | undefined {
  const tag = c?.tag;
  if (typeof tag !== 'string' || !tag) return undefined;

  return {
    tag,
    docs: typeof c.docs === 'string' ? c.docs.trim() : undefined,
    props: Array.isArray(c.props)
      ? c.props
          .map((p: any) => ({
            name: String(p.name ?? ''),
            attr: typeof p.attr === 'string' && p.attr ? p.attr : undefined,
            type: typeof p.type === 'string' ? p.type : undefined,
            default:
              typeof p.default === 'string'
                ? p.default
                : p.default != null
                  ? String(p.default)
                  : undefined,
            docs: typeof p.docs === 'string' ? p.docs.trim() : undefined,
          }))
          .filter((p: any) => p.name)
      : undefined,
    events: Array.isArray(c.events)
      ? c.events
          .map((e: any) => ({
            event: String(e.event ?? ''),
            detail: typeof e.detail === 'string' ? e.detail : undefined,
            docs: typeof e.docs === 'string' ? e.docs.trim() : undefined,
          }))
          .filter((e: any) => e.event)
      : undefined,
    slots: Array.isArray(c.slots)
      ? c.slots.map((s: any) => ({
          name: typeof s.name === 'string' ? s.name : undefined,
          docs: typeof s.docs === 'string' ? s.docs.trim() : undefined,
        }))
      : undefined,
    styles: Array.isArray(c.styles)
      ? c.styles
          .map((s: any) => ({
            name: String(s.name ?? ''),
            docs: typeof s.docs === 'string' ? s.docs.trim() : undefined,
          }))
          .filter((s: any) => s.name)
      : undefined,
    parts: Array.isArray(c.parts)
      ? c.parts
          .map((p: any) => ({
            name: String(p.name ?? ''),
            docs: typeof p.docs === 'string' ? p.docs.trim() : undefined,
          }))
          .filter((p: any) => p.name)
      : undefined,
  };
}
