import { IfxSegmentedControl, IfxSegment } from '@infineon/infineon-design-system-react';

function SegmentedControls() {
    return (
        <div>
            <h2>Segmented Control</h2>
            <IfxSegmentedControl caption='Caption text to describe the controls' label='Group Label' size='regular'>
                <IfxSegment selected={true} icon='star16' value='value1'> Label </IfxSegment>
                <IfxSegment icon='star16' value='value2'> Label </IfxSegment>
                <IfxSegment icon='star16' value='value3'> Label </IfxSegment>
                <IfxSegment icon='star16' value='value4'> Label </IfxSegment>
            </IfxSegmentedControl>
        </div>
    )
}

export default SegmentedControls;
  