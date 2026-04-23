import { IfxAccordion } from "@infineon/infineon-design-system-react";

const isExpanded = true;
const handleSelectionChange = (event: Event) => console.log(event.type);

export function App() {
	return (
		<>
			<IfxAccordion autoCollapse onIfxChange={handleSelectionChange}>
				content
			</IfxAccordion>
			<IfxAccordion autoCollapse={isExpanded} onIfxChange={(event) => console.log(event.type)} />
		</>
	);
}