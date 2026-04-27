import{u as c,j as e,M as o,C as p,a as i}from"./blocks-CFDEZ05C.js";import{S as a,D as r,V as S,C as m}from"./stepper.stories-74h6ds0H.js";import"./preload-helper-PPVm8Dsz.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-A3HwJ4O3.js";function s(n){const t={code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",...c(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(o,{of:a}),`
`,e.jsx(t.h1,{id:"stepper",children:"Stepper"}),`
`,e.jsx(p,{of:r,sourceState:"shown"}),`
`,e.jsx(t.h2,{id:"props",children:"Props"}),`
`,e.jsx(i,{of:r}),`
`,e.jsx(t.h2,{id:"general-usage",children:"General usage"}),`
`,e.jsx(t.p,{children:"Examples of general usage"}),`
`,e.jsx("b",{children:"Vanilla"}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-js",children:`
const incrementStep = () => {
  const myStepper = document.getElementById('myStepper')
  if('some form condition') { 
    const steps = myStepper.querySelectorAll('ifx-step')
    if(steps[myStepper.activeStep-1]) {
      steps[myStepper.activeStep-1].complete = true;
    } 
    myStepper.activeStep++;
  }
}

const decrementStep = () => {
  const myStepper = document.getElementById('myStepper')
  myStepper.activeStep--;
}

<ifx-button variant='primary' onClick="decrementStep()">Decrement Step</ifx-button>
<ifx-button variant='primary' onClick="incrementStep()">Increment Step</ifx-button>
`})}),`
`,e.jsx("b",{children:"React"}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-js",children:`const [activeStep, setActiveStep] = useState(3);

useEffect(() => { 
  const myStepper = document.getElementById('myStepper')
  myStepper.addEventListener('ifxChange', (e) => { 
      setActiveStep(e.detail.activeStep)
  })

}, [])

const incrementStep = () => {
  const myStepper = document.getElementById('myStepper')
  if('some form condition') { 
    const steps = myStepper.querySelectorAll('ifx-step')
    if(steps[myStepper.activeStep-1]) {
      steps[myStepper.activeStep-1].complete = true;
    } 
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
      <IfxStep>Step 2</IfxStep>
      <IfxStep>Step 3</IfxStep>
      <IfxStep>Step 4</IfxStep>
      <IfxStep>Step 5</IfxStep>
    </IfxStepper>

    <IfxButton onClick={decrementStep}>Decrement</IfxButton>
    <IfxButton onClick={incrementStep}>Increment</IfxButton>
  </div>
)
`})}),`
`,e.jsx(t.h3,{id:"vertical",children:"Vertical"}),`
`,e.jsx(p,{of:S,sourceState:"shown"}),`
`,e.jsx(t.h3,{id:"compact",children:"Compact"}),`
`,e.jsx(p,{of:m,sourceState:"shown"})]})}function h(n={}){const{wrapper:t}={...c(),...n.components};return t?e.jsx(t,{...n,children:e.jsx(s,{...n})}):s(n)}export{h as default};
