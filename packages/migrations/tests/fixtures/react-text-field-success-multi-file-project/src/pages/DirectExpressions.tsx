import { IfxTextField } from "@infineon/infineon-design-system-react";

const isValid = true;

interface SupportPageProps {
	values: { email: string };
	isSubmitting: boolean;
}

export function DirectExpressions({ values, isSubmitting }: SupportPageProps) {
	return (
		<>
			<IfxTextField label="named variable" success={isValid} />
			<IfxTextField label="submit state" success={isSubmitting} />
			<IfxTextField label="inline expression" success={values.email.includes("@")} />
		</>
	);
}
