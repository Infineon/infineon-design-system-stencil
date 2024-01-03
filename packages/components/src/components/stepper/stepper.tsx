import { Component, h, Prop, Element } from "@stencil/core";

@Component({
    tag: 'ifx-stepper',
    styleUrl: 'stepper.scss',
    shadow: true
})

export class Stepper{bha

    @Prop() showNumber: boolean = false;
    @Prop({mutable: true, reflect: true}) activeStep: number = 1;
    @Prop() variant: string = 'default';
    @Element() el: HTMLElement;
    private stepsCount: number;

    updateChildren(){
        const steps: NodeListOf<HTMLIfxStepElement> = this.el.querySelectorAll('ifx-step');
        for(let i = 0; i < steps.length; i++){
            steps[i].stepperState = {activeStep: this.activeStep, showNumber: this.showNumber, variant: this.variant};
        }
        
    }
    
    componentWillLoad(){
        const steps: NodeListOf<HTMLIfxStepElement> = this.el.querySelectorAll('ifx-step');
        steps[steps.length-1].lastStep = true;
        for(let i = 0; i < steps.length; i++){
            steps[i].stepId = i+1;
        }
        this.activeStep = Math.max(1, Math.min(steps.length+1, this.activeStep));
        this.stepsCount = steps.length;
        this.updateChildren();
    }
    
    componentWillUpdate(){
        this.updateChildren();
    }

    render(){
        return(
            <div class={`stepper ${this.variant}`}>
                {   
                    this.variant === 'compact' && <div class='stepper-progress'>
                        <div class = 'progress-detail'>
                            {`${this.activeStep} of ${this.stepsCount}`}
                        </div>
                    </div>
                }

                <div class={`stepper-wrapper`}>
                    <slot/>
                </div>
            </div>
        );
    };

    componentDidRender(){
        if(this.variant == 'compact'){
            const progressBar: HTMLElement = this.el.shadowRoot.querySelector('.stepper-progress')
            progressBar.style.setProperty('--pb', `${(this.activeStep/(this.stepsCount)) * 100}%`);
        }
    }
}