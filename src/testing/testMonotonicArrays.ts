// tslint:disable ban-types bool-param-default

import { goesMonotonically, goesMonotonicallyBetweenValueAndValue, goesMonotonicallyFromValueToValue } from '../math'

const testGoesMonotonicallyFromValueToValue: <NumericElementType extends Number = Number>(
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
        if (!goesMonotonicallyFromValueToValue(array, expectedBeginValue, expectedEndValue, precision)) {
            fail(`array did not go monotonically from ${expectedBeginValue} to ${expectedEndValue}`)
        }
    }

const testGoesMonotonically: <NumericElementType extends Number = Number>(
    array: NumericElementType[],
    expectedBeginValue?: NumericElementType,
    precision?: number,
) => void =
    <NumericElementType extends Number = Number>(
        array: NumericElementType[],
        expectedBeginValue?: NumericElementType,
        precision?: number,
    ): void => {
        if (!goesMonotonically(array, expectedBeginValue, undefined, precision)) {
            fail('array did not go monotonically')
        }
    }

const testGoesMonotonicallyBetweenValueAndValue: <NumericElementType extends Number = Number>(
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
        if (!goesMonotonicallyBetweenValueAndValue(array, expectedBeginValue, expectedEndValue, precision)) {
            fail(`array did not go monotonically between ${expectedBeginValue} and ${expectedEndValue}`)
        }
    }

export {
    testGoesMonotonicallyFromValueToValue,
    testGoesMonotonicallyBetweenValueAndValue,
    testGoesMonotonically,
}
