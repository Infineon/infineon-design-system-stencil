# U5 Implementation Plan — Plain HTML Property Rename

## Objective

Complete and harden the plain HTML/Web Components property-rename path.

Given:

```html
<ifx-text-field show-delete-icon="true"></ifx-text-field>
```

and:

```json
{
  "id": "v40-text-field-show-delete-icon-to-clearable",
  "type": "rename-prop",
  "component": "ifx-text-field",
  "from": "show-delete-icon",
  "to": "clearable"
}
```

produce:

```html
<ifx-text-field clearable="true"></ifx-text-field>
```

The implementation must:

* operate only on `.html` and `.htm` markup;
* match the exact target custom-element tag;
* edit only the attribute-name range;
* preserve values, quotes, whitespace, comments, line endings, and surrounding markup;
* traverse every relevant descendant, including `<template>` content;
* detect old/new attribute conflicts;
* generate no partial writes when any blocking conflict exists;
* leave scripts, strings, JavaScript APIs, native elements, and unrelated custom elements unchanged;
* be idempotent.

---

# 1. Reopen U5 status during implementation

Update:

```text
specs/codemod-migrations/TASKS.MD
```

Temporarily change U5 from:

```text
Status: COMPLETE
```

to:

```text
Status: IN PROGRESS
```

Document the remaining work:

```text
- Fix traversal through target ancestors that do not carry the source attribute.
- Traverse parse5 template-content fragments.
- Replace handwritten parse5 node shapes with official adapter types.
- Add dedicated U5 unit and integration coverage.
- Add packed apply and second-run verification.
- Remove the obsolete legacy HTML runner.
```

Mark U5 complete only after all focused, package, and packed tests pass.

---

# 2. Split the HTML adapter into parsing and orchestration modules

Replace:

```text
packages/migrations/lib/adapters/html-adapter.ts
```

with:

```text
packages/migrations/lib/adapters/html/
├── index.ts
└── template.ts
```

Responsibilities:

```text
index.ts
- Implements RenamePropAdapter.
- Collects .html and .htm files.
- Delegates one file to the pure template analyser.
- Converts the result into FileAnalysis.

template.ts
- Parses HTML.
- Traverses the complete parse5 tree.
- Matches target elements.
- Detects conflicts.
- Produces exact TextEdit and diagnostic objects.
- Performs no filesystem access.
```

Update the default executor registration in:

```text
packages/migrations/lib/core/plan.ts
```

from:

```ts
import { HtmlRenamePropAdapter } from "../adapters/html-adapter.js";
```

to:

```ts
import { HtmlRenamePropAdapter } from "../adapters/html/index.js";
```

Do not change the `RenamePropExecutor` contract.

---

# 3. Use parse5’s official node and adapter APIs

In `template.ts`, import parse5 using its exported types and default tree adapter:

```ts
import {
  defaultTreeAdapter,
  parseFragment,
  type DefaultTreeAdapterTypes,
} from "parse5";
```

Use aliases such as:

```ts
type HtmlNode = DefaultTreeAdapterTypes.Node;
type HtmlElement = DefaultTreeAdapterTypes.Element;
type HtmlParentNode = DefaultTreeAdapterTypes.ParentNode;
type HtmlTemplate = DefaultTreeAdapterTypes.Template;
```

Remove the local handwritten declarations:

```ts
interface HtmlNode
interface HtmlElementLocation
interface HtmlAttributeNode
interface OffsetRange
```

Use:

```ts
defaultTreeAdapter.isElementNode(node)
defaultTreeAdapter.getTagName(element)
defaultTreeAdapter.getAttrList(element)
defaultTreeAdapter.getChildNodes(parent)
defaultTreeAdapter.getTemplateContent(template)
defaultTreeAdapter.getNodeSourceCodeLocation(node)
```

This keeps the implementation aligned with parse5’s actual tree model, especially for `<template>` elements.

---

# 4. Introduce a pure HTML analysis result

Define:

```ts
interface HtmlTemplateAnalysis {
  edits: TextEdit[];
  diagnostics: MigrationDiagnostic[];
}
```

Export:

```ts
export const analyseHtmlTemplate = (
  content: string,
  filePath: string,
  step: RenamePropStepDefinition,
): HtmlTemplateAnalysis => {
  // ...
};
```

`HtmlRenamePropAdapter.analyseFile()` should become a thin wrapper:

