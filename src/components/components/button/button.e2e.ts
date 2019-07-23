import { newE2EPage, E2EElement, E2EPage } from '@stencil/core/testing';

describe('mtn-button', () => {
	let page: E2EPage, component: E2EElement;
	beforeEach(async () => {
		page = await newE2EPage();
		await page.setContent('<mtn-button></mtn-button>');
		component = await page.find('mtn-button');
	});

	it('renders', async () => {
		expect(component).toHaveClass('hydrated');
	});

	it('renders changes to the disabled attribute', async () => {
    await page.waitForChanges();
    const nativeButton = await page.find('mtn-button >>> button');
		expect(nativeButton).not.toEqualAttribute('disabled', true);

		component.setProperty('disabled', 'true');
		await page.waitForChanges();
		expect(nativeButton).toEqualAttribute('disabled', '');
	});

	it('renders changes to the color prop', async () => {
    await page.waitForChanges();
    const nativeButton = await page.find('mtn-button >>> button');
		expect(nativeButton).toHaveClass('primary');

		component.setProperty('color', 'accent');
		await page.waitForChanges();
		expect(nativeButton).toHaveClass('accent');
	});

	it('renders changes to the shape prop', async () => {
    await page.waitForChanges();
    const nativeButton = await page.find('mtn-button >>> button');
		expect(nativeButton).toHaveClass('square');

		component.setProperty('shape', 'round');
		await page.waitForChanges();
		expect(nativeButton).toHaveClass('round');
	});

	it('renders changes to the size prop', async () => {
		component.setProperty('size', 'default');
    await page.waitForChanges();
    const nativeButton = await page.find('mtn-button >>> button');
		expect(nativeButton).toHaveClass('default');

		component.setProperty('size', 'small');
		await page.waitForChanges();
		expect(nativeButton).toHaveClass('small');

		component.setProperty('size', 'large');
		await page.waitForChanges();
		expect(nativeButton).toHaveClass('large');
	});

	it('renders changes to the type prop', async () => {
		const nativeButton = await page.find('mtn-button >>> button');
		component.setProperty('type', 'button');
		await page.waitForChanges();
		expect(nativeButton).toEqualAttribute('type', 'button');

		component.setProperty('type', 'submit');
		await page.waitForChanges();
		expect(nativeButton).toEqualAttribute('type', 'submit');

		component.setProperty('type', 'reset');
		await page.waitForChanges();
		expect(nativeButton).toEqualAttribute('type', 'reset');
	});
});
