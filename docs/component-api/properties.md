# Component API Guidelines: Properties

These guidelines describe how to design public component properties. Accessibility properties, events, methods, and slots are outside the current scope.

For exact proposed names, value vocabularies, and known migration outliers, see the [Property Name Catalog](./naming-catalog.md).

## Decision order

When introducing or revising a property:

1. Preserve an established shared or component-family pattern when it is reasonably clear.
2. Prefer platform terminology when its semantics match the component.
3. Name the consumer-facing concept or capability, not its current implementation.
4. Represent independent decisions with independent properties.
5. Introduce migration only when the improvement justifies the compatibility cost.

## 1. Name the concept being controlled

A public name should communicate what consumers control.

- Use the semantic concept rather than an implementation detail.
- Avoid redundant suffixes such as `Text`, `Value`, or `Flag`.
- Add a target or role prefix only when the unprefixed name would be ambiguous.
- Prefer established platform terms where they describe the same concept.

For example, prefer `label` over `labelText`. Use a prefix in names such as `logoHref` or `imageSrc` when the component exposes several links or media sources.

### Capability versus visual presence

Use an adjective for a capability or behavior. Use `showX` only when the property controls the visual presence of an element without enabling or disabling its associated functionality.

```ts
@Prop() readonly searchable = false; // Enables search behavior
@Prop() readonly showLabel = true;   // Only controls label visibility
```

The same distinction applies to names such as `closable`, `clearable`, and `collapsible`. A property named `showCloseButton` is appropriate only when it controls that button while other closing mechanisms remain available.

### Meaningful boolean state

Choose the state name that best describes the component's public mode. Do not mechanically prefer one grammatical polarity.

| Meaning | Preferred state |
|---|---|
| The component itself is shown or hidden | `open` |
| Subordinate content is revealed or hidden | `expanded` |
| The component enters a compact or minimized mode | `collapsed` |

For example, `collapsed = false` is appropriate for a Sidebar whose normal state is the full layout and whose exceptional state is a compact rail.

Prefer positive behavior phrases for conditions, such as `closeOnOutsideClick`, rather than inverted names such as `noCloseOnOutsideClick`.

## 2. Represent one decision per property

A property should represent one independent consumer decision.

Generic names such as `variant`, `theme`, or `type` become problematic when their values combine unrelated concerns such as semantic intent, appearance, behavior, or component mode.

```ts
// Combines component mode and semantic intent
variant: "default" | "alert-brand" | "alert-danger";

// Independent decisions
kind: "default" | "alert";
tone: "brand" | "danger";
```

Split a property when consumers need to control those decisions independently or when the combined value set is becoming difficult to extend.

Do not split a coherent established family property only to obtain theoretically purer terminology. A shared `variant: "primary" | "secondary" | "tertiary"` remains reasonable when related action components already use it consistently for the same hierarchy.

## 3. Define requiredness and defaults explicitly

For every property, decide whether it is:

1. Required.
2. Optional with a meaningful default.
3. Optional because absence has a distinct meaning.

```ts
// Required
@Prop() readonly value!: string;

// Optional with an explicit default
@Prop() readonly size: IfxSize = "m";

// Optional because absence has meaning
@Prop() readonly label?: string;
```

Declare defaults on the property rather than hiding them in rendering or helper logic. This keeps the contract visible in the implementation and generated documentation.

Do not make a property optional merely because the implementation can recover from `undefined`.

### Validate the runtime configuration

Type declarations do not protect consumers using plain HTML, JavaScript, or dynamically assigned values. Components must therefore validate required properties and documented property constraints at runtime.

Normally, check the complete public configuration in `componentWillRender()` so validation covers both the initial render and later property changes.

```ts
componentWillRender(): void {
  if (this.value == null) {
    console.error(
      "[ifx-component] The required `value` property is missing.",
    );
  }

  if (this.error && this.success) {
    console.error(
      "[ifx-component] `error` and `success` cannot both be true. " +
        "`error` takes precedence.",
    );
  }
}
```

Runtime validation must remain active in published builds and use a documented safe fallback when recovery is possible. Keep checks synchronous and avoid mutating properties or state during validation.
## 4. Use explicit and shared types

Properties with a fixed set of supported values should use a union or named type rather than an unrestricted `string`.

Shared concepts should use a shared vocabulary when the values have the same meaning. A component may expose an explicit subset.

```ts
export type IfxSize = "xs" | "s" | "m" | "l" | "xl";

export type IfxButtonSize =
  Extract<IfxSize, "xs" | "s" | "m" | "l">;

@Prop() readonly size: IfxButtonSize = "m";
```

All public `size` properties use the abbreviated DDS vocabulary. Do not introduce parallel values such as `small`, `medium`, `large`, or `regular`.

Do not share a type only because its strings happen to match. 

## 5. Distinguish configuration from public state

### Configuration properties

Configuration is supplied by the consumer and is not rewritten by the component. Examples include `size`, `disabled`, `placement`, and `orientation`.

### Public live state

Live state is observable through the public property and may change through user interaction.

```ts
@Prop({ mutable: true }) open = false;
```

For public live state:

- The property represents the current value.
- The supplied value also establishes the initial value.
- Do not add parallel `default*` or `initial*` properties.
- Do not keep a competing internal source of truth.
- Emit the corresponding public event when user interaction changes the state.

The same model applies to states such as `checked`, `selected`, `expanded`, and `collapsed` when the component owns user-driven updates.

Private implementation state is not part of the public property contract and should not be documented as public API.

## 6. Evolve APIs deliberately

A rename, value change, or type change is a public API migration.

Use this sequence:

1. Add the replacement.
2. Deprecate the old property.
3. Define precedence while both are supported.
4. Document behavior differences.
5. Provide automated migration where practical.
6. Remove the deprecated API in a planned major release.

```ts
/** @deprecated Use `open` instead. */
@Prop() readonly opened?: boolean;

@Prop({ mutable: true }) open = false;
```

New APIs should follow the current guidelines immediately. Existing APIs may remain compatible until their migration is deliberately scheduled.

## Review checklist

Before adding or changing a public property, check:

- Is there an established shared or component-family pattern?
- Does the name describe the consumer-facing concept?
- Is it a state, capability, behavior, or purely visual presence?
- Does it represent one independent decision?
- Is it required, defaulted, or meaningfully absent?
- Is the default explicit?
- Are missing required properties and invalid combinations detected at runtime?
- Does runtime validation avoid mutating properties or state?
- Are all supported values explicitly typed?
- Does a shared vocabulary apply without changing the meaning?
- Is it configuration or mutable public state?
- Would the implementation create a second source of truth?
- Does the improvement justify the migration cost?
