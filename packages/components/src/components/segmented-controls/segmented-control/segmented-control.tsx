import { h, Component, Event, EventEmitter, Prop } from "@stencil/core";

@Component ({
    tag: 'ifx-segmented-control',
    styleUrl: 'segmented-control.scss',
    shadow: true
})

export class SegmentedControl {
    @Event({ composed: false }) segmentSelect: EventEmitter<string>;

    @Prop() icon: string;
    @Prop() value!: string;

    handleSegmentClick() {
        this.segmentSelect.emit(this.value);
    }
    
    handleSegmentKeyDown(event: KeyboardEvent) {
        if (event.code === 'Enter' || event.code === 'Space') {
            this.segmentSelect.emit(this.value);
        }
    }

    render() {
        return (
            <div class='control' 
                tabIndex={0}
                onClick={() => {this.handleSegmentClick()}}
                onKeyDown={(e) => {this.handleSegmentKeyDown(e)}}>
                <ifx-icon icon={this.icon}></ifx-icon> <slot />
            </div>
        );
    }
}