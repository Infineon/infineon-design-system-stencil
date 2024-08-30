// import { action } from '@storybook/addon-actions';

export default {
    title: 'Components/Chip',
    tags: ['autodocs'],
    args:{
        amountOfChipItems: 4,
        chipItemSelected: false,
        placeholder: 'Label',
        size: 'small',
        variant: 'multi',
    },
    argTypes:{}
};

const Template = (args) => {
    const wrapper = document.createElement('div');
    wrapper.innerHTML = `
<ifx-chip
placeholder = "${args.placeholder}"
size = "${args.size}"
variant = "${args.variant}"
>
    ${
        (() => {
            return Array.from({ length: args.amountOfChipItems }, (_, chipItemId) => {
                const chipItem: HTMLIfxChipItemElement  = document.createElement('ifx-chip-item');
                chipItem.innerHTML = `Item Label ${chipItemId+1}`;
                chipItem.setAttribute('value', `I${chipItemId+1}`);
                if(args.chipItemSelected) {
                    chipItem.setAttribute('selected', 'true');
                }
                return chipItem.outerHTML;
            }).join(`\n    `);
        })()
    }
</ifx-chip>`

    const chip = wrapper.querySelector('ifx-chip');
    
    return chip;
}

export const Default = Template.bind({});