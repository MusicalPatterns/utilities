// tslint:disable ban-types

import { forEach, initialElement, isUndefined } from '../code'
import { Ordinal } from '../nominal'

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

        forEach(array, (value: NumericElementType, index: Ordinal) => {
            if (!isUndefined(precision)) {
                expect(value)
                    .toBeCloseTo(
                        expectedValue as unknown as number,
                        precision,
                        `expected ${value} at index ${index} to conform to value ${expectedValue}; \
all values of this array ${array} should be the same`,
                    )
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
