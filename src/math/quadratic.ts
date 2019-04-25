// tslint:disable bool-param-default

import { isUndefined, Maybe } from '../code'
import {
    as,
    Delta,
    EXAMPLE_ELEMENT_INDEX,
    Interval,
    MULTIPLICATIVE_IDENTITY,
    notAs,
    Point,
    Scalar,
    use,
} from '../nominal'
import { allValuesAreTheSame, beginValueIsCorrect } from './goes'
import { goesMonotonicallyBetweenValueAndValue, goesMonotonicallyFromValueToValue } from './monotonic'
import { computeDeltas, computeIntervals } from './rateOfChange'

const goesQuadratically: <NumericElementType extends Number>(
    array: Array<Point<NumericElementType>>,
    expectedBeginValue?: Point<NumericElementType>,
    precision?: number,
) => boolean =
    <NumericElementType extends Number>(
        array: Array<Point<NumericElementType>>,
        expectedBeginValue?: Point<NumericElementType>,
        precision?: number,
    ): boolean => {
        if (!isUndefined(expectedBeginValue) && !beginValueIsCorrect(array, expectedBeginValue, precision)) {
            return false
        }

        const deltas: Array<Delta<NumericElementType>> = computeDeltas(array)
        const deltaIntervals: Array<Maybe<Interval>> = computeIntervals(
            deltas.map((delta: Delta<NumericElementType>) => as.Point(notAs.Translation(delta))),
        )

        const exampleInterval: Maybe<Scalar> = use.Ordinal(
            deltaIntervals,
            EXAMPLE_ELEMENT_INDEX,
        )
        if (isUndefined(exampleInterval)) {
            return false
        }

        return allValuesAreTheSame(deltaIntervals as Interval[], undefined, precision) &&
            exampleInterval !== MULTIPLICATIVE_IDENTITY
    }

const goesQuadraticallyBetweenValueAndValue: <NumericElementType extends Number>(
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
        if (!goesMonotonicallyBetweenValueAndValue(array, expectedBeginBound, expectedEndBound, precision)) {
            return false
        }

        return goesQuadratically(array, undefined, precision)
    }

const goesQuadraticallyFromValueToValue: <NumericElementType extends Number>(
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
