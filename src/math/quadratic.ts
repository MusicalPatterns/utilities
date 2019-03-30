// tslint:disable ban-types bool-param-default

import { EXAMPLE_ELEMENT_INDEX, isUndefined, Maybe } from '../code'
import { apply, Scalar, Translation } from '../nominal'
import { MULTIPLICATIVE_IDENTITY } from './constants'
import { allValuesAreTheSame, beginValueIsCorrect } from './goes'
import { goesMonotonicallyBetweenValueAndValue, goesMonotonicallyFromValueToValue } from './monotonic'
import { computeDeltas, computeIntervals } from './rateOfChange'

const goesQuadratically: <NumericElementType extends Number = Number>(
    array: NumericElementType[],
    expectedBeginValue?: NumericElementType,
    precision?: number,
) => boolean =
    <NumericElementType extends Number = Number>(
        array: NumericElementType[],
        expectedBeginValue?: NumericElementType,
        precision?: number,
    ): boolean => {
        if (!isUndefined(expectedBeginValue) && !beginValueIsCorrect(array, expectedBeginValue, precision)) {
            return false
        }

        const deltas: Translation[] = computeDeltas(array)
        const deltaIntervals: Array<Maybe<Scalar>> = computeIntervals(deltas)

        const exampleInterval: Maybe<Scalar> = apply.Ordinal(deltaIntervals, EXAMPLE_ELEMENT_INDEX)
        if (isUndefined(exampleInterval)) {
            return false
        }

        return allValuesAreTheSame(deltaIntervals as Scalar[], undefined, precision) &&
            exampleInterval !== MULTIPLICATIVE_IDENTITY
    }

const goesQuadraticallyBetweenValueAndValue: <NumericElementType extends Number = Number>(
    array: NumericElementType[],
    expectedBeginBound: NumericElementType,
    expectedEndBound: NumericElementType,
    precision?: number,
) => boolean =
    <NumericElementType extends Number = Number>(
        array: NumericElementType[],
        expectedBeginBound: NumericElementType,
        expectedEndBound: NumericElementType,
        precision?: number,
    ): boolean => {
        if (!goesMonotonicallyBetweenValueAndValue(array, expectedBeginBound, expectedEndBound, precision)) {
            return false
        }

        return goesQuadratically(array, undefined, precision)
    }

const goesQuadraticallyFromValueToValue: <NumericElementType extends Number = Number>(
    array: NumericElementType[],
    expectedBeginValue: NumericElementType,
    expectedEndValue: NumericElementType,
    precision?: number,
) => boolean =
    <NumericElementType extends Number = Number>(
        array: NumericElementType[],
        expectedBeginValue: NumericElementType,
        expectedEndValue: NumericElementType,
        precision?: number,
    ): boolean => {
        if (!goesMonotonicallyFromValueToValue(array, expectedBeginValue, expectedEndValue, precision)) {
            return false
        }

        return goesQuadratically(array, undefined, precision)
    }

export {
    goesQuadratically,
    goesQuadraticallyBetweenValueAndValue,
    goesQuadraticallyFromValueToValue,
}
