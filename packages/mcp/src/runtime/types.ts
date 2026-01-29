export type Framework = 'html' | 'react' | 'vue' | 'angular';
export type IncludeKey = 'properties' | 'events' | 'slots' | 'css' | 'examples';

export interface ComponentIndexRequest {
  version: string;
  framework: Framework;
}

export interface ComponentDocRequest {
  version: string;
  component: string;
  framework: Framework;
  include: IncludeKey[];
}

export interface DdsDataSource {
  docs?: StencilDocs;
  examples?: Map<string, string>;
}

export interface StencilDocsComponent {
  tag: string;
  docs?: string;
  props?: Array<{
    name: string;
    attr?: string;
    type?: string;
    default?: string;
    docs?: string;
  }>;
  events?: Array<{
    event: string;
    detail?: string;
    docs?: string;
  }>;
  slots?: Array<{ name?: string; docs?: string }>;
  styles?: Array<{ name: string; docs?: string }>; // CSS custom properties
  parts?: Array<{ name: string; docs?: string }>; // CSS parts
}

export interface StencilDocs {
  components: StencilDocsComponent[];
}
