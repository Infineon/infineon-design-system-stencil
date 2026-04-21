import { IfxTextField } from "@infineon/infineon-design-system-react";
import { getImportedFieldProps } from "../helpers/fieldHelpers";

// Imported helper spread — success key in getImportedFieldProps must NOT be renamed
export function ImportedHelperSpread({ values }: { values: { subject: string } }) {
	return <IfxTextField {...getImportedFieldProps(values)} />;
}
