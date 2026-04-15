import { IfxAccordion } from "@infineon/infineon-design-system-vue";

const isOpen = true;
const handleSelectionChange = (event: Event) => console.log(event.type);

export function App() {
	return (
		<>
			<IfxAccordion autoCollapse onIfxChange={handleSelectionChange}>
				content
			</IfxAccordion>
			<IfxAccordion autoCollapse={isOpen} onIfxChange={(event) => console.log(event.type)} />
		</>
	);
}