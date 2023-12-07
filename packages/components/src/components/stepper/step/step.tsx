import { Component, h, Prop, Element } from "@stencil/core";

@Component({
    tag: 'ifx-step',
    styleUrl: 'step.scss',
    shadow: true
})

export class Step{
    @Element() el: HTMLElement;
    @Prop() label: string;
    @Prop() status: string = 'incomplete';
    @Prop() active: boolean = false;   

    render(){
        return(
            <div class = {`step ${this.status} ${this.active ? 'active' : ''}`}> 
                <div class='step-icon-wrapper'>
                    <span class='left-connector step-connector'></span>
                    <div class='step-icon'>
                        { 
                            !this.active && <ifx-icon icon={`${this.status === 'incomplete' ?  'viewreplacement16': 'check16'}`} /> 
                        }
                        {
                            this.active && <span class = 'active-inner-icon'></span>
                        }
                    </div> 
                    <span class='right-connector step-connector'></span>
                </div>
                <slot/>
            </div>
        );
    }
}
