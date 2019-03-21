// tslint:disable ban-types max-file-line-count

import { finalElement, initialElement, isUndefined, SKIP_FIRST_ELEMENT } from '../code'
import { isPositive, product, quotient } from '../math'
import { from, Scalar } from '../nominal'

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
        if (!isUndefined(precision)) {
            expect(initialElement(array))
                .toBeCloseTo(expectedBeginValue as unknown as number, precision)
            expect(finalElement(array))
                .toBeCloseTo(expectedEndValue as unknown as number, precision)
        }
        else {
            expect(initialElement(array))
                .toEqual(expectedBeginValue)
            expect(finalElement(array))
                .toEqual(expectedEndValue)
        }

        testGoesMonotonicallyBetweenValueAndValue(array, expectedBeginValue, expectedEndValue)
    }

const testGoesMonotonically: <NumericElementType extends Number = Number>(
    array: NumericElementType[],
    isIncreasing: boolean,
) => void =
    <NumericElementType extends Number = Number>(
        array: NumericElementType[],
        isIncreasing: boolean,
    ): void => {
        let previousValue: NumericElementType = initialElement(array)
        array.slice(SKIP_FIRST_ELEMENT)
            .forEach((value: NumericElementType) => {
                if (isIncreasing) {
                    expect(value)
                        .toBeGreaterThanOrEqual(previousValue as unknown as number)
                }
                else {
                    expect(value)
                        .toBeLessThanOrEqual(previousValue as unknown as number)
                }

                previousValue = value
            })
    }

const testGoesMonotonicallyBetweenValueAndValue: <NumericElementType extends Number = Number>(
    array: NumericElementType[],
    expectedBeginValue: NumericElementType,
    expectedEndValue: NumericElementType,
) => void =
    <NumericElementType extends Number = Number>(
        array: NumericElementType[],
        expectedBeginValue: NumericElementType,
        expectedEndValue: NumericElementType,
    ): void => {
        const isIncreasing: boolean = expectedEndValue > expectedBeginValue

        if (isIncreasing) {
            expect(array[ 0 ])
                .toBeGreaterThanOrEqual(expectedBeginValue as unknown as number)
            expect(finalElement(array))
                .toBeLessThanOrEqual(expectedEndValue as unknown as number)
        }
        else {
            expect(array[ 0 ])
                .toBeLessThanOrEqual(expectedBeginValue as unknown as number)
            expect(finalElement(array))
                .toBeGreaterThanOrEqual(expectedEndValue as unknown as number)
        }

        testGoesMonotonically(array, isIncreasing)
    }

const testGoesMonotonicallyByAFactorOf: <NumericElementType extends Number = Number>(
    array: NumericElementType[],
    factor: Scalar,
) => void =
    <NumericElementType extends Number = Number>(
        array: NumericElementType[],
        factor: Scalar,
    ): void => {
        const isIncreasing: boolean = isPositive(factor)

        expect(quotient(initialElement(array), finalElement(array)))
            .toBeCloseTo(from.Scalar(factor))

        testGoesMonotonically(array, isIncreasing)
    }

export {
    testGoesMonotonicallyFromValueToValue,
    testGoesMonotonicallyBetweenValueAndValue,
    testGoesMonotonicallyByAFactorOf,
}
