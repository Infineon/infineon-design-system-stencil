# Naming Catalog

This file is the shared lookup catalog for public component API terminology and contracts. It is intended to cover properties, events, methods, and slots in one place.

The current draft contains the property catalog. Events, methods, and slots can be added as separate top-level sections without creating additional catalogs.

Design rules and rationale for properties are defined in [Component API Guidelines: Properties](./properties.md).

The catalog describes the proposed target API rather than serving as an inventory of the currently released API. The **Outliers to migrate** column records existing names that differ from the proposed target and may need compatibility handling during deliberate API revisions. Established family conventions are not listed as outliers merely because another name could be marginally more precise.

## Properties

### State and interaction

| Concept | Proposed target API | Type or values | Outliers to migrate |
| --- | --- | --- | --- |
| Open state | `open` | `boolean`, mutable | `opened`, `isOpen`, `defaultOpen`, `initialOpen` |
| Disclosure expansion state | `expanded` | `boolean`, mutable | `defaultExpanded`, `initiallyExpanded` |
| Compact or minimized mode | `collapsed` | `boolean`, mutable | `initialCollapse` |
| Active state | `active` | `boolean` | — |
| Active step | `activeStep` | `number` | — |
| Active tab | `activeTabIndex` | `number` | — |
| Selected state | `selected` | `boolean`, mutable where interactive | — |
| Checked state | `checked` | `boolean`, mutable | — |
| Indeterminate state | `indeterminate` | `boolean` | — |
| Disabled state | `disabled` | `boolean` | `disableItem`, `disableAllItems` |
| Read-only state | `readOnly` | `boolean` | — |
| Required state | `required` | `boolean` | — |
| Search capability | `searchable` | `boolean` | `showSearch`, `searchChoices` where they enable search behavior |
| Close capability | `closable` | `boolean` | `showCloseButton` |
| Collapse capability | `collapsible` | `boolean` | — |
| Sticky positioning | `positionSticky` | `boolean` | — |
| Inverted rendering context | `inverted` | `boolean` | `inverse` as a theme value |
| Fill available width | `fullWidth` | `boolean` | — |

The initial value of interactive state is supplied through the same mutable property. No parallel `default*` or `initial*` property is defined for `open`, `expanded`, or `collapsed`.

### Validation and text

| Concept | Proposed target API | Type or values | Outliers to migrate |
| --- | --- | --- | --- |
| Error state | `error` | `boolean` | — |
| Success state | `success` | `boolean` | — |
| Supporting or feedback text | `caption` | `string` or `undefined` | `captionText` |
| Primary visible label | `label` | `string` | `labelText`, role-specific unprefixed names |
| Content heading terminology | `TBD` | `string` | `header`, `heading`, `headline`, `popoverTitle`, modal `caption` |
| Longer explanation | `description` | `string` | — |
| Input placeholder | `placeholder` | `string` | `placeholderValue` |
| Role-specific message | `<role>Message` | `string` | Mixed `...Text` and `...Label` forms |
| Interpolated copy | `<role>Template` | `string` | Mixed message names for template strings |
| Visible action label | `<action>Label` | `string` | `label<Action>` forms |

For form validation, the proposed target property set is:

```ts
error: boolean;
success: boolean;
caption?: string;
```

### Layout and positioning

| Concept | Proposed target API | Type or values | Outliers to migrate |
| --- | --- | --- | --- |
| Floating element relative to an anchor | `placement` | `top`, `bottom-start`, `right`, … | `position` |
| Horizontal or vertical layout | `orientation` | `horizontal`, `vertical` | — |
| Alignment within a layout | `alignment` | `start`, `center`, `end`, `stretch` | — |
| Directional side | `side` | `start`, `end` | `left`, `right` values |
| Child position | `<target>Position` | Direction-aware subset using `start` and `end` | Left/right values |
| Resizable directions | `resize` | `both`, `horizontal`, `vertical`, `none` | — |

### Semantic and visual axes

| Concept | Proposed target API | Shared vocabulary | Outliers to migrate |
| --- | --- | --- | --- |
| Semantic intent | `tone` | `brand`, `neutral`, `success`, `warning`, `danger` | Combined values such as `alert-brand`, `alert-danger` when split into independent axes |
| Action hierarchy | `variant` | `primary`, `secondary`, `tertiary` | — |
| Concrete visual treatment | `appearance` | `filled`, `outlined`, `text`, component-specific subsets | Only overloaded properties that combine this with another decision |
| Component kind | `kind` | Component-specific | Only overloaded properties that combine kind with tone or appearance |
| Content representation | `display` | Component-specific | Only overloaded properties that combine display with another decision |
| Selection behavior | `selectionMode` | `single`, `multiple` | `variant: "single"` / `"multi"` |
| Shape | `shape` | `round`, `square`, component-specific subsets | — |
| Size | `size` | Global `xs`, `s`, `m`, `l`, `xl`; components may support a subset | `small`, `medium`, `large`, `regular`, untyped strings |

Established coherent uses of `variant` and `theme` are not migration targets by default. Use a more precise property when introducing a new independent decision or deliberately splitting an overloaded property.

### Links, media, and external resources

| Concept | Proposed target API | Type or values | Outliers to migrate |
| --- | --- | --- | --- |
| Navigation destination | `href` | `string` | — |
| Browsing context | `target` | Native target values | — |
| Nested navigation destination | `<role>Href` | `string` | — |
| Nested browsing context | `<role>HrefTarget` | Native target values | — |
| Rendered media source | `src` for a media component; `imageSrc` for a nested image | `string` | `imageUrl`, `illustrationUrl`, `thumbnail` |
| Alternative text | `alt` or `imageAlt` | `string` | `imgAlt` |
| Download filename or hint | `download` | Native download semantics | — |

### Collections and data

| Concept | Proposed target API | Type or values | Outliers to migrate |
| --- | --- | --- | --- |
| Generic rendered collection | `items` | Array or documented serialized form | — |
| Selectable values | `options` | Array or documented serialized form | `choices` |
| Search completions | `suggestions` | Array | — |
| Table rows | `rows` | Array or documented serialized form | — |
| Table columns | `cols` | Array or documented serialized form | — |
| Current field or selection data | `value` | Component-specific | `filterValue` where unambiguous |
| Stable identifier | `id` | `string` | `filterKey` |
| Form or group name | `name` | `string` | `filterName` where native name semantics apply |

### Counts, limits, and dimensions

| Concept | Proposed target API | Outliers to migrate |
| --- | --- | --- |
| Maximum number of items | `maxItems` | `maxItemCount` |
| Maximum visible items | `maxVisibleItems` | — |
| Maximum suggestions | `maxSuggestions` | — |
| Maximum files | `maxFiles` | — |
| Items per page | `itemsPerPage` | — |
| Row height | `rowHeight` | — |
| Column width | `columnWidth` | — |
| Maximum file size in megabytes | `maxFileSizeMb` | — |
