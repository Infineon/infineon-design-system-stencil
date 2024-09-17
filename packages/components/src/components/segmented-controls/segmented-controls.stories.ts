export default {
    title: 'Components/Segmented Controls',
    tags: ['autodocs'],
    args: {
        caption: 'Caption text to describe the controls',
        groupLabel: 'Group Label',
        selectedValue: 'v1',
        size: 'small',
    }
}

const Template = (args) => {
    const wrapper = document.createElement('div');
    wrapper.innerHTML = `
<ifx-segmented-controls-group
caption = '${args.caption}'
group-label = '${args.groupLabel}'
selected-value = '${args.selectedValue}'
size = '${args.size}'>
    <ifx-segmented-control value='v1' icon='star16'> Label </ifx-segmented-control>
    <ifx-segmented-control value='v2' icon='star16'> Label </ifx-segmented-control>
    <ifx-segmented-control value='v3' icon='star16'> Label </ifx-segmented-control>
    <ifx-segmented-control value='v4' icon='star16'> Label </ifx-segmented-control>
</ifx-segmented-controls-group>

<script> 
    const segmentedControls = document.querySelector('ifx-segmented-controls-group');
    segmentedControls.addEventListener('ifxChange', (e) => {
        segmentedControls.selectedValue = e.detail.selectedValue;
    });
</script>
`;

    return wrapper.innerHTML;
};

export const Default = Template.bind({});