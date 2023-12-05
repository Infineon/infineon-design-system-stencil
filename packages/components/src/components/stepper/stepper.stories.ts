export default{
    title: 'Under Development/Stepper',
    tags: ['autodocs'],
}

const DefaultTemplate = () => {
    const element = document.createElement('ifx-stepper');
    const s1 = document.createElement('ifx-step');
    const s2 = document.createElement('ifx-step');
    const s3 = document.createElement('ifx-step');
    s1.setAttribute('label', 'Step 1');
    s1.setAttribute('first-step', '');
    s2.setAttribute('label', 'Step Label step label step label');
    s3.setAttribute('label', 'Step 3');
    s3.setAttribute('last-step', '');
    element.append(s1,s2,s3);
    return element;
}

export const Default = DefaultTemplate.bind({});