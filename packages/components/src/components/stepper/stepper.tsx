import { Component, h, Prop } from "@stencil/core";
import stepperState from "./stepperStore";

@Component({
    tag: 'ifx-stepper',
    styleUrl: 'stepper.scss',
    shadow: true
})

export class Stepper{

    @Prop() showNumber: boolean = stepperState.showNumber;
    @Prop() activeStep: number = stepperState.activeStep;


    componentWillLoad(){
        stepperState.showNumber = this.showNumber;
        stepperState.activeStep = this.activeStep;
    }

    componentDidUpdate(){
        stepperState.activeStep = this.activeStep;
    }

    render(){
        return(
            <div class='stepper-wrapper'>
                <slot/>
            </div>
        );
    };
}