// tslint:disable object-literal-sort-keys max-file-line-count
import {
    allValuesAreTheSame,
    areCyclicalTranslations,
    ArrayedOrStringType,
    deepEqual,
    forEach,
    goesMonotonically,
    goesMonotonicallyBetweenValueAndValue,
    goesMonotonicallyFromValueToValue,
    goesQuadratically,
    goesQuadraticallyBetweenValueAndValue,
    goesQuadraticallyFromValueToValue,
    isCloseTo,
    isGreaterThan,
    isGreaterThanOrEqualTo,
    isLessThan,
    isLessThanOrEqualTo,
    isUndefined,
    Ordinal,
    Point,
    use,
} from '@musical-patterns/utilities'
import CustomEqualityTester = jasmine.CustomEqualityTester
import CustomMatcher = jasmine.CustomMatcher
import CustomMatcherFactories = jasmine.CustomMatcherFactories
import CustomMatcherResult = jasmine.CustomMatcherResult
import MatchersUtil = jasmine.MatchersUtil

const precisionMessage: (precision?: number) => string =
    (precision?: number): string =>
        isUndefined(precision) ? '' : `, with precision ${precision}`

const failWith: (message: string) => CustomMatcherResult =
    (message: string): CustomMatcherResult => ({
        message,
        pass: false,
    })

const doAssertions: (logicFunc: VoidFunction) => CustomMatcherResult =
    (logicFunc: VoidFunction): CustomMatcherResult => {
        try {
            logicFunc()

            return { pass: true }
        }
        catch (e) {
            return failWith(e.toString())
        }
    }

const assert: (condition: boolean, message: string) => void =
    (condition: boolean, message: string): void => {
        if (condition) {
            return
        }
        throw message
    }

const testIsCloseTo: <NumericType extends Number>(
    actual: NumericType,
    expected: NumericType,
    precision?: number,
    // tslint:disable-next-line bool-param-default
    negate?: boolean,
    message?: string,
) => void = <NumericType extends Number>(
    actual: NumericType,
    expected: NumericType,
    precision?: number,
    // tslint:disable-next-line bool-param-default
    negate?: boolean,
    message?: string,
): void => {
    const isClose: boolean = isCloseTo(actual, expected, precision)

    if (negate) {
        assert(
            !isClose,
            isUndefined(message) ?
                `expected ${String(actual)} not to be close to ${String(expected)}${precisionMessage(precision)}` :
                message,
        )
    }
    else {
        assert(
            isClose,
            isUndefined(message) ?
                `expected ${String(actual)} to be close to ${String(expected)}${precisionMessage(precision)}` :
                message,
        )
    }
}

