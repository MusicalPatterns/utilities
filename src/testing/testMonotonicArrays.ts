// tslint:disable ban-types max-file-line-count bool-param-default

import { finalElement, forEach, initialElement, isUndefined, Maybe, SKIP_FIRST_ELEMENT } from '../code'
import { MULTIPLICATIVE_IDENTITY, quotient } from '../math'
import { from, Ordinal, Scalar } from '../nominal'
import { testGreaterThanOrCloseTo, testLessThanOrCloseTo } from './testIsCloseTo'

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
to the expected begin value ${expectedBeginValue}, to precision ${precision}`,
                )
            expect(finalElement(array))
                .toBeCloseTo(
                    expectedEndValue as unknown as number,
                    precision,
                    `final element ${finalElement(array)} was not close enough \
to the expected end value ${expectedEndValue}, to precision ${precision}`,
                )
        }

        testGoesMonotonicallyBetweenValueAndValue(array, expectedBeginValue, expectedEndValue, precision)
    }

const testGoesMonotonically: <NumericElementType extends Number = Number>(
    array: NumericElementType[],
    manualIsIncreasing?: boolean,
    expectedBeginValue?: NumericElementType,
    precision?: number,
) => void =
    <NumericElementType extends Number = Number>(
        array: NumericElementType[],
        manualIsIncreasing?: boolean,
        expectedBeginValue?: NumericElementType,
        precision?: number,
    ): void => {
        testBeginValue(array, expectedBeginValue, precision)

        let isIncreasing: Maybe<boolean> = manualIsIncreasing

        let previousValue: NumericElementType = initialElement(array)
        forEach(
            array.slice(SKIP_FIRST_ELEMENT),
            (value: NumericElementType, index: Ordinal) => {
                if (isUndefined(isIncreasing)) {
                    isIncreasing = value > previousValue
                }
                else if (isIncreasing) {
                    if (isUndefined(precision)) {
                        expect(value)
                            .toBeGreaterThanOrEqual(
                                previousValue as unknown as number,
                                `array did not go monotonically; \
value ${value} at index ${index} did not weakly increase along with the other elements: ${array}`,
                            )
                    }
                    else {
                        testGreaterThanOrCloseTo(
                            value,
                            previousValue,
                            precision,
                            `array did not go monotonically; \
value ${value} at index ${index} did not weakly increase along with the other elements: ${array}, \
to precision ${precision}`,
                        )
                    }
                }
                else {
                    if (isUndefined(precision)) {
                        expect(value)
                            .toBeLessThanOrEqual(
                                previousValue as unknown as number,
                                `array did not go monotonically; \
value ${value} at index ${index} did not weakly decrease along with the other elements: ${array}`,
                            )
                    }
                    else {
                        testLessThanOrCloseTo(
                            value,
                            previousValue,
                            precision,
                            `array did not go monotonically; \
value ${value} at index ${index} did not weakly decrease along with the other elements: ${array}, \
to precision ${precision}`,
                        )
                    }
                }

                previousValue = value
            },
        )
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
        const isIncreasing: boolean = expectedEndValue > expectedBeginValue

        const initial: NumericElementType = initialElement(array)
        const final: NumericElementType = finalElement(array)

        if (isIncreasing) {
            if (isUndefined(precision)) {
                expect(initial)
                    .toBeGreaterThanOrEqual(
                        expectedBeginValue as unknown as number,
                        `initial element ${initial} was not between the expected values \
${expectedBeginValue} and ${expectedEndValue}`,
                    )
                expect(final)
                    .toBeLessThanOrEqual(
                        expectedEndValue as unknown as number,
                        `final element ${final} was not between the expected values \
${expectedBeginValue} and ${expectedEndValue}`,
                    )
            }
            else {
                testGreaterThanOrCloseTo(
                    initial,
                    expectedBeginValue,
                    precision,
                    `initial element ${initial} was not between the expected values \
${expectedBeginValue} and ${expectedEndValue}, to precision ${precision}`,
                )
                testLessThanOrCloseTo(
                    final,
                    expectedEndValue,
                    precision,
                    `final element ${final} was not between the expected values \
${expectedBeginValue} and ${expectedEndValue}, to precision ${precision}`,
                )
            }
        }
        else {
            if (isUndefined(precision)) {
                expect(initial)
                    .toBeLessThanOrEqual(
                        expectedBeginValue as unknown as number,
                        `initial element ${initial} was not between the expected values \
${expectedBeginValue} and ${expectedEndValue}`,
                    )
                expect(final)
                    .toBeGreaterThanOrEqual(
                        expectedEndValue as unknown as number,
                        `final element ${final} was not between the expected values \
${expectedBeginValue} and ${expectedEndValue}`,
                    )
            }
            else {
                testLessThanOrCloseTo(
                    initial,
                    expectedBeginValue,
                    precision,
                    `initial element ${initial} was not between the expected values \
${expectedBeginValue} and ${expectedEndValue}, to precision ${precision}`,
                )
                testGreaterThanOrCloseTo(
                    final,
                    expectedEndValue,
                    precision,
                    `final element ${final} was not between the expected values \
${expectedBeginValue} and ${expectedEndValue}, to precision ${precision}`,
                )
            }
        }

        testGoesMonotonically(array, isIncreasing)
    }

const testBeginValue: <NumericElementType extends Number = Number>(
    array: NumericElementType[],
    expectedBeginValue?: NumericElementType,
    precision?: number,
) => void =
    <NumericElementType extends Number = Number>(
        array: NumericElementType[],
        expectedBeginValue?: NumericElementType,
        precision?: number,
    ): void => {
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
        const isIncreasing: boolean = expectedFactor > MULTIPLICATIVE_IDENTITY

        const actualFactor: NumericElementType = quotient(finalElement(array), initialElement(array))

        testBeginValue(array, expectedBeginValue, precision)

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
    testBeginValue,
}