```ts
const { edits, diagnostics } = analyseHtmlTemplate(
  content,
  filePath,
  step,
);

if (edits.length === 0 && diagnostics.length === 0) {
  return null;
}

return {
  kind: "modify",
  filePath,
  baseRevision,
  content,
  edits,
  changes: [
    `${operation.component} prop ${operation.from} -> ${operation.to}`,
  ],
  diagnostics,
};
```

---

# 5. Fix traversal so current-node decisions never skip descendants

The current implementation contains:

```ts
if (!sourceAttributeLocation) {
  return;
}
```

inside the visitor. This exits the complete node visit before child traversal.

Replace this with two separate operations:

```ts
const analyseElement = (
  element: HtmlElement,
): void => {
  // Analyse only this element.
};

const visitNode = (
  node: HtmlNode,
): void => {
  if (defaultTreeAdapter.isElementNode(node)) {
    analyseElement(node);
  }

  visitDescendants(node);
};
```

No normal current-element outcome may return from `visitNode()` before descendant traversal.

These cases must still traverse children:

```text
Target element without source attribute.
Target element with source attribute.
Target element with source/target conflict.
Non-target element.
Element without source location.
```

A conflict affects the current element and eventually blocks project writes, but it must not prevent collecting diagnostics from nested elements.

---

# 6. Traverse normal children and template content

Add:

```ts
const visitChildren = (
  node: HtmlNode,
): void => {
  if ("childNodes" in node) {
    for (const child of defaultTreeAdapter.getChildNodes(
      node as HtmlParentNode,
    )) {
      visitNode(child);
    }
  }

  if (
    defaultTreeAdapter.isElementNode(node) &&
    defaultTreeAdapter.getTagName(node) === "template"
  ) {
    const contentFragment =
      defaultTreeAdapter.getTemplateContent(
        node as HtmlTemplate,
      );

    for (
      const child of defaultTreeAdapter.getChildNodes(
        contentFragment,
      )
    ) {
      visitNode(child);
    }
  }
};
```

Avoid visiting template content twice. Confirm through adapter-level tests whether the default tree exposes template descendants only through `content`; branch accordingly.

Required supported examples:

```html
<div>
  <section>
    <ifx-text-field show-delete-icon></ifx-text-field>
  </section>
</div>
```

```html
<ifx-text-field>
  <ifx-text-field show-delete-icon></ifx-text-field>
</ifx-text-field>
```

```html
<template>
  <ifx-text-field show-delete-icon></ifx-text-field>
</template>
```

```html
<template>
  <template>
    <ifx-text-field show-delete-icon></ifx-text-field>
  </template>
</template>
```

---

# 7. Resolve target attributes through source locations

For each element:

```ts
const tagName = defaultTreeAdapter.getTagName(element);

if (tagName !== operation.component) {
  return;
}
```

Obtain the element location:

```ts
const location =
  defaultTreeAdapter.getNodeSourceCodeLocation(element);
```

If no location exists, do not guess a replacement.

Use the location’s attribute map:

```ts
const sourceLocation =
  location?.attrs?.[operation.from];

const targetLocation =
  location?.attrs?.[operation.to];
```

Only the exact normalized attribute names are eligible.

Do not match:

```html
<div show-delete-icon></div>
<ifx-button show-delete-icon></ifx-button>
<other-ifx-text-field show-delete-icon></other-ifx-text-field>
<ifx-text-field data-show-delete-icon></ifx-text-field>
<ifx-text-field aria-show-delete-icon></ifx-text-field>
```

---

# 8. Derive the raw attribute-name range safely

Do not assume that the raw source spelling always has exactly:

```ts
operation.from.length
```

Add:

```ts
const getAttributeNameRange = (
  content: string,
  location: {
    startOffset: number;
    endOffset: number;
  },
  expectedNormalizedName: string,
): { start: number; end: number } | null => {
  const attributeSource = content.slice(
    location.startOffset,
    location.endOffset,
  );

  const match = /^[^\s=/>]+/.exec(attributeSource);
  if (!match) {
    return null;
  }

  const rawName = match[0];

  if (
    rawName.toLowerCase() !==
    expectedNormalizedName.toLowerCase()
  ) {
    return null;
  }

  return {
    start: location.startOffset,
    end: location.startOffset + rawName.length,
  };
};
```

This supports source spellings such as:

```html
<IFX-TEXT-FIELD SHOW-DELETE-ICON>
```

while replacing the complete original name with the canonical target:

```html
<IFX-TEXT-FIELD clearable>
```

Do not alter the tag-name spelling.

---

# 9. Handle unreliable source locations conservatively

If parse5 reports the source attribute in the AST but no trustworthy name range can be derived, emit a blocking parser diagnostic rather than guessing.

