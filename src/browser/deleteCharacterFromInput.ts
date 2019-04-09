import { ElementHandle, Page } from 'puppeteer'
import { findElement } from './findElement'
import { press } from './keyboard'

const deleteCharacterFromInput: (page: Page, selector: string) => Promise<void> =
    async (page: Page, selector: string): Promise<void> => {
        const control: ElementHandle = await findElement(page, selector)
        await control.click()
        await press(page, 'Backspace')
    }

export {
    deleteCharacterFromInput,
}
