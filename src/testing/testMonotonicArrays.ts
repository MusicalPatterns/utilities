// tslint:disable ban-types bool-param-default

import { isUndefined } from '../code'
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
            const precisionMessage: string = isUndefined(precision) ? '' : `, with precision ${precision}`
            fail(
                `array ${array} did not go monotonically from ${expectedBeginValue} to ${expectedEndValue}\
${precisionMessage}`,
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
            const precisionMessage: string = isUndefined(precision) ? '' : `, with precision ${precision}`
            fail(`array ${array} did not go monotonically${fromMessage}${precisionMessage}`)
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
            const precisionMessage: string = isUndefined(precision) ? '' : `, with precision ${precision}`
            fail(
                `array ${array} did not go monotonically between ${expectedBeginValue} and ${expectedEndValue}\
${precisionMessage}`,
            )
        }
    }

export {
    testGoesMonotonicallyFromValueToValue,
    testGoesMonotonicallyBetweenValueAndValue,
    testGoesMonotonically,
}
