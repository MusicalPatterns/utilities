// tslint:disable ban-types

import { isGreaterThan, isGreaterThanOrEqualTo, isLessThan, isLessThanOrEqualTo, isUndefined } from '../code'
import { precisionMessage } from './precisionMessage'

const testIsLessThan: <NumericType extends Number = Number>(value: NumericType, otherValue: NumericType) => void =
    <NumericType extends Number = Number>(value: NumericType, otherValue: NumericType): void => {
        if (!isLessThan(value, otherValue)) {
            fail(`expected ${value} to be less than ${otherValue}`)
        }
    }

const testIsGreaterThan: <NumericType extends Number = Number>(value: NumericType, otherValue: NumericType) => void =
    <NumericType extends Number = Number>(value: NumericType, otherValue: NumericType): void => {
        if (!isGreaterThan(value, otherValue)) {
            fail(`expected ${value} to be greater than ${otherValue}`)
        }
    }

const testIsLessThanOrEqualTo: <NumericType extends Number = Number>(
    value: NumericType, otherValue: NumericType, precision?: number,
) => void =
    <NumericType extends Number = Number>(value: NumericType, otherValue: NumericType, precision?: number): void => {
        if (!isLessThanOrEqualTo(value, otherValue, precision)) {
            fail(`expected ${value} to be less than or equal to ${otherValue}${precisionMessage(precision)}`)
        }
    }

const testIsGreaterThanOrEqualTo: <NumericType extends Number = Number>(
    value: NumericType, otherValue: NumericType, precision?: number,
) => void =
    <NumericType extends Number = Number>(value: NumericType, otherValue: NumericType, precision?: number): void => {
        if (!isGreaterThanOrEqualTo(value, otherValue, precision)) {
            fail(`expected ${value} to be greater than or equal to ${otherValue}${precisionMessage(precision)}`)
        }
    }

export {
    testIsGreaterThan,
    testIsGreaterThanOrEqualTo,
    testIsLessThan,
    testIsLessThanOrEqualTo,
}
