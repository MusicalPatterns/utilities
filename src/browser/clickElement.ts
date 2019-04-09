import { ElementHandle, Page } from 'puppeteer'
import { findElement } from './findElement'

const fallbackPuppeteerClick: (page: Page, selector: string) => Promise<void> =
    async (page: Page, selector: string): Promise<void> => {
        const element: ElementHandle = await findElement(page, selector)
        await element.click()
    }

const clickElement: (page: Page, selector: string) => Promise<void> =
    async (page: Page, selector: string): Promise<void> => {
        const elementHadClickMethod: boolean = await page.evaluate(
            (selectorInEvaluate: string) => {
                const element: Element | null = document.querySelector(selectorInEvaluate)
                if (!element) {
                    throw new Error(`element matching ${selectorInEvaluate} was not found`)
                }

                // @ts-ignore
                if (!element.click) {
                    return false
                }

                // @ts-ignore
                element.click()

                return true
            },
            selector,
        )

        if (!elementHadClickMethod) {
            await fallbackPuppeteerClick(page, selector)
        }
    }

export {
    clickElement,
}
