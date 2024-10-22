import { action } from "@storybook/addon-actions";
import { icons } from '@infineon/infineon-icons';

export default {
    title: 'Components/Segmented Controls',
    tags: ['autodocs'],
    args: {
        amountOfSegments: 5,
        labelOfSegment: 'Label',
        caption: 'Caption text to describe the controls',
        groupLabel: 'Group Label',
        size: 'regular',
        icon: 'star-16',
        selected: 'false',
        value: 'Value'
    },
    argTypes: {
        amountOfSegments: {
            name: 'Amount of Segments',
            control: { type: 'number', min: 2 },
            description: 'Control the number of *<ifx-segmented-control>* in component.',
            table: {
                category: 'story controls',
                type: {
                    summary: null
                }
            }
        },
        labelOfSegment: {
            name: 'Label of Segment',
            description: 'Set the label of *<ifx-segmented-control>*.',
            table: {
                category: 'story controls',
                type: {
                    summary: '<ifx-segmented-control> `label` </ifx-segmented-control>'
                }
            }
        },
        caption: {
            description: 'Set the caption text of segmented control group.',
            table: {
                category: 'ifx-segmented-control-group props'
            }
        },
        groupLabel: {
            name: 'group-label',
            description: 'Set the label of control group.',
            table: {
                category: 'ifx-segmented-control-group props'
            }
        },
        size: {
            description: 'Switch the size of Segmented Controls.',
            control: 'radio',
            options: ['regular', 'small'],
            table: {
                category: 'ifx-segmented-control-group props',
                defaultValue: {
                    summary: 'regular'
                },
                type: {
                    summary: 'regular | small'
                }
            }
        },
        icon: {
            description: 'Set icon of a segment.',
            options: Object.values(icons).map(i => i['name']),
            control: { type: 'select' },
            table: {
                category: 'ifx-segmented-control props'
            }
        },
        selected: {
            description: `Selects the segment when set true.\n
See the 2nd *<ifx-segmented-control>* for effects`,
            control: 'boolean',
            table: {
                category: 'ifx-segmented-control props',
                defaultValue: {
                    summary: false,
                },
                type: {
                    summary: 'boolean'
                }
            }
        },
        value: {
            description: 'Set the value of *<ifx-segmented-control>*. Required.',
            table: {
                category: 'ifx-segmented-control props',
                type: {
                    summary: 'string'
                }
            },
            type: {
                required: true
            }
        },
        ifxChange: {
            description: `A custom event *ifxChange* is emitted whenever the *<ifx-segmented-control>* is clicked/selected.\n
    event.detail: 
    {
        previousValue: string,
        selectedValue: string
    }
            `,
            table: {
                category: 'custom events',
                type: {
                    summary: 'Framework integration',
                    detail: `
React: onIfxChipChange={handleChange}
Vue: @ifxChipChange="handleChange"
Angular: (ifxChipChange)="handleChange()"
VanillaJs: .addEventListener("ifxChipChange", (event) => {/*handle change*/});`,
                }
            }
        }
    }
}

const Template = (args) => {
    const wrapper = document.createElement('div');
    wrapper.innerHTML = `
<ifx-segmented-control-group
caption = '${args.caption}'
group-label = '${args.groupLabel}'
size = '${args.size}'>
    ${
        (() => {
            return Array.from({ length: args.amountOfSegments }, (_, segmentId) => {
                const segment = document.createElement('ifx-segmented-control');
                segment.innerText = args.labelOfSegment;
                segment.setAttribute('value', `${args.value}${segmentId+1}`);
                segment.setAttribute('icon', `${args.icon}`);
                if (args.selected === true && segmentId === 1) segment.setAttribute('selected', 'true');
                return segment.outerHTML;
            }).join(`\n    `);
        })()
    }
</ifx-segmented-control-group>  
`;
    const segmentedControlGroup = wrapper.querySelector('ifx-segmented-control-group');
    segmentedControlGroup.addEventListener('ifxChange', action('ifxChange'));

    return segmentedControlGroup;
};

export const Default = Template.bind({});