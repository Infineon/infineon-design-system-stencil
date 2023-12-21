export default{
    title: 'Under Development/Stepper',
    tags: ['autodocs'],
    args: { 
        activeStep: 2,
        amountOfSteps: 4,
        showNumber: false
    },
    argTypes: {
        activeStep: { control : 'number', description: 'Current active step', default: 1},
        amountOfSteps: { control : 'number' },
        showNumber: {control: 'boolean'}
    }
}

const DefaultTemplate = (args) => {
    const element = document.createElement('ifx-stepper');
    element.setAttribute('show-number', args.showNumber);
    element.setAttribute('active-step', args.activeStep);

    for(let i = 0; i < args.amountOfSteps; i++){
        const step = document.createElement('ifx-step');
        step.innerHTML = `Step ${i+1}`;
        element.appendChild(step);
    }
    return element;
}

export const Default = DefaultTemplate.bind({});