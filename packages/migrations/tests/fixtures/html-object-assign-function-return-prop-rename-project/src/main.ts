const el1 = document.createElement('ifx-text-field');
const el2 = document.createElement('ifx-text-field');
const el3 = document.createElement('ifx-text-field');
const el4 = document.createElement('ifx-text-field');

// function declaration — should be renamed
function getFieldProps() {
	return {
		success: true,
		label: 'Function declaration',
	};
}
Object.assign(el1, getFieldProps());

// const arrow with concise body — should be renamed
const getArrowProps = () => ({
	success: true,
	label: 'Concise arrow',
});
Object.assign(el2, getArrowProps());

// const arrow with block body — should be renamed
const getBlockArrowProps = () => {
	return {
		success: true,
		label: 'Block arrow',
	};
};
Object.assign(el3, getBlockArrowProps());

// function with ternary branches — both branches should be renamed
function getConditionalProps(isValid: boolean) {
	return isValid
		? { success: true, label: 'Ternary true' }
		: { success: false, label: 'Ternary false' };
}
Object.assign(el4, getConditionalProps(true));
