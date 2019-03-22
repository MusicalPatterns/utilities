// tslint:disable ban-types max-file-line-count bool-param-default

import { finalElement, forEach, initialElement, isUndefined, Maybe, SKIP_FIRST_ELEMENT } from '../code'
import { isPositive, quotient } from '../math'
import { from, Ordinal, Scalar } from '../nominal'

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
        if (isUndefined(precision)) {
            expect(initialElement(array))
                .toEqual(
                    expectedBeginValue,
                    `initial element ${initialElement(array)} was not equal \
to the expected begin value ${expectedBeginValue}`,
                )
            expect(finalElement(array))
                .toEqual(
                    expectedEndValue,
                    `final element ${finalElement(array)} was not equal \
to the expected end value ${expectedEndValue}`,
                )
        }
        else {
            expect(initialElement(array))
                .toBeCloseTo(
                    expectedBeginValue as unknown as number,
                    precision,
                    `initial element ${initialElement(array)} was not close enough \
to the expected begin value ${expectedBeginValue}, with precision ${precision}`,
                )
            expect(finalElement(array))
                .toBeCloseTo(
                    expectedEndValue as unknown as number,
                    precision,
                    `final element ${finalElement(array)} was not close enough \
to the expected end value ${expectedEndValue}, with precision ${precision}`,
                )
        }

        testGoesMonotonicallyBetweenValueAndValue(array, expectedBeginValue, expectedEndValue)
    }

const testGoesMonotonically: <NumericElementType extends Number = Number>(
    array: NumericElementType[],
    manualIsIncreasing?: boolean,
) => void =
    <NumericElementType extends Number = Number>(
        array: NumericElementType[],
        manualIsIncreasing?: boolean,
    ): void => {
        let isIncreasing: Maybe<boolean> = manualIsIncreasing

        let previousValue: NumericElementType = initialElement(array)
        forEach(
            array.slice(SKIP_FIRST_ELEMENT),
            (value: NumericElementType, index: Ordinal) => {
                if (isUndefined(isIncreasing)) {
                    isIncreasing = value > previousValue
                }
                else if (isIncreasing) {
                    expect(value)
                        .toBeGreaterThanOrEqual(
                            previousValue as unknown as number,
                            `array did not go monotonically; \
value ${value} at index ${index} did not weakly increase along with the other elements: ${array}`,
                        )
                }
                else {
                    expect(value)
                        .toBeLessThanOrEqual(
                            previousValue as unknown as number,
                            `array did not go monotonically; \
value ${value} at index ${index} did not weakly decrease along with the other elements: ${array}`,
                        )
                }

                previousValue = value
            },
        )
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
            expect(initialElement(array))
                .toBeGreaterThanOrEqual(
                    expectedBeginValue as unknown as number,
                    `initial element ${initialElement(array)} was not between the expected values \
${expectedBeginValue} and ${expectedEndValue}`,
                )
            expect(finalElement(array))
                .toBeLessThanOrEqual(
                    expectedEndValue as unknown as number,
                    `final element ${finalElement(array)} was not between the expected values \
${expectedBeginValue} and ${expectedEndValue}`,
                )
        }
        else {
            expect(initialElement(array))
                .toBeLessThanOrEqual(
                    expectedBeginValue as unknown as number,
                    `initial element ${initialElement(array)} was not between the expected values \
${expectedBeginValue} and ${expectedEndValue}`,
                )
            expect(finalElement(array))
                .toBeGreaterThanOrEqual(
                    expectedEndValue as unknown as number,
                    `final element ${finalElement(array)} was not between the expected values \
${expectedBeginValue} and ${expectedEndValue}`,
                )
        }

        testGoesMonotonically(array, isIncreasing)
    }

const testGoesMonotonicallyByAFactorOf: <NumericElementType extends Number = Number>(
    array: NumericElementType[],
    expectedFactor: Scalar,
    expectedBeginValue?: NumericElementType,
    precision?: number,
) => void =
    <NumericElementType extends Number = Number>(
        array: NumericElementType[],
        expectedFactor: Scalar,
        expectedBeginValue?: NumericElementType,
        precision?: number,
    ): void => {
        const isIncreasing: boolean = isPositive(expectedFactor)

        const actualFactor: NumericElementType = quotient(finalElement(array), initialElement(array))

        if (!isUndefined(expectedBeginValue)) {
            if (isUndefined(precision)) {
                expect(initialElement(array))
                    .toEqual(
                        expectedBeginValue,
                        `array did not begin at expected value ${expectedBeginValue}; \
it began at ${initialElement(array)}; array was ${array}`,
                    )
            }
            else {
                expect(initialElement(array))
                    .toBeCloseTo(
                        expectedBeginValue as unknown as number,
                        precision,
                        `array did not begin close to expected value ${expectedBeginValue}; \
it began at ${initialElement(array)}; array was ${array}; precision used was ${precision}`,
                    )
            }
        }

        if (isUndefined(precision)) {
            expect(actualFactor)
                .toEqual(
                    from.Scalar<number, Scalar>(expectedFactor) as unknown as NumericElementType,
                    `this array does not change by a factor of ${expectedFactor}; \
ratio between initial and final elements is instead ${actualFactor}`,
                )
        }
        else {
            expect(actualFactor)
                .toBeCloseTo(
                    from.Scalar(expectedFactor),
                    precision,
                    `this array does not change by a factor of ${expectedFactor}; \
ratio between initial and final elements is instead ${actualFactor}; precision used in test was ${precision}`,
                )
        }

        testGoesMonotonically(array, isIncreasing)
    }

export {
    testGoesMonotonicallyFromValueToValue,
    testGoesMonotonicallyBetweenValueAndValue,
    testGoesMonotonicallyByAFactorOf,
    testGoesMonotonically,
}
