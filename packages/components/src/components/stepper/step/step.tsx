import { Component, h, Prop } from "@stencil/core";
import stepperState from "../stepperStore";

@Component({
    tag: 'ifx-step',
    styleUrl: 'step.scss',
    shadow: true
})

export class Step{

    @Prop() lastStep: boolean = false;
    @Prop() key: number;

    render(){
        return(
            <div class = {`step-wrapper ${this.key === 1 ? 'first-step': ''} 
                        ${this.lastStep ? 'last-step': ''}
                        ${this.key <= stepperState.activeStep ? 'completed': ''}
                        `}>

                <div class = 'step-icon-wrapper'>
                    <span class = 'step-connector-l'/>
                    <div class = 'step-icon'>

                        {(stepperState.showNumber && stepperState.activeStep <= this.key) ? this.key : ''}
                        {(this.key < stepperState.activeStep) && <ifx-icon icon="check16"></ifx-icon>}
                        {(!stepperState.showNumber && this.key == stepperState.activeStep) && <span class = 'active-indic'></span>}

                    </div>
                    <span class = 'step-connector-r'/>
                </div>

                <div class= 'step-label'>
                    <slot/>
                </div>

            </div>
        );
    };
}
