import { isCloseTo } from '../math'
import { isUndefined } from './isUndefined'

const isLessThan:
    <NumericType extends Number>(numeral: NumericType, otherValue: NumericType) => boolean =
    <NumericType extends Number>(numeral: NumericType, otherValue: NumericType): boolean =>
        numeral < otherValue

const isGreaterThan:
    <NumericType extends Number>(numeral: NumericType, otherValue: NumericType) => boolean =
    <NumericType extends Number>(numeral: NumericType, otherValue: NumericType): boolean =>
        numeral > otherValue

const isLessThanOrEqualTo: <NumericType extends Number>(
    numeral: NumericType,
    otherValue: NumericType,
    precision?: number,
) => boolean =
    <NumericType extends Number>(
        numeral: NumericType,
        otherValue: NumericType,
        precision?: number,
    ): boolean =>
        numeral <= otherValue || (isUndefined(precision) ? false : isCloseTo(numeral, otherValue, precision))

const isGreaterThanOrEqualTo: <NumericType extends Number>(
    numeral: NumericType,
    otherValue: NumericType,
    precision?: number,
) => boolean =
    <NumericType extends Number>(
        numeral: NumericType,
        otherValue: NumericType,
        precision?: number,
    ): boolean =>
        numeral >= otherValue || (isUndefined(precision) ? false : isCloseTo(numeral, otherValue, precision))

export {
    isGreaterThan,
    isLessThan,
    isGreaterThanOrEqualTo,
    isLessThanOrEqualTo,
}
