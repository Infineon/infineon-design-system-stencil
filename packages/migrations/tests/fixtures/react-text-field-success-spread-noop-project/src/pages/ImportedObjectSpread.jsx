import { IfxTextField } from "@infineon/infineon-design-system-react";
import { sharedFieldProps } from "../data/sharedFieldProps";

// Imported object spread — success key in sharedFieldProps must NOT be renamed
export function ImportedObjectSpread() {
	return <IfxTextField {...sharedFieldProps} />;
}
