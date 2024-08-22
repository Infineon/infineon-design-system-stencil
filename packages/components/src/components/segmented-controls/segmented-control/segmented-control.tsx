import { h, 
    Component, 
    Prop } from "@stencil/core";

@Component ({
tag     : 'ifx-segmented-control',
styleUrl: 'segmented-control.scss',
shadow  : true
})

export class SegmentedControl {

    @Prop() icon: string;

    render() {
        return (
            <div class='control' tabIndex={0}>
                <ifx-icon icon={this.icon}></ifx-icon> <slot />
            </div>
        );
    }
}