export default {
    title: 'Components/Checkbox Group',
    tags: ['autodocs'],
    args: {
        amountOfItems: 3,
        orientation: 'vertical',
        checked: false,
        disabled: false,
        indeterminate: false,
        error: false,
        size: 'm',

    },
    argTypes: {
        orientation: {
            description: 'Set the orientation of the checkbox group.',
            options: ['vertical', 'horizontal'],
            control: { type: 'radio' },
            table: {
                category: 'ifx-checkbox-group props',
                defaultValue: { summary: 'vertical' }
            }
        },
        size: {
            description: 'Size options for the checkbox.',
            options: ['s', 'm'],
            control: { type: 'radio' },
            table: {
                category: 'ifx-checkbox props',
                defaultValue: { summary: 'm' },
                type: {
                    summary: 's | m'
                }
            }
        },
        amountOfItems: {
            name: 'Amount of Items',
            description: 'Set the amount of checkboxes.',
            control: { type: 'number' },
            table: {
                category: 'story controls',
                defaultValue: {
                    summary: 3
                }
            }
        },
        checked: {
            description: 'Set the checked state.',
            control: { type: 'boolean' },
            table: {
                category: 'ifx-checkbox props',
                defaultValue: { summary: 'false' }
            }
        },
        disabled: {
            description: 'Disable the checkbox.',
            control: { type: 'boolean' },
            table: {
                category: 'ifx-checkbox props',
                defaultValue: { summary: 'false' }
            }
        },
        error: {
            description: 'Set the error state.',
            control: { type: 'boolean' },
            table: {
                category: 'ifx-checkbox props',
                defaultValue: { summary: 'false' }
            }
        },
        indeterminate: {
            description: 'Set the partially checked state.',
            control: { type: 'boolean' },
            table: {
                category: 'ifx-checkbox props',
                defaultValue: { summary: 'false' }
            }
        }
    }
}
const Template = args => {

    const template =
        `<ifx-checkbox-group
    orientation = "${args.orientation}">
    <ifx-checkbox value="a" disabled="${args.disabled}" checked="${args.checked}" error="${args.error}" size="${args.size}" indeterminate="${args.indeterminate}">Option a</ifx-checkbox>
    <ifx-checkbox value="b" size="${args.size}">Option b</ifx-checkbox>
    <ifx-checkbox value="c" size="${args.size}">Option c</ifx-checkbox>
</ifx-checkbox-group>`;

    return template
};
export const Default = Template.bind({});
