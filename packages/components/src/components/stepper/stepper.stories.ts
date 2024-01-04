export default{
    title: 'Under Development/Stepper',
    tags: ['autodocs'],
    args: { 
        variant: 'default',
        amountOfSteps: 5,
        activeStep: 2,
        errorStep: -1,
        showNumber: false
    },
    argTypes: {
        activeStep: { 
                    control : {
                        type: 'number',
                        min: 1
                    }, 
                    description: 'Current active step', 
                    default: 1 },
        amountOfSteps: { control : 'number' },
        showNumber: { control: 'boolean' },
        variant: {
            options: ['default', 'compact'],
            control: { type: 'radio' },
        }
    }
}

const Template = (args) => {
    const stepper = document.createElement('ifx-stepper');
    stepper.setAttribute('show-number', args.showNumber);
    stepper.setAttribute('active-step', args.activeStep);
    stepper.setAttribute('variant', args.variant);

    for(let i = 0; i < args.amountOfSteps; i++){
        const step = document.createElement('ifx-step');
        step.innerHTML = `Step Label ${i+1}`;
        stepper.appendChild(step);
        if(args.errorStep == i+1) step.setAttribute('error', 'true');
    }
    return stepper;
}

export const Default = Template.bind({});
Default.args = {
    variant: 'default'
}

export const Compact = Template.bind({});
Compact.args = {
    variant: 'compact',
}