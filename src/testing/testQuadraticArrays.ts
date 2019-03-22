// tslint:disable ban-types

import { isUndefined, Maybe } from '../code'
import { computeDeltas, computeIntervals, quotient } from '../math'
import { Scalar, to } from '../nominal'
import { testAllValuesAreTheSame } from './testAllValuesAreTheSame'
import { testGoesMonotonically, testGoesMonotonicallyByAFactorOf } from './testMonotonicArrays'

const testGoesQuadratically: <NumericElementType extends Number = Number>(
    array: NumericElementType[],
    expectedBeginValue?: NumericElementType,
    expectedEndValue?: NumericElementType,
    precision?: number,
) => void =
    <NumericElementType extends Number = Number>(
        array: NumericElementType[],
        expectedBeginValue?: NumericElementType,
        expectedEndValue?: NumericElementType,
        precision?: number,
    ): void => {
        let expectedFactor: Maybe<Scalar> = undefined
        if (!isUndefined(expectedBeginValue) && !isUndefined(expectedEndValue)) {
            expectedFactor = to.Scalar(quotient(expectedEndValue, expectedBeginValue))
        }
        if (isUndefined(expectedFactor)) {
            testGoesMonotonically(array, undefined, expectedBeginValue)
        }
        else {
            testGoesMonotonicallyByAFactorOf(array, expectedFactor, expectedBeginValue, precision)
        }

        testAllValuesAreTheSame(computeIntervals(computeDeltas(array)), undefined, precision)
    }

export {
    testGoesQuadratically,
}
