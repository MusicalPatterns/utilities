// tslint:disable ban-types

import { isCloseTo } from '../math'
import { isUndefined } from './isUndefined'

const isLessThan:
    <NumericType extends Number = Number>(firstValue: NumericType, secondValue: NumericType) => boolean =
    <NumericType extends Number = Number>(firstValue: NumericType, secondValue: NumericType): boolean =>
        firstValue < secondValue

const isGreaterThan:
    <NumericType extends Number = Number>(firstValue: NumericType, secondValue: NumericType) => boolean =
    <NumericType extends Number = Number>(firstValue: NumericType, secondValue: NumericType): boolean =>
        firstValue > secondValue

const isLessThanOrEqualTo: <NumericType extends Number = Number>(
    firstValue: NumericType,
    secondValue: NumericType,
    precision?: number,
) => boolean =
    <NumericType extends Number = Number>(
        firstValue: NumericType,
        secondValue: NumericType,
        precision?: number,
    ): boolean =>
        firstValue <= secondValue || (isUndefined(precision) ? false : isCloseTo(firstValue, secondValue, precision))

const isGreaterThanOrEqualTo: <NumericType extends Number = Number>(
    firstValue: NumericType,
    secondValue: NumericType,
    precision?: number,
) => boolean =
    <NumericType extends Number = Number>(
        firstValue: NumericType,
        secondValue: NumericType,
        precision?: number,
    ): boolean =>
        firstValue >= secondValue || (isUndefined(precision) ? false : isCloseTo(firstValue, secondValue, precision))

export {
    isGreaterThan,
    isLessThan,
    isGreaterThanOrEqualTo,
    isLessThanOrEqualTo,
}
