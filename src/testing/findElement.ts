import { ElementHandle, Page } from 'puppeteer'

const findElement: (page: Page, selector: string) => Promise<ElementHandle> =
    async (page: Page, selector: string): Promise<ElementHandle> =>
        // @ts-ignore
        page.waitForSelector(selector)

export {
    findElement,
}
