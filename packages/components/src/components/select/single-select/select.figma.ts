import figma, { html } from "@figma/code-connect/html"

// Select Field
figma.connect(
  "https://www.figma.com/design/zPvPwPgb4EsYFXKC2nhzSG/Infineon-DDS-%7C-Main?node-id=14251%3A8186",
  {
      // "captionText": figma.string('Caption Text'),
      // "labelText": figma.string('Label Text'),
      // "showCaption": figma.boolean('Show Caption'),
      // "showLabel": figma.boolean('Show Label'),
      // "placeholderText": figma.string('Placeholder Text'),
      // "showIcon": figma.boolean('Show Icon'),
      // "icon": figma.instance('Icon'),
      // "selectedOption": figma.string('Selected Option'),
      // "size": figma.enum('Size', {
      //   "Small": "small",
      //   "Large": "large"
      // }),
      // "state": figma.enum('State', {
      //   "Default": "default",
      //   "Hover": "hover",
      //   "Focus": "focus",
      //   "Active": "active",
      //   "Selected": "selected",
      //   "Active-Selected": "active-selected",
      //   "Error": "error",
      //   "Input": "input",
      //   "Disabled": "disabled",
      //   "Read only": "read-only"
      // }),
      // "selectType": figma.enum('Select Type', {
      //   "Single Select": "single-select",
      //   "Multi Select": "multi-select",
      //   "Combo Box": "combo-box"
      // })
    variant: { "Select Type" : "Single Select" },
    props: {
      label: figma.boolean("Show Label", {
        true: figma.string("Label Text"),
      }),
      // label: figma.string("Label Text"),
      caption: figma.boolean("Show Caption", {
        true: figma.string("Caption Text"),
      }),
      // caption: figma.string("Caption Text"),
      icon: figma.boolean('Show Icon', {
        true: figma.instance<string>('Icon'),
      }),
      // icon: figma.instance<string>('Icon'),
      placeholder: figma.string("Placeholder Text"),
      size: figma.enum("Size", { Small: "s", Large: "m" }),
      disabled: figma.enum('State', {
        "Disabled": true,
      }),
      error: figma.enum('State', {
        "Error": true,
      }),
      readonly: figma.enum('State', {
        "Read only": true,
      }),
    },
    example: ({
      label,
      caption,
      icon,
      placeholder,
      size,
      error,
      disabled,
      readonly,
    }) => html`<ifx-select
      label="${label}"
      caption="${caption}"
      placeholder-value="${placeholder}"
      icon="${icon}"
      error="${error}"
      disabled="${disabled}"
      required="false"
      show-search="true"
      show-clear-button="true"
      size="${size}"
      read-only="${readonly}"
      options='[{"value":"a","label":"Insert Label A","selected":false},{"value":"b","label":"Insert Label B","selected":false}]'
    ></ifx-select>`,
  },
)

// Select List
figma.connect(
  "https://www.figma.com/design/zPvPwPgb4EsYFXKC2nhzSG/Infineon-DDS-%7C-Main?node-id=28657%3A17718",
  {
      // No matching props could be found for these Figma properties:
      // "showSearch": figma.boolean('Show Search'),
      // "size": figma.enum('Size', {
      //   "Small": "small",
      //   "Large": "large"
      // }),
      // "variant": figma.enum('Variant', {
      //   "Multi Select": "multi-select",
      //   "No results": "no-results",
      //   "Single Select": "single-select"
      // })
    variant: { "Variant": "Single Select" },
    props: {
      showSearch: figma.boolean("Show Search"),
      size: figma.enum("Size", { Small: "s", Large: "m" }),
      options: figma.children('_Select List Item'),
    },
    example: ({ showSearch, size }) => html`<ifx-select
      show-search="${showSearch}"
      size="${size}"
      options='[{"value":"a","label":"Option A","selected":false},{"value":"b","label":"Option B","selected":false}]'
    ></ifx-select>`,
  },
)