Use:

```ts
{
  code: DiagnosticCode.PARSE_FAILED,
  severity: "error",
  message:
    `Cannot safely locate attribute "${operation.from}" on <${operation.component}>.`,
  operationId: operation.id,
  filePath,
  start: sourceLocation?.startOffset,
  end: sourceLocation?.endOffset,
  suggestion:
    "Fix the malformed HTML start tag before running the migration.",
}
```

Wrap `parseFragment()` in `try/catch` and produce the same diagnostic family if parsing unexpectedly throws.

Do not turn every recoverable HTML parse warning into a blocking error. Parse5 is intentionally error-tolerant. Block only when the adapter cannot establish a reliable edit range for an otherwise matched target occurrence.

---

# 10. Detect source/target conflicts before adding the edit

When one target element contains both attributes:

```html
<ifx-text-field
  show-delete-icon
  clearable
></ifx-text-field>
```

emit:

```ts
{
  code: DiagnosticCode.TARGET_PROP_ALREADY_EXISTS,
  severity: "error",
  message:
    `Cannot rename "${operation.from}" to "${operation.to}" because "${operation.to}" already exists on <${operation.component}>.`,
  operationId: operation.id,
  filePath,
  start: sourceNameRange.start,
  end: sourceNameRange.end,
  suggestion:
    "Remove or rename the conflicting attribute before running the migration.",
}
```

Rules:

```text
Do not add an edit for the conflicting element.
Continue traversing descendants.
Continue scanning the rest of the file.
Collect deterministic diagnostics for other conflicts.
Allow the shared plan layer to block all project writes.
```

Add no HTML-specific filesystem rollback. The shared virtual workspace and `applyMigrationPlan()` already own transactionality.

---

# 11. Generate exact attribute-name edits

For a non-conflicting source attribute:

```ts
edits.push({
  start: sourceNameRange.start,
  end: sourceNameRange.end,
  replacement: operation.to,
  operationId: operation.id,
});
```

Never replace:

```text
The complete attribute.
The attribute value.
Quotes.
Whitespace.
The complete start tag.
The complete document.
```

These must preserve formatting:

```html
<ifx-text-field show-delete-icon></ifx-text-field>
<ifx-text-field show-delete-icon=""></ifx-text-field>
<ifx-text-field show-delete-icon="true"></ifx-text-field>
<ifx-text-field show-delete-icon='true'></ifx-text-field>
<ifx-text-field show-delete-icon=true></ifx-text-field>
```

Expected results differ only in the attribute name.

---

# 12. Keep scripts and programmatic APIs out of U5

The file collector must remain:

```ts
const HTML_EXTENSIONS = [".html", ".htm"];
```

Do not collect:

```text
.js
.jsx
.ts
.tsx
.mjs
.cjs
```

Inside HTML, parse only element attributes. Do not analyse text content in:

```html
<script>
<style>
<textarea>
```

Do not modify:

```js
element.showDeleteIcon
element["showDeleteIcon"]
element.setAttribute("show-delete-icon", "true")
element.toggleAttribute("show-delete-icon")
element.hasAttribute("show-delete-icon")
element.getAttribute("show-delete-icon")
```

Do not modify markup inside strings:

```js
const html =
  `<ifx-text-field show-delete-icon></ifx-text-field>`;
```

The current parser-boundary and inline-script fixtures should be retained and moved into the dedicated U5 suite where appropriate.

---

# 13. Add a dedicated adapter unit-test suite

Create:

```text
packages/migrations/tests/html-adapter.test.ts
```

Test `analyseHtmlTemplate()` directly.

## 13.1 Basic forms

Cover:

```html
<ifx-text-field show-delete-icon>
<ifx-text-field show-delete-icon="">
<ifx-text-field show-delete-icon="true">
<ifx-text-field show-delete-icon='true'>
<ifx-text-field show-delete-icon=true>
<ifx-text-field show-delete-icon />
```

Assert:

```text
Exactly one edit per occurrence.
Edit range covers only the source attribute name.
Replacement is "clearable".
Applying edits preserves all remaining bytes.
```

## 13.2 Multiple occurrences

```html
<ifx-text-field show-delete-icon></ifx-text-field>
<ifx-text-field show-delete-icon="false"></ifx-text-field>
```

Assert two non-overlapping edits in source order.

## 13.3 Deep normal nesting

```html
<main>
  <div>
    <section>
      <ifx-text-field show-delete-icon></ifx-text-field>
    </section>
  </div>
</main>
```

Assert the deepest occurrence migrates.

## 13.4 Target ancestor without source attribute

