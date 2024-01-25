import { Component, h, Prop, Element, State, EventEmitter, Event, Watch } from "@stencil/core";

@Component({
    tag: 'ifx-stepper',
    styleUrl: 'stepper.scss',
    shadow: true
})

export class Stepper {

    @Prop() showNumber: boolean = false;
    @Prop() activeStep: number = 1;
    @State() internalActiveStep = undefined;
    @Prop() variant: string = 'default';
    @Element() el: HTMLElement;
    @Event() ifxActiveStepChange: EventEmitter;
    private stepsCount: number;

    @Watch('activeStep')
    activeStepHandler() {
        this.updateActiveStep();
    }

    // Syncing children (steps) with parent state
    updateChildren() {
        const steps: NodeListOf<HTMLIfxStepElement> = this.el.querySelectorAll('ifx-step');
        for (let i = 0; i < steps.length; i++) {
            steps[i].stepperState = { activeStep: this.internalActiveStep, showNumber: this.showNumber, variant: this.variant };
        }

    }

    addStepIdsToStepsAndCountSteps() {
        const steps: NodeListOf<HTMLIfxStepElement> = this.el.querySelectorAll('ifx-step');
        steps[steps.length - 1].lastStep = true;
        for (let i = 0; i < steps.length; i++) {
            steps[i].stepId = i + 1;
        }
        this.stepsCount = steps.length;
    }

    updateActiveStep() {
        let newActiveStep = Math.max(1, Math.min(this.stepsCount + (this.variant !== 'compact' ? 1 : 0), this.activeStep));

        if (this.internalActiveStep === undefined || newActiveStep != this.internalActiveStep) {
            this.internalActiveStep = newActiveStep;
            this.ifxActiveStepChange.emit({ activeStep: this.internalActiveStep, totalSteps: this.stepsCount });
        } else {
            this.internalActiveStep = newActiveStep;
        }
    }

    componentWillLoad() {
        this.addStepIdsToStepsAndCountSteps();
        this.updateActiveStep();
        this.updateChildren();
    }

    componentWillUpdate() {
        this.updateChildren();
    }

    render() {
        return (
            <div class={`stepper ${this.variant}`}>
                {
                    this.variant === 'compact' && <div class='stepper-progress'>
                        <div class='progress-detail'>
                            {`${Math.min(this.internalActiveStep, this.stepsCount)} of ${this.stepsCount}`}
                        </div>
                    </div>
                }

                <div class={`stepper-wrapper`}>
                    <slot />
                </div>
            </div>
        );
    };

    componentDidRender() {
        // Updating progress bar in compact version
        if (this.variant == 'compact') {
            const progressBar: HTMLElement = this.el.shadowRoot.querySelector('.stepper-progress')
            progressBar.style.setProperty('--pb', `${(this.internalActiveStep / (this.stepsCount)) * 100}%`);
        }
    }
}
