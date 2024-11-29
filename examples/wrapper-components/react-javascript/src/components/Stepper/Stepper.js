import React, { useState, useEffect } from "react";
import { IfxStepper, IfxStep, IfxButton } from "@infineon/infineon-design-system-react";

function Stepper(){

    const [activeStep, setActiveStep] = useState(4);

    useEffect(() => { 
        const myStepper = document.getElementById('myStepper')
        myStepper.addEventListener('ifxChange', (e) => { 
            setActiveStep(e.detail.activeStep)
            console.log(e.detail)
        })

    }, [])

    const incrementStep = () => {
        const myStepper = document.getElementById('myStepper')
        if('some form condition') { 
          const steps = myStepper.querySelectorAll('ifx-step')
          if(steps[myStepper.activeStep-1]) steps[myStepper.activeStep-1].complete = true; 
          setActiveStep(activeStep+1)
        }
      }

    const decrementStep = () => {
        if('some form condition') { 
          setActiveStep(activeStep-1)
        }
      }



    return(
        <div>
            <IfxStepper id='myStepper' showStepNumber={false} variant="default" activeStep={activeStep}>
                <IfxStep>Step 1</IfxStep>
                <IfxStep disabled='true'>Step 2</IfxStep>
                <IfxStep>Step 3</IfxStep>
                <IfxStep>Step 4</IfxStep>
                <IfxStep>Step 5</IfxStep>
            </IfxStepper>

            <IfxButton onClick={decrementStep}>Decrement</IfxButton>
            <IfxButton onClick={incrementStep}>Increment</IfxButton>


        </div>
    );
}

export default Stepper;