import { IfxTextField } from "@infineon/infineon-design-system-react";

function getEscalationOwnerFieldProps(values: { subject: string; referenceId: string }) {
	return {
		label: "helper return",
		success: values.subject.toLowerCase().includes("urgent") || values.referenceId.length > 4,
	};
}

interface SupportPageProps {
	values: { subject: string; referenceId: string };
}

export function HelperSpread({ values }: SupportPageProps) {
	return <IfxTextField {...getEscalationOwnerFieldProps(values)} />;
}
