# choicesjs-stencil



<!-- Auto Generated Below -->


## Properties

| Property                    | Attribute                  | Description | Type                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          | Default           |
| --------------------------- | -------------------------- | ----------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------- |
| `addItemFilter`             | `add-item-filter`          |             | `((value: string) => boolean) \| RegExp \| string`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            | `undefined`       |
| `addItemText`               | `add-item-text`            |             | `((value: string) => string) \| string`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       | `undefined`       |
| `addItems`                  | `add-items`                |             | `boolean`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     | `undefined`       |
| `appendValue`               | `append-value`             |             | `string`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      | `undefined`       |
| `callbackOnCreateTemplates` | --                         |             | `(template: any) => any`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      | `undefined`       |
| `callbackOnInit`            | --                         |             | `() => void`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  | `undefined`       |
| `caption`                   | `caption`                  |             | `string`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      | `""`              |
| `choices`                   | `choices`                  |             | `any[] \| string`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             | `undefined`       |
| `classNames`                | --                         |             | `{ containerOuter?: string; containerInner?: string; input?: string; inputCloned?: string; list?: string; listItems?: string; listSingle?: string; listDropdown?: string; item?: string; itemSelectable?: string; itemDisabled?: string; itemChoice?: string; placeholder?: string; group?: string; groupHeading?: string; button?: string; activeState?: string; focusState?: string; openState?: string; disabledState?: string; highlightedState?: string; selectedState: string; flippedState?: string; loadingState?: string; noResults?: string; noChoices?: string; }` | `undefined`       |
| `customAddItemText`         | `custom-add-item-text`     |             | `((value: string) => string) \| string`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       | `undefined`       |
| `delimiter`                 | `delimiter`                |             | `string`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      | `undefined`       |
| `disabled`                  | `disabled`                 |             | `boolean`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     | `false`           |
| `duplicateItemsAllowed`     | `duplicate-items-allowed`  |             | `boolean`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     | `undefined`       |
| `editItems`                 | `edit-items`               |             | `boolean`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     | `undefined`       |
| `error`                     | `error`                    |             | `boolean`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     | `false`           |
| `fuseOptions`               | --                         |             | `{ id?: string; caseSensitive?: boolean; includeMatches?: boolean; includeScore?: boolean; shouldSort?: boolean; keys?: string[] \| object[] \| WeightedField[]; verbose?: boolean; tokenize?: boolean; tokenSeparator?: RegExp; matchAllTokens?: boolean; location?: number; distance?: number; threshold?: number; maxPatternLength?: number; minMatchCharLength?: number; findAllMatches?: boolean; sortFn?(a: { score: number; }, b: { score: number; }): number; getFn?(obj: any, path: string): any; }`                                                                 | `undefined`       |
| `itemSelectText`            | `item-select-text`         |             | `""`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          | `undefined`       |
| `items`                     | --                         |             | `any[]`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       | `undefined`       |
| `label`                     | `label`                    |             | `string`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      | `""`              |
| `loadingText`               | `loading-text`             |             | `string`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      | `undefined`       |
| `maxItemCount`              | `max-item-count`           |             | `number`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      | `undefined`       |
| `maxItemText`               | `max-item-text`            |             | `((maxItemCount: number) => string) \| string`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                | `undefined`       |
| `name`                      | `name`                     |             | `string`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      | `undefined`       |
| `noChoicesText`             | `no-choices-text`          |             | `(() => string) \| string`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    | `undefined`       |
| `noResultsText`             | `no-results-text`          |             | `(() => string) \| string`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    | `undefined`       |
| `options`                   | `options`                  |             | `any[] \| string`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             | `undefined`       |
| `paste`                     | `paste`                    |             | `boolean`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     | `undefined`       |
| `placeholder`               | `placeholder`              |             | `boolean \| string`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           | `undefined`       |
| `placeholderValue`          | `placeholder-value`        |             | `string`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      | `"Placeholder"`   |
| `position`                  | `position`                 |             | `"auto" \| "bottom" \| "top"`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 | `undefined`       |
| `prependValue`              | `prepend-value`            |             | `string`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      | `undefined`       |
| `removeItemButton`          | `remove-item-button`       |             | `boolean`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     | `undefined`       |
| `removeItems`               | `remove-items`             |             | `boolean`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     | `undefined`       |
| `renderChoiceLimit`         | `render-choice-limit`      |             | `number`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      | `undefined`       |
| `renderSelectedChoices`     | `render-selected-choices`  |             | `"always" \| "auto"`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          | `undefined`       |
| `required`                  | `required`                 |             | `boolean`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     | `false`           |
| `resetScrollPosition`       | `reset-scroll-position`    |             | `boolean`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     | `undefined`       |
| `searchChoices`             | `search-choices`           |             | `boolean`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     | `undefined`       |
| `searchFields`              | `search-fields`            |             | `string \| string[]`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          | `undefined`       |
| `searchFloor`               | `search-floor`             |             | `number`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      | `undefined`       |
| `searchPlaceholderValue`    | `search-placeholder-value` |             | `string`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      | `undefined`       |
| `searchResultLimit`         | `search-result-limit`      |             | `number`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      | `undefined`       |
| `shouldSort`                | `should-sort`              |             | `boolean`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     | `undefined`       |
| `shouldSortItems`           | `should-sort-items`        |             | `boolean`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     | `undefined`       |
| `showClearButton`           | `show-clear-button`        |             | `boolean`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     | `true`            |
| `showSearch`                | `show-search`              |             | `boolean`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     | `undefined`       |
| `size`                      | `size`                     |             | `string`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      | `"medium (40px)"` |
| `sorter`                    | --                         |             | `(el1: any, el2: any) => number`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              | `undefined`       |
| `uniqueItemText`            | `unique-item-text`         |             | `((value: string) => string) \| string`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       | `undefined`       |
| `value`                     | `value`                    |             | `string`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      | `undefined`       |
| `valueComparer`             | --                         |             | `(value1: string, value2: string) => boolean`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 | `undefined`       |