This is the regression test for the current early return:

```html
<ifx-text-field>
  <ifx-text-field show-delete-icon></ifx-text-field>
</ifx-text-field>
```

Assert the inner occurrence migrates.

## 13.5 Target ancestor with another attribute

```html
<ifx-text-field disabled>
  <ifx-text-field show-delete-icon></ifx-text-field>
</ifx-text-field>
```

Assert the inner occurrence migrates.

## 13.6 Template content

```html
<template>
  <ifx-text-field show-delete-icon></ifx-text-field>
</template>
```

Assert the template-contained element migrates.

Add nested-template coverage.

## 13.7 Exact non-targets

Assert byte-identical output for:

```html
<div show-delete-icon></div>
<ifx-button show-delete-icon></ifx-button>
<other-text-field show-delete-icon></other-text-field>
<ifx-text-field data-show-delete-icon></ifx-text-field>
```

## 13.8 Text and comments

Assert no edit for:

```html
<!-- <ifx-text-field show-delete-icon> -->
<p>show-delete-icon</p>
```

## 13.9 Raw-text elements

Assert script/style/textarea contents stay byte-identical even when they contain apparent target markup.

## 13.10 Conflict

Assert one `DDS001` and no edit for:

```html
<ifx-text-field
  show-delete-icon
  clearable
></ifx-text-field>
```

Assert the diagnostic range covers only `show-delete-icon`.

## 13.11 Conflict does not stop traversal

```html
<ifx-text-field show-delete-icon clearable>
  <ifx-text-field show-delete-icon></ifx-text-field>
</ifx-text-field>
```

Assert:

```text
One DDS001 exists.
The nested occurrence is still discovered.
The project plan ultimately contains no applicable writes because an error exists.
```

## 13.12 Idempotency

Analyse:

```html
<ifx-text-field clearable></ifx-text-field>
```

Assert no edits and no diagnostics.

---

# 14. Add a dedicated U5 integration suite

Create:

```text
packages/migrations/tests/html-u5.integration.test.ts
```

Exercise `analyseMigration()` with temporary projects rather than calling the adapter directly.

## 14.1 `.html` collection

Create:

```text
index.html
```

Assert it is processed and migrated.

## 14.2 `.htm` collection

Create:

```text
legacy.htm
```

Assert it is processed and migrated.

## 14.3 Other extensions excluded

Create:

```text
main.js
component.ts
template.txt
```

containing matching strings.

Assert:

```text
They are not processed by the HTML adapter.
They remain byte-identical.
```

## 14.4 Multiple files

Create two safe HTML files and assert both appear in the plan.

## 14.5 Project-wide transactional conflict

Create:

```text
safe.html
conflict.html
```

`safe.html`:

```html
<ifx-text-field show-delete-icon></ifx-text-field>
```

`conflict.html`:

```html
<ifx-text-field
  show-delete-icon
  clearable
></ifx-text-field>
```

Assert:

```text
DDS001 is present.
applyMigrationPlan(plan) rejects.
Neither file changes on disk.
```

## 14.6 Dry-run equivalence

Build one plan and verify:

```text
Dry-run plan contains the expected update.
Disk content remains unchanged.
Applying the same analysis result produces the expected content.
```

## 14.7 Multiple ordered operations

Use a manifest containing both current v40 renames:

```text
show-delete-icon → clearable
caption-text → caption
```

Input:

```html
<ifx-text-field show-delete-icon></ifx-text-field>
<ifx-radio-button-group
  caption-text="Help"
></ifx-radio-button-group>
```

Assert both migrate in one plan.

## 14.8 Second execution

Apply once, analyse again, and assert:

```text
No file changes.
No diagnostics.
Processed-file count remains deterministic.
```

---

# 15. Strengthen the packed HTML smoke test

Extend:

```text
packages/migrations/tests/smoke.test.ts
```

The existing test only runs the packed CLI in `--dry-run` mode.

Change it into three phases.

## Phase 1: dry-run

Run the packed binary with:

```bash
--dry-run
--from 39.0.0
--to 40.0.0
--cwd <consumer>
```

Assert:

```text
The rename is reported.
index.html remains unchanged.
```

## Phase 2: apply

Run without `--dry-run`.

Assert:

```html
<ifx-text-field clearable="true"></ifx-text-field>
```

exists on disk.

Assert the script URL and every unrelated byte remain unchanged.

## Phase 3: second run

Run the same command again.

Assert:

```text
Modified files: 0
No further disk changes.
```

Keep explicit `--to 40.0.0` until release-version handling is addressed in P1/P2.

