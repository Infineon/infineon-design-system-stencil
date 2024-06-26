import { Component, h, Prop, State, Watch } from "@stencil/core";

@Component({
    tag     : 'ifx-step',
    styleUrl: 'step.scss',
    shadow  : true
})

export class Step {

    @Prop() complete: boolean = false;
    @Prop() error   : boolean = false;
    @Prop() stepId  : number  = 1;

    @Prop({ reflect: false }) lastStep    : boolean = false;
    @Prop({ reflect: false }) stepperState: any     = {activeStep: 1, showStepNumber: false, variant: 'default', indicatorPosition: 'left'};

    @State() active: boolean;

    @Watch('stepperState')
    updateCurrentStep(newStepperState) {
        this.active = (newStepperState.activeStep === this.stepId)
    }

    handleStepClick() {
        if(this.complete || this.error) {
            this.stepperState.setActiveStep(this.stepId)
        } 
    }

    render() {
        return (
            <div class = {`step-wrapper ${this.stepId === 1 ? 'first-step': ''} 
                        ${this.error ? 'error': ''}
                        ${this.stepperState.variant}
                        ${this.complete ? 'complete': ''}
                        ${this.lastStep ? 'last-step': ''}
                        indicator-${this.stepperState.indicatorPosition}
                        ${this.active ? 'active' : ''}`}
            >

                <div class = 'step-icon-wrapper'>
                    {/* Left connector */}
                    {this.stepperState.variant === 'default' && <span class = 'step-connector-l'/>}

                    {
                        // Active, complete or incomplete
                        (this.stepperState.variant === 'default' && (!this.error || (this.error && this.active))) && 
                        <div class = 'step-icon'>
                            {(this.stepperState.showStepNumber && (!this.complete || (this.complete && this.active))) ? this.stepId : ''}
                            {(this.complete && !this.active) && <ifx-icon icon='check16'></ifx-icon>}
                            {(!this.stepperState.showStepNumber && this.active) && <span class = 'active-indic'></span>}
                        </div>
                    }

                    {/* // Special error state */}
                    {(this.stepperState.variant ==='default' && this.error && !this.active) && <ifx-icon icon='warningf24'></ifx-icon>}
                    
                    {/* // Right connector */}
                    {this.stepperState.variant === 'default' && <span class = {`step-connector-r ${this.active ? 'active' : ''}`}/>}
                </div>

                {
                    // Step labels
                    (this.stepperState.variant === 'default' || (this.stepperState.variant === 'compact' && (this.active || this.stepId === this.stepperState.activeStep+1))) && 
                    <div class= {`step-label ${this.stepperState.variant === 'compact' ? (this.active ? 'curr-label' : 'next-label') : ''}`} onClick={() => { this.handleStepClick() }}>
                        {this.stepperState.variant === 'compact' &&  !this.active  ? 'Next: ' : ''}<slot/>
                    </div>
                }

            </div>
        );
    };
}
