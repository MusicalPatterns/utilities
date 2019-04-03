// tslint:disable ban-types

import { isGreaterThan, isGreaterThanOrEqualTo, isLessThan, isLessThanOrEqualTo, isUndefined } from '../code'
import { precisionMessage } from './precisionMessage'

const testIsLessThan: <NumericType extends Number = Number>(
    value: NumericType,
    otherValue: NumericType,
    message?: string,
) => void =
    <NumericType extends Number = Number>(
        value: NumericType,
        otherValue: NumericType,
        message?: string,
    ): void => {
        if (!isLessThan(value, otherValue)) {
            fail(isUndefined(message) ? `expected ${value} to be less than ${otherValue}` : message)
        }
    }

const testIsGreaterThan: <NumericType extends Number = Number>(
    value: NumericType,
    otherValue: NumericType,
    message?: string,
) =>
void =
    <NumericType extends Number = Number>(
        value: NumericType,
        otherValue: NumericType,
        message?: string,
    ): void => {
        if (!isGreaterThan(value, otherValue)) {
            fail(isUndefined(message) ? `expected ${value} to be greater than ${otherValue}` : message)
        }
    }

const testIsLessThanOrEqualTo: <NumericType extends Number = Number>(
    value: NumericType,
    otherValue: NumericType,
    precision?: number,
    message?: string,
) => void =
    <NumericType extends Number = Number>(
        value: NumericType,
        otherValue: NumericType,
        precision?: number,
        message?: string,
    ): void => {
        if (!isLessThanOrEqualTo(value, otherValue, precision)) {
            fail(
                isUndefined(message) ?
                    `expected ${value} to be less than or equal to ${otherValue}${precisionMessage(precision)}` :
                    message,
            )
        }
    }

const testIsGreaterThanOrEqualTo: <NumericType extends Number = Number>(
    value: NumericType,
    otherValue: NumericType,
    precision?: number,
    message?: string,
) => void =
    <NumericType extends Number = Number>(
        value: NumericType,
        otherValue: NumericType,
        precision?: number,
        message?: string,
    ): void => {
        if (!isGreaterThanOrEqualTo(value, otherValue, precision)) {
            fail(
                isUndefined(message) ?
                    `expected ${value} to be greater than or equal to ${otherValue}${precisionMessage(precision)}` :
                    message,
            )
        }
    }

export {
    testIsGreaterThan,
    testIsGreaterThanOrEqualTo,
    testIsLessThan,
    testIsLessThanOrEqualTo,
}
