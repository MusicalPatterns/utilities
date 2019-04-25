import { map, slice } from '../code'
import { reciprocal } from '../math'
import {
    as,
    Denominator,
    Frequency,
    INITIAL,
    Integer,
    Logarithm,
    OCTAVE,
    Scalar,
    use,
    ZERO_AND_POSITIVE_INTEGERS,
} from '../nominal'
import { Pitch } from './types'

const computeEqualDivisionPitchScalars:
    (equalDivision: Denominator, window?: Logarithm<Frequency>) => Array<Scalar<Pitch>> =
    (equalDivision: Denominator, window: Logarithm<Frequency> = OCTAVE): Array<Scalar<Pitch>> => {
        const equallyDividedPitchStep: Scalar<Pitch> = as.Scalar<Pitch>(as.number(use.Exponent(
            window,
            as.Exponent<Logarithm<Frequency>>(reciprocal(equalDivision)),
        )))

        const integerForEachStep: Integer[] = slice(
            ZERO_AND_POSITIVE_INTEGERS,
            INITIAL,
            as.Ordinal<Integer[]>(as.number(equalDivision)),
        )

        return map(
            integerForEachStep,
            (integer: Integer) => use.Power(equallyDividedPitchStep, as.Power<Scalar<Pitch>>(integer)),
        )
    }

export {
    computeEqualDivisionPitchScalars,
}
