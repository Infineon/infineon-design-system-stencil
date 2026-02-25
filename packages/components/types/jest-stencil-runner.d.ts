declare module 'jest-stencil-runner' {
	export * from '@stencil/core/testing';
	export { newSpecPage } from '@stencil/core/testing';

	// Used by `packages/components/jest.config.js` at runtime (JS), but
	// keeping a loose type here avoids TS consumers needing a separate types package.
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	export function createJestStencilPreset(config: any): any;
}
