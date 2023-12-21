import React, { useState } from "react";
import { IfxStepper, IfxStep, IfxButton } from "@infineon/infineon-design-system-react";

function Stepper(){
    const [showNumber, changeNumberStatus] = useState(true);
    const [activeStep, changeStep] = useState(2);

    return(
        <div>
            <IfxStepper showNumber={showNumber} activeStep={activeStep}>
                <IfxStep> Step 1 </IfxStep>
                <IfxStep> Step 2 </IfxStep>
                <IfxStep> Step 3 </IfxStep>
                <IfxStep> Step 4 </IfxStep>
                <IfxStep> Step 5 </IfxStep>
            </IfxStepper>

            <IfxButton variant="secondary" onClick={() => changeStep(Math.max(activeStep-1, 1))}> Previous Step</IfxButton>
            <IfxButton variant="secondary" onClick={() => changeNumberStatus(!showNumber)}> {showNumber ? 'Show Default' : 'Show Number'} </IfxButton>
            <IfxButton variant="secondary" onClick={() => changeStep(Math.min(activeStep+1, 6))}> Next Step</IfxButton>

        </div>
    );
}

export default Stepper;