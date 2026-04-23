import { IfxTextField } from "@infineon/infineon-design-system-react";

import { fieldDefinitions } from "../data/fieldConfig";

// Array items are spread by key — the migrator cannot statically determine the
// shape of each element, so nothing here should be renamed.
export function ObjectSpread() {
	return (
		<>
			{fieldDefinitions.map((field) => (
				<IfxTextField key={field.label} {...field} />
			))}
		</>
	);
}
