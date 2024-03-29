import { ElementHandle, Page } from 'puppeteer'
import { findElement } from './findElement'

const fallbackPuppeteerClick: (page: Page, selector: string) => Promise<void> =
    async (page: Page, selector: string): Promise<void> => {
        const element: ElementHandle | null = await findElement(page, selector)
        if (!element) { throw new Error(`No element found with selector ${selector} to click on.`) }
        await element.click()
    }

const clickElement: (page: Page, selector: string) => Promise<void> =
    async (page: Page, selector: string): Promise<void> => {
        const elementHadClickMethod: boolean = await page.evaluate(
            (selectorInEvaluate: string): boolean => {
                const element: HTMLElement | null = document.querySelector(selectorInEvaluate)
                if (!element) {
                    throw new Error(`element matching ${selectorInEvaluate} was not found`)
                }

                if (!element.click) {
                    return false
                }

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
