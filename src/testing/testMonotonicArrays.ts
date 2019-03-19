// tslint:disable ban-types

import { finalElement, isUndefined, SKIP_FIRST_ELEMENT } from '../code'

const testGoesMonotonicallyFromValueToValue: <NumericElementType extends Number>(
    array: NumericElementType[],
    expectedFirstValue: NumericElementType,
    expectedSecondValue: NumericElementType,
    precision?: number,
) => void =
    <NumericElementType extends Number>(
        array: NumericElementType[],
        expectedFirstValue: NumericElementType,
        expectedSecondValue: NumericElementType,
        precision?: number,
    ): void => {
        if (!isUndefined(precision)) {
            expect(array[ 0 ])
                .toBeCloseTo(expectedFirstValue as unknown as number, precision)
            expect(finalElement(array))
                .toBeCloseTo(expectedSecondValue as unknown as number, precision)
        }
        else {
            expect(array[ 0 ])
                .toEqual(expectedFirstValue)
            expect(finalElement(array))
                .toEqual(expectedSecondValue)
        }

        const isIncreasing: boolean = expectedSecondValue > expectedFirstValue
        const isDecreasing: boolean = expectedFirstValue > expectedSecondValue

        let previousValue: NumericElementType = array[ 0 ]
        array.slice(SKIP_FIRST_ELEMENT)
            .forEach((value: NumericElementType) => {
                if (isIncreasing) {
                    expect(value)
                        .toBeGreaterThanOrEqual(previousValue as unknown as number)
                }
                else if (isDecreasing) {
                    expect(value)
                        .toBeLessThanOrEqual(previousValue as unknown as number)
                }
                else {
                    if (!isUndefined(precision)) {
                        expect(value)
                            .toBeCloseTo(previousValue as unknown as number, precision)
                    }
                    else {
                        expect(value)
                            .toEqual(previousValue)
                    }
                }

                previousValue = value
            })
    }

const testAllValuesAreTheSame: <NumericElementType extends Number>(
    array: NumericElementType[],
    expectedValue: NumericElementType,
    precision?: number,
) => void =
    <NumericElementType extends Number>(
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
    testGoesMonotonicallyFromValueToValue,
    testAllValuesAreTheSame,
}
