import React, { useState } from "react";
import { IfxStepper, IfxStep, IfxButton } from "@infineon/infineon-design-system-react";

function Stepper(){
    const [showStepNumber, changeStepNumberStatus] = useState(false);
    const [activeStep, changeStep] = useState(1);
    const [isCompact, changeIsCompact] = useState(false);
    const initialStepsState = Array.from({ length: 5 }, (_, $) => {return { error: false, complete: false }} );
    const [stepsState, changeStepState] = useState(initialStepsState);

    function handleNextClick() {
        changeStepState(stepsState.map((step, idx) => idx === activeStep-1 ? {...step, complete: true} : step));
        changeStep(Math.min(activeStep+1, 6));
    }
    
    function handlePrevClick() {
        changeStepState(stepsState.map((step, idx) => idx === activeStep-1 ? {...step, complete: false} : step));
        changeStep(Math.max(activeStep-1, 1));
    }

    function handleStepChangeEvent(e) {
        if(e.detail.activeStep !== activeStep) {
            changeStep(e.detail.activeStep);
        }
    }


    return(
        <div>
            <IfxStepper showStepNumber={showStepNumber} variant = {isCompact ? 'compact' : 'default' } activeStep={activeStep} onIfxActiveStepChange={(e) => {handleStepChangeEvent(e)}}>
                <IfxStep error={stepsState[0].error} complete={stepsState[0].complete}> Step 1 </IfxStep>
                <IfxStep error={stepsState[1].error} complete={stepsState[1].complete}> Step 2 </IfxStep>
                <IfxStep error={stepsState[2].error} complete={stepsState[2].complete}> Step 3 </IfxStep>
                <IfxStep error={stepsState[3].error} complete={stepsState[3].complete}> Step 4 </IfxStep>
                <IfxStep error={stepsState[4].error} complete={stepsState[4].complete}> Step 5 </IfxStep>
            </IfxStepper>

            <IfxButton variant="secondary" onClick={() => handlePrevClick()}> 
                Previous Step
            </IfxButton>
            {!isCompact && <IfxButton variant="primary" onClick={() => changeStepNumberStatus(!showStepNumber)}> {showStepNumber ? 'Hide Step Number' : 'Show Step Number'} </IfxButton>}
            <IfxButton variant="secondary" onClick={() => handleNextClick()}> Next Step</IfxButton>
            <IfxButton variant="primary" onClick={() => { isCompact ? changeIsCompact(false) : changeIsCompact(true)}}> {isCompact ? 'Set default' : 'Set Compact'}</IfxButton>

        </div>
    );
}

export default Stepper;