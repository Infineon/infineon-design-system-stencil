import { Component, Prop, h, State } from "@stencil/core";
import classNames from 'classnames';

@Component({
  tag: 'ifx-link',
  styleUrl: 'link.scss',
  shadow: true
})

export class Link {
  @Prop() href: string = undefined;
  @Prop() target: string = '_self';
  @Prop() variant: string = 'bold';
  @Prop() size: string;
  @Prop() disabled: boolean = false;
  @State() internalHref: string ='';
  @State() internalTarget: string = '';
  @State() internalVariant: string = '';

  setInternalStates() {
    if(this.href){
      this.internalHref = this.href.trim();
    }else{
      this.internalHref = undefined;
    }
    this.internalTarget = this.target.trim();
    this.internalVariant = this.variant.trim().toLowerCase();
  }

  componentWillRender(){
    this.setInternalStates();
  }

  render() {
    return (
      <a aria-label='a navigation link button' href={this.internalHref} target={this.internalTarget} class={this.linkClassNames()}>
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
    } else if (extraLarge && this.internalVariant === 'underlined') {
      return 'large';
    } else if (extraLarge && this.internalVariant !== 'underlined') {
      return extraLarge;
    } else return "";
  }

  getVariantClass() {
    const bold = this.internalVariant === 'bold' ? 'bold' : null;
    const title = this.internalVariant === 'title' ? 'title' : null;
    const underlined = this.internalVariant === 'underlined' ? 'underlined' : null;
    const menu = this.internalVariant === 'menu' ? 'menu' : null;

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

