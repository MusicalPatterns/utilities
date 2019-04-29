import { map, range } from '../code'
import { pow, reciprocal } from '../math'
import { as, Denominator, Frequency, Integer, Logarithm, OCTAVE, Power, Scalar } from '../nominal'
import { Pitch } from './types'

const computeEqualDivisionPitchScalars:
    (equalDivision: Denominator, period?: Logarithm<Frequency>) => Array<Scalar<Pitch>> =
    (equalDivision: Denominator, period: Logarithm<Frequency> = OCTAVE): Array<Scalar<Pitch>> => {
        const equallyDividedPitchStep: Logarithm<Pitch> = as.Logarithm<Pitch>(as.number(pow(
            period,
            as.Exponent<Frequency>(reciprocal(equalDivision)),
        )))

        const powerForEachStep: Array<Power<Pitch>> = range(equalDivision)
            .map((integer: Integer) => as.Power<Pitch>(integer))

        return map(
            powerForEachStep,
            (power: Power<Pitch>) => as.Scalar<Pitch>(as.number(pow(equallyDividedPitchStep, power))),
        )
    }

export {
    computeEqualDivisionPitchScalars,
}
