const ts = require("typescript");

const { DiagnosticCode } = require("./diagnostic-codes");
const { applyReplacements } = require("./replacements");
const { analyseTemplateContent } = require("./migrate-template");

/** @param {string} filePath @param {string} content */
function createSourceFile(filePath, content) {
	return ts.createSourceFile(filePath, content, ts.ScriptTarget.Latest, true, ts.ScriptKind.TS);
}

/**
 * Collect all local names and namespace bindings that refer to Angular's `Component`
 * class from `@angular/core`.
 *
 * @param {import('typescript').SourceFile} sourceFile
 * @returns {{ localNames: Set<string>, namespaces: Set<string> }}
 */
function collectAngularComponentBindings(sourceFile) {
	const localNames = new Set();
	const namespaces = new Set();

	for (const stmt of sourceFile.statements) {
		if (!ts.isImportDeclaration(stmt)) continue;

		const { moduleSpecifier, importClause } = stmt;
		if (!ts.isStringLiteral(moduleSpecifier)) continue;
		if (moduleSpecifier.text !== "@angular/core") continue;
		if (!importClause?.namedBindings) continue;

		const { namedBindings } = importClause;

		if (ts.isNamedImports(namedBindings)) {
			for (const specifier of namedBindings.elements) {
				// propertyName is the original export name when aliased; name is the local binding
				const exportName = specifier.propertyName?.text ?? specifier.name.text;
				if (exportName === "Component") {
					localNames.add(specifier.name.text);
				}
			}
		} else if (ts.isNamespaceImport(namedBindings)) {
			namespaces.add(namedBindings.name.text);
		}
	}

	return { localNames, namespaces };
}

/**
 * Return true when `expr` refers to Angular's Component class via a known import.
 *
 * @param {import('typescript').Expression} expr
 * @param {Set<string>} localNames
 * @param {Set<string>} namespaces
 */
function isAngularComponentExpression(expr, localNames, namespaces) {
	if (ts.isIdentifier(expr)) {
		return localNames.has(expr.text);
	}
	if (ts.isPropertyAccessExpression(expr)) {
		return (
			ts.isIdentifier(expr.expression) &&
			namespaces.has(expr.expression.text) &&
			expr.name.text === "Component"
		);
	}
	return false;
}

/**
 * Return true when `decorator` is a proven Angular `@Component` decorator.
 *
 * @param {import('typescript').Decorator} decorator
 * @param {Set<string>} localNames
 * @param {Set<string>} namespaces
 */
function isAngularComponentDecorator(decorator, localNames, namespaces) {
	const { expression } = decorator;
	if (ts.isCallExpression(expression)) {
		return isAngularComponentExpression(expression.expression, localNames, namespaces);
	}
	return isAngularComponentExpression(expression, localNames, namespaces);
}

function isHexDigit(char) {
	return (char >= "0" && char <= "9") || (char >= "a" && char <= "f") || (char >= "A" && char <= "F");
}

/**
 * Return the raw and decoded lengths for one escaped sequence in a JS string/template body.
 *
 * @param {string} raw
 * @param {number} start
 * @returns {{ rawLength: number, decodedLength: number }}
 */
function readEscapedSequence(raw, start) {
	const next = raw[start + 1];
	if (next === undefined) {
		return { rawLength: 1, decodedLength: 1 };
	}

	// Line continuation ("\\\n" or "\\\r\n") does not emit a decoded character.
	if (next === "\r") {
		return { rawLength: raw[start + 2] === "\n" ? 3 : 2, decodedLength: 0 };
	}
	if (next === "\n" || next === "\u2028" || next === "\u2029") {
		return { rawLength: 2, decodedLength: 0 };
	}

	if (next === "x" && isHexDigit(raw[start + 2]) && isHexDigit(raw[start + 3])) {
		return { rawLength: 4, decodedLength: 1 };
	}

	if (next === "u") {
		if (raw[start + 2] === "{") {
			let cursor = start + 3;
			let hex = "";
			while (cursor < raw.length && raw[cursor] !== "}") {
				hex += raw[cursor];
				cursor += 1;
			}

			if (cursor < raw.length && hex.length > 0 && [...hex].every(isHexDigit)) {
				const codePoint = Number.parseInt(hex, 16);
				return {
					rawLength: cursor - start + 1,
					decodedLength: codePoint > 0xffff ? 2 : 1,
				};
			}
		}

		if (
			isHexDigit(raw[start + 2]) &&
			isHexDigit(raw[start + 3]) &&
			isHexDigit(raw[start + 4]) &&
			isHexDigit(raw[start + 5])
		) {
			return { rawLength: 6, decodedLength: 1 };
		}
	}

	// Includes escaped quotes/backslashes and unknown escapes.
	return { rawLength: 2, decodedLength: 1 };
}

