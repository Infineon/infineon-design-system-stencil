import { Component, Prop, h, State, Element } from '@stencil/core';
import classNames from 'classnames';

@Component({
  tag: 'ifx-alert',
  styleUrl: '_alert.scss',
  shadow: true,
})

export class Card {
  @Prop() color: 'primary' | 'secondary' | 'success' | 'danger' | 'warning';
  @Prop() icon: string;
  @Prop() overflowing: boolean
  @Element() el;
  @State() iconsArray: any[] = [<svg xmlns="http://www.w3.org/2000/svg" height="24" width="24" viewBox="0 0 24 24"><title>c info 24</title><g stroke-linecap="round" stroke-width="2" fill="none" stroke="" stroke-linejoin="round"><circle cx="12" cy="12" r="11"></circle><line x1="12" y1="11" x2="12" y2="17" stroke=""></line><circle cx="12" cy="7" r="1" stroke="" fill="#000000"></circle></g></svg>]

  isOverflowing() { 
    const el = this.el.shadowRoot.querySelector('.ifx__alert-text')
    if(el.clientWidth < el.scrollWidth || el.clientHeight < el.scrollHeight) {
      el.classList.add('text-overflow')
    } else if(el.classList.contains('text-overflow')) { 
      el.classList.remove('text-overflow')
    }
  }

  verifyIcons(icon1, icon2) { 
    if(icon1 === icon2) { 
      return true;
    } else if(icon2?.split(" ").join("") === icon1?.split(" ").join("-")) {
      return true
    } else if(icon2?.split(" ").join("").toLowerCase() === icon1?.split(" ").join("").toLowerCase()) {
      return true
    } else {
      console.error('Icon name does not exist!')
      return false
    }
  }


  getIcon() { 
    const svgIcon = this.iconsArray.find((icons) => {
      let titleIndex = icons['$children$'].findIndex((val) => val['$tag$'] === 'title');
      let titleArray = icons['$children$'][titleIndex]['$children$']
      let title = titleArray[0]['$text$']
      const icon =  this.verifyIcons(title, this.icon)
      return icon
    })

    return svgIcon
  }

  
  componentDidRender() { 
    this.isOverflowing()
  }


  render() {

    const iconSVG_close = <svg xmlns="http://www.w3.org/2000/svg" height="16" width="16" viewBox="0 0 16 16"><title>cross 16</title><g stroke-width="1" stroke-linejoin="round" fill="none" stroke="" stroke-linecap="round" class="nc-icon-wrapper"><line x1="13.5" y1="2.5" x2="2.5" y2="13.5" data-cap="butt"></line> <line x1="2.5" y1="2.5" x2="13.5" y2="13.5" data-cap="butt"></line> </g></svg>
    
    return (
      <div class={this.getClassNames()}>
       {this.icon &&  
       <div class="ifx__alert-icon-wrapper">
         {this.getIcon()}
        </div>}
        <div class="ifx__alert-text">
          <slot />
        </div>
        <div class="ifx__close-icon-wrapper">
        <a href="#">
          {iconSVG_close}
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
