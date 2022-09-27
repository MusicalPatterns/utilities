import { KeyInput, Page } from 'puppeteer'

const press: (page: Page, key: KeyInput) => Promise<void> =
    async (page: Page, key: KeyInput): Promise<void> =>
        page.keyboard.press(key)

export {
    press,
}
