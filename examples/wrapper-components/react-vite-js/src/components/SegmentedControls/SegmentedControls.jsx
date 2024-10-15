import { IfxSegmentedControlGroup, IfxSegmentedControl } from '@infineon/infineon-design-system-react';
import React from 'react';

function SegmentedControls() {
    return (
        <div>
            <IfxSegmentedControlGroup caption='Caption text to describe the controls' groupLabel='Group Label' size='regular'>
                <IfxSegmentedControl selected={true} icon='star16' value='value1'> Label </IfxSegmentedControl>
                <IfxSegmentedControl icon='star16' value='value2'> Label </IfxSegmentedControl>
                <IfxSegmentedControl icon='star16' value='value3'> Label </IfxSegmentedControl>
                <IfxSegmentedControl icon='star16' value='value4'> Label </IfxSegmentedControl>
            </IfxSegmentedControlGroup>
        </div>
    )
}

export default SegmentedControls;
  