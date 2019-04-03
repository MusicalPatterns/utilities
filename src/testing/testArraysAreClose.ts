// tslint:disable ban-types

import { forEach, isUndefined } from '../code'
import { apply, Ordinal } from '../nominal'
import { testIsCloseTo } from './testIsCloseTo'

const testArraysAreClose: <NumericElementType extends Number = Number>(
    actual: NumericElementType[],
    expected: NumericElementType[],
    message?: string,
) => void =
    <NumericElementType extends Number = Number>(
        actual: NumericElementType[],
        expected: NumericElementType[],
        message?: string,
    ): void => {
        if (actual.length !== expected.length) {
            fail(isUndefined(message) ? `Expected actual's ${actual.length} length to be ${expected.length}` : message)
        }

        testArraysAreCloseSoFar(actual, expected)
    }

const testArraysAreCloseSoFar: <NumericElementType extends Number = Number>(
    actual: NumericElementType[],
    expected: NumericElementType[],
    precision?: number,
    // tslint:disable-next-line bool-param-default
    negate?: boolean,
    message?: string,
) => void =
    <NumericElementType extends Number = Number>(
        actual: NumericElementType[],
        expected: NumericElementType[],
        precision?: number,
        // tslint:disable-next-line bool-param-default
        negate?: boolean,
        message?: string,
    ): void => {
        forEach(expected, (expectedElement: NumericElementType, index: Ordinal): void => {
            const actualElement: NumericElementType = apply.Ordinal(actual, index)

            testIsCloseTo(actualElement, expectedElement, precision, negate, message)
        })
    }

export {
    testArraysAreClose,
    testArraysAreCloseSoFar,
}