/**
 * Create a boundary mapper from decoded template offsets to raw template offsets.
 *
 * @param {string} rawTemplate
 * @param {string} decodedTemplate
 * @returns {(decodedOffset: number) => number}
 */
function createDecodedToRawOffsetMapper(rawTemplate, decodedTemplate) {
	const boundaries = [0];
	let rawOffset = 0;
	let decodedOffset = 0;

	while (rawOffset < rawTemplate.length && decodedOffset < decodedTemplate.length) {
		// TypeScript normalizes raw CRLF/CR in template text to a single decoded LF.
		if (rawTemplate[rawOffset] === "\r") {
			if (rawTemplate[rawOffset + 1] === "\n") {
				rawOffset += 2;
			} else {
				rawOffset += 1;
			}
			decodedOffset += 1;
			boundaries[decodedOffset] = rawOffset;
			continue;
		}

		if (rawTemplate[rawOffset] !== "\\") {
			rawOffset += 1;
			decodedOffset += 1;
			boundaries[decodedOffset] = rawOffset;
			continue;
		}

		const escaped = readEscapedSequence(rawTemplate, rawOffset);
		rawOffset += escaped.rawLength;

		if (escaped.decodedLength === 0) {
			boundaries[decodedOffset] = rawOffset;
			continue;
		}

		for (let index = 0; index < escaped.decodedLength; index += 1) {
			decodedOffset += 1;
			boundaries[decodedOffset] = rawOffset;
		}
	}

	while (decodedOffset < decodedTemplate.length) {
		decodedOffset += 1;
		boundaries[decodedOffset] = rawTemplate.length;
	}

	boundaries[decodedTemplate.length] = rawTemplate.length;

	return (decodedPosition) => {
		const clamped = Math.max(0, Math.min(decodedTemplate.length, decodedPosition));
		return boundaries[clamped] ?? rawTemplate.length;
	};
}

/**
 * @param {number | undefined} offset
 * @param {(decodedOffset: number) => number} mapOffset
 * @param {number} rawStart
 * @returns {number | undefined}
 */
function mapTemplateOffsetToTypeScript(offset, mapOffset, rawStart) {
	if (!Number.isInteger(offset)) {
		return undefined;
	}

	return rawStart + mapOffset(offset);
}

/**
 * Analyse TypeScript content for a single operation.
 *
 * @param {string} content
 * @param {string} filePath
 * @param {import('../update-v40/index').Operation} step
 * @returns {{ edits: Array<{ start: number, end: number, replacement: string, operationId: string, description: string, text: string }>, diagnostics: Array<object> }}
 */
