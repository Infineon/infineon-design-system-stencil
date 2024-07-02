import { h, 
         Component, 
         Listen, 
         Prop, 
         State, 
         Watch } from "@stencil/core";
import { StepperState } from "../interfaces";

@Component({
    tag     : 'ifx-step',
    styleUrl: 'step.scss',
    shadow  : true
})

export class Step {

    /**
     * Sets the complete status of the step.
     * 
     * @Default false
     */
    @Prop() complete?: boolean = false;

    /**
     * Sets the error status of the step.
     * 
     * @Default false
     */
    @Prop({ mutable: true }) error?: boolean = false;

    /**
     * An internal prop to identify the last step of the stepper.
     */
    @Prop({ reflect: false }) lastStep: boolean = false;

    /**
     * An unique step id assigned to every step in the stepper.
     */
    @Prop() stepId: number = 1;

    /**
     * An internal prop to store the current state of the parent (stepper) components.
     */
    @Prop({ reflect: false }) stepperState: StepperState = { activeStep: 1, 
                                                             showStepNumber: false, 
                                                             variant: 'default', 
                                                             indicatorPosition: 'left' };

    /**
     * Stores the active state of the step.
     */
    @State() active: boolean;

    /**
     * Internal state which sets to true when the step is clickable.
     */
    @State() clickable: boolean = false;

    @Listen('ifxChange', { target: 'document' })
    onStepChange(event: CustomEvent) {
        const previousActiveStep = event.detail.previousActiveStep;
        if (previousActiveStep.stepId === this.stepId && this.error) {
            this.clickable = true;
        }
    } 

    @Watch('stepperState')
    updateCurrentStep(newStepperState) {
        this.active = (newStepperState.activeStep === this.stepId)
    }

    @Watch('active')
    updateErrorState(){
        if(this.active && this.error) {
            this.error = false;
        }
    }

    /* Handle the click event on step label. */
    handleStepClick() {
        if(this.stepperState.variant === 'default' && (this.clickable || this.complete)) {
            this.stepperState.setActiveStep(this.stepId)
        } 
    }

    /* Handle the 'Enter' key press on step label. */
    handleStepKeyDown(event: KeyboardEvent) {
        if(this.stepperState.variant === 'default' && (this.clickable || this.complete) && event.key === 'Enter') {
            this.stepperState.setActiveStep(this.stepId)
        } 
    }
    
    /**
     * Lifecycle methods
     */

    render() {
        return (
            <div aria-current = {this.active ? 'step': false}
                aria-disabled = {this.active || this.complete ? false : true}
                class = {`step-wrapper ${this.stepId === 1 ? 'first-step': ''} 
                        ${this.error ? 'error': ''}
                        ${this.stepperState.variant}
                        ${this.complete ? 'complete': ''}
                        ${this.lastStep ? 'last-step': ''}
                        indicator-${this.stepperState.indicatorPosition}
                        ${this.active ? 'active' : ''}
                        ${this.clickable ? 'clickable' : ''}`}>

                <div class = 'step-icon-wrapper'>
                    {/* Left connector */}
                    {this.stepperState.variant === 'default' && <span class = 'step-connector-l'/>}

                    {
                        /* Active, complete or incomplete */
                        (this.stepperState.variant === 'default' && (!this.error || (this.error && this.active))) && 
                        <div class = 'step-icon'>
                            {(this.stepperState.showStepNumber && (!this.complete || (this.complete && this.active))) ? this.stepId : ''}
                            {(this.complete && !this.active) && <ifx-icon icon='check16'></ifx-icon>}
                            {(!this.stepperState.showStepNumber && this.active) && <span class = 'active-indic'></span>}
                        </div>
                    }

                    {/* Special error state */}
                    {(this.stepperState.variant ==='default' && this.error && !this.active) && <ifx-icon icon='warningf24'></ifx-icon>}
                    
                    {/* Right connector */}
                    {this.stepperState.variant === 'default' && <span class = {`step-connector-r ${this.active ? 'active' : ''}`}/>}
                </div>

                {
                    /* Step labels */
                    (this.stepperState.variant === 'default' || (this.stepperState.variant === 'compact' && (this.active || this.stepId === this.stepperState.activeStep+1))) && 
                    <div tabIndex={this.complete && !this.active ? 0 : -1} 
                        class = {`step-label ${this.stepperState.variant === 'compact' ? (this.active ? 'curr-label' : 'next-label') : ''}`} 
                        onClick={() => { this.handleStepClick() }} 
                        onKeyDown={(e) => { this.handleStepKeyDown(e) }}>
                        {this.stepperState.variant === 'compact' &&  !this.active  ? 'Next: ' : ''}<slot/>
                    </div>
                }

            </div>
        );
    };
}
