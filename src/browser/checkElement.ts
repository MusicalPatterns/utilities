import { Page } from 'puppeteer'
import { HtmlValue } from './types'

const elementAttribute: (page: Page, selector: string, attribute: string) => Promise<unknown> =
    async (page: Page, selector: string, attribute: string): Promise<unknown> =>
        page.evaluate(
            (selectorInEvaluate: string, attributeInEvaluate: string) => {
                const element: Element | null = document.querySelector(selectorInEvaluate)
                if (!element) {
                    throw new Error(`element matching ${selectorInEvaluate} was not found`)
                }

                // @ts-ignore
                return element[ attributeInEvaluate ]
            },
            selector,
            attribute,
        )

const elementValue: (page: Page, selector: string) => Promise<HtmlValue> =
    async (page: Page, selector: string): Promise<HtmlValue> =>
        elementAttribute(page, selector, 'value') as Promise<HtmlValue>

const elementExists: (page: Page, selector: string) => Promise<boolean> =
    async (page: Page, selector: string): Promise<boolean> =>
        page.evaluate((selectorInEvaluate: string) => !!document.querySelector(selectorInEvaluate), selector)

const elementInnerText: (page: Page, selector: string) => Promise<string> =
    async (page: Page, selector: string): Promise<string> =>
        elementAttribute(page, selector, 'innerText') as Promise<string>

const elementChecked: (page: Page, selector: string) => Promise<boolean> =
    async (page: Page, selector: string): Promise<boolean> =>
        elementAttribute(page, selector, 'checked') as Promise<boolean>

const elementCount: (page: Page, selector: string) => Promise<number> =
    async (page: Page, selector: string): Promise<number> =>
        page.evaluate((selectorInEvaluate: string) => document.querySelectorAll(selectorInEvaluate).length, selector)

const elementIds: (page: Page, selector: string) => Promise<string[]> =
    async (page: Page, selector: string): Promise<string[]> =>
        page.evaluate(
            (selectorInEvaluate: string) =>
                Array.from(document.querySelectorAll(selectorInEvaluate))
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
    elementAttribute,
}
