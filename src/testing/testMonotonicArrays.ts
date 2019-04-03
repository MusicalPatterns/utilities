// tslint:disable ban-types bool-param-default

import { isUndefined } from '../code'
import { goesMonotonically, goesMonotonicallyBetweenValueAndValue, goesMonotonicallyFromValueToValue } from '../math'
import { precisionMessage } from './precisionMessage'

const testGoesMonotonicallyFromValueToValue: <NumericElementType extends Number = Number>(
    array: NumericElementType[],
    expectedBeginValue: NumericElementType,
    expectedEndValue: NumericElementType,
    precision?: number,
    message?: string,
) => void =
    <NumericElementType extends Number = Number>(
        array: NumericElementType[],
        expectedBeginValue: NumericElementType,
        expectedEndValue: NumericElementType,
        precision?: number,
        message?: string,
    ): void => {
        if (!goesMonotonicallyFromValueToValue(array, expectedBeginValue, expectedEndValue, precision)) {
            fail(
                isUndefined(message) ?
                    `array ${array} did not go monotonically from ${expectedBeginValue} to ${expectedEndValue}\
${precisionMessage(precision)}` :
                    message,
            )
        }
    }

const testGoesMonotonically: <NumericElementType extends Number = Number>(
    array: NumericElementType[],
    expectedBeginValue?: NumericElementType,
    precision?: number,
    message?: string,
) => void =
    <NumericElementType extends Number = Number>(
        array: NumericElementType[],
        expectedBeginValue?: NumericElementType,
        precision?: number,
        message?: string,
    ): void => {
        if (!goesMonotonically(array, expectedBeginValue, undefined, precision)) {
            const fromMessage: string = isUndefined(expectedBeginValue) ? '' : ` from ${expectedBeginValue}`
            fail(
                isUndefined(message) ?
                    `array ${array} did not go monotonically${fromMessage}${precisionMessage(precision)}` :
                    message,
            )
        }
    }

const testGoesMonotonicallyBetweenValueAndValue: <NumericElementType extends Number = Number>(
    array: NumericElementType[],
    expectedBeginValue: NumericElementType,
    expectedEndValue: NumericElementType,
    precision?: number,
    message?: string,
) => void =
    <NumericElementType extends Number = Number>(
        array: NumericElementType[],
        expectedBeginValue: NumericElementType,
        expectedEndValue: NumericElementType,
        precision?: number,
        message?: string,
    ): void => {
        if (!goesMonotonicallyBetweenValueAndValue(array, expectedBeginValue, expectedEndValue, precision)) {
            fail(
                isUndefined(message) ?
                    `array ${array} did not go monotonically between ${expectedBeginValue} and ${expectedEndValue}\
${precisionMessage(precision)}` :
                    message,
            )
        }
    }

export {
    testGoesMonotonicallyFromValueToValue,
    testGoesMonotonicallyBetweenValueAndValue,
    testGoesMonotonically,
}