---

# 16. Remove obsolete HTML runner code

After the new tests pass, verify that nothing imports:

```text
packages/migrations/lib/runners/html/index.ts
```

Delete it if unused.

Do not remove:

```text
packages/migrations/lib/runners/shared/index.ts
```

within U5 because `RenamePropExecutor` still imports the binary-safe file reader from there.

Do not remove unrelated legacy Vue/JSX runner files as part of the U5 commit unless their removal is already independently prepared and verified.

---

# 17. Update HTML documentation

Expand the HTML section in:

```text
packages/migrations/README.md
```

Document the supported boundary:

```text
Supported:
- Static attributes on exact DDS custom-element tags.
- Boolean, quoted, and unquoted HTML attributes.
- Nested target elements.
- Elements inside HTML <template> content.
- .html and .htm files.

Unsupported:
- JavaScript and TypeScript property access.
- setAttribute/getAttribute/toggleAttribute calls.
- Markup in strings and template literals.
- innerHTML.
- Framework template syntaxes outside the HTML adapter.
```

Document conflict behavior:

```text
When one target element contains both the old and new attribute,
DDS001 blocks all project writes.
```

Do not claim support for JavaScript Web Component receiver analysis. FR-055 marks that capability optional and it is not part of U5.

Update `TASKS.MD` with the final verified behavior and regression coverage.

---

# 18. Suggested implementation commits

## Commit 1 — Refactor HTML adapter boundaries

```text
refactor(migrations): split HTML adapter parsing and orchestration
```

Changes:

```text
Create adapters/html/index.ts.
Create adapters/html/template.ts.
Update core/plan.ts import.
Use parse5 official adapter types.
Keep behavior otherwise equivalent.
```

## Commit 2 — Fix complete HTML traversal

```text
fix(migrations): traverse nested and template HTML targets
```

Changes:

```text
Remove early-return traversal bug.
Traverse normal descendants.
Traverse template content fragments.
Add safe raw attribute-name range extraction.
Continue scanning after conflicts.
```

## Commit 3 — Add U5 regression and integration coverage

```text
test(migrations): complete plain HTML migration coverage
```

Changes:

```text
Add html-adapter.test.ts.
Add html-u5.integration.test.ts.
Cover deep nesting, template content, conflicts, exclusions, transactionality, and idempotency.
```

## Commit 4 — Verify packed execution and remove legacy HTML runner

```text
chore(migrations): finalize U5 HTML migration
```

Changes:

```text
Extend packed smoke test.
Remove unused legacy HTML runner.
Update README and TASKS.
Mark U5 complete.
```

---

# 19. Validation sequence

Run focused type checking:

```bash
pnpm --dir packages/migrations check
```

Run focused tests:

```bash
pnpm --dir packages/migrations test \
  html-adapter.test.ts \
  html-u5.integration.test.ts
```

Run all migration tests:

```bash
pnpm --dir packages/migrations test
```

Run the packed smoke test:

```bash
pnpm --dir packages/migrations test smoke.test.ts
```

Run repository tests:

```bash
pnpm -r test
```

Run the package build:

```bash
pnpm --dir packages/migrations build
```

Inspect the packed tarball:

```bash
pnpm --dir packages/migrations pack
```

Confirm it includes:

```text
dist/adapters/html/index.js
dist/adapters/html/template.js
dist/migrations/manifest.json
bin/dds-migrate.mjs
```

Confirm it does not include the deleted legacy HTML runner.

---

# 20. Final acceptance criteria

U5 is complete only when all statements below are true:

```text
The adapter collects only .html and .htm files.

Exact target custom-element attributes migrate.

Boolean, quoted, and unquoted attribute forms migrate.

Only the attribute-name source range changes.

Attribute values, whitespace, quotes, comments, and line endings remain unchanged.

Native elements remain unchanged.

Other DDS components remain unchanged.

Unrelated custom elements remain unchanged.

Inline script and style content remains unchanged.

External JavaScript and TypeScript files remain unchanged.

Markup strings and template literals remain unchanged.

Deeply nested target elements migrate.

A target ancestor without the source attribute does not hide nested targets.

Target elements inside <template> fragments migrate.

Existing target attributes produce DDS001.

One conflict blocks every project write.

Conflict discovery does not stop descendant traversal.

Diagnostics contain file path and exact source offsets.

Applying the migration twice is a no-op.

Dry-run and apply produce the same planned change set.

The installed packed CLI migrates a clean HTML consumer successfully.

The obsolete HTML runner is not shipped.

All migration and repository tests pass.
```