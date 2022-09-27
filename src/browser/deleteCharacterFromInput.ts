import { ElementHandle, Page } from 'puppeteer'
import { findElement } from './findElement'
import { press } from './keyboard'

const deleteCharacterFromInput: (page: Page, selector: string) => Promise<void> =
    async (page: Page, selector: string): Promise<void> => {
        const control: ElementHandle | null = await findElement(page, selector)
        if (!control) { throw new Error(`No input found with selector ${selector} to delete character from.`) }
        await control.click()
        await press(page, 'Backspace')
    }

export {
    deleteCharacterFromInput,
}
