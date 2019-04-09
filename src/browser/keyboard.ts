import { Page } from 'puppeteer'

const press: (page: Page, key: string) => Promise<void> =
    async (page: Page, key: string): Promise<void> =>
        page.keyboard.press(key)

export {
    press,
}
