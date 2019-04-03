// tslint:disable no-any ban-types max-file-line-count

import { isGreaterThanOrEqualTo, isLessThanOrEqualTo, isUndefined } from '../code'
import { isCloseTo } from '../math'
import { precisionMessage } from './precisionMessage'

const testIsCloseTo: <NumericType extends Number = Number>(
    actual: NumericType,
    expected: NumericType,
    precision?: number,
    // tslint:disable-next-line bool-param-default
    negate?: boolean,
    message?: string,
) => void =
    // tslint:disable-next-line cyclomatic-complexity
    <NumericType extends Number = Number>(
        actual: NumericType,
        expected: NumericType,
        precision?: number,
        negate: boolean = false,
        message?: string,
    ): void => {
        const isClose: boolean = isCloseTo(actual, expected, precision)

        if (!negate && !isClose) {
            fail(
                isUndefined(message) ?
                    `expected ${actual} to be close to ${expected}${precisionMessage(precision)}` :
                    message,
            )
        }
        else if (negate && isClose) {
            fail(
                isUndefined(message) ?
                    `expected ${actual} not to be close to ${expected}${precisionMessage(precision)}` :
                    message,
            )
        }
    }

const testIsNotCloseTo: <NumericType extends Number = Number>(
    actual: NumericType,
    expected: NumericType,
    precision?: number,
    message?: string,
) => void =
    <NumericType extends Number = Number>(
        actual: NumericType,
        expected: NumericType,
        precision?: number,
        message?: string,
    ): void => {
        testIsCloseTo(actual, expected, precision, true, message)
    }

const testGreaterThanOrCloseTo: <NumericType extends Number = Number>(
    actual: NumericType,
    expected: NumericType,
    precision?: number,
    message?: string,
) => void =
    <NumericType extends Number = Number>(
        actual: NumericType,
        expected: NumericType,
        precision?: number,
        message?: string,
    ): void => {
        if (isGreaterThanOrEqualTo(actual, expected) || isCloseTo(actual, expected, precision)) {
            return
        }

        fail(isUndefined(message) ? `expected ${actual} to be greater than or close to ${expected}` : message)
    }

const testLessThanOrCloseTo: <NumericType extends Number = Number>(
    actual: NumericType,
    expected: NumericType,
    precision?: number,
    message?: string,
) => void =
    <NumericType extends Number = Number>(
        actual: NumericType,
        expected: NumericType,
        precision?: number,
        message?: string,
    ): void => {
        if (isLessThanOrEqualTo(actual, expected) || isCloseTo(actual, expected, precision)) {
            return
        }

        fail(isUndefined(message) ? `expected ${actual} to be less than or close to ${expected}` : message)
    }

export {
    testIsCloseTo,
    testIsNotCloseTo,
    testGreaterThanOrCloseTo,
    testLessThanOrCloseTo,
}
