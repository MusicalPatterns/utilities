// tslint:disable max-file-line-count bool-param-default

import { initialElement, isGreaterThanOrEqualTo, isLessThanOrEqualTo, isUndefined, Maybe } from '../code'
import { as, Point, SKIP_FIRST_ELEMENT } from '../nominal'
import { beginValueIsCorrect, goesFromValueToValue } from './goes'
import { inBounds } from './inBounds'

const goesMonotonically: <NumericElementType extends Number>(
    array: Array<Point<NumericElementType>>,
    expectedBeginValue?: Point<NumericElementType>,
    isIncreasingOverride?: boolean,
    precision?: number,
) => boolean =
    <NumericElementType extends Number>(
        array: Array<Point<NumericElementType>>,
        expectedBeginValue?: Point<NumericElementType>,
        isIncreasingOverride?: boolean,
        precision?: number,
    ): boolean => {
        if (!isUndefined(expectedBeginValue) && !beginValueIsCorrect(array, expectedBeginValue, precision)) {
            return false
        }

        let isIncreasing: Maybe<boolean> = isIncreasingOverride

        let previousValue: Point<NumericElementType> = initialElement(array)
        let result: boolean = true

        array.slice(as.number(SKIP_FIRST_ELEMENT))
            .forEach((value: Point<NumericElementType>): void => {
                if (isUndefined(isIncreasing)) {
                    isIncreasing = value > previousValue
                }
                else if (isIncreasing) {
                    if (!isGreaterThanOrEqualTo(value, previousValue, precision)) {
                        result = false
                    }
                }
                else {
                    if (!isLessThanOrEqualTo(value, previousValue, precision)) {
                        result = false
                    }
                }

                previousValue = value
            })

        return result
    }

const goesMonotonicallyBetweenValueAndValue: <NumericElementType extends Number>(
    array: Array<Point<NumericElementType>>,
    expectedBeginBound: Point<NumericElementType>,
    expectedEndBound: Point<NumericElementType>,
    precision?: number,
) => boolean =
    <NumericElementType extends Number>(
        array: Array<Point<NumericElementType>>,
        expectedBeginBound: Point<NumericElementType>,
        expectedEndBound: Point<NumericElementType>,
        precision?: number,
    ): boolean => {
        const isIncreasing: boolean = expectedEndBound > expectedBeginBound

        const lowerBound: Point<NumericElementType> = isIncreasing ? expectedBeginBound : expectedEndBound
        const upperBound: Point<NumericElementType> = isIncreasing ? expectedEndBound : expectedBeginBound

        if (!inBounds(array, lowerBound, upperBound, precision)) {
            return false
        }

        return goesMonotonically(array, undefined, isIncreasing, precision)
    }

const goesMonotonicallyFromValueToValue: <NumericElementType extends Number>(
    array: Array<Point<NumericElementType>>,
    expectedBeginValue: Point<NumericElementType>,
    expectedEndValue: Point<NumericElementType>,
    precision?: number,
) => boolean =
    <NumericElementType extends Number>(
        array: Array<Point<NumericElementType>>,
        expectedBeginValue: Point<NumericElementType>,
        expectedEndValue: Point<NumericElementType>,
        precision?: number,
    ): boolean => {
        const isIncreasing: boolean = expectedEndValue > expectedBeginValue

        if (!goesFromValueToValue(array, expectedBeginValue, expectedEndValue, precision)) {
            return false
        }

        return goesMonotonically(array, undefined, isIncreasing, precision)
    }

export {
    goesMonotonically,
    goesMonotonicallyBetweenValueAndValue,
    goesMonotonicallyFromValueToValue,
}