function analyseTypeScriptContent(content, filePath, step) {
	const sourceFile = createSourceFile(filePath, content);
	const { localNames, namespaces } = collectAngularComponentBindings(sourceFile);
	if (localNames.size === 0 && namespaces.size === 0) {
		return { edits: [], diagnostics: [] };
	}

	const edits = [];
	const diagnostics = [];

	const visitNode = (node) => {
		if (
			(ts.isClassDeclaration(node) || ts.isClassExpression(node)) &&
			ts.canHaveDecorators(node)
		) {
			const decorators = ts.getDecorators(node) ?? [];
			const componentDecorator = decorators.find((dec) =>
				isAngularComponentDecorator(dec, localNames, namespaces),
			);

			if (componentDecorator) {
				const { expression } = componentDecorator;
				if (
					ts.isCallExpression(expression) &&
					expression.arguments.length > 0 &&
					ts.isObjectLiteralExpression(expression.arguments[0])
				) {
					const metadata = expression.arguments[0];
					for (const prop of metadata.properties) {
						if (!ts.isPropertyAssignment(prop)) continue;

						const nameText =
							(ts.isIdentifier(prop.name) || ts.isStringLiteral(prop.name))
								? prop.name.text
								: undefined;

						if (nameText !== "template") continue;

						const initializer = prop.initializer;
						if (ts.isTemplateExpression(initializer)) {
							diagnostics.push({
								code: DiagnosticCode.DYNAMIC_INLINE_TEMPLATE_UNSUPPORTED,
								severity: "warning",
								message: "Dynamic inline Angular templates cannot be migrated automatically.",
								operationId: step.id,
								filePath,
								start: initializer.getStart(sourceFile),
								end: initializer.getEnd(),
								suggestion: "Migrate this inline template manually.",
							});
							continue;
						}

						if (
							ts.isStringLiteral(initializer) ||
							ts.isNoSubstitutionTemplateLiteral(initializer)
						) {
							const rawStart = initializer.getStart(sourceFile) + 1;
							const rawEnd = initializer.getEnd() - 1;
							const rawTemplate = content.slice(rawStart, rawEnd);
							const decodedTemplate = initializer.text;
							const mapOffset = createDecodedToRawOffsetMapper(rawTemplate, decodedTemplate);

							const analysis = analyseTemplateContent(
								decodedTemplate,
								`${filePath}#inline-template`,
								step,
							);

							for (const edit of analysis.edits) {
								const start = mapTemplateOffsetToTypeScript(edit.start, mapOffset, rawStart);
								const end = mapTemplateOffsetToTypeScript(edit.end, mapOffset, rawStart);
								if (!Number.isInteger(start) || !Number.isInteger(end)) {
									continue;
								}

								const replacementText = edit.replacement ?? edit.text;
								edits.push({
									start,
									end,
									replacement: replacementText,
									text: replacementText,
									operationId: edit.operationId ?? step.id,
									description: edit.description ?? edit.label ?? "inline template migration",
								});
							}

							for (const diagnostic of analysis.diagnostics) {
								diagnostics.push({
									...diagnostic,
									filePath,
									start: mapTemplateOffsetToTypeScript(diagnostic.start, mapOffset, rawStart),
									end: mapTemplateOffsetToTypeScript(diagnostic.end, mapOffset, rawStart),
								});
							}
						}
					}
				}
			}
		}

		ts.forEachChild(node, visitNode);
	};

	visitNode(sourceFile);

	return { edits, diagnostics };
}

/**
 * Migrate only Angular templates embedded in a component decorator.
 * TypeScript class-body property and DOM API rewrites are intentionally out of scope.
 *
 * @param {string} content
 * @param {string} filePath
 * @param {import('../update-v40/index').Operation[]} operations
 * @returns {string | null}
 */
function migrateTypeScriptContent(content, filePath, operations) {
	let currentContent = content;

	for (const operation of operations) {
		const analysis = analyseTypeScriptContent(currentContent, filePath, operation);
		if (analysis.diagnostics.some((diagnostic) => diagnostic.severity === "error")) {
			return null;
		}

		if (analysis.edits.length === 0) {
			continue;
		}

		const replacements = analysis.edits.map((edit) => ({
			start: edit.start,
			end: edit.end,
			text: edit.replacement,
		}));

		const updatedContent = applyReplacements(currentContent, replacements);
		if (updatedContent !== currentContent) {
			currentContent = updatedContent;
		}
	}

	return currentContent === content ? null : currentContent;
}

module.exports = { analyseTypeScriptContent, migrateTypeScriptContent };

