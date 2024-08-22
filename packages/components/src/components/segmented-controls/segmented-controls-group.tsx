import { h, 
         Element,
         Component, 
         Prop } from "@stencil/core";

@Component ({
    tag     : 'ifx-segmented-controls-group',
    styleUrl: 'segmented-controls-group.scss',
    shadow  : true
})

export class SegmentedControlsGroup {

    @Element() segmentedControlGroup: HTMLIfxSegmentedControlsGroupElement;

    /**
     * Sets the caption which describe the controls.
     */
    @Prop() caption: string = '';
    
    /**
     * Sets the label for the segement controls group.
     */
    @Prop() groupLabel: string = '';

    /**
     * Sets the size of the segmented controls.
     * 
     * @Default 'regular'
     */
    @Prop() size: 'regular' | 'small' = 'regular';


    /**
     * Utiliy functions
     */

    getSegmentedControls(): NodeList {
        return this.segmentedControlGroup.querySelectorAll('ifx-segmented-control');
    }

    /**
     * Helper functions
     */

    setSegmentedControlSize() {
        const segmentedControls: NodeList = this.getSegmentedControls();
        segmentedControls.forEach((control: HTMLIfxSegmentedControlElement) => {
            control.shadowRoot.querySelector('.control').classList.add(`control--${this.size}`);
            // console.log(control.shadowRoot);
        });
    }

    /**
     * Lifecycle methods
     */

    componentDidRender() {
        this.setSegmentedControlSize();
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
}