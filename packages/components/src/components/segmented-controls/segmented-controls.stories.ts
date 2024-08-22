export default {
    title: 'Components/Segmented Controls',
    args: {
        caption: 'Caption text to describe the controls',
        groupLabel: 'Group Label',
        size: 'small',
    }
}

const Template = (args) => {
    const wrapper = document.createElement('div');
    wrapper.innerHTML = `
<ifx-segmented-controls-group
caption = '${args.caption}'
group-label = '${args.groupLabel}'
size = '${args.size}'>
    <ifx-segmented-control icon='star16'> Label </ifx-segmented-control>
    <ifx-segmented-control icon='star16'> Label </ifx-segmented-control>
    <ifx-segmented-control icon='star16'> Label </ifx-segmented-control>
    <ifx-segmented-control icon='star16'> Label </ifx-segmented-control>
    <ifx-segmented-control icon='star16'> Label </ifx-segmented-control>
    <ifx-segmented-control icon='star16'> Label </ifx-segmented-control>
    <ifx-segmented-control icon='star16'> Label </ifx-segmented-control>
    </ifx-segmented-controls-group>`;
    
    const segmentedControls = wrapper.querySelector('ifx-segmented-controls-group');
    return segmentedControls;
};

export const Default = Template.bind({});