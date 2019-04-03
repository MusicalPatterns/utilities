// tslint:disable ban-types

import { isUndefined } from '../code'
import { goesQuadratically, goesQuadraticallyBetweenValueAndValue, goesQuadraticallyFromValueToValue } from '../math'
import { precisionMessage } from './precisionMessage'

const testGoesQuadraticallyBetweenValueAndValue: <NumericElementType extends Number = Number>(
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
        if (!goesQuadraticallyBetweenValueAndValue(array, expectedBeginValue, expectedEndValue, precision)) {
            fail(
                isUndefined(message) ?
                    `array ${array} did not go quadratically between ${expectedBeginValue} and ${expectedEndValue}\
${precisionMessage(precision)}` :
                    message,
            )
        }
    }

const testGoesQuadraticallyFromValueToValue: <NumericElementType extends Number = Number>(
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
        if (!goesQuadraticallyFromValueToValue(array, expectedBeginValue, expectedEndValue, precision)) {
            fail(
                isUndefined(message) ?
                    `array ${array} did not go quadratically from ${expectedBeginValue} to ${expectedEndValue}\
${precisionMessage(precision)}` :
                    message,
            )
        }
    }

const testGoesQuadratically: <NumericElementType extends Number = Number>(
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
        if (!goesQuadratically(array, expectedBeginValue, precision)) {
            const fromMessage: string = isUndefined(expectedBeginValue) ? '' : ` from ${expectedBeginValue}`
            fail(
                isUndefined(message) ?
                    `array ${array} did not go quadratically${fromMessage}${precisionMessage(precision)}` :
                    message,
            )
        }
    }

export {
    testGoesQuadratically,
    testGoesQuadraticallyBetweenValueAndValue,
    testGoesQuadraticallyFromValueToValue,
}
