export default{
    title: 'Under Development/Stepper',
    tags: ['autodocs'],
    args: { 
        activeStep: 2,
        amountOfSteps: 4 
    },
    argTypes: {
        activeStep: { control : 'number', description: 'Current active step', default: 1},
        amountOfSteps: { control : 'number' },
    }
}

const DefaultTemplate = (args) => {
    const element = document.createElement('ifx-stepper');
    for(let i = 0; i < args.amountOfSteps; i++){
        const step = document.createElement('ifx-step');
        if(i+1 < args.activeStep) step.setAttribute('status', 'complete');
        step.innerHTML = 'Step ' + (i+1);
        element.appendChild(step);
    }
    element.setAttribute('active-step', args.activeStep);
    return element;
}

export const Default = DefaultTemplate.bind({});