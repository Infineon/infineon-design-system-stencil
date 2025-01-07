export default {
    title: 'Components/Checkbox Group',
    tags: ['autodocs'],
    args: {
        amountOfItems: 3,
        alignment: 'vertical',
        checked: false,
        disabled: false,
        indeterminate: false,
        error: false,
        size: 'm',
        showGroupLabel: false,
        groupLabelText: '',

    },
    argTypes: {
        alignment: {
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
        },
        showGroupLabel: {
            description: 'Show the group label.',
            control: { type: 'boolean' },
            table: {
                category: 'ifx-checkbox-group props',
                defaultValue: { summary: 'false' }
            }
        },
        groupLabelText: {
            description: 'Set the group label text.',
            control: { type: 'text' },
            table: {
                category: 'ifx-checkbox-group props',
                defaultValue: { summary: '' }
            }
        },
    }
};
const Template = args => {

    let checkboxes = '';
    for (let i = 0; i < args.amountOfItems; i++) {
        if (i === 0) {
            checkboxes += `<ifx-checkbox value="${i}" disabled="${args.disabled}" checked="${args.checked}" error="${args.error}" size="${args.size}" indeterminate="${args.indeterminate}">Option ${i}</ifx-checkbox>`;
        } else {
            checkboxes += `<ifx-checkbox value="${i}" size="${args.size}">Option ${i}</ifx-checkbox>`;
        }
    }

    const template = `
        <ifx-checkbox-group alignment="${args.alignment} show-group-label="${args.showGroupLabel}" group-label-text="${args.groupLabelText}">
            ${checkboxes}
    `;

    return template;
};
export const Default = Template.bind({});
