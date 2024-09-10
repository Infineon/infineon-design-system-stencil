export interface StepperState {
    activeStep: number;
    indicatorPosition: 'left' | 'right';
    showStepNumber: boolean;
    variant: 'default' | 'compact';

    setActiveStep?(stepId: number): null;
}
  