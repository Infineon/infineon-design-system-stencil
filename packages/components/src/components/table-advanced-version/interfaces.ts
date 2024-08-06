export interface ButtonInterface {
  disabled?: boolean;
  variant?: string,
  size?: string,
  target?: string,
  color?: string,
  text: string
}

export const ButtonKeys: Array<keyof ButtonInterface> = ['disabled', 'variant', 'size', 'target', 'color', 'text'];


