import { Page } from 'puppeteer'
import { HtmlValue } from './types'

const elementAttribute: (page: Page, selector: string, attribute: string) => Promise<unknown> =
    async (page: Page, selector: string, attribute: string): Promise<unknown> =>
        page.evaluate(
            (selectorInEvaluate: string, attributeInEvaluate: string): string => {
                const element: HTMLElement | null = document.querySelector(selectorInEvaluate)
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
        await elementAttribute(page, selector, 'value') as Promise<HtmlValue>

const elementExists: (page: Page, selector: string) => Promise<boolean> =
    async (page: Page, selector: string): Promise<boolean> =>
        page.evaluate((selectorInEvaluate: string): boolean => !!document.querySelector(selectorInEvaluate), selector)

const elementInnerText: (page: Page, selector: string) => Promise<string> =
    async (page: Page, selector: string): Promise<string> =>
        await elementAttribute(page, selector, 'innerText') as Promise<string>

const elementChecked: (page: Page, selector: string) => Promise<boolean> =
    async (page: Page, selector: string): Promise<boolean> =>
        await elementAttribute(page, selector, 'checked') as Promise<boolean>

const elementCount: (page: Page, selector: string) => Promise<number> =
    async (page: Page, selector: string): Promise<number> =>
        page.evaluate(
            (selectorInEvaluate: string): number =>
                document.querySelectorAll(selectorInEvaluate).length,
        )

const elementIds: (page: Page, selector: string) => Promise<string[]> =
    async (page: Page, selector: string): Promise<string[]> =>
        page.evaluate(
            (selectorInEvaluate: string): string[] =>
                Array.from(document.querySelectorAll(selectorInEvaluate))
                    .map((element: Element): string => element.id),
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
