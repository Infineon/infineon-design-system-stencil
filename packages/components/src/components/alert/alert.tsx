import { Component, Prop, h, Element } from '@stencil/core';
import classNames from 'classnames';

@Component({
  tag: 'ifx-alert',
  styleUrl: '../../index.scss',
  shadow: true,
})

export class Card {
  @Prop() color: 'primary' | 'secondary' | 'success' | 'danger' | 'warning';
  @Prop() icon: string;
  @Prop() overflowing: boolean
  @Element() el;

  isOverflowing() { 
    const el = this.el.shadowRoot.querySelector('.ifx__alert-text')
    if(el.clientWidth < el.scrollWidth || el.clientHeight < el.scrollHeight) {
      el.classList.add('text-overflow')
    } else if(el.classList.contains('text-overflow')) { 
      el.classList.remove('text-overflow')
    }
  }

  toggleIcon(ifxIconWrapper) { 
    ifxIconWrapper.classList.toggle('show')
  }

  componentDidRender() { 
    this.isOverflowing()
    const ifxAlert = this.el.shadowRoot.querySelector('.alert');
    const ifxIconWrapper = ifxAlert.querySelector('.ifx__alert-icon-wrapper')
    const ifxIcon = ifxIconWrapper.querySelector('ifx-icon');
    const ifxSvg = ifxIcon.querySelector('svg')
    if(ifxSvg) {
      this.toggleIcon(ifxIconWrapper)
    }
  }

  render() {
    return (
      <div class={this.getClassNames()}>
       <div class='ifx__alert-icon-wrapper'>
        <ifx-icon icon={this.icon}></ifx-icon>
       </div>
        <div class="ifx__alert-text">
          <slot />
        </div>
        <div class="ifx__close-icon-wrapper">
        <a href="#">
          <ifx-icon icon='cross-16'></ifx-icon>
        </a>
        </div>
      </div>
    );
  }


  getClassNames() {
    return classNames(
      'alert',
      `alert-${this.color}`,
    );
  }

}
