import { Component, h, Element, Prop} from "@stencil/core";

@Component({
    tag: 'ifx-stepper',
    styleUrl: 'stepper.scss',
    shadow: true
})

export class Stepper{

    @Element() el: HTMLElement;
    @Prop() activeStep: number = 1;

    componentDidLoad() { 
        const steps = this.el.querySelectorAll('ifx-step');
        this.activeStep = Math.max(Math.min(steps.length, this.activeStep), 1);
        for(let i = 0; i < steps.length; i++){
            if(i+1 == this.activeStep) steps[i].setAttribute('active', 'true');
            else steps[i].setAttribute('active', 'false');
        }
        const leftOfFirst = steps[0].shadowRoot.querySelector('.left-connector') as HTMLElement;
        const rightOfLast = steps[steps.length-1].shadowRoot.querySelector('.right-connector') as HTMLElement;
        leftOfFirst.style.height = '0px';
        rightOfLast.style.height = '0px';
    }

    render(){
        return(
            <div class = 'stepper-wrapper'>
                <slot/>
            </div>
        );
    }
}
