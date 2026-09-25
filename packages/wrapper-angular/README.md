# @infineon/infineon-design-system-angular

Angular wrapper package for Infineon Design System Web Components.

## Migration support matrix

Use Angular schematics for migrations:

```bash
ng update @infineon/infineon-design-system-angular
```

| Capability | Status | Notes |
|---|---|---|
| External template direct attributes/bindings | ✅ supported | Direct, statically identifiable bindings are migrated. |
| Direct props inside traversed template structures | ✅ supported | Nested template traversal keeps direct migration behavior. |
| Generic JS property access | not automatically migrated | Arbitrary object/property data-flow is not traced. |
| Unsupported Angular binding syntax | warning DDS010 | Binding is retained as-authored and requires manual follow-up. |
| Dynamic inline template content | warning DDS011 | Dynamic template content is retained as-authored and requires manual follow-up. |

## Diagnostics

| Code | Meaning |
|---|---|
| DDS010 | Unsupported Angular binding syntax was detected; that binding is not automatically migrated. |
| DDS011 | Dynamic inline template content was detected; that template content is not automatically migrated. |
