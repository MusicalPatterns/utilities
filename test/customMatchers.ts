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
} from '../src/indexForTest'
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
            // @ts-ignore
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
            message ||
            `expected ${String(actual)} not to be close to ${String(expected)}${precisionMessage(precision)}`,
        )
    }
    else {
        assert(
            isClose,
            message || `expected ${String(actual)} to be close to ${String(expected)}${precisionMessage(precision)}`,
        )
    }
}

const arraysAreCloseUpThroughExpected: <NumericElementType extends Number>(
    expected: NumericElementType[],
    actual: NumericElementType[],
    precision?: number,
    // tslint:disable-next-line bool-param-default
    negate?: boolean,
    message?: string,
) => void = <NumericElementType extends Number>(
    expected: NumericElementType[],
    actual: NumericElementType[],
    precision?: number,
    // tslint:disable-next-line bool-param-default
    negate?: boolean,
    message?: string,
): void => {
    forEach(expected, (expectedElement: NumericElementType, index: Ordinal<NumericElementType[]>): void => {
        const actualElement: NumericElementType = use.Ordinal(actual, index)

        testIsCloseTo(actualElement, expectedElement, precision, negate, message)
    })
}

const customMatchers: CustomMatcherFactories = {
    toBeCloseToTyped: (util: MatchersUtil): CustomMatcher => ({
        compare: <NumericType extends Number>(
            actual: NumericType,
            expected: NumericType,
            precision?: number,
            negate: boolean = false,
            message?: string,
        ): CustomMatcherResult =>
            doAssertions((): void => {
                testIsCloseTo(actual, expected, precision, negate, message)
            }),
    }),
    toBeGreaterThanOrCloseTo: (util: MatchersUtil): CustomMatcher => ({
        compare: <NumericType extends Number>(
            actual: NumericType,
            expected: NumericType,
            precision?: number,
            message?: string,
        ): CustomMatcherResult =>
            doAssertions((): void => {
                assert(
                    isGreaterThanOrEqualTo(actual, expected) || isCloseTo(actual, expected, precision),
                    message || `expected ${String(actual)} to be greater than or close to ${String(expected)}`,
                )
            }),
    }),
    toBeLessThanOrCloseTo: (util: MatchersUtil): CustomMatcher => ({
        compare: <NumericType extends Number>(
            actual: NumericType,
            expected: NumericType,
            precision?: number,
            message?: string,
        ): CustomMatcherResult =>
            doAssertions((): void => {
                assert(
                    isLessThanOrEqualTo(actual, expected) || isCloseTo(actual, expected, precision),
                    message || `expected ${String(actual)} to be greater than or close to ${String(expected)}`,
                )
            }),
    }),
    toBeHomogenous: (util: MatchersUtil): CustomMatcher => ({
        compare: <NumericElementType extends Number>(
            actualArray: NumericElementType[],
            manualExpectedElementValue?: NumericElementType,
            precision?: number,
            message?: string,
        ): CustomMatcherResult =>
            doAssertions((): void => {
                assert(
                    allValuesAreTheSame(actualArray, manualExpectedElementValue, precision),
                    message || `expected all values to be the same`,
                )
            }),
    }),
    toBeCloseToArray: (util: MatchersUtil): CustomMatcher => ({
        compare: <NumericElementType extends Number>(
            actual: NumericElementType[],
            expected: NumericElementType[],
            precision?: number,
            // tslint:disable-next-line bool-param-default
            negate?: boolean,
            message?: string,
        ): CustomMatcherResult =>
            doAssertions((): void => {
                assert(
                    actual.length === expected.length,
                    message || `Expected actual's ${actual.length} length to be ${expected.length}`,
                )

                arraysAreCloseUpThroughExpected(expected, actual, precision, negate, message)
            }),
    }),
    toBeCloseSoFar: (util: MatchersUtil): CustomMatcher => ({
        compare: <NumericElementType extends Number>(
            actual: NumericElementType[],
            expected: NumericElementType[],
            precision?: number,
            // tslint:disable-next-line bool-param-default
            negate?: boolean,
            message?: string,
        ): CustomMatcherResult =>
            doAssertions((): void => {
                arraysAreCloseUpThroughExpected(expected, actual, precision, negate, message)
            }),
    }),
    toHaveSameMembersAs: (util: MatchersUtil): CustomMatcher => ({
        compare: <ElementType extends Number>(
            actual: ElementType[],
            expected: ElementType[],
            message?: string,
        ): CustomMatcherResult =>
            doAssertions((): void => {
                assert(
                    deepEqual(expected.sort(), actual.sort()),
                    message || `arrays did not have same elements: ${String(expected)} vs ${String(actual)}`,
                )
            }),
    }),
    toBeLessThanTyped: (util: MatchersUtil): CustomMatcher => ({
        compare: <NumericType extends Number>(
            actual: NumericType,
            expected: NumericType,
            message?: string,
        ): CustomMatcherResult =>
            doAssertions((): void => {
                assert(
                    isLessThan(actual, expected),
                    message || `expected ${String(actual)} to be less than ${String(expected)}`,
                )
            }),
    }),
    toBeGreaterThanTyped: (util: MatchersUtil): CustomMatcher => ({
        compare: <NumericType extends Number>(
            actual: NumericType,
            expected: NumericType,
            message?: string,
        ): CustomMatcherResult =>
            doAssertions((): void => {
                assert(
                    isGreaterThan(actual, expected),
                    message || `expected ${String(actual)} to be less than ${String(expected)}`,
                )
            }),
    }),
    toBeLessThanOrEqualTyped: (util: MatchersUtil): CustomMatcher => ({
        compare: <NumericType extends Number>(
            actual: NumericType,
            expected: NumericType,
            message?: string,
        ): CustomMatcherResult =>
            doAssertions((): void => {
                assert(
                    isLessThanOrEqualTo(actual, expected),
                    message || `expected ${String(actual)} to be less than ${String(expected)}`,
                )
            }),
    }),
    toBeGreaterThanOrEqualTyped: (util: MatchersUtil): CustomMatcher => ({
        compare: <NumericType extends Number>(
            actual: NumericType,
            expected: NumericType,
            message?: string,
        ): CustomMatcherResult =>
            doAssertions((): void => {
                assert(
                    isGreaterThanOrEqualTo(actual, expected),
                    message || `expected ${String(actual)} to be less than ${String(expected)}`,
                )
            }),
    }),
    toGoMonotonically: (util: MatchersUtil): CustomMatcher => ({
        compare: <NumericElementType extends Number>(
            array: Array<Point<NumericElementType>>,
            expectedBeginValue?: Point<NumericElementType>,
            precision?: number,
            message?: string,
        ): CustomMatcherResult =>
            doAssertions((): void => {
                const fromMessage: string = isUndefined(expectedBeginValue) ? '' : ` from ${String(expectedBeginValue)}`
                assert(
                    goesMonotonically(array, expectedBeginValue, undefined, precision),
                    message || `array ${String(array)} did not go monotonically${fromMessage}${precisionMessage(precision)}`,
                )
            }),
    }),
    toGoMonotonicallyBetweenValueAndValue: (util: MatchersUtil): CustomMatcher => ({
        compare: <NumericElementType extends Number>(
            array: Array<Point<NumericElementType>>,
            expectedBeginValue: Point<NumericElementType>,
            expectedEndValue: Point<NumericElementType>,
            precision?: number,
            message?: string,
        ): CustomMatcherResult =>
            doAssertions((): void => {
                assert(
                    goesMonotonicallyBetweenValueAndValue(array, expectedBeginValue, expectedEndValue, precision),
                    message || `array ${String(array)} did not go monotonically between ${String(expectedBeginValue)} and ${String(expectedEndValue)}${precisionMessage(precision)}`,
                )
            }),
    }),
    toGoMonotonicallyFromValueToValue: (util: MatchersUtil): CustomMatcher => ({
        compare: <NumericElementType extends Number>(
            array: Array<Point<NumericElementType>>,
            expectedBeginValue: Point<NumericElementType>,
            expectedEndValue: Point<NumericElementType>,
            precision?: number,
            message?: string,
        ): CustomMatcherResult =>
            doAssertions((): void => {
                assert(
                    goesMonotonicallyFromValueToValue(array, expectedBeginValue, expectedEndValue, precision),
                    message || `array ${String(array)} did not go monotonically from ${String(expectedBeginValue)} to ${String(expectedEndValue)}${precisionMessage(precision)}`,
                )
            }),
    }),
    toGoQuadratically: (util: MatchersUtil): CustomMatcher => ({
        compare: <NumericElementType extends Number>(
            array: Array<Point<NumericElementType>>,
            expectedBeginValue?: Point<NumericElementType>,
            precision?: number,
            message?: string,
        ): CustomMatcherResult =>
            doAssertions((): void => {
                const fromMessage: string = isUndefined(expectedBeginValue) ? '' : ` from ${String(expectedBeginValue)}`
                assert(
                    goesQuadratically(array, expectedBeginValue, precision),
                    message || `array ${String(array)} did not go quadratically${fromMessage}${precisionMessage(precision)}`,
                )
            }),
    }),
    toGoQuadraticallyBetweenValueAndValue: (util: MatchersUtil): CustomMatcher => ({
        compare: <NumericElementType extends Number>(
            array: Array<Point<NumericElementType>>,
            expectedBeginValue: Point<NumericElementType>,
            expectedEndValue: Point<NumericElementType>,
            precision?: number,
            message?: string,
        ): CustomMatcherResult =>
            doAssertions((): void => {
                assert(
                    goesQuadraticallyBetweenValueAndValue(array, expectedBeginValue, expectedEndValue, precision),
                    message || `array ${String(array)} did not go quadratically between ${String(expectedBeginValue)} and ${String(expectedEndValue)}${precisionMessage(precision)}`,
                )
            }),
    }),
    toGoQuadraticallyFromValueToValue: (util: MatchersUtil): CustomMatcher => ({
        compare: <NumericElementType extends Number>(
            array: Array<Point<NumericElementType>>,
            expectedBeginValue: Point<NumericElementType>,
            expectedEndValue: Point<NumericElementType>,
            precision?: number,
            message?: string,
        ): CustomMatcherResult =>
            doAssertions((): void => {
                assert(
                    goesQuadraticallyFromValueToValue(array, expectedBeginValue, expectedEndValue, precision),
                    message || `array ${String(array)} did not go quadratically from ${String(expectedBeginValue)} to ${String(expectedEndValue)}${precisionMessage(precision)}`,
                )
            }),
    }),
    toBeCyclicalTranslations: (util: MatchersUtil): CustomMatcher => ({
        compare: <ElementType, ArrayType extends ArrayedOrStringType<ElementType> = ElementType[]>(
            arrays: ArrayType[],
            message?: string,
        ): CustomMatcherResult =>
            doAssertions((): void => {
                assert(
                    areCyclicalTranslations(...arrays),
                    message || `arrays ${String(arrays)} were not all cyclical translations of each other`,
                )
            }),
    }),
}

beforeAll((): void => {
    jasmine.addMatchers(customMatchers)
})
