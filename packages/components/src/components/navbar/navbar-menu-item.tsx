import { Component, h, Element, Prop } from "@stencil/core";

@Component({
  tag: 'ifx-navbar-menu-item',
  styleUrl: '../../index.scss',
  shadow: true
})

export class NavbarMenuItem {

  @Element() el;
  @Prop({mutable: true}) isProfile: boolean = false;
  @Prop() hideLabel: boolean = false;
  @Prop() icon: string = "image-16"

  // componentDidLoad() { 
  //   const navbar = this.el.closest('ifx-navbar')
  //   if(navbar) { 
  //     const navbarMenuItem = navbar.querySelectorAll('ifx-navbar-menu-item')
  //     //console.log(this.el.shadowRoot.querySelector('.navbar__container-left-content-navigation-item'))
  //     //const menuItem = this.el.shadowRoot.querySelector('.navbar__container-left-content-navigation-item');
  //     //const menuItem = this.el;
  //     //console.log(navbarMenuItem.length)
      
  //     for(let i = 0; i < navbarMenuItem.length; i++) { 
  //       //console.log(navbarMenuItem[i].shadowRoot.querySelector('.navbar__container-left-content-navigation-item'))
  //       //let menuItem = navbarMenuItem[i].shadowRoot.querySelector('.navbar__container-left-content-navigation-item');
  //       //console.log(menuItem)
  //       if(navbarMenuItem[i].classList.contains('remove')) { 
  //         //console.log('this one', navbarMenuItem[i])
  //       }
  //     }
  //   }
  // }

  componentWillLoad() { 
    const menuItem = this.el;
    const slotValue = menuItem.getAttribute('slot')
    if(slotValue) { 
      if(slotValue.toLowerCase() === 'right-menu-profile-item') { 
        this.isProfile = true;
      } else this.isProfile = false;
    }
  }


  render() {
    return (
      <div class={`navbar__container-left-content-navigation-item ${this.hideLabel ? 'removeLabel' : ""}`}>
        <div class={`navbar__container-right-content-navigation-item-icon-wrapper ${!this.icon && !this.isProfile ? "removeWrapper" : ""} ${this.isProfile  ? "hide" : ""}`}>
          {this.icon && <ifx-icon icon={this.icon}></ifx-icon>}
        </div>
        <div class={`navbar__container-right-content-navigation-item-navigation-profile ${this.isProfile ? 'show' : ""}`}>
          <a href="javascript:void(0)">AA</a>
        </div>
        <a href="javascript:void(0)">
          <slot />
        </a>
      </div>
    )
  }
}