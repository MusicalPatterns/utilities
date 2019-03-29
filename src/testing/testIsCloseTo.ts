// tslint:disable no-any ban-types max-file-line-count

import { isGreaterThanOrEqualTo, isLessThanOrEqualTo, isUndefined } from '../code'
import {
    absoluteValue,
    DECIMAL,
    DEFAULT_PRECISION,
    difference,
    negative,
    ONE_HALF,
    product,
    quotient,
    round,
} from '../math'
import { apply, to } from '../nominal'

const determineIfClose: <NumericType extends Number = Number>(
    actual: NumericType,
    expected: NumericType,
    manualPrecision?: number,
) => boolean =
    <NumericType extends Number = Number>(
        actual: NumericType,
        expected: NumericType,
        manualPrecision?: number,
    ): boolean => {
        const precision: number = manualPrecision || DEFAULT_PRECISION

        const pow: number = apply.Power(DECIMAL, to.Power(apply.Translation(precision, to.Translation(1))))
        const delta: Number = absoluteValue(difference(actual, expected))
        const maxDelta: number = apply.Scalar(apply.Power(DECIMAL, to.Power(negative(precision))), ONE_HALF)

        return quotient(round(product(delta, pow)), pow) <= maxDelta
    }

const testIsCloseTo: <NumericType extends Number = Number>(
    actual: NumericType,
    expected: NumericType,
    precision?: number,
    // tslint:disable-next-line bool-param-default
    negate?: boolean,
) => void =
    // tslint:disable-next-line cyclomatic-complexity
    <NumericType extends Number = Number>(
        actual: NumericType,
        expected: NumericType,
        precision?: number,
        negate: boolean = false,
    ): void => {
        const isClose: boolean = determineIfClose(actual, expected, precision)

        const precisionMessage: string = isUndefined(precision) ? '' : `, to precision ${precision}`
        if (!negate && !isClose) {
            fail(`expected ${actual} to be close to ${expected}${precisionMessage}`)
        }
        else if (negate && isClose) {
            fail(`expected ${actual} not to be close to ${expected}${precisionMessage}`)
        }
    }

const testIsNotCloseTo:
    // tslint:disable-next-line bool-param-default
    <NumericType extends Number = Number>(actual: NumericType, expected: NumericType, precision?: number) => void =
    <NumericType extends Number = Number>(actual: NumericType, expected: NumericType, precision?: number): void => {
        testIsCloseTo(actual, expected, precision, true)
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
        if (isGreaterThanOrEqualTo(actual, expected) || determineIfClose(actual, expected, precision)) {
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
        if (isLessThanOrEqualTo(actual, expected) || determineIfClose(actual, expected, precision)) {
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
