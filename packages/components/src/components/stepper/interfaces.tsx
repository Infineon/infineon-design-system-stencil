export interface StepperState {
	activeStep: number;
	indicatorPosition: "left" | "right";
	showStepNumber: boolean;
	variant: "default" | "compact" | "vertical";

	setActiveStep?(stepId: number, setByClick: boolean): null;
}
