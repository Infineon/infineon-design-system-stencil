import { h, Component, Element, Event, EventEmitter, Listen, Prop, Watch } from "@stencil/core";

@Component ({
    tag: 'ifx-segmented-controls-group',
    styleUrl: 'segmented-controls-group.scss',
    shadow: true
})

export class SegmentedControlsGroup {
    @Element() segmentedControlsGroup: HTMLIfxSegmentedControlsGroupElement;

    @Event() ifxChange: EventEmitter<{previousValue: string, selectedValue: string}>;

    @Prop() caption: string = '';
    @Prop() groupLabel: string = '';
    @Prop() size: 'regular' | 'small' = 'regular';
    @Prop() selectedValue: string;

    @Listen('segmentSelect')
    onSegmentSelect(event: CustomEvent) {
        this.ifxChange.emit({ previousValue: this.selectedValue, selectedValue: event.detail});
    }

    @Watch('selectedValue')
    handleValueChange() {
        this.setActiveSegment();
    }

    getSegmentedControls(): NodeList {
        return this.segmentedControlsGroup.querySelectorAll('ifx-segmented-control');
    }

    setActiveSegment(): void {
        const segmentedControls: NodeList = this.getSegmentedControls();
        segmentedControls.forEach((control: HTMLIfxSegmentedControlElement) => {
            if (control.value === this.selectedValue) {
                control.shadowRoot.querySelector('.control').classList.add('control--selected');
            } else {
                control.shadowRoot.querySelector('.control').classList.remove('control--selected');
            }
        });
    }


    setSegmentedControlSize(): void {
        const segmentedControls: NodeList = this.getSegmentedControls();
        segmentedControls.forEach((control: HTMLIfxSegmentedControlElement) => {
            control.shadowRoot.querySelector('.control').classList.add(`control--${this.size}`);
        });
    }

    componentDidLoad() {
        this.setActiveSegment();
    }

    render() {
        return (
            <div class='group'>
                <div class='group__label'>
                    { this.groupLabel.trim() }
                </div>
                
                <div class='group__controls'>
                    <slot />
                </div>
                
                {
                    this.caption.trim() &&
                    <div class='group__caption'>
                        <ifx-icon icon='cinfo16'></ifx-icon> { this.caption.trim() }
                    </div>
                }
            </div>
        );
    }

    componentDidRender() {
        this.setSegmentedControlSize();
    }
}