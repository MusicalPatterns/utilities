// tslint:disable ban-types

import { isUndefined } from '../code'
import { computeDeltas, computeIntervals } from '../math'
import { Scalar } from '../nominal'
import { testAllValuesAreTheSame } from './testAllValuesAreTheSame'
import { testGoesMonotonically, testGoesMonotonicallyByAFactorOf } from './testMonotonicArrays'

const testGoesQuadratically: <NumericElementType extends Number = Number>(
    array: NumericElementType[],
    expectedFactor?: Scalar,
    expectedBeginValue?: NumericElementType,
    precision?: number,
) => void =
    <NumericElementType extends Number = Number>(
        array: NumericElementType[],
        expectedFactor?: Scalar,
        expectedBeginValue?: NumericElementType,
        precision?: number,
    ): void => {
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
