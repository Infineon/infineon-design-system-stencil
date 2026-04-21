import { IfxTextField } from "@infineon/infineon-design-system-react";

import { fieldDefinitions } from "../data/fieldConfig";

const directorySearchProps = {
	label: "spread object",
	success: true,
};

export function ObjectSpread() {
	return (
		<>
			{fieldDefinitions.map((field) => (
				<IfxTextField key={field.label} {...field} />
			))}
			<IfxTextField {...directorySearchProps} />
		</>
	);
}
