// tslint:disable no-any

import { Page } from 'puppeteer'
import { ElementWithChecked, ElementWithInnerText, ElementWithValue } from './types'

const isElementWithValue: (element: Element | null) => element is ElementWithValue =
    (element: Element | null): element is ElementWithValue =>
        !!element && Object.keys(element)
            .includes('value')

const isElementWithInnerText: (element: Element | null) => element is ElementWithInnerText =
    (element: Element | null): element is ElementWithInnerText =>
        !!element && Object.keys(element)
            .includes('innerText')

const isElementWithChecked: (element: Element | null) => element is ElementWithChecked =
    (element: Element | null): element is ElementWithChecked =>
        !!element && Object.keys(element)
            .includes('checked')

const elementValue: (page: Page, selector: string) => Promise<any> =
    async (page: Page, selector: string): Promise<any> =>
        page.evaluate(
            (slctr: string) => {
                const element: Element | null = document.querySelector(slctr)

                if (isElementWithValue(element)) {
                    return element.value
                }

                throw new Error('element did not have value')
            },
            selector,
        )

const elementExists: (page: Page, selector: string) => Promise<boolean> =
    async (page: Page, selector: string): Promise<boolean> =>
        page.evaluate(
            (slctr: string) =>
                !!document.querySelector(slctr),
            selector,
        )

const elementInnerText: (page: Page, selector: string) => Promise<string> =
    async (page: Page, selector: string): Promise<string> =>
        page.evaluate(
            (slctr: string) => {
                const element: Element | null = document.querySelector(slctr)

                if (isElementWithInnerText(element)) {
                    return element.innerText
                }

                throw new Error('element did not have innerText')
            },
            selector,
        )

const elementChecked: (page: Page, selector: string) => Promise<boolean> =
    async (page: Page, selector: string): Promise<boolean> =>
        page.evaluate(
            (slctr: string) => {
                const element: Element | null = document.querySelector(slctr)

                if (isElementWithChecked(element)) {
                    return element.checked
                }

                throw new Error('element did not have checked')
            },
            selector,
        )

const elementCount: (page: Page, selector: string) => Promise<number> =
    async (page: Page, selector: string): Promise<number> =>
        page.evaluate(
            (slctr: string) =>
                document.querySelectorAll(slctr).length,
            selector,
        )

const elementIds: (page: Page, selector: string) => Promise<string[]> =
    async (page: Page, selector: string): Promise<string[]> =>
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
