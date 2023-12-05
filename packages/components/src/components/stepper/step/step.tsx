import { Component, h, Prop, Element } from "@stencil/core";

@Component({
    tag: 'ifx-step',
    styleUrl: 'step.scss',
    shadow: true
})

export class Stepper{
    @Element() el: HTMLElement;
    @Prop() label: string;
    
    // @Prop() firstStep: boolean = false;
    // @Prop() lastStep: boolean = false;
    

    render(){
        return(
            <div class = 'step'> 
                <div class='step-icon-wrapper'>
                    <span class={`left-connector step-connector ${this.el.hasAttribute('first-step') ? 'hide-connector': ''}`}></span>
                    <div class='step-icon'><ifx-icon icon='check16' /></div> 
                    <span class={`right-connector step-connector ${this.el.hasAttribute('last-step') ? 'hide-connector': ''}`}></span>
                </div>
                <div class = 'step-label'> { this.label } </div>
            </div>
        );
    }
}
