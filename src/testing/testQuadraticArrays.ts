// tslint:disable ban-types

import { isUndefined } from '../code'
import { goesQuadratically, goesQuadraticallyBetweenValueAndValue, goesQuadraticallyFromValueToValue } from '../math'
import { precisionMessage } from './precisionMessage'

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
            fail(
                `array ${array} did not go quadratically between ${expectedBeginValue} and ${expectedEndValue}\
${precisionMessage(precision)}`,
            )
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
            fail(
                `array ${array} did not go quadratically from ${expectedBeginValue} to ${expectedEndValue}\
${precisionMessage(precision)}`,
            )
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
            const fromMessage: string = isUndefined(expectedBeginValue) ? '' : ` from ${expectedBeginValue}`
            fail(`array ${array} did not go quadratically${fromMessage}${precisionMessage(precision)}`)
        }
    }

export {
    testGoesQuadratically,
    testGoesQuadraticallyBetweenValueAndValue,
    testGoesQuadraticallyFromValueToValue,
}
