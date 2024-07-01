import { newE2EPage } from '@stencil/core/testing';

describe('ifx-stepper', () => {
    let page;
    let element;

    beforeEach(async () => {
        page = await newE2EPage();
        await page.setContent(`<ifx-stepper>
            <ifx-step>Step 1<ifx-step>
            <ifx-step>Step 2<ifx-step>
        </ifx-stepper>`);
        element = await page.find('ifx-stepper');
    });

    it('should render', () => {
        expect(element).toHaveClass('hydrated');
    });

    it('should have default active step set to 1', async () => {
        const firstStep = await page.find('ifx-stepper > ifx-step >>> .active-indic')
        expect(firstStep).toBeTruthy();
    }) 

    it('should change the active step', async () => {
        element.setProperty('activeStep', 2);
        await page.waitForChanges();
        const secondStep = element.childNodes[1].getElementsByClassName('active-indic')
        expect(secondStep).toBeTruthy();
    }) 

    it('should display step number when showStepNumber is set', async () => {
        element.setProperty('showStepNumber', true);
        await page.waitForChanges();
        const firstStep = await page.find('ifx-stepper > ifx-step >>> .step-icon')
        expect(firstStep.innerText).toEqual('1');
    });
    
    it('compact variant', async () => {
        element.setProperty('variant', 'compact');
        await page.waitForChanges();
        const compact = await page.find('ifx-stepper >>> .compact');
        expect(compact).toBeTruthy();
    })

})