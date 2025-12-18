/**
 * MANUAL ADDITIONS - Custom Examples
 * This file is NOT auto-generated - add your custom examples here
 */

import { IfxButton } from "@infineon/infineon-design-system-react";

export function CustomExamples() {
	const handleCustomClick = () => {
		alert("Custom example clicked!");
	};

	return (
		<section className="component-section">
			<h2>
				Custom Examples <span className="badge">Manual</span>
			</h2>
			<div className="component-demo">
				<p>Add your custom component examples here.</p>

				<IfxButton variant="primary" onClick={handleCustomClick}>
					Custom Example Button
				</IfxButton>
			</div>
		</section>
	);
}
