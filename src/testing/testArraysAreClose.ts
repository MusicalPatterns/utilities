// tslint:disable ban-types

import { forEach } from '../code'
import { apply, Ordinal } from '../nominal'
import { testIsCloseTo } from './testIsCloseTo'

const testArraysAreClose:
    <NumericElementType extends Number>(actual: NumericElementType[], expected: NumericElementType[]) => void =
    <NumericElementType extends Number>(actual: NumericElementType[], expected: NumericElementType[]): void => {
        if (actual.length !== expected.length) {
            fail(`Expected actual's ${actual.length} length to be ${expected.length}`)
        }

        testArraysAreCloseSoFar(actual, expected)
    }

const testArraysAreCloseSoFar:
    <NumericElementType extends Number>(actual: NumericElementType[], expected: NumericElementType[]) => void =
    <NumericElementType extends Number>(actual: NumericElementType[], expected: NumericElementType[]): void => {
        forEach(expected, (expectedElement: NumericElementType, index: Ordinal): void => {
            const actualElement: NumericElementType = apply.Ordinal(actual, index)

            testIsCloseTo(actualElement, expectedElement)
        })
    }

export {
    testArraysAreClose,
    testArraysAreCloseSoFar,
}
