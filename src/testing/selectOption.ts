import { Page } from 'puppeteer'

const selectOption: (page: Page, selectSelector: string, optionValue: string) => Promise<string[]> =
    async (page: Page, selectSelector: string, optionValue: string): Promise<string[]> =>
        page.select(selectSelector, optionValue)

export {
    selectOption,
}
