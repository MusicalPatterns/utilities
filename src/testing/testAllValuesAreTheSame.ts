// tslint:disable ban-types

import { initialElement, isUndefined } from '../code'

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
        const expectedValue: NumericElementType = manualExpectedValue || initialElement(array)

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