## Events

| Event       | Description | Type                            |
| ----------- | ----------- | ------------------------------- |
| `ifxInput`  |             | `CustomEvent<CustomEvent<any>>` |
| `ifxSelect` |             | `CustomEvent<CustomEvent<any>>` |


## Methods

### `ajax(fn: AjaxFn) => Promise<this>`

Performs an AJAX request.

#### Parameters

| Name | Type                      | Description |
| ---- | ------------------------- | ----------- |
| `fn` | `(callback: any) => void` |             |

#### Returns

Type: `Promise<this>`



### `clearChoices() => Promise<this>`

Clears all choices from the dropdown.

#### Returns

Type: `Promise<this>`



### `clearInput() => Promise<this>`

Clears the input field.

#### Returns

Type: `Promise<this>`



### `clearSelection() => Promise<void>`

Clears the current selection and resets the select field.

#### Returns

Type: `Promise<void>`



### `clearStore() => Promise<this>`

Clears the internal store.

#### Returns

Type: `Promise<this>`



### `getValue(valueOnly?: boolean) => Promise<string | Array<string>>`

Gets the current selected value(s).

#### Parameters

| Name        | Type      | Description |
| ----------- | --------- | ----------- |
| `valueOnly` | `boolean` |             |

#### Returns

Type: `Promise<string | string[]>`



### `handleChange() => Promise<void>`

Handles selection change and emits the selected value.

#### Returns

Type: `Promise<void>`



### `handleDeleteIcon() => Promise<void>`

Toggles visibility of the delete icon based on component width.

#### Returns

Type: `Promise<void>`



### `hideDropdown(blurInput?: boolean) => Promise<this>`

Hides the dropdown menu.

#### Parameters

| Name        | Type      | Description |
| ----------- | --------- | ----------- |
| `blurInput` | `boolean` |             |

#### Returns

Type: `Promise<this>`



### `highlightAll() => Promise<this>`

Highlights all items in the dropdown.

#### Returns

Type: `Promise<this>`



### `highlightItem(item: HTMLElement, runEvent?: boolean) => Promise<this>`

Highlights a specific item in the dropdown.

#### Parameters

| Name       | Type          | Description |
| ---------- | ------------- | ----------- |
| `item`     | `HTMLElement` |             |
| `runEvent` | `boolean`     |             |

#### Returns

Type: `Promise<this>`



### `removeActiveItems(excludedId?: number) => Promise<this>`

Removes all active items except the excluded one.

#### Parameters

| Name         | Type     | Description |
| ------------ | -------- | ----------- |
| `excludedId` | `number` |             |

#### Returns

Type: `Promise<this>`



### `removeActiveItemsByValue(value: string) => Promise<this>`

Removes active items by their value.

#### Parameters

| Name    | Type     | Description |
| ------- | -------- | ----------- |
| `value` | `string` |             |

#### Returns

Type: `Promise<this>`



### `removeHighlightedItems(runEvent?: boolean) => Promise<this>`

Removes all highlighted items.

#### Parameters

| Name       | Type      | Description |
| ---------- | --------- | ----------- |
| `runEvent` | `boolean` |             |

#### Returns

Type: `Promise<this>`



### `setChoiceByValue(value: string | Array<string>) => Promise<this>`

Sets the selected choice by value.

#### Parameters

| Name    | Type                 | Description |
| ------- | -------------------- | ----------- |
| `value` | `string \| string[]` |             |

#### Returns

Type: `Promise<this>`



### `setChoices(choices: any[] | string, value: string, label: string, replaceChoices?: boolean) => Promise<this>`

Sets the available choices/options.

#### Parameters

| Name             | Type              | Description |
| ---------------- | ----------------- | ----------- |
| `choices`        | `string \| any[]` |             |
| `value`          | `string`          |             |
| `label`          | `string`          |             |
| `replaceChoices` | `boolean`         |             |

#### Returns

Type: `Promise<this>`



### `setValue(args: Array<any>) => Promise<this>`

Sets the selected value(s).

#### Parameters

| Name   | Type    | Description |
| ------ | ------- | ----------- |
| `args` | `any[]` |             |

#### Returns

Type: `Promise<this>`



### `showDropdown(focusInput?: boolean) => Promise<this>`

Shows the dropdown menu.

#### Parameters

| Name         | Type      | Description |
| ------------ | --------- | ----------- |
| `focusInput` | `boolean` |             |

#### Returns

Type: `Promise<this>`



### `unhighlightAll() => Promise<this>`

Removes highlight from all items.

#### Returns

Type: `Promise<this>`



### `unhighlightItem(item: HTMLElement) => Promise<this>`

Removes highlight from a specific item.

#### Parameters

| Name   | Type          | Description |
| ------ | ------------- | ----------- |
| `item` | `HTMLElement` |             |

#### Returns

Type: `Promise<this>`




## Dependencies

### Used by

 - [ifx-pagination](../../pagination)
 - [ifx-set-filter](../../table-advanced-version/set-filter)

### Depends on

- [ifx-icon](../../icon)

### Graph
```mermaid
graph TD;
  ifx-select --> ifx-icon
  ifx-pagination --> ifx-select
  ifx-set-filter --> ifx-select
  style ifx-select fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
