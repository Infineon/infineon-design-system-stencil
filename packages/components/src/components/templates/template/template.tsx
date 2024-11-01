import { Component, h, Element, State, Prop, Event, EventEmitter, Method } from '@stencil/core';
 

@Component({
  tag: 'ifx-template',
  styleUrl: 'template.scss',
  shadow: true
})
export class Template {
  @Element() el: HTMLElement;
  @State() repoDetails: { name: string, desc: string, framework: string } = { name: "", desc: "", framework: "" };
  @State() repoUrl: string;
  @State() showDetails: boolean = false;
  @State() isTemplatePage: boolean = false;
  @State() isLoading: boolean = true;
  @Prop() name: string;
  @Event() toggleTemplates: EventEmitter;

  authUser() { 
    const clientId = 'Ov23lixmXiNTTNb6V5W6';
    const redirectUri = 'http://localhost:6262/?path=/docs/dds-templates--development';
    const scope = 'repo';
    const state = 'template123';

    const authorizationUrl = `https://github.com/login/oauth/authorize?` +
      `client_id=${clientId}&` +
      `redirect_uri=${redirectUri}&` +
      `scope=${scope}&` +
      `state=${state}`;
    
      window.open(authorizationUrl, '_blank'); 
  }

  componentDidLoad() { 
    const url = new URL(window.location.href);
    const code = url.searchParams.get('code');
    const { templateName } = this.getLocalStorageValues()
    if(code && this.name === templateName) { 
      this.isTemplatePage = true;
      this.toggleTemplates.emit(templateName)
      this.getUserToken(code)
    } 
  }

  getLocalStorageValues() { 
    const repoName = localStorage.getItem('repo_name');
    const repoDesc = localStorage.getItem('repo_desc');
    const repoFramework = localStorage.getItem('repo_framework');
    const templateName = localStorage.getItem('selectedTemplate');
    return { repoName, repoDesc, repoFramework, templateName }
  }

  async getUserToken(authCode) {
    const { repoName, repoDesc, repoFramework, templateName } = this.getLocalStorageValues();

    fetch(`http://localhost:5000/token/${authCode}/${repoName}/${repoDesc}/${repoFramework}/${templateName}`)
    .then(response => {
      if (response.ok) {
        return response.text();
      } else {
        return response.text().then(errorMessage => {
          throw new Error(errorMessage);
        });
      }
    })
    .then(data => { 
      if(data) { 
        this.isLoading = false;
        this.repoUrl = data;
        localStorage.clear();
      } 
    })
    .catch(error => console.error('Error:', error.message));
  }

  handleUserInput(e, type) { 
    if (type === 'name') {
      this.repoDetails = { ...this.repoDetails, name: e.target.value };
    } else if (type === 'desc') {
      this.repoDetails = { ...this.repoDetails, desc: e.target.value };
    } else if(type === 'framework') { 
      this.repoDetails = { ...this.repoDetails, framework: e.target.value };
    }
  }

  submitUserData() { 
    if(this.repoDetails.name && this.repoDetails.desc && this.repoDetails.framework) { 
      localStorage.setItem('repo_name', this.repoDetails.name);
      localStorage.setItem('repo_desc', this.repoDetails.desc);
      localStorage.setItem('repo_framework', this.repoDetails.framework);
      localStorage.setItem('selectedTemplate', this.name);
      this.authUser()
    } else { 
      console.error('its empty') //what to do with this? I have to output to the user that all fields are required
    }
  }

  handleCurrentTemplate(e) { 
    if(e) { 
      const targetTemplate = e.target;
      this.toggleTemplates.emit(targetTemplate)
      this.showDetails = true;
    } else { 
      this.toggleTemplates.emit(false)
      this.showDetails = false;
    }
  }

  @Method()
  async toggleTemplate(currTemp) { 
    const templateWrapper = this.el.shadowRoot.querySelector('.react__template-wrapper');
    if(templateWrapper) { 
      if(!templateWrapper.classList.contains('hide') && currTemp ) { 
        if(templateWrapper !== currTemp) {
          templateWrapper.classList.add('hide')
        }
      } else { 
        templateWrapper.classList.remove('hide')
      }
    }
  }

 
  render() {
      return (
        <div>
          {this.isTemplatePage 
          ? 
          <div class="template__page-wrapper">
            {!this.repoUrl && <div>Your repository is getting ready.. this will only take a minute.</div>}
            {this.isLoading && <div><ifx-spinner variant='default' size='s' /></div>}
            {this.repoUrl && <p><a href={this.repoUrl}>Your Repository URL</a></p>}
          </div> 
          : 
          <div>
              <div class="react__template-wrapper" onClick={(e) => this.handleCurrentTemplate(e)}>
                <div>
                  {this.name}
                </div>
              </div>
          {this.showDetails && 
          <div>
            <ifx-button variant='primary' onClick={() => this.handleCurrentTemplate(null)}>Go Back</ifx-button>
            <div>
              <input type="radio" id="react" name="chosen_framework" value="react" onInput={(e) => this.handleUserInput(e, 'framework')}  />
              <label htmlFor="react">React</label> <br />
              <input disabled type="radio" id="vue" name="chosen_framework" value="vue" onInput={(e) => this.handleUserInput(e, 'framework')}/>
              <label htmlFor="vue">Vue</label> (Soon)
            </div>
            <ifx-text-field onInput={(e) => this.handleUserInput(e, 'name')} size="m" icon="c-info-16" placeholder="Your repository name">Repository Name</ifx-text-field>
            <ifx-text-field  size="m" icon="c-info-16" onInput={(e) => this.handleUserInput(e, 'desc')} placeholder="Your repository description">Repository Description</ifx-text-field>
            <ifx-button onClick={() => this.submitUserData()} variant='primary'>Generate template</ifx-button>
            {this.repoUrl && <a target='_blank' href={`${this.repoUrl}`}>Your Repository URL</a>} 
          </div>}
          </div>}
        </div>
      );
  }
}