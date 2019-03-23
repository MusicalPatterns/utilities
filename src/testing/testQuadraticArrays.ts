// tslint:disable ban-types

import { computeDeltas, computeIntervals } from '../math'
import { Scalar } from '../nominal'
import { testAllValuesAreTheSame } from './testAllValuesAreTheSame'
import {
    testGoesMonotonicallyBetweenValueAndValue,
    testGoesMonotonicallyByAFactorOf,
    testGoesMonotonicallyFromValueToValue,
} from './testMonotonicArrays'

const testGoesQuadraticallyByAFactorOf: <NumericElementType extends Number = Number>(
    array: NumericElementType[],
    expectedFactor: Scalar,
    expectedBeginValue?: NumericElementType,
    precision?: number,
) => void =
    <NumericElementType extends Number = Number>(
        array: NumericElementType[],
        expectedFactor: Scalar,
        expectedBeginValue?: NumericElementType,
        precision?: number,
    ): void => {
        testGoesMonotonicallyByAFactorOf(array, expectedFactor, expectedBeginValue, precision)

        testGoesQuadratically(array, precision)
    }

const testGoesQuadraticallyBetweenValueAndValue: <NumericElementType extends Number = Number>(
    array: NumericElementType[],
    expectedBeginValue: NumericElementType,
    expectedEndValue: NumericElementType,
    precision?: number,
) => void =
    <NumericElementType extends Number = Number>(
        array: NumericElementType[],
        expectedBeginValue: NumericElementType,
        expectedEndValue: NumericElementType,
        precision?: number,
    ): void => {
        testGoesMonotonicallyBetweenValueAndValue(array, expectedBeginValue, expectedEndValue)

        testGoesQuadratically(array, precision)
    }

const testGoesQuadraticallyFromValueToValue: <NumericElementType extends Number = Number>(
    array: NumericElementType[],
    expectedBeginValue: NumericElementType,
    expectedEndValue: NumericElementType,
    precision?: number,
) => void =
    <NumericElementType extends Number = Number>(
        array: NumericElementType[],
        expectedBeginValue: NumericElementType,
        expectedEndValue: NumericElementType,
        precision?: number,
    ): void => {
        testGoesMonotonicallyFromValueToValue(array, expectedBeginValue, expectedEndValue, precision)

        testGoesQuadratically(array, precision)
    }

const testGoesQuadratically: <NumericElementType extends Number = Number>(
    array: NumericElementType[],
    precision?: number,
) => void =
    <NumericElementType extends Number = Number>(
        array: NumericElementType[],
        precision?: number,
    ): void => {
        testAllValuesAreTheSame(computeIntervals(computeDeltas(array)), undefined, precision)
    }

export {
    testGoesQuadratically,
    testGoesQuadraticallyBetweenValueAndValue,
    testGoesQuadraticallyFromValueToValue,
    testGoesQuadraticallyByAFactorOf,
}
