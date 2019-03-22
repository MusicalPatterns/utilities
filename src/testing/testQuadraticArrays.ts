// tslint:disable ban-types

import { isUndefined } from '../code'
import { computeDeltas, computeIntervals } from '../math'
import { Scalar, Translation } from '../nominal'
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
        const durationDeltas: Translation[] = computeDeltas(array)

        if (isUndefined(expectedFactor)) {
            testGoesMonotonically(array)
        }
        else {
            testGoesMonotonicallyByAFactorOf(
                durationDeltas,
                expectedFactor,
                expectedBeginValue as unknown as Translation,
                precision,
            )
        }

        testAllValuesAreTheSame(computeIntervals(durationDeltas), undefined, precision)
    }

export {
    testGoesQuadratically,
}
