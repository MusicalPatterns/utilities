// tslint:disable ban-types

import { forEach } from '../code'
import { apply, Ordinal } from '../nominal'
import { testIsCloseTo } from './testIsCloseTo'

const testArraysAreClose: <T extends Number>(actual: T[], expected: T[]) => void =
    <T extends Number>(actual: T[], expected: T[]): void => {
        if (actual.length !== expected.length) {
            fail(`Expected actual's ${actual.length} length to be ${expected.length}`)
        }

        testArraysAreCloseSoFar(actual, expected)
    }

const testArraysAreCloseSoFar: <T extends Number>(actual: T[], expected: T[]) => void =
    <T extends Number>(actual: T[], expected: T[]): void => {
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
    testArraysAreCloseSoFar,
}
