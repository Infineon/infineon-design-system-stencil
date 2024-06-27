import { action } from '@storybook/addon-actions';

export default{
    title: 'Components/Stepper',
    tags: ['autodocs'],
    args: { 
        activeStep: 2,
        amountOfSteps: 5,
        errorStep: 0,
        indicatorPosition: 'left',
        showStepNumber: false,
        variant: 'default'
    },
    argTypes: {
        activeStep: { 
            name: 'Active step',
            control: {
                type: 'number',
                min: 1
            }, 
            description: 'Indicates the current active step', 
            defaultValue: { summary: 1 }
        },
        amountOfSteps: { 
            name: 'Amount of steps',
            control: 'number', 
            description: 'Indicates the number of steps in stepper in a story'
        },
        errorStep: {
            name: 'Error step',
            control: 'number',
            description: 'Specified step number indicates to have an error'
        },
        indicatorPosition: {
            name: 'Indicator position',
            control: 'radio',
            defaultValue: { summary: 'left' },
            description: 'Allows to swap the progross bar and steps\' label',
            options: ['left', 'right'],
            if: { arg:'variant', eq: 'compact' }
        },
        showStepNumber: { 
            name: 'Show step number',
            control: 'boolean', 
            defaultValue: { summary: 'false' },
            description: 'Shows the step number when set true',
            if: { arg: 'variant', eq: 'default' }
        },
        variant: {
            name: 'Variant',
            options: ['default', 'compact'],
            defaultValue: { summary: 'default' },
            description: 'Allows to switch between default and compact variant',
            control: 'radio'
        },
        ifxActiveStepChange: {
            action: 'ifxActiveStepChange',
            description: 'A custom event emitted when active step changes'
        }
    }
}

const Template = (args) => {
    const wrapper = document.createElement('div');
    wrapper.innerHTML = `
<ifx-stepper 
active-step=${args.activeStep} 
${args.variant === 'compact' ? `indicator-position=${args.indicatorPosition}` : ''} 
${args.variant === 'default' ? `show-step-number=${args.showStepNumber}` : ''} 
variant=${args.variant}>
    ${
        (()=>{
            return Array.from({ length: args.amountOfSteps }, (_, stepId) => {
                const step = document.createElement('ifx-step')
                step.innerHTML = `Step Label ${stepId+1}`
                if(args.errorStep === stepId+1) step.setAttribute('error', 'true')
                if(stepId < args.activeStep-1) step.setAttribute('complete', 'true')
                return step.outerHTML
            }).join(`\n    `)
        })()
    }
</ifx-stepper>`

    const stepper = wrapper.querySelector('ifx-stepper');
    stepper.addEventListener('ifxActiveStepChange', action('ifxActiveStepChange'));
    
    return stepper;
};

export const Default = Template.bind({});
Default.args = {
    variant: 'default'
};

export const Compact = Template.bind({});
Compact.args = {
    variant: 'compact'
};
