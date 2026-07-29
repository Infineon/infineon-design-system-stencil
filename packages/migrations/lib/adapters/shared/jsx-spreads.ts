import ts from "typescript";

/**
 * Classification of a JSX spread attribute expression for migration safety.
 */
export type JsxSpreadInspection =
	| {
			kind: "object";
			hasSourceProp: boolean;
			hasTargetProp: boolean;
			sourceProperty?: ts.ObjectLiteralElementLike;
	  }
	| {
			kind: "identifier";
			identifier: ts.Identifier;
	  }
	| {
			kind: "unknown";
			node: ts.Expression;
	  };

/**
 * Inspects a JSX spread expression and classifies whether it can be safely
 * analysed for a property rename.
 *
 * Inline object literals are inspectable when they only contain:
 * - Non-computed property assignments.
 * - Shorthand property assignments.
 * - String-literal and identifier keys.
 *
 * Any spread assignment, computed key, method, accessor, or non-object
 * expression is treated as an unknown shape.
 */
export const inspectJsxSpread = (
	expression: ts.Expression,
	currentPropName: string,
	nextPropName: string,
): JsxSpreadInspection => {
	if (ts.isObjectLiteralExpression(expression)) {
		let hasSourceProp = false;
		let hasTargetProp = false;
		let sourceProperty: ts.ObjectLiteralElementLike | undefined;

		for (const property of expression.properties) {
			if (ts.isSpreadAssignment(property)) {
				return { kind: "unknown", node: expression };
			}

			if (ts.isShorthandPropertyAssignment(property)) {
				const name = property.name.text;
				if (name === currentPropName) {
					hasSourceProp = true;
					sourceProperty = property;
				}

				if (name === nextPropName) {
					hasTargetProp = true;
				}

				continue;
			}

			if (ts.isPropertyAssignment(property)) {
				const nameNode = property.name;
				if (ts.isIdentifier(nameNode) || ts.isStringLiteral(nameNode)) {
					const name = nameNode.text;
					if (name === currentPropName) {
						hasSourceProp = true;
						sourceProperty = property;
					}

					if (name === nextPropName) {
						hasTargetProp = true;
					}

					continue;
				}

				return { kind: "unknown", node: expression };
			}

			// Methods, accessors, computed names, etc.
			return { kind: "unknown", node: expression };
		}

		return { kind: "object", hasSourceProp, hasTargetProp, sourceProperty };
	}

	if (ts.isIdentifier(expression)) {
		return { kind: "identifier", identifier: expression };
	}

	return { kind: "unknown", node: expression };
};
