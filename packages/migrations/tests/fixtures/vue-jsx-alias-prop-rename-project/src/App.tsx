import { IfxAccordion as Accordion } from "@infineon/infineon-design-system-vue";

const isOpen = true;
const handleSelectionChange = (event: Event) => console.log(event.type);

export function App() {
	return (
		<>
			<Accordion autoCollapse onIfxChange={handleSelectionChange}>
				content
			</Accordion>
			<Accordion autoCollapse={isOpen} onIfxChange={(event) => console.log(event.type)} />
		</>
	);
}