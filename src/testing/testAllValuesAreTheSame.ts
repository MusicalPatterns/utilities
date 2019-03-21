// tslint:disable ban-types

import { isUndefined } from '../code'

const testAllValuesAreTheSame: <NumericElementType extends Number = Number>(
    array: NumericElementType[],
    expectedValue: NumericElementType,
    precision?: number,
) => void =
    <NumericElementType extends Number = Number>(
        array: NumericElementType[],
        expectedValue: NumericElementType,
        precision?: number,
    ): void => {
        array.forEach((value: NumericElementType) => {
            if (!isUndefined(precision)) {
                expect(value)
                    .toBeCloseTo(expectedValue as unknown as number, precision)
            }
            else {
                expect(value)
                    .toEqual(expectedValue)
            }
        })
    }

export {
    testAllValuesAreTheSame,
}
