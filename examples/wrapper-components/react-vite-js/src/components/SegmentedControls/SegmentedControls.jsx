import { IfxSegmentedControlGroup, IfxSegmentedControl } from '@infineon/infineon-design-system-react';
import { useState } from 'react';


function SegmentedControls() {
    const [selectedValue, setSelectedValue] = useState('value1')
    const handleChange = (e) => {
        setSelectedValue(e.detail.selectedValue);
    }

    return (
        <div>
            <IfxSegmentedControlGroup 
            size='regular' 
            selectedValue={selectedValue}
            onIfxChange={(e) => {handleChange(e)}}>
                <IfxSegmentedControl icon='star16' value='value1'> Label </IfxSegmentedControl>
                <IfxSegmentedControl icon='star16' value='value2'> Label </IfxSegmentedControl>
                <IfxSegmentedControl icon='star16' value='value3'> Label </IfxSegmentedControl>
                <IfxSegmentedControl icon='star16' value='value4'> Label </IfxSegmentedControl>
            </IfxSegmentedControlGroup>
        </div>
    )
}

export default SegmentedControls;
  