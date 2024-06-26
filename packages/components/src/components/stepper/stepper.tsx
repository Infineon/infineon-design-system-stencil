import { Component, h, Prop, Element, State, EventEmitter, Event, Watch } from "@stencil/core";

@Component({
    tag     : 'ifx-stepper',
    styleUrl: 'stepper.scss',
    shadow  : true
})

export class Stepper {

    @Element() el: HTMLElement;

    @Event() ifxActiveStepChange: EventEmitter;

    @Prop() activeStep       : number                = 1;
    @Prop() indicatorPosition: 'left' | 'right'      = 'left';
    @Prop() showStepNumber   : boolean               = false;
    @Prop() variant          : 'default' | 'compact' = 'default';

    @State() internalActiveStep: number = undefined;

    private stepsCount: number;

    @Watch('activeStep')
    handleActiveStep() {
        this.updateActiveStep();
    }

    // Returns the reference to all steps from DOM
    getSteps() {
        const steps: NodeListOf<HTMLIfxStepElement> = this.el.querySelectorAll('ifx-step');
        return steps;
    }

    // Sets the specified step as an active step
    setActiveStep(stepId: number) {
        this.updateActiveStep(stepId);
    }

    // Assigns step Id's to ifx-steps
    addStepIdsToStepsAndCountSteps() {
        const steps = this.getSteps()
        steps[steps.length - 1].lastStep = true;
        for (let i = 0; i < steps.length; i++) {
            steps[i].stepId = i + 1;
        }
        this.stepsCount = steps.length;
    }

    updateActiveStep(stepId: number = null) {
        let newActiveStep = stepId ? stepId : Math.max(1, Math.min(this.stepsCount + (this.variant !== 'compact' ? 1 : 0), this.activeStep));
        if (newActiveStep != this.internalActiveStep) {
            if(this.internalActiveStep !== undefined) this.ifxActiveStepChange.emit({ activeStep: newActiveStep, previousActiveStep: this.internalActiveStep, totalSteps: this.stepsCount });
        }
        this.internalActiveStep = newActiveStep;
    }

    // Sync steps with parent state
    syncIfxSteps() {
        const steps = this.getSteps()
        for (let i = 0; i < steps.length; i++) {
            steps[i].stepperState = { 
                activeStep: this.internalActiveStep, 
                showStepNumber: this.showStepNumber, 
                variant: this.variant, 
                indicatorPosition: this.indicatorPosition, 
                setActiveStep: this.setActiveStep.bind(this)
            };
        }
    }

    componentWillLoad() {
        this.addStepIdsToStepsAndCountSteps();
        this.updateActiveStep();
        this.syncIfxSteps();
    }

    componentWillUpdate() {
        this.syncIfxSteps();
    }

    render() {
        return (
            <div class={`stepper ${this.variant} ${this.variant === 'compact' ? 'compact-'+this.indicatorPosition: ''}`}>
                {
                    // Progress bar for compact variant
                    (this.variant === 'compact') && 
                    <div class='stepper-progress'>
                        <div class='progress-detail'>
                            {`${Math.min(this.internalActiveStep, this.stepsCount)} of ${this.stepsCount}`}
                        </div>
                    </div>
                }
                
                {/* Slot for ifx-steps */}
                <div class={`stepper-wrapper`}>
                    <slot />
                </div>
            </div>
        );
    };

    componentDidRender() {
        // Updating progress bar in compact version
        if (this.variant == 'compact') {
            const progressBar: HTMLElement = this.el.shadowRoot.querySelector('.stepper-progress');
            progressBar.style.setProperty('--pb', `${(this.internalActiveStep / (this.stepsCount)) * 100}%`);
        }
    }
}
