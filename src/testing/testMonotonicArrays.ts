// tslint:disable ban-types bool-param-default

import { isUndefined } from '../code'
import { goesMonotonically, goesMonotonicallyBetweenValueAndValue, goesMonotonicallyFromValueToValue } from '../math'
import { precisionMessage } from './precisionMessage'

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
            fail(
                `array ${array} did not go monotonically from ${expectedBeginValue} to ${expectedEndValue}\
${precisionMessage(precision)}`,
            )
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
            const fromMessage: string = isUndefined(expectedBeginValue) ? '' : ` from ${expectedBeginValue}`
            fail(`array ${array} did not go monotonically${fromMessage}${precisionMessage(precision)}`)
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
            fail(
                `array ${array} did not go monotonically between ${expectedBeginValue} and ${expectedEndValue}\
${precisionMessage(precision)}`,
            )
        }
    }

export {
    testGoesMonotonicallyFromValueToValue,
    testGoesMonotonicallyBetweenValueAndValue,
    testGoesMonotonically,
}
