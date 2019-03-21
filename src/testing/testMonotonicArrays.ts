// tslint:disable ban-types

import { finalElement, isUndefined, SKIP_FIRST_ELEMENT } from '../code'

const testGoesMonotonicallyFromValueToValue: <NumericElementType extends Number>(
    array: NumericElementType[],
    expectedBeginValue: NumericElementType,
    expectedEndValue: NumericElementType,
    precision?: number,
) => void =
    <NumericElementType extends Number>(
        array: NumericElementType[],
        expectedBeginValue: NumericElementType,
        expectedEndValue: NumericElementType,
        precision?: number,
    ): void => {
        if (!isUndefined(precision)) {
            expect(array[ 0 ])
                .toBeCloseTo(expectedBeginValue as unknown as number, precision)
            expect(finalElement(array))
                .toBeCloseTo(expectedEndValue as unknown as number, precision)
        }
        else {
            expect(array[ 0 ])
                .toEqual(expectedBeginValue)
            expect(finalElement(array))
                .toEqual(expectedEndValue)
        }

        testGoesMonotonicallyBetweenValueAndValue(array, expectedBeginValue, expectedEndValue, precision)
    }

const testGoesMonotonicallyBetweenValueAndValue: <NumericElementType extends Number>(
    array: NumericElementType[],
    expectedBeginValue: NumericElementType,
    expectedEndValue: NumericElementType,
    precision?: number,
) => void =
    <NumericElementType extends Number>(
        array: NumericElementType[],
        expectedBeginValue: NumericElementType,
        expectedEndValue: NumericElementType,
        precision?: number,
    ): void => {
        const isIncreasing: boolean = expectedEndValue > expectedBeginValue
        const isDecreasing: boolean = expectedBeginValue > expectedEndValue

        if (isIncreasing) {
            expect(array[ 0 ])
                .toBeGreaterThanOrEqual(expectedBeginValue as unknown as number)
            expect(finalElement(array))
                .toBeLessThanOrEqual(expectedEndValue as unknown as number)
        }
        if (isDecreasing) {
            expect(array[ 0 ])
                .toBeLessThanOrEqual(expectedBeginValue as unknown as number)
            expect(finalElement(array))
                .toBeGreaterThanOrEqual(expectedEndValue as unknown as number)
        }

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

export {
    testGoesMonotonicallyFromValueToValue,
    testGoesMonotonicallyBetweenValueAndValue,
}
