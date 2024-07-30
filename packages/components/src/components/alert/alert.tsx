import { Component, Prop, h, Event, EventEmitter } from '@stencil/core';

@Component({
  tag: 'ifx-alert',
  styleUrl: 'alert.scss',
  shadow: true,
})

export class Alert {
  @Prop() variant: 'primary' | 'success' | 'danger' | 'warning' | 'info' = 'primary';
  @Prop() icon: string;
  @Event() ifxClose: EventEmitter;
  @Prop() closable: boolean = true;

  handleClose() { 
    this.ifxClose.emit()
  }

  matomoLogic() { 
    var _paq = (window as any)._paq = (window as any)._paq || [];
    /* tracker methods like "setCustomDimension" should be called before "trackPageView" */
    _paq.push(['trackPageView']);
    _paq.push(['enableLinkTracking']);
    (function() {
    var u="https://matomowebtst-vih-staging-eu-at-3-vih.icp.infineon.com/";
    _paq.push(['setTrackerUrl', u+'matomo.php']);
    _paq.push(['setSiteId', '4']);
    var d=document, g=d.createElement('script'), s=d.getElementsByTagName('script')[0];
    g.async=true; g.src=u+'matomo.js'; s.parentNode.insertBefore(g,s);
    })();
  }

  componentWillLoad() { 
    this.matomoLogic()
  }

  render() {
    return (
     this.variant === 'info' 
     ? <div class='alert__info-wrapper'>
        <div class='info__text-wrapper'>
          <div class="info__headline-wrapper">
            <slot name='headline' />
          </div>
          <div class="info__description-wrapper">
            <slot name='desc' />
          </div>
        </div>
        { this.closable && <div class="close-icon-wrapper">
          <a href={undefined} onClick={this.handleClose.bind(this)}>
            <ifx-icon icon='cross-16' />
          </a>
        </div> }
      </div>
     : <div class={`alert ${this.variant}`}>
        {this.icon && (
          <div class='icon-wrapper'>
            <ifx-icon icon={this.icon} />
          </div>
        )
        }
        <div class="alert-text">
          <slot />
        </div>
        { this.closable && <div class="close-icon-wrapper">
          <a href={undefined} onClick={this.handleClose.bind(this)}>
            <ifx-icon icon='cross-16' />
          </a>
        </div> }
      </div >
    );
  }
}
