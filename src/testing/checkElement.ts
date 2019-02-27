// tslint:disable no-any

import { Page } from 'puppeteer'

const elementValue: (page: Page, selector: string) => Promise<any> =
    async (page: Page, selector: string): Promise<any> =>
        page.evaluate(
            (slctr: string) =>
                // @ts-ignore
                document.querySelector(slctr).value,
            selector,
        )

const elementExists: (page: Page, selector: string) => Promise<boolean> =
    async (page: Page, selector: string): Promise<boolean> =>
        // @ts-ignore
        page.evaluate(
            (slctr: string) =>
                !!document.querySelector(slctr),
            selector,
        )

const elementInnerText: (page: Page, selector: string) => Promise<string> =
    async (page: Page, selector: string): Promise<string> =>
        // @ts-ignore
        page.evaluate(
            (slctr: string) =>
                // @ts-ignore
                document.querySelector(slctr).innerText,
            selector,
        )

const elementChecked: (page: Page, selector: string) => Promise<boolean> =
    async (page: Page, selector: string): Promise<boolean> =>
        // @ts-ignore
        page.evaluate(
            (slctr: string) =>
                // @ts-ignore
                document.querySelector(slctr).checked,
            selector,
        )

const elementCount: (page: Page, selector: string) => Promise<number> =
    async (page: Page, selector: string): Promise<number> =>
        // @ts-ignore
        page.evaluate(
            (slctr: string) =>
                document.querySelectorAll(slctr).length,
            selector,
        )

const elementIds: (page: Page, selector: string) => Promise<string[]> =
    async (page: Page, selector: string): Promise<string[]> =>
        // @ts-ignore
        page.evaluate(
            (slctr: string) =>
                Array.from(document.querySelectorAll(slctr))
                    .map((element: Element) => element.id),
            selector,
        )

export {
    elementValue,
    elementExists,
    elementInnerText,
    elementChecked,
    elementCount,
    elementIds,
}
