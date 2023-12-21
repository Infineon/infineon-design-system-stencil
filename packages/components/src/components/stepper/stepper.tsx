import { Component, h, Prop, Element } from "@stencil/core";

@Component({
    tag: 'ifx-stepper',
    styleUrl: 'stepper.scss',
    shadow: true
})

export class Stepper{

    @Prop() showNumber: boolean = false;
    @Prop({mutable: true, reflect: true}) activeStep: number = 1;
    @Element() el: HTMLElement;

    updateChild(){
        const steps: NodeListOf<any> = this.el.querySelectorAll('ifx-step');
        for(let i = 0; i < steps.length; i++){
            steps[i].stepperState = {activeStep: this.activeStep, showNumber: this.showNumber};
        }
    }

    componentWillLoad(){
        const steps: NodeListOf<any> = this.el.querySelectorAll('ifx-step');
        steps[steps.length-1].lastStep = true;
        for(let i = 0; i < steps.length; i++){
            steps[i].stepId = i+1;
        }
        this.activeStep = Math.max(1, Math.min(steps.length+1, this.activeStep));

        this.updateChild();
    }

    componentWillUpdate(){
        this.updateChild();
    }

    render(){
        return(
            <div class='stepper-wrapper'>
                <slot/>
            </div>
        );
    };
}