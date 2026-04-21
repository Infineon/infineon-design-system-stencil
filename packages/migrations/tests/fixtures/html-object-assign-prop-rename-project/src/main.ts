const el = document.createElement('ifx-text-field');
const spreadEl = document.createElement('ifx-text-field');

// inline object literal — key should be renamed
Object.assign(el, { success: true, label: 'inline object' });

// const local object — key should be renamed
const directProps = {
	success: true,
	label: 'local spread',
};
Object.assign(spreadEl, directProps);
