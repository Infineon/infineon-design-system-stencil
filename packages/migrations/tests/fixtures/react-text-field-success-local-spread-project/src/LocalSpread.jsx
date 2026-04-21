import { IfxTextField } from "@infineon/infineon-design-system-react";

const directorySearchProps = {
	label: "spread object",
	success: true,
};

export function LocalSpread() {
	return <IfxTextField {...directorySearchProps} />;
}
