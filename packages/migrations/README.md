# @infineon/design-system-migrations

Shared migration engine for Infineon Design System codemods. Provides the `dds-migrate` CLI and the underlying parser logic used to automate component property renames across React, Vue, and HTML projects.

## Usage

Run without installing via `npx`:

```bash
npx @infineon/design-system-migrations [--from <version>] [--to <version>] [--framework react|vue|html|angular] [--dry-run] [--config <path>]
```

If the package is installed locally, the shorter `npx dds-migrate` form also works.

Provide `--from` and/or `--to` explicitly when auto-detection is incomplete. In practice, at least one of these flags is usually needed.

## Supported patterns

The migrator focuses on direct, statically identifiable prop usage.

## Support matrix

| Capability | Status | Notes |
|---|---|---|
| React direct JSX props | ✅ supported | Example: `<IfxTextField success />` migrates. |
| React JSX spreads | not automatically migrated | Example: `<IfxTextField {...props} />` is not rewritten. |
| Vue direct template props | ✅ supported | Static attributes and statically named bindings migrate. |
| Vue JSX spreads | not automatically migrated | Example: `<IfxTextField {...props} />` is not rewritten. |
| Vue argumentless v-bind | not automatically migrated | Example: `<ifx-text-field v-bind="props" />` is left as-is. |
| Vue v-for/v-slot direct props | ✅ supported | Direct target props inside nested template traversal still migrate. |
| HTML direct attributes | ✅ supported | Example: `<ifx-text-field success="true">` migrates. |
| Generic JS property access | not automatically migrated | Arbitrary object/property data-flow is not traced. |

## Angular

Angular projects are migrated via Angular schematics, not via dds-migrate.

Run:

```bash
ng update @infineon/infineon-design-system-angular
```

Angular diagnostics:

| Code | Meaning |
|---|---|
| DDS010 | Unsupported Angular binding syntax was detected; that binding is not automatically migrated. |
| DDS011 | Dynamic inline template content was detected; that template content is not automatically migrated. |

## Known limitations

| Limitation | Effect |
|---|---|
| Cross-file imported prop objects/helpers | Not traced or rewritten. |
| Generic JavaScript object/property access | Not analyzed for migration. |
| JSX and spread/object-provider forms | Not automatically migrated in React and Vue. |
| Vue argumentless v-bind providers | Not automatically migrated. |
| HTML inside runtime strings (`innerHTML`, template literals) | Not parsed for attribute renames. |


