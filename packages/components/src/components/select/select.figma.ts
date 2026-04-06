import figma, { html } from "@figma/code-connect/html"

// Figma models different select types as variants of the same component.
// Each variant maps to the appropriate component implementation.

// Select Field - Single Select
figma.connect(
  "https://www.figma.com/design/zPvPwPgb4EsYFXKC2nhzSG/Infineon-DDS-%7C-Main?node-id=14251%3A8186",
  {
    variant: { "Select Type" : "Single Select" },
    props: {
      label: figma.boolean("Show Label", {
        true: figma.nestedProps('Labels', {
          text: figma.string("Label text"),
        }),
        false: { text: undefined }
      }),
      caption: figma.boolean("Show Caption", {
        true: figma.nestedProps('Caption', {
          text: figma.string("Helper text"),
        }),
        false: { text: undefined }
      }),
      placeholder: figma.string('Placeholder Text'),
      size: figma.enum("Size", { Small: "s", Large: "m" }),
      disabled: figma.enum('State', {
        "Disabled": true,
      }),
      error: figma.enum('State', {
        "Error": true,
      }),
    },
    example: ({
      label,
      caption,
      placeholder,
      size,
      error,
      disabled,
    }) => html`
      <!-- Generic example. Adjust to your needs -->
      <ifx-select
        label="${label.text}"
        caption="${caption.text}"
        placeholder-value="${placeholder}"
        error="${error}"
        disabled="${disabled}"
        required="false"
        show-search="true"
        show-clear-button="true"
        size="${size}"
        options='[{"value":"a","label":"Option A","selected":false},{"value":"b","label":"Option B","selected":false},{"value":"c","label":"Option C","selected":false}]'
      ></ifx-select>
    `,
  },
)

// Select Field - Multi Select
figma.connect(
  "https://www.figma.com/design/zPvPwPgb4EsYFXKC2nhzSG/Infineon-DDS-%7C-Main?node-id=14251%3A8186",
  {
    variant: { "Select Type" : "Multi Select" },
    props: {
      label: figma.boolean("Show Label", {
        true: figma.nestedProps('Labels', {
          text: figma.string("Label text"),
        }),
        false: { text: undefined }
      }),
      caption: figma.boolean("Show Caption", {
        true: figma.nestedProps('Caption', {
          text: figma.string("Helper text"),
        }),
        false: { text: undefined }
      }),
      placeholder: figma.string('Placeholder Text'),
      disabled: figma.enum('State', {
        "Disabled": true,
      }),
      error: figma.enum('State', {
        "Error": true,
      }),
    },
    example: ({
      label,
      caption,
      placeholder,
      disabled,
      error,
    }) => html`
      <!-- Generic example. Adjust to your needs -->
      <ifx-multiselect
        label="${label.text}"
        caption="${caption.text}"
        placeholder="${placeholder}"
        disabled="${disabled}"
        error="${error}"
        show-search="true"
        show-select-all="true"
        show-expand-collapse="true"
        show-clear-button="true"
      >
        <ifx-multiselect-option value="category-a">
          Category A
          <ifx-multiselect-option value="option-a-1" slot="children">Option A.1</ifx-multiselect-option>
          <ifx-multiselect-option value="option-a-2" slot="children">Option A.2</ifx-multiselect-option>
          <ifx-multiselect-option value="option-a-3" slot="children">Option A.3</ifx-multiselect-option>
        </ifx-multiselect-option>
        <ifx-multiselect-option value="category-b">
          Category B
          <ifx-multiselect-option value="option-b-1" slot="children">Option B.1</ifx-multiselect-option>
          <ifx-multiselect-option value="option-b-2" slot="children">Option B.2</ifx-multiselect-option>
        </ifx-multiselect-option>
        <ifx-multiselect-option value="option-c">Option C - Standalone</ifx-multiselect-option>
      </ifx-multiselect>
    `,
  },
)

// Select List - Single Select
figma.connect(
  "https://www.figma.com/design/zPvPwPgb4EsYFXKC2nhzSG/Infineon-DDS-%7C-Main?node-id=28657%3A17718",
  {
    variant: { "Variant": "Single Select" },
    props: {
      showSearch: figma.boolean("Show Search"),
      size: figma.enum("Size", { Small: "s", Large: "m" }),
    },
    example: ({ showSearch, size }) => html`
      <!-- Generic example. Adjust to your needs -->
      <ifx-select
        show-search="${showSearch}"
        size="${size}"
        options='[{"value":"a","label":"Option A","selected":false},{"value":"b","label":"Option B","selected":false},{"value":"c","label":"Option C","selected":false}]'
      ></ifx-select>
    `,
  },
)

// Select List - Multi Select
figma.connect(
  "https://www.figma.com/design/zPvPwPgb4EsYFXKC2nhzSG/Infineon-DDS-%7C-Main?node-id=28657%3A17718",
  {
    variant: { "Variant": "Multi Select" },
    props: {
      showSearch: figma.boolean("Show Search"),
      size: figma.enum("Size", { Small: "s", Large: "m" }),
    },
    example: ({ showSearch, size }) => html`
      <!-- Generic example. Adjust to your needs -->
      <ifx-multiselect
        show-search="${showSearch}"
        size="${size}"
        show-select-all="true"
        show-expand-collapse="true"
        show-clear-button="true"
        placeholder="Select options..."
      >
        <ifx-multiselect-option value="category-a">
          Category A
          <ifx-multiselect-option value="option-a-1" slot="children">Option A.1</ifx-multiselect-option>
          <ifx-multiselect-option value="option-a-2" slot="children">Option A.2</ifx-multiselect-option>
        </ifx-multiselect-option>
        <ifx-multiselect-option value="category-b">
          Category B
          <ifx-multiselect-option value="option-b-1" slot="children">Option B.1</ifx-multiselect-option>
          <ifx-multiselect-option value="option-b-2" slot="children">Option B.2</ifx-multiselect-option>
        </ifx-multiselect-option>
      </ifx-multiselect>
    `,
  },
)
