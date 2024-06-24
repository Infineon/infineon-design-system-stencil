import { Component, h, Prop } from "@stencil/core";

@Component({
    tag: 'ifx-step',
    styleUrl: 'step.scss',
    shadow: true
})

export class Step{

    @Prop() lastStep: boolean = false;
    @Prop() error: boolean = false;
    @Prop() stepId: number = 1;
    @Prop() stepperState: any = {activeStep: 1, showStepNumber: false, variant: 'default', indicatorPosition: 'left'};

    render(){
        return(
            <div class = {`step-wrapper ${this.stepId === 1 ? 'first-step': ''} 
                        ${this.lastStep ? 'last-step': ''}
                        ${this.stepId <= this.stepperState.activeStep ? 'completed': ''}
                        ${this.error ? 'error': ''}
                        ${this.stepperState.variant}
                        indicator-${this.stepperState.indicatorPosition}`}
            >

                <div class = 'step-icon-wrapper'>
                    {this.stepperState.variant === 'default' && <span class = 'step-connector-l'/>}
                    {
                        (this.stepperState.variant === 'default' && (!this.error || (this.error && this.stepId == this.stepperState.activeStep))) && <div class = 'step-icon'>
                            {(this.stepperState.showStepNumber && this.stepperState.activeStep <= this.stepId) ? this.stepId : ''}
                            {(this.stepId < this.stepperState.activeStep) && <ifx-icon icon='check16'></ifx-icon>}
                            {(!this.stepperState.showStepNumber && this.stepId == this.stepperState.activeStep) && <span class = 'active-indic'></span>}
                        </div>
                    }

                    {
                        (this.stepperState.variant ==='default' && this.error && (this.stepId != this.stepperState.activeStep)) && <ifx-icon icon='warningf24'></ifx-icon>
                    }
                    {this.stepperState.variant === 'default' && <span class = {`step-connector-r ${this.stepId === this.stepperState.activeStep ? 'active' : ''}`}/>}
                </div>

                { (this.stepperState.variant === 'default' || (this.stepperState.variant === 'compact' && (this.stepId === this.stepperState.activeStep || this.stepId === this.stepperState.activeStep+1))) && 
                    <div class= {`step-label ${this.stepperState.variant === 'compact' ? (this.stepperState.activeStep === this.stepId ? 'curr-label' : 'next-label') : ''}`}>
                        {this.stepperState.variant === 'compact' &&  (this.stepId != this.stepperState.activeStep)  ? 'Next: ' : ''}<slot/>
                    </div>
                }

            </div>
        );
    };
}
