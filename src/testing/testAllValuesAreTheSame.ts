// tslint:disable ban-types

import { isUndefined } from '../code'
import { allValuesAreTheSame } from '../math'

const testAllValuesAreTheSame: <NumericElementType extends Number = Number>(
    array: NumericElementType[],
    manualExpectedValue?: NumericElementType,
    precision?: number,
    message?: string,
) => void =
    <NumericElementType extends Number = Number>(
        array: NumericElementType[],
        manualExpectedValue?: NumericElementType,
        precision?: number,
        message?: string,
    ): void => {
        if (!allValuesAreTheSame(array, manualExpectedValue, precision)) {
            fail(isUndefined(message) ? `expected all values to be the same` : message)
        }
    }

export {
    testAllValuesAreTheSame,
}
