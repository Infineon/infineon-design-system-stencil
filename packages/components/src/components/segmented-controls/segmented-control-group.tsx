import { h, Component, Element, Event, EventEmitter, Listen, Prop } from "@stencil/core";

@Component ({
    tag: 'ifx-segmented-control-group',
    styleUrl: 'segmented-control-group.scss',
    shadow: true
})

export class SegmentedControlGroup {
    @Element() segmentedControlGroup: HTMLIfxSegmentedControlGroupElement;

    @Event() ifxChange: EventEmitter<{ previousValue: string, selectedValue: string }>;

    @Prop() caption: string = '';
    @Prop() groupLabel: string = '';
    @Prop() size: 'regular' | 'small' = 'regular';

    @Listen('segmentSelect')
    onSegmentSelect(event: CustomEvent) {
        const { previousValue, selectedValue } = this.unselectPreviousSegment(event.detail);
        this.selectedValue = selectedValue;
        this.ifxChange.emit({ previousValue, selectedValue });
    }

    private selectedValue: string = '';

    unselectPreviousSegment(newSelectedIndex: number): { previousValue: string, selectedValue: string } {
        let previousValue: string;
        let selectedValue: string;

        const segmentedControls: NodeList = this.getSegmentedControls();
        segmentedControls.forEach((control: HTMLIfxSegmentedControlElement) => {
            if (control.selected) {
                if (control.segmentIndex !== newSelectedIndex) {
                    control.selected = false;
                    previousValue = control.value;
                } else {
                    selectedValue = control.value;
                }
            }
        })

        return { previousValue, selectedValue };
    }

    getSegmentedControls(): NodeList {
        return this.segmentedControlGroup.querySelectorAll('ifx-segmented-control');
    }

    setActiveSegment(): void {
        const segmentedControls: NodeList = this.getSegmentedControls();
        let activeSegmentedControlFound = false;
        segmentedControls.forEach((control: HTMLIfxSegmentedControlElement, idx: number) => {
            control.segmentIndex = idx;
            if (activeSegmentedControlFound) {
                if (control.selected) control.selected = false;
            } else {
                if (control.selected) {
                    activeSegmentedControlFound = true;
                    this.selectedValue = control.value;
                }
            }
        });
        if (!activeSegmentedControlFound && segmentedControls.length) {
            (segmentedControls[0] as HTMLIfxSegmentedControlElement).selected = true;
            this.selectedValue = (segmentedControls[0] as HTMLIfxSegmentedControlElement).value;
        }
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
            <div aria-value={this.selectedValue} aria-label='segmented controls' class='group'>
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