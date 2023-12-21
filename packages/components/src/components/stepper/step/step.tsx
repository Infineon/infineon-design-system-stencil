import { Component, h, Prop } from "@stencil/core";

@Component({
    tag: 'ifx-step',
    styleUrl: 'step.scss',
    shadow: true
})

export class Step{

    @Prop() lastStep: boolean = false;
    @Prop() stepId: number = 1;
    @Prop() stepperState: any = {activeStep: 1, showNumber: false};

    render(){
        return(
            <div class = {`step-wrapper ${this.stepId === 1 ? 'first-step': ''} 
                        ${this.lastStep ? 'last-step': ''}
                        ${this.stepId <= this.stepperState.activeStep ? 'completed': ''}
                        `}>

                <div class = 'step-icon-wrapper'>
                    <span class = 'step-connector-l'/>
                    <div class = 'step-icon'>

                        {(this.stepperState.showNumber && this.stepperState.activeStep <= this.stepId) ? this.stepId : ''}
                        {(this.stepId < this.stepperState.activeStep) && <ifx-icon icon="check16"></ifx-icon>}
                        {(!this.stepperState.showNumber && this.stepId == this.stepperState.activeStep) && <span class = 'active-indic'></span>}

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
