import { h, 
         Component, 
         Element, 
         Event, 
         EventEmitter, 
         Listen, 
         Prop, 
         State, 
         Watch } from "@stencil/core";
import { StepperState } from "./interfaces";
 

@Component({
    tag     : 'ifx-stepper',
    styleUrl: 'stepper.scss',
    shadow  : true
})

export class Stepper {

    /**
     * Reference to the host element.
     */
    @Element() el: HTMLElement;

    /**
     * An event emmited when the active step is changed.
     */
    @Event() ifxChange: EventEmitter;

    /**
     * Represents the active step of the stepper.
     */
    @Prop({ mutable: true }) activeStep: number = 1;

    /**
     * (Optional) Defines the position of the indicator in a compact variant.
     * 
     * @Default 'left'
     */
    @Prop() indicatorPosition?: 'left' | 'right' = 'left';

    /**
     * (Optional) Control whether to show step number or not in a DEFAULT variant.
     * 
     * @Default false
     */
    @Prop() showStepNumber?: boolean = false;

    /**
     * (Optional) Defines the variant of the stepper.
     * 
     * @Default 'default'
     */
    @Prop() variant?: 'default' | 'compact' = 'default';

    /**
     * An internal state for activeStep prop.
     */
    @State() internalActiveStep: number = undefined;

    /**
     * Stores total number of steps in a stepper.
     */
    @State() stepsCount: number;



    
    @Listen('ifxChange') 
    onStepChange(event: CustomEvent) {
        const steps = this.getSteps();
        const previousActiveStep = steps[event.detail.previousActiveStep-1];
        if (previousActiveStep && !previousActiveStep.complete) {
            previousActiveStep.setAttribute('error', 'true');
        }
    } 

    @Watch('activeStep')
    handleActiveStep() {
        this.updateActiveStep();
    }

    /* Assigns step Id's to ifx-steps. */
    addStepIdsToStepsAndCountSteps() {
        const steps = this.getSteps()
        steps[steps.length - 1].lastStep = true;
        for (let i = 0; i < steps.length; i++) {
            steps[i].stepId = i + 1;
        }
        this.stepsCount = steps.length;
    }

    /* Returns the reference to all steps from DOM. */
    getSteps() {
        const steps: NodeListOf<HTMLIfxStepElement> = this.el.querySelectorAll('ifx-step');
        return steps;
    }

    /* Sets the specified step as an active step. */
    setActiveStep(stepId: number) {
        this.updateActiveStep(stepId);
    }

    /* Sets the step before active to step to complete by default (on load). */
    setStepsBeforeActiveToComplete() {
        const steps = this.getSteps();
        steps.forEach( (step, stepId) => {
            if (stepId+1 < this.activeStep) step.complete = true;
        });
    }

    /* Sync steps with parent state. */
    syncIfxSteps() {
        const steps = this.getSteps()
        for (let i = 0; i < steps.length; i++) {
            const stepperState: StepperState = { 
                activeStep: this.internalActiveStep, 
                indicatorPosition: (this.indicatorPosition !== 'right' ? 'left' : 'right'), 
                showStepNumber: this.showStepNumber, 
                variant: (this.variant !== 'compact' ? 'default' : 'compact'), 
                setActiveStep: this.setActiveStep.bind(this)
            };
            steps[i].stepperState = stepperState;
        }
    }

    /* Sets the initial active step or assigns new active step. */
    updateActiveStep(stepId: number = null) {
        let newActiveStep = stepId ? stepId : Math.max(1, Math.min(this.stepsCount + (this.variant !== 'compact' ? 1 : 0), this.activeStep));
        if (newActiveStep != this.internalActiveStep) {
            if (this.internalActiveStep !== undefined) {
                this.ifxChange.emit({ activeStep: newActiveStep, 
                                      previousActiveStep: this.internalActiveStep, 
                                      totalSteps: this.stepsCount });
            }
        }
        this.internalActiveStep = newActiveStep;
        this.activeStep = newActiveStep;
    }

    /**
     * Lifecycle methods
     */

    componentWillLoad() {
        this.addStepIdsToStepsAndCountSteps();
        this.updateActiveStep();
        this.setStepsBeforeActiveToComplete();
        this.syncIfxSteps();
    }

    componentWillUpdate() {
        this.syncIfxSteps();
    }

    render() {
        return (
            <div aria-label = 'a stepper' 
                role = 'navigation' 
                class = {`stepper ${this.variant !== 'compact' ? 'default' : 'compact'} ${this.variant === 'compact' ? 'compact-'+this.indicatorPosition: ''}`}>
                {
                    /* Progress bar for compact variant. */
                    (this.variant === 'compact') && 
                    <div class = 'stepper-progress'>
                        <div class = 'progress-detail'>
                            {`${Math.min(this.internalActiveStep, this.stepsCount)} of ${this.stepsCount}`}
                        </div>
                    </div>
                }
                
                {/* Slot for ifx-steps. */}
                <div class = {`stepper-wrapper`}>
                    <slot />
                </div>
            </div>
        );
    };

    componentDidRender() {
        /* Updating progress bar in compact version. */
        if (this.variant == 'compact') {
            const progressBar: HTMLElement = this.el.shadowRoot.querySelector('.stepper-progress');
            progressBar.style.setProperty('--pb', `${(this.internalActiveStep / (this.stepsCount)) * 100}%`);
        }
    }
}
