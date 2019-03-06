import { Page } from 'puppeteer'
import { clickElement } from './clickElement'
import { ANYTHING_ELSE_SELECTOR } from './constants'

const loseFocus: (page: Page, selector?: string) => Promise<void> =
    async (page: Page, selector?: string): Promise<void> => {
        await clickElement(page, selector || ANYTHING_ELSE_SELECTOR)
    }

export {
    loseFocus,
}
