import { action } from '@storybook/addon-actions';

export default {
    title: 'Components/Textarea',
    tags: ['autodocs'],
    args: {
        caption:'Caption text, description, error notification',
        cols: 43,
        disabled: false,
        error: false,
        label: 'Label Text',
        name: 'textarea',
        placeholder: 'Placeholder',
        readOnly: false,
        resize: 'both',
        rows: 5,
        value: 'Text',
        wrap: 'soft'
    },
    argTypes: {},
}

const Template = (args) => {
    const wrapper = document.createElement('div');
    wrapper.innerHTML = `
<ifx-textarea 
    caption="${args.caption}"
    cols="${args.cols}"
    disabled="${args.disabled}"
    error="${args.error}"
    label="${args.label}"
    maxlength="${args.maxlength}"
    minlength="${args.minlength}"
    name="${args.name}"
    placeholder="${args.placeholder}"
    read-only="${args.readOnly}"
    resize="${args.resize}"
    rows="${args.rows}"
    value="${args.value}"
    wrap="${args.wrap}"
/>
`;
    const textarea = wrapper.querySelector('ifx-textarea');
    textarea.addEventListener('ifxInput', action('ifxInput'));
    textarea.addEventListener('ifxChange', action('ifxChange'));

    return textarea;
};

export const Default = Template.bind({});