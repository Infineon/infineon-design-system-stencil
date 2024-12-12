export default {
    title: 'Components/Checkbox Group',
    tags: ['autodocs'],
    args: {
        orientation: 'vertical'
    },
    argTypes: {
        orientation: {
            options: ['vertical', 'horizontal'],
            control: { type: 'radio' },
            table: {
                category: 'ifx-checkbox-group props',
                defaultValue: { summary: 'vertical' }
            }
        }
    }
}
const Template = args => {
    const template = `<ifx-checkbox-group
    orientation = "${args.orientation}">
    <ifx-checkbox value="a">Option a</ifx-checkbox>
    <ifx-checkbox value="b">Option b</ifx-checkbox>
    <ifx-checkbox value="c">Option c</ifx-checkbox>
</ifx-checkbox-group>`;

    return template
};
export const Default = Template.bind({});
