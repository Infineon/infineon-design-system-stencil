import React, { useState } from "react";
import { IfxStepper, IfxStep, IfxButton } from "@infineon/infineon-design-system-react";

function Stepper(){
    const [showNumber, changeNumberStatus] = useState(false);
    const [activeStep, changeStep] = useState(2);
    const [isCompact, changeIsCompact] = useState(false);

    return(
        <div>
            <IfxStepper showNumber={showNumber} variant = {isCompact ? 'compact' : 'default' } activeStep={activeStep}>
                <IfxStep> Step 1 </IfxStep>
                <IfxStep> Step 2 </IfxStep>
                <IfxStep error = {true}> Step 3 </IfxStep>
                <IfxStep> Step 4 </IfxStep>
                <IfxStep> Step 5 </IfxStep>
            </IfxStepper>

            <IfxButton variant="secondary" onClick={() => changeStep(Math.max(activeStep-1, 1))}> Previous Step</IfxButton>
            {!isCompact && <IfxButton variant="primary" onClick={() => changeNumberStatus(!showNumber)}> {showNumber ? 'Hide Number' : 'Show Number'} </IfxButton>}
            <IfxButton variant="secondary" onClick={() => changeStep(Math.min(activeStep+1, 6))}> Next Step</IfxButton>
            <IfxButton variant="primary" onClick={() => { isCompact ? changeIsCompact(false) : changeIsCompact(true)}}> {isCompact ? 'Set default' : 'Set Compact'}</IfxButton>

        </div>
    );
}

export default Stepper;