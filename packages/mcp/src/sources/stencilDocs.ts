import fs from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

import type { StencilDocs, StencilDocsComponent } from '../runtime/types.js';

type JsonRecord = Record<string, unknown>;
type StencilProp = NonNullable<StencilDocsComponent['props']>[number];
type StencilMethod = NonNullable<StencilDocsComponent['methods']>[number];
type StencilEvent = NonNullable<StencilDocsComponent['events']>[number];
type StencilSlot = NonNullable<StencilDocsComponent['slots']>[number];
type StencilStyle = NonNullable<StencilDocsComponent['styles']>[number];
type StencilPart = NonNullable<StencilDocsComponent['parts']>[number];

export async function loadStencilDocs(): Promise<StencilDocs | undefined> {
  const docsJsonPath = await resolveDocsJsonPath();
  if (!docsJsonPath) return undefined;

  const raw = await fs.readFile(docsJsonPath, 'utf8');
  const parsed = JSON.parse(raw) as unknown;

  // Stencil docs.json typically looks like { components: [...] }
  if (!parsed || typeof parsed !== 'object') return undefined;

  const components = (parsed as JsonRecord).components;
  if (!Array.isArray(components)) return undefined;

  const normalized: StencilDocsComponent[] = components
    .map((c) => normalizeComponent(c))
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

function compact<T>(values: Array<T | undefined>): T[] {
  return values.filter((value): value is T => value !== undefined);
}

function normalizeComponent(c: unknown): StencilDocsComponent | undefined {
  if (!c || typeof c !== 'object') return undefined;

  const component = c as JsonRecord;
  const tag = component.tag;
  if (typeof tag !== 'string' || !tag) return undefined;

  return {
    tag,
    docs: typeof component.docs === 'string' ? component.docs.trim() : undefined,
    props: Array.isArray(component.props)
      ? compact(
          component.props
          .map((prop) => {
            if (!prop || typeof prop !== 'object') return undefined;
            const p = prop as JsonRecord;

            const normalized: StencilProp = {
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
            };

            return normalized.name ? normalized : undefined;
          })
        )
      : undefined,
    methods: Array.isArray(component.methods)
      ? compact(
          component.methods
          .map((method) => {
            if (!method || typeof method !== 'object') return undefined;
            const m = method as JsonRecord;
            const returns =
              m.returns && typeof m.returns === 'object'
                ? (m.returns as JsonRecord)
                : undefined;
            const complexType =
              m.complexType && typeof m.complexType === 'object'
                ? (m.complexType as JsonRecord)
                : undefined;

            const normalized: StencilMethod = {
              name: String(m.name ?? ''),
              signature:
                typeof m.signature === 'string' && m.signature
                  ? m.signature
                  : undefined,
              returnType:
                typeof returns?.type === 'string' && returns.type
                  ? returns.type
                  : typeof complexType?.return === 'string' && complexType.return
                    ? complexType.return
                    : undefined,
              docs: typeof m.docs === 'string' ? m.docs.trim() : undefined,
            };

            return normalized.name ? normalized : undefined;
          })
        )
      : undefined,
    events: Array.isArray(component.events)
      ? compact(
          component.events
          .map((event) => {
            if (!event || typeof event !== 'object') return undefined;
            const e = event as JsonRecord;

            const normalized: StencilEvent = {
              event: String(e.event ?? ''),
              detail: typeof e.detail === 'string' ? e.detail : undefined,
              docs: typeof e.docs === 'string' ? e.docs.trim() : undefined,
            };

            return normalized.event ? normalized : undefined;
          })
        )
      : undefined,
    slots: Array.isArray(component.slots)
      ? compact(
          component.slots
          .map((slot) => {
            if (!slot || typeof slot !== 'object') return undefined;
            const s = slot as JsonRecord;

            const normalized: StencilSlot = {
              name: typeof s.name === 'string' ? s.name : undefined,
              docs: typeof s.docs === 'string' ? s.docs.trim() : undefined,
            };

            return normalized;
          })
        )
      : undefined,
    styles: Array.isArray(component.styles)
      ? compact(
          component.styles
          .map((style) => {
            if (!style || typeof style !== 'object') return undefined;
            const s = style as JsonRecord;

            const normalized: StencilStyle = {
              name: String(s.name ?? ''),
              docs: typeof s.docs === 'string' ? s.docs.trim() : undefined,
            };

            return normalized.name ? normalized : undefined;
          })
        )
      : undefined,
    parts: Array.isArray(component.parts)
      ? compact(
          component.parts
          .map((part) => {
            if (!part || typeof part !== 'object') return undefined;
            const p = part as JsonRecord;

            const normalized: StencilPart = {
              name: String(p.name ?? ''),
              docs: typeof p.docs === 'string' ? p.docs.trim() : undefined,
            };

            return normalized.name ? normalized : undefined;
          })
        )
      : undefined,
  };
}
