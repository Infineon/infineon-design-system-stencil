import { IfxTextField } from "@infineon/infineon-design-system-react";

const hasValue = true;

export function App() {
	return (
		<>
			<IfxTextField showDeleteIcon />
			<IfxTextField showDeleteIcon={hasValue} />
		</>
	);
}