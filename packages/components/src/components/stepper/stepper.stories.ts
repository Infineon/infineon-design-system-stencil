import { action } from '@storybook/addon-actions';

export default{
    title: 'Components/Stepper',
    args: { 
        activeStep: 2,
        amountOfSteps: 5,
        errorStep: 0,
        disabled: false,
        indicatorPosition: 'left',
        showStepNumber: false,
        variant: 'default'
    },
    argTypes: {
        activeStep: { 
            control: {
                type: 'number',
                min: 1
            }, 
            description: 'Indicates the current active step', 
            table: {
                defaultValue: { summary: 1 }
            }
        },
        amountOfSteps: { 
            name: 'Amount of steps',
            control: 'number', 
            description: 'Indicates the number of steps in stepper in a story'
        },
        completeStep: {
            name: 'complete',
            description: 'A boolean prop to mark a step complete.<br>Usage:',
            table: {
                defaultValue: { summary: false },
                type: {
                    summary: `<ifx-step complete=true> </ifx-step>`
                }
            }
        },
        disabled: {
            name: 'disabled',
            control: 'boolean',
            description: 'A boolean prop to make the step unclickable:',
            table: {
                defaultValue: { summary: false },
                type: {
                    summary: `<ifx-step disabled=true> </ifx-step>`
                }
            },
            if: { arg:'variant', eq: 'default' }
        },
        errorStep: {
            name: 'error',
            control: 'number',
            description: 'Specified step number indicates to have an error',
            table: {
                defaultValue: { summary: false }
            },
        },
        indicatorPosition: {
            control: 'radio',
            defaultValue: { summary: 'left' },
            description: 'Allows to swap the progross bar and steps\' label',
            options: ['left', 'right'],
            if: { arg:'variant', eq: 'compact' }
        },
        showStepNumber: { 
            control: 'boolean', 
            defaultValue: { summary: 'false' },
            description: 'Shows the step number when set true',
            if: { arg: 'variant', eq: 'default' }
        },
        variant: {
            options: ['default', 'compact'],
            defaultValue: { summary: 'default' },
            description: 'Allows to switch between default and compact variant',
            control: 'radio'
        },
        ifxChange: {
            action: 'ifxChange',
            description: 'A custom event emitted when active step changes',
            table: {
                type: {
                    summary: 'Framework integration',
                    detail: `
React: onIfxChange={handleChange}
Vue:@ifxChange="handleChange"
Angular:(ifxChange)="handleChange()"
VanillaJs:.addEventListener("ifxChange", (event) => {//handle change});`,
                }
            }
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
                if (args.errorStep === stepId+1) step.setAttribute('error', 'true')
                if (args.disabled) step.setAttribute('disabled', 'true')
                return step.outerHTML
            }).join(`\n    `)
        })()
    }
</ifx-stepper>`

    const stepper = wrapper.querySelector('ifx-stepper');
    stepper.addEventListener('ifxChange', action('ifxChange'));
    
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
