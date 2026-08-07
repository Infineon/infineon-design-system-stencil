import type { MigrationDiagnostic } from "./core/types.js";

const diagnosticCodeOrder = [
	"DDS001",
	"DDS005",
	"DDS007",
	"DDS008",
	"DDS010",
	"DDS011",
] as const;

export const getDiagnosticCodeOrder = (): readonly string[] => [
	...diagnosticCodeOrder,
];

export const createDiagnostic = (
	code: string,
	message: string,
	severity: MigrationDiagnostic["severity"] = "warning",
	options: Partial<Pick<MigrationDiagnostic, "operationId" | "filePath" | "start" | "end">> = {},
): MigrationDiagnostic => ({
	code,
	severity,
	message,
	...options,
});
