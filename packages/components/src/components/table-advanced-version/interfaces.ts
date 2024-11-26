export interface ButtonInterface {
  disabled?: boolean;
  variant?: string,
  size?: string,
  target?: string,
  href?: string,
  theme?: string,
  type?: string,
  fullWidth?: boolean,
  icon?: string,
  iconPosition?: string,
  text: string
}

export const ButtonKeys: Array<keyof ButtonInterface> = 
['disabled', 'variant', 'size', 'target', 'href', 'theme', 'type', 'fullWidth', 'text'];


