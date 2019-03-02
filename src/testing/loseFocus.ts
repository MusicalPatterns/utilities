import { ElementHandle, Page } from 'puppeteer'
import { findElement } from './findElement'

const loseFocus: (page: Page, selector?: string) => Promise<void> =
    async (page: Page, selector?: string): Promise<void> => {
        if (selector) {
            const element: ElementHandle = await findElement(page, selector)
            await element.click()
        }

        const anythingElse: ElementHandle = await findElement(page, 'div')
        await anythingElse.click()
    }

export {
    loseFocus,
}
