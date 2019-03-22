// tslint:disable ban-types

import { initialElement, isUndefined } from '../code'
import { computeDeltas, computeIntervals } from '../math'
import { Scalar, Translation } from '../nominal'
import { testAllValuesAreTheSame } from './testAllValuesAreTheSame'
import { testBeginValue, testGoesMonotonically, testGoesMonotonicallyByAFactorOf } from './testMonotonicArrays'

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
        const durationDeltas: Translation[] = computeDeltas(array)

        testBeginValue(array, expectedBeginValue, precision)

        if (isUndefined(expectedFactor)) {
            testGoesMonotonically(array)
        }
        else {
            testGoesMonotonicallyByAFactorOf(
                durationDeltas,
                expectedFactor,
                undefined,
                precision,
            )
        }

        testAllValuesAreTheSame(computeIntervals(durationDeltas), undefined, precision)
    }

export {
    testGoesQuadratically,
}