const customMatchers: CustomMatcherFactories = {
    toBeCloseToTyped: (util: MatchersUtil, customEqualityTesters: readonly CustomEqualityTester[]): CustomMatcher => ({
        compare: <NumericType extends Number>(
            actual: NumericType,
            expected: NumericType,
            precision?: number,
            negate: boolean = false,
            message?: string,
        ): CustomMatcherResult =>
            doAssertions(() => {
                testIsCloseTo(actual, expected, precision, negate, message)
            }),
    }),
    toBeGreaterThanOrCloseTo: (util: MatchersUtil, customEqualityTesters: readonly CustomEqualityTester[]): CustomMatcher => ({
        compare: <NumericType extends Number>(
            actual: NumericType,
            expected: NumericType,
            precision?: number,
            message?: string,
        ): CustomMatcherResult =>
            doAssertions(() => {
                assert(
                    isGreaterThanOrEqualTo(actual, expected) || isCloseTo(actual, expected, precision),
                    isUndefined(message) ?
                        `expected ${String(actual)} to be greater than or close to ${String(expected)}` :
                        message,
                )
            }),
    }),
    toBeLessThanOrCloseTo: (util: MatchersUtil, customEqualityTesters: readonly CustomEqualityTester[]): CustomMatcher => ({
        compare: <NumericType extends Number>(
            actual: NumericType,
            expected: NumericType,
            precision?: number,
            message?: string,
        ): CustomMatcherResult =>
            doAssertions(() => {
                assert(
                    isLessThanOrEqualTo(actual, expected) || isCloseTo(actual, expected, precision),
                    isUndefined(message) ?
                        `expected ${String(actual)} to be greater than or close to ${String(expected)}` :
                        message,
                )
            }),
    }),
    toBeHomogenous: (util: MatchersUtil, customEqualityTesters: readonly CustomEqualityTester[]): CustomMatcher => ({
        compare: <NumericElementType extends Number>(
            actualArray: NumericElementType[],
            manualExpectedElementValue?: NumericElementType,
            precision?: number,
            message?: string,
        ): CustomMatcherResult =>
            doAssertions(() => {
                assert(
                    allValuesAreTheSame(actualArray, manualExpectedElementValue, precision),
                    isUndefined(message) ? `expected all values to be the same` : message,
                )
            }),
    }),
    toBeCloseToArray: (util: MatchersUtil, customEqualityTesters: readonly CustomEqualityTester[]): CustomMatcher => ({
        compare: <NumericElementType extends Number>(
            actual: NumericElementType[],
            expected: NumericElementType[],
            precision?: number,
            // tslint:disable-next-line bool-param-default
            negate?: boolean,
            message?: string,
        ): CustomMatcherResult =>
            doAssertions(() => {
                assert(
                    actual.length === expected.length,
                    isUndefined(message) ?
                        `Expected actual's ${actual.length} length to be ${expected.length}` :
                        message,
                )

                forEach(expected, (expectedElement: NumericElementType, index: Ordinal<NumericElementType[]>): void => {
                    const actualElement: NumericElementType = use.Ordinal(actual, index)

                    testIsCloseTo(actualElement, expectedElement, precision, negate, message)
                })
            }),
    }),
    toBeCloseSoFar: (util: MatchersUtil, customEqualityTesters: readonly CustomEqualityTester[]): CustomMatcher => ({
        compare: <NumericElementType extends Number>(
            actual: NumericElementType[],
            expected: NumericElementType[],
            precision?: number,
            // tslint:disable-next-line bool-param-default
            negate?: boolean,
            message?: string,
        ): CustomMatcherResult =>
            doAssertions(() => {
                forEach(expected, (expectedElement: NumericElementType, index: Ordinal<NumericElementType[]>): void => {
                    const actualElement: NumericElementType = use.Ordinal(actual, index)

                    testIsCloseTo(actualElement, expectedElement, precision, negate, message)
                })
            }),
    }),
    toHaveSameMembersAs: (util: MatchersUtil, customEqualityTesters: readonly CustomEqualityTester[]): CustomMatcher => ({
        compare: <ElementType extends Number>(
            actual: ElementType[],
            expected: ElementType[],
            message?: string,
        ): CustomMatcherResult =>
            doAssertions(() => {
                assert(
                    deepEqual(expected.sort(), actual.sort()),
                    isUndefined(message) ? `arrays did not have same elements: ${String(expected)} vs ${String(actual)}` : message,
                )
            }),
    }),
    toBeLessThanTyped: (util: MatchersUtil, customEqualityTesters: readonly CustomEqualityTester[]): CustomMatcher => ({
        compare: <NumericType extends Number>(
            actual: NumericType,
            expected: NumericType,
            message?: string,
        ): CustomMatcherResult =>
            doAssertions(() => {
                assert(
                    isLessThan(actual, expected),
                    isUndefined(message) ? `expected ${String(actual)} to be less than ${String(expected)}` : message,
                )
            }),
    }),
    toBeGreaterThanTyped: (util: MatchersUtil, customEqualityTesters: readonly CustomEqualityTester[]): CustomMatcher => ({
        compare: <NumericType extends Number>(
            actual: NumericType,
            expected: NumericType,
            message?: string,
        ): CustomMatcherResult =>
            doAssertions(() => {
                assert(
                    isGreaterThan(actual, expected),
                    isUndefined(message) ? `expected ${String(actual)} to be less than ${String(expected)}` : message,
                )
            }),
    }),
    toBeLessThanOrEqualTyped: (util: MatchersUtil, customEqualityTesters: readonly CustomEqualityTester[]): CustomMatcher => ({
        compare: <NumericType extends Number>(
            actual: NumericType,
            expected: NumericType,
            message?: string,
        ): CustomMatcherResult =>
            doAssertions(() => {
                assert(
                    isLessThanOrEqualTo(actual, expected),
                    isUndefined(message) ? `expected ${String(actual)} to be less than ${String(expected)}` : message,
                )
            }),
    }),
    toBeGreaterThanOrEqualTyped: (util: MatchersUtil, customEqualityTesters: readonly CustomEqualityTester[]): CustomMatcher => ({
        compare: <NumericType extends Number>(
            actual: NumericType,
            expected: NumericType,
            message?: string,
        ): CustomMatcherResult =>
            doAssertions(() => {
                assert(
                    isGreaterThanOrEqualTo(actual, expected),
                    isUndefined(message) ? `expected ${String(actual)} to be less than ${String(expected)}` : message,
                )
            }),
    }),
    toGoMonotonically: (util: MatchersUtil, customEqualityTesters: readonly CustomEqualityTester[]): CustomMatcher => ({
        compare: <NumericElementType extends Number>(
            array: Array<Point<NumericElementType>>,
            expectedBeginValue?: Point<NumericElementType>,
            precision?: number,
            message?: string,
        ): CustomMatcherResult =>
            doAssertions(() => {
                const fromMessage: string = isUndefined(expectedBeginValue) ? '' : ` from ${String(expectedBeginValue)}`
                assert(
                    goesMonotonically(array, expectedBeginValue, undefined, precision),
                    isUndefined(message) ?
                        `array ${String(array)} did not go monotonically${fromMessage}${precisionMessage(precision)}` :
                        message,
                )
            }),
    }),
    toGoMonotonicallyBetweenValueAndValue: (util: MatchersUtil, customEqualityTesters: readonly CustomEqualityTester[]): CustomMatcher => ({
        compare: <NumericElementType extends Number>(
            array: Array<Point<NumericElementType>>,
            expectedBeginValue: Point<NumericElementType>,
            expectedEndValue: Point<NumericElementType>,
            precision?: number,
            message?: string,
        ): CustomMatcherResult =>
            doAssertions(() => {
                assert(
                    goesMonotonicallyBetweenValueAndValue(array, expectedBeginValue, expectedEndValue, precision),
                    isUndefined(message) ?
                        `array ${String(array)} did not go monotonically between ${String(expectedBeginValue)} and ${String(expectedEndValue)}${precisionMessage(precision)}` :
                        message,
                )
            }),
    }),
    toGoMonotonicallyFromValueToValue: (util: MatchersUtil, customEqualityTesters: readonly CustomEqualityTester[]): CustomMatcher => ({
        compare: <NumericElementType extends Number>(
            array: Array<Point<NumericElementType>>,
            expectedBeginValue: Point<NumericElementType>,
            expectedEndValue: Point<NumericElementType>,
            precision?: number,
            message?: string,
        ): CustomMatcherResult =>
            doAssertions(() => {
                assert(
                    goesMonotonicallyFromValueToValue(array, expectedBeginValue, expectedEndValue, precision),
                    isUndefined(message) ?
                        `array ${String(array)} did not go monotonically from ${String(expectedBeginValue)} to ${String(expectedEndValue)}${precisionMessage(precision)}` :
                        message,
                )
            }),
    }),
    toGoQuadratically: (util: MatchersUtil, customEqualityTesters: readonly CustomEqualityTester[]): CustomMatcher => ({
        compare: <NumericElementType extends Number>(
            array: Array<Point<NumericElementType>>,
            expectedBeginValue?: Point<NumericElementType>,
            precision?: number,
            message?: string,
        ): CustomMatcherResult =>
            doAssertions(() => {
                const fromMessage: string = isUndefined(expectedBeginValue) ? '' : ` from ${String(expectedBeginValue)}`
                assert(
                    goesQuadratically(array, expectedBeginValue, precision),
                    isUndefined(message) ?
                        `array ${String(array)} did not go quadratically${fromMessage}${precisionMessage(precision)}` :
                        message,
                )
            }),
    }),
    toGoQuadraticallyBetweenValueAndValue: (util: MatchersUtil, customEqualityTesters: readonly CustomEqualityTester[]): CustomMatcher => ({
        compare: <NumericElementType extends Number>(
            array: Array<Point<NumericElementType>>,
            expectedBeginValue: Point<NumericElementType>,
            expectedEndValue: Point<NumericElementType>,
            precision?: number,
            message?: string,
        ): CustomMatcherResult =>
            doAssertions(() => {
                assert(
                    goesQuadraticallyBetweenValueAndValue(array, expectedBeginValue, expectedEndValue, precision),
                    isUndefined(message) ?
                        `array ${String(array)} did not go quadratically between ${String(expectedBeginValue)} and ${String(expectedEndValue)}${precisionMessage(precision)}` :
                        message,
                )
            }),
    }),
    toGoQuadraticallyFromValueToValue: (util: MatchersUtil, customEqualityTesters: readonly CustomEqualityTester[]): CustomMatcher => ({
        compare: <NumericElementType extends Number>(
            array: Array<Point<NumericElementType>>,
            expectedBeginValue: Point<NumericElementType>,
            expectedEndValue: Point<NumericElementType>,
            precision?: number,
            message?: string,
        ): CustomMatcherResult =>
            doAssertions(() => {
                assert(
                    goesQuadraticallyFromValueToValue(array, expectedBeginValue, expectedEndValue, precision),
                    isUndefined(message) ?
                        `array ${String(array)} did not go quadratically from ${String(expectedBeginValue)} to ${String(expectedEndValue)}${precisionMessage(precision)}` :
                        message,
                )
            }),
    }),
    toBeCyclicalTranslations: (util: MatchersUtil, customEqualityTesters: readonly CustomEqualityTester[]): CustomMatcher => ({
        compare: <ElementType, ArrayType extends ArrayedOrStringType<ElementType> = ElementType[]>(
            arrays: ArrayType[],
            message?: string,
        ): CustomMatcherResult =>
            doAssertions(() => {
                assert(
                    areCyclicalTranslations(...arrays),
                    isUndefined(message) ?
                        `arrays ${String(arrays)} were not all cyclical translations of each other` :
                        message,
                )
            }),
    }),
}

beforeAll(() => {
    jasmine.addMatchers(customMatchers)
})
