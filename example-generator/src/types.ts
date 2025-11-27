export interface ComponentAttribute {
  [key: string]: string;
}

export interface ComponentStructure {
  tag: string;
  attributes: ComponentAttribute;
  textContent: string;
  children: ComponentStructure[];
}

export interface ComponentEvent {
  name: string;
  description: string;
  patterns?: string;
}

export interface ComponentInfo {
  component: string;
  title?: string;
  storyName?: string;
  structure: ComponentStructure;
  events: ComponentEvent[];
  defaultArgs: Record<string, any>;
  argTypes: Record<string, any>;
}

export interface StoryMetadata {
  title?: string;
  component?: string;
  args?: Record<string, any>;
  argTypes?: Record<string, any>;
  [key: string]: any;
}
