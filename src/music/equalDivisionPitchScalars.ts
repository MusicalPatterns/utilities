import { map, range } from '../code'
import { reciprocal } from '../math'
import { as, Denominator, Frequency, Integer, Logarithm, OCTAVE, Scalar, use } from '../nominal'
import { Pitch } from './types'

const computeEqualDivisionPitchScalars:
    (equalDivision: Denominator, period?: Logarithm<Frequency>) => Array<Scalar<Pitch>> =
    (equalDivision: Denominator, period: Logarithm<Frequency> = OCTAVE): Array<Scalar<Pitch>> => {
        const equallyDividedPitchStep: Scalar<Pitch> = as.Scalar<Pitch>(as.number(use.Exponent(
            period,
            as.Exponent<Logarithm<Frequency>>(reciprocal(equalDivision)),
        )))

        const integerForEachStep: Integer[] = range(equalDivision)

        return map(
            integerForEachStep,
            (integer: Integer) => use.Power(equallyDividedPitchStep, as.Power<Scalar<Pitch>>(integer)),
        )
    }

export {
    computeEqualDivisionPitchScalars,
}
