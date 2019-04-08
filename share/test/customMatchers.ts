// tslint:disable ban-types

import { isCloseTo, isUndefined } from '@musical-patterns/utilities'
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

const customMatchers: CustomMatcherFactories = {
    toBeCloseToTyped: (util: MatchersUtil, customEqualityTesters: CustomEqualityTester[]): CustomMatcher => ({
        compare: <NumericType extends Number = Number>(
            actual: NumericType,
            expected: NumericType,
            precision?: number,
            negate: boolean = false,
            message?: string,
        ): CustomMatcherResult =>
            doAssertions(() => {
                const isClose: boolean = isCloseTo(actual, expected, precision)

                if (negate) {
                    assert(
                        !isClose,
                        isUndefined(message) ?
                            `expected ${actual} not to be close to ${expected}${precisionMessage(precision)}` :
                            message,
                    )
                }
                else {
                    assert(
                        isClose,
                        isUndefined(message) ?
                            `expected ${actual} to be close to ${expected}${precisionMessage(precision)}` :
                            message,
                    )
                }
            }),
    }),
}

beforeAll(() => {
    jasmine.addMatchers(customMatchers)
})
