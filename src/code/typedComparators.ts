import { isCloseTo } from '../math'
import { isUndefined } from './isUndefined'

const isLessThan:
    <NumericType extends Number>(value: NumericType, otherValue: NumericType) => boolean =
    <NumericType extends Number>(value: NumericType, otherValue: NumericType): boolean =>
        value < otherValue

const isGreaterThan:
    <NumericType extends Number>(value: NumericType, otherValue: NumericType) => boolean =
    <NumericType extends Number>(value: NumericType, otherValue: NumericType): boolean =>
        value > otherValue

const isLessThanOrEqualTo: <NumericType extends Number>(
    value: NumericType,
    otherValue: NumericType,
    precision?: number,
) => boolean =
    <NumericType extends Number>(
        value: NumericType,
        otherValue: NumericType,
        precision?: number,
    ): boolean =>
        value <= otherValue || (isUndefined(precision) ? false : isCloseTo(value, otherValue, precision))

const isGreaterThanOrEqualTo: <NumericType extends Number>(
    value: NumericType,
    otherValue: NumericType,
    precision?: number,
) => boolean =
    <NumericType extends Number>(
        value: NumericType,
        otherValue: NumericType,
        precision?: number,
    ): boolean =>
        value >= otherValue || (isUndefined(precision) ? false : isCloseTo(value, otherValue, precision))

export {
    isGreaterThan,
    isLessThan,
    isGreaterThanOrEqualTo,
    isLessThanOrEqualTo,
}
