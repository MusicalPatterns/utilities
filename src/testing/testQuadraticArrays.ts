// tslint:disable ban-types

import {
    goesQuadratically,
    goesQuadraticallyBetweenValueAndValue,
    goesQuadraticallyFromValueToValue,
} from '../math'

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
        if (!goesQuadraticallyBetweenValueAndValue(array, expectedBeginValue, expectedEndValue, precision)) {
            fail(`did not go quadratically between ${expectedBeginValue} and ${expectedEndValue}`)
        }
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
        if (!goesQuadraticallyFromValueToValue(array, expectedBeginValue, expectedEndValue, precision)) {
            fail(`array did not go quadratically from ${expectedBeginValue} to ${expectedEndValue}`)
        }
    }

const testGoesQuadratically: <NumericElementType extends Number = Number>(
    array: NumericElementType[],
    expectedBeginValue?: NumericElementType,
    precision?: number,
) => void =
    <NumericElementType extends Number = Number>(
        array: NumericElementType[],
        expectedBeginValue?: NumericElementType,
        precision?: number,
    ): void => {
        if (!goesQuadratically(array, expectedBeginValue, precision)) {
            fail('array did not go quadratically')
        }
    }

export {
    testGoesQuadratically,
    testGoesQuadraticallyBetweenValueAndValue,
    testGoesQuadraticallyFromValueToValue,
}
