import { Page } from 'puppeteer'
import { DomValue } from '../web'

const elementValue: (page: Page, selector: string) => Promise<DomValue> =
    async (page: Page, selector: string): Promise<DomValue> =>
        page.evaluate(
            (selectorInEvaluate: string) => {
                const element: Element | null = document.querySelector(selectorInEvaluate)
                if (!element) {
                    throw new Error(`element matching ${selectorInEvaluate} was not found`)
                }

                // @ts-ignore
                return element.value
            },
            selector,
        )

const elementExists: (page: Page, selector: string) => Promise<boolean> =
    async (page: Page, selector: string): Promise<boolean> =>
        page.evaluate((selectorInEvaluate: string) => !!document.querySelector(selectorInEvaluate), selector)

const elementInnerText: (page: Page, selector: string) => Promise<string> =
    async (page: Page, selector: string): Promise<string> =>
        page.evaluate(
            (selectorInEvaluate: string) => {
                const element: Element | null = document.querySelector(selectorInEvaluate)
                if (!element) {
                    throw new Error(`element matching ${selectorInEvaluate} was not found`)
                }

                // @ts-ignore
                return element.innerText
            },
            selector,
        )

const elementChecked: (page: Page, selector: string) => Promise<boolean> =
    async (page: Page, selector: string): Promise<boolean> =>
        page.evaluate(
            (selectorInEvaluate: string) => {
                const element: Element | null = document.querySelector(selectorInEvaluate)
                if (!element) {
                    throw new Error(`element matching ${selectorInEvaluate} was not found`)
                }

                // @ts-ignore
                return element.checked
            },
            selector,
        )

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
}
