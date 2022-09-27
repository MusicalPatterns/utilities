import { ElementHandle, Page } from 'puppeteer'

const findElement: (page: Page, selector: string) => Promise<ElementHandle | null> =
    async (page: Page, selector: string): Promise<ElementHandle | null> =>
        page.waitForSelector(selector)

export {
    findElement,
}
