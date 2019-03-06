import { Page } from 'puppeteer'

const clickElement: (page: Page, selector: string) => Promise<void> =
    async (page: Page, selector: string): Promise<void> => {
        await page.evaluate(
            (selectorInEvaluate: string) => {
                const element: Element | null = document.querySelector(selectorInEvaluate)
                if (!element) {
                    throw new Error(`element matching ${selectorInEvaluate} was not found`)
                }

                // @ts-ignore
                element.click()
            },
            selector,
        )
    }

export {
    clickElement,
}
