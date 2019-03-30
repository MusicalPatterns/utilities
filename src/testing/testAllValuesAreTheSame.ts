// tslint:disable ban-types

import { allValuesAreTheSame } from '../math'

const testAllValuesAreTheSame: <NumericElementType extends Number = Number>(
    array: NumericElementType[],
    manualExpectedValue?: NumericElementType,
    precision?: number,
) => void =
    <NumericElementType extends Number = Number>(
        array: NumericElementType[],
        manualExpectedValue?: NumericElementType,
        precision?: number,
    ): void => {
        if (!allValuesAreTheSame(array, manualExpectedValue, precision)) {
            fail(`expected all values to be the same`)
        }
    }

export {
    testAllValuesAreTheSame,
}
