// tslint:disable max-file-line-count bool-param-default

import { initialElement, isGreaterThanOrEqualTo, isLessThanOrEqualTo, isUndefined, Maybe } from '../code'
import { from, SKIP_FIRST_ELEMENT } from '../nominal'
import { beginValueIsCorrect, goesFromValueToValue } from './goes'
import { inBounds } from './inBounds'

const goesMonotonically: <NumericElementType extends Number>(
    array: NumericElementType[],
    expectedBeginValue?: NumericElementType,
    isIncreasingOverride?: boolean,
    precision?: number,
) => boolean =
    <NumericElementType extends Number>(
        array: NumericElementType[],
        expectedBeginValue?: NumericElementType,
        isIncreasingOverride?: boolean,
        precision?: number,
    ): boolean => {
        if (!isUndefined(expectedBeginValue) && !beginValueIsCorrect(array, expectedBeginValue, precision)) {
            return false
        }

        let isIncreasing: Maybe<boolean> = isIncreasingOverride

        let previousValue: NumericElementType = initialElement(array)
        let result: boolean = true

        array.slice(from.Ordinal(SKIP_FIRST_ELEMENT))
            .forEach((value: NumericElementType) => {
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
    array: NumericElementType[],
    expectedBeginBound: NumericElementType,
    expectedEndBound: NumericElementType,
    precision?: number,
) => boolean =
    <NumericElementType extends Number>(
        array: NumericElementType[],
        expectedBeginBound: NumericElementType,
        expectedEndBound: NumericElementType,
        precision?: number,
    ): boolean => {
        const isIncreasing: boolean = expectedEndBound > expectedBeginBound

        const lowerBound: NumericElementType = isIncreasing ? expectedBeginBound : expectedEndBound
        const upperBound: NumericElementType = isIncreasing ? expectedEndBound : expectedBeginBound

        if (!inBounds(array, lowerBound, upperBound, precision)) {
            return false
        }

        return goesMonotonically(array, undefined, isIncreasing, precision)
    }

const goesMonotonicallyFromValueToValue: <NumericElementType extends Number>(
    array: NumericElementType[],
    expectedBeginValue: NumericElementType,
    expectedEndValue: NumericElementType,
    precision?: number,
) => boolean =
    <NumericElementType extends Number>(
        array: NumericElementType[],
        expectedBeginValue: NumericElementType,
        expectedEndValue: NumericElementType,
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
