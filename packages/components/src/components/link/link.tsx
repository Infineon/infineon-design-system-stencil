import { Component, Prop, h, State, Element } from "@stencil/core";
import { trackComponent } from '../../global/utils/tracking';
import { isNestedInIfxComponent } from '../../global/utils/dom-utils';
import { detectFramework } from '../../global/utils/framework-detection';
import classNames from 'classnames';
 
@Component({
  tag: 'ifx-link',
  styleUrl: 'link.scss',
  shadow: true
})

export class Link {
  @Element() el;
  @Prop() href: string = undefined;
  @Prop() target: string = '_self';
  @Prop() variant: string = 'bold';
  @Prop() size: string;
  @Prop() disabled: boolean = false;
  @Prop() download: string;
  @Prop() ariaLabel: string | null;
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

  handleKeyDown(event: KeyboardEvent) {
    if (this.disabled) {
      event.preventDefault();
    } else if (event.key === 'Enter') {
      event.preventDefault();
    }
  }

  componentDidLoad() { 
    if(!isNestedInIfxComponent(this.el)) { 
      const framework = detectFramework();
      trackComponent('ifx-link', framework)
    }
  }

  render() {
    return (
      <a
        role="link"
        aria-label={this.ariaLabel}
        aria-disabled={this.disabled || !this.internalHref}
        href={this.disabled ? undefined : this.internalHref}
        download={this.download}
        target={this.internalTarget}
        class={this.linkClassNames()}>
        <slot></slot>
      </a>)
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