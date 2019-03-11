import { INITIAL, slice } from '../code'
import { reciprocal, zeroAndPositiveIntegers } from '../math'
import { apply, Denominator, from, Integer, Scalar, to } from '../nominal'
import { OCTAVE } from './constants'

const computeEqualDivisionScalars: (equalDivision: Denominator) => Scalar[] =
    (equalDivision: Denominator): Scalar[] => {
        const division: number = from.Denominator(reciprocal(equalDivision))
        const logarithmicStep: Scalar = to.Scalar(from.Base(apply.Power(
            OCTAVE,
            to.Power(division),
        )))

        return slice(zeroAndPositiveIntegers, INITIAL, to.Ordinal(from.Denominator(equalDivision)))
            .map((integer: Integer): Scalar =>
                apply.Power(logarithmicStep, to.Power(integer)))
    }

export {
    computeEqualDivisionScalars,
}
