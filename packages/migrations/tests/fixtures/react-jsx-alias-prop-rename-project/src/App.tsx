import { IfxAccordion as Accordion } from "@infineon/infineon-design-system-react";

const isExpanded = true;

export function App() {
	return (
		<>
			<Accordion autoCollapse />
			<Accordion autoCollapse={isExpanded} />
		</>
	);
}