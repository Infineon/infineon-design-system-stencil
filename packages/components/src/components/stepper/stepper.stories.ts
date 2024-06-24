import { action } from '@storybook/addon-actions';

export default{
    title: 'Components/Stepper',
    tags: ['autodocs'],
    args: { 
        activeStep: 2,
        amountOfSteps: 5,
        errorStep: -1,
        indicatorPosition : 'left',
        showNumber: false,
        variant: 'default',
    },
    argTypes: {
        activeStep: { 
            name: 'Active step',
            control : {
                type: 'number',
                min: 1
            }, 
            description: 'Indicates the current active step', 
            defaultValue: {summary: 1}
        },
        amountOfSteps: { 
            name: 'Amount of steps',
            control : 'number', 
            description: 'Indicates the number of steps in stepper in a story',
        },
        errorStep: {
            name: 'Error step',
            control: 'number',
            defaultValue: {summary: -1},
            description: 'Specified step number indicates to have an error'
        },
        indicatorPosition: {
            name: 'Indicator position',
            control : 'radio',
            defaultValue: {summary: 'left'},
            description: 'Allows to swap the progross bar and steps\' label',
            options: ['left', 'right'],
            if: { arg:'variant', eq: 'compact'}
        },
        showNumber: { 
            name: 'Show number',
            control: 'boolean', 
            defaultValue: {summary: 'false'},
            description: 'Shows the step number when set true',
            if: { arg: 'variant', eq: 'default'}
        },
        variant: {
            name: 'Variant',
            options: ['default', 'compact'],
            defaultValue: {summary: 'default'},
            description: 'Allows to switch between default and compact variant',
            control: 'radio'
        },
        ifxActiveStepChange:{
            action: 'ifxActiveStepChange',
            description: 'A custom event emitted when active step changes'
        }
    }
}

const Template = (args) => {
    const stepper = document.createElement('ifx-stepper');
    stepper.setAttribute('show-number', args.showNumber);
    stepper.setAttribute('active-step', args.activeStep);
    stepper.setAttribute('variant', args.variant);
    stepper.setAttribute('indicator-position', args.indicatorPosition);

    for(let i = 0; i < args.amountOfSteps; i++){
        const step = document.createElement('ifx-step');
        step.innerHTML = `Step Label ${i+1}`;
        stepper.appendChild(step);
        if(args.errorStep == i+1) step.setAttribute('error', 'true');
    }
    stepper.addEventListener('ifxActiveStepChange', action('ifxActiveStepChange'));
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
