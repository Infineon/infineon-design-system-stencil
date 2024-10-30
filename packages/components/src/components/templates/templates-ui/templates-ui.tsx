import { Component, h, Listen, Element } from '@stencil/core';

@Component({
  tag: 'ifx-templates-ui',
  styleUrl: 'templates-ui.scss',
  shadow: true,
})

export class TemplatesUI {
  @Element() el: HTMLElement;
   
  toggleTemplate(currTemp) { 
    const templates = this.el.shadowRoot.querySelector('.templates__wrapper').querySelectorAll('ifx-template');
      templates.forEach((template) => { 
        const templateWrapper = template.shadowRoot.querySelector('.react__template-wrapper')
        console.log('templateWrapper', templateWrapper, template)
        if(templateWrapper) { 
          if(!templateWrapper.classList.contains('hide') && currTemp ) { 
            if(templateWrapper !== currTemp) {
              template.toggleTemplate('add')
            }
          } else { 
            template.toggleTemplate('remove')
          }
        }
      })
  }

  @Listen('toggleTemplates')
  filterTemplates(e) {
    if(e.detail) { 
      this.toggleTemplate(e.detail)
    } else { 
      this.toggleTemplate(null)
    }
  }

  render() {
    return (
      <div class='templates__container'>
        <h2>Templates</h2>
        <div class="templates__wrapper">
          <ifx-template name='template-01' />
          <ifx-template name='template-02' />
        </div>
      </div>
    )
  }
}
