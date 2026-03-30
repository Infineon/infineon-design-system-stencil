import {
  AngularCodeFormatter,
  type ComponentInfo,
  type FormatOptions,
  HTMLCodeFormatter,
  ReactCodeFormatter,
  VueCodeFormatter,
} from '@infineon/dds-tooling';
import type {
  ComponentDocRequest,
  ComponentIndexRequest,
  DdsDataSource,
  IncludeKey,
  StencilDocsComponent,
} from '../runtime/types.js';
import { getFrameworkNotes } from './frameworkNotes.js';

export function renderComponentIndexMarkdown(
  req: ComponentIndexRequest,
  source: DdsDataSource
): string {
  const tags = listAllTags(source);

  const lines: string[] = [];
  lines.push('# DDS Components');
  lines.push('');
  lines.push(`- Version: ${req.version}`);
  lines.push(`- Framework: ${req.framework}`);
  lines.push('');

  lines.push('| Tag | Notes |');
  lines.push('|-----|-------|');
  for (const tag of tags) {
    lines.push(`| \`${tag}\` | |`);
  }

  return lines.join('\n');
}

export function renderComponentDocMarkdown(
  req: ComponentDocRequest,
  source: DdsDataSource
): string {
  const include = new Set<IncludeKey>(req.include);
  const tag = req.component;

  const doc = findComponent(source, tag);
  if (!doc) {
    return [
      `# ${tag}`,
      '',
      `- Version: ${req.version}`,
      `- Framework: ${req.framework}`,
      '',
      `Component not found: \`${tag}\`.`,
    ].join('\n');
  }

  const lines: string[] = [];
  lines.push(`# ${tag}`);
  lines.push('');
  lines.push(`- Version: ${req.version}`);
  lines.push(`- Framework: ${req.framework}`);
  lines.push('');

  if (doc.description) {
    lines.push(doc.description);
    lines.push('');
  }

  if (include.has('properties') && doc.props.length) {
    lines.push('## Properties');
    lines.push('');
    lines.push('| Property | Attribute | Type | Default | Description |');
    lines.push('|----------|-----------|------|---------|-------------|');
    for (const p of doc.props) {
      lines.push(
        `| \`${p.name}\` | ${p.attr ? `\`${p.attr}\`` : '—'} | ${p.type ? `\`${p.type}\`` : '—'} | ${p.default ? `\`${p.default}\`` : '—'} | ${escapePipes(p.docs ?? '')} |`
      );
    }
    lines.push('');
  }

  if (include.has('events') && doc.events.length) {
    lines.push('## Events');
    lines.push('');
    lines.push('| Event | Type | Description |');
    lines.push('|-------|------|-------------|');
    for (const e of doc.events) {
      lines.push(
        `| \`${e.name}\` | ${e.type ? `\`${e.type}\`` : '—'} | ${escapePipes(e.docs ?? '')} |`
      );
    }
    lines.push('');
  }

  if (include.has('slots') && doc.slots.length) {
    lines.push('## Slots');
    lines.push('');
    lines.push('| Name | Description |');
    lines.push('|------|-------------|');
    for (const s of doc.slots) {
      lines.push(
        `| ${s.name ? `\`${s.name}\`` : '—'} | ${escapePipes(s.docs ?? '')} |`
      );
    }
    lines.push('');
  }

  if (include.has('css') && (doc.cssProps.length || doc.cssParts.length)) {
    if (doc.cssProps.length) {
      lines.push('## CSS Properties');
      lines.push('');
      lines.push('| Name | Description |');
      lines.push('|------|-------------|');
      for (const c of doc.cssProps) {
        lines.push(`| \`${c.name}\` | ${escapePipes(c.docs ?? '')} |`);
      }
      lines.push('');
    }

    if (doc.cssParts.length) {
      lines.push('## CSS Parts');
      lines.push('');
      lines.push('| Name | Description |');
      lines.push('|------|-------------|');
      for (const p of doc.cssParts) {
        lines.push(`| \`${p.name}\` | ${escapePipes(p.docs ?? '')} |`);
      }
      lines.push('');
    }
  }

  if (include.has('examples')) {
    const componentInfo = source.examples?.get(tag);
    if (componentInfo) {
      lines.push('## Example');
      lines.push('');
      
      // Generate framework-specific code using dds-tooling formatters
      const code = generateFrameworkCode(componentInfo, req.framework);
      const language = getLanguageForFramework(req.framework);
      
      lines.push(`\`\`\`${language}`);
      lines.push(code.trim());
      lines.push('```');
      lines.push('');
    }
  }

  // Add framework-specific usage notes
  const frameworkNotes = getFrameworkNotes(req.framework, tag);
  if (frameworkNotes) {
    lines.push('## Framework-Specific Usage');
    lines.push('');
    lines.push(frameworkNotes);
    lines.push('');
  }

  return lines.join('\n').trimEnd();
}

function listAllTags(source: DdsDataSource): string[] {
  const tags = new Set<string>();
  for (const c of source.docs?.components ?? []) tags.add(c.tag);
  return Array.from(tags).sort();
}

function findComponent(
  source: DdsDataSource,
  tag: string
): {
  description?: string;
  props: Array<{ name: string; attr?: string; type?: string; default?: string; docs?: string }>;
  events: Array<{ name: string; type?: string; docs?: string }>;
  slots: Array<{ name?: string; docs?: string }>;
  cssProps: Array<{ name: string; docs?: string }>;
  cssParts: Array<{ name: string; docs?: string }>;
} | undefined {
  const fromDocs = source.docs?.components?.find((c) => c.tag === tag);
  if (fromDocs) return normalizeFromDocs(fromDocs);
  return undefined;
}

function normalizeFromDocs(c: StencilDocsComponent) {
  return {
    description: c.docs,
    props: (c.props ?? []).map((p) => ({
      name: p.name,
      attr: p.attr,
      type: p.type,
      default: p.default,
      docs: p.docs,
    })),
    events: (c.events ?? []).map((e) => ({
      name: e.event,
      type: e.detail,
      docs: e.docs,
    })),
    slots: c.slots ?? [],
    cssProps: c.styles ?? [],
    cssParts: c.parts ?? [],
  };
}

function escapePipes(s: string): string {
  return s.replace(/\\/g, '\\\\').replace(/\|/g, '\\|');
}

function generateFrameworkCode(componentInfo: ComponentInfo, framework: string): string {
  const formatOptions: FormatOptions = {
    indent: '  ',
    baseIndent: '',
  };
  
  switch (framework) {
    case 'react':
      return new ReactCodeFormatter().formatComponent(componentInfo, formatOptions);
    case 'vue':
      return new VueCodeFormatter().formatComponent(componentInfo, formatOptions);
    case 'angular':
      return new AngularCodeFormatter().formatComponent(componentInfo, formatOptions);
    case 'html':
    default:
      return new HTMLCodeFormatter().formatComponent(componentInfo, formatOptions);
  }
}

function getLanguageForFramework(framework: string): string {
  switch (framework) {
    case 'react':
      return 'tsx';
    case 'vue':
      return 'vue';
    case 'angular':
      return 'typescript';
    case 'html':
    default:
      return 'html';
  }
}
