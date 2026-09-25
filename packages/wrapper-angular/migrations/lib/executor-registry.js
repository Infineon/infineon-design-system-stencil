const { DiagnosticCode } = require("./diagnostic-codes.js");

function createExecutorRegistry(executors) {
	const byType = new Map();
	const seen = new Set();

	for (const executor of executors) {
		if (seen.has(executor.type)) {
			throw new Error(`Duplicate migration step executor registration for type "${executor.type}".`);
		}
		seen.add(executor.type);
		byType.set(executor.type, executor);
	}

	return {
		preflight(operations) {
			for (const operation of operations) {
				if (!byType.has(operation.type)) {
					throw new Error(`No executor is registered for migration step type "${operation.type}".`);
				}
			}
		},
		analyse(step, context) {
			const executor = byType.get(step.type);
			if (!executor) {
				return {
					fileAnalyses: [],
					processedFilePaths: [],
					diagnostics: [
						{
							code: DiagnosticCode.INVALID_MANIFEST,
							severity: "error",
							message: `No executor is registered for migration step type "${step.type}".`,
							operationId: step.operation?.id ?? step.id,
						},
					],
				};
			}

			return executor.analyse(step, context);
		},
	};
}

module.exports = {
	createExecutorRegistry,
};
