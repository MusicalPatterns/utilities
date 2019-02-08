import { forEach } from '../code'
import { apply, Ordinal } from '../nominal'
import { testIsCloseTo } from './testIsCloseTo'

const testArraysAreClose: <T>(actual: T[], expected: T[]) => void =
    <T>(actual: T[], expected: T[]): void => {
        forEach(expected, (expectedElement: T, index: Ordinal): void => {
            const actualElement: T = apply.Ordinal(actual, index)
            expect(testIsCloseTo(actualElement, expectedElement))
                .toBeTruthy(
                    `Elements not close at index ${index}: actual ${actualElement} vs expected ${expectedElement}`,
                )
        })
    }

export {
    testArraysAreClose,
}
