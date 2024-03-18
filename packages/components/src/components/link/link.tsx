import { Component, Prop, h } from "@stencil/core";
import classNames from 'classnames';

@Component({
  tag: 'ifx-link',
  styleUrl: 'link.scss',
  shadow: true
})

export class Link {
  @Prop({ mutable: true }) href: string
  @Prop({ mutable: true }) target: string = '_self';
  @Prop() size: string;
  @Prop() disabled: boolean = false;
  @Prop({ mutable: true }) variant: string = 'bold';


  render() {
    return (
      <a aria-label='a navigation link button' href={this.href} target={this.target} class={this.linkClassNames()}>
        <slot></slot>
      </a>
    )
  }

  getSizeClass() {
    const small = this.size === 's' ? 'small' : null;
    const medium = this.size === 'm' ? 'medium' : null;
    const large = this.size === 'l' ? 'large' : null;
    const extraLarge = this.size === 'xl' ? 'extraLarge' : null;

    if (small) {
      return small;
    } else if (medium) {
      return medium;
    } else if (large) {
      return large;
    } else if (extraLarge && this.variant === 'underlined') {
      return 'large';
    } else if (extraLarge && this.variant !== 'underlined') {
      return extraLarge;
    } else return "";
  }

  getVariantClass() {
    const bold = this.variant === 'bold' ? 'bold' : null;
    const title = this.variant === 'title' ? 'title' : null;
    const underlined = this.variant === 'underlined' ? 'underlined' : null;
    const menu = this.variant === 'menu' ? 'menu' : null;

    if (bold) {
      return bold
    } else if (title) {
      return title;
    } else if (underlined) {
      return underlined;
    } else if (menu) {
      return menu;
    } else return bold;
  }

  linkClassNames() {
    return classNames(
      'link',
      'primary',
      this.getVariantClass(),
      this.getSizeClass(),
      this.disabled ? 'disabled' : '',
    );
  }
}

