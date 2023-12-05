import { Component, h } from "@stencil/core";

@Component({
    tag: 'ifx-stepper',
    styleUrl: 'stepper.scss',
    shadow: true
})

export class Stepper{
    render(){
        return(
            <div class = 'stepper-wrapper'>
                <slot/>
            </div>
        );
    }
}
