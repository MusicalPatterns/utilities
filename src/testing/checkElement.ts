import { Page } from 'puppeteer'
import { DomValue } from '../web'
import { ElementWithChecked, ElementWithInnerText, ElementWithValue } from './types'

const elementValue: (page: Page, selector: string) => Promise<DomValue> =
    async (page: Page, selector: string): Promise<DomValue> =>
        page.evaluate(
            (selectorInEvaluate: string) => {
                const element: Element | null = document.querySelector(selectorInEvaluate)
                if (!element) {
                    throw new Error(`element matching ${selectorInEvaluate} was not found`)
                }

                const isElementWithValue: (el: Element) => el is ElementWithValue =
                    (el: Element): el is ElementWithValue =>
                        Object.keys(el)
                            .includes('value')

                if (isElementWithValue(element)) {
                    return element.value
                }

                throw new Error(`element matching ${selectorInEvaluate} did not have the property 'value'`)
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

                const isElementWithInnerText: (el: Element) => el is ElementWithInnerText =
                    (el: Element): el is ElementWithInnerText =>
                        Object.keys(el)
                            .includes('innerText')

                if (isElementWithInnerText(element)) {
                    return element.innerText
                }

                throw new Error(`element matching ${selectorInEvaluate} did not have the property 'innerText'`)
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

                const isElementWithChecked: (el: Element) => el is ElementWithChecked =
                    (el: Element): el is ElementWithChecked =>
                        Object.keys(el)
                            .includes('checked')

                if (isElementWithChecked(element)) {
                    return element.checked
                }

                throw new Error(`element matching ${selectorInEvaluate} did not have the property 'checked'`)
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
