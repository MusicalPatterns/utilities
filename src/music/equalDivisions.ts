import { slice } from '../code'
import { reciprocal } from '../math'
import {
    apply,
    Base,
    Denominator,
    from,
    INITIAL,
    Integer,
    OCTAVE,
    Scalar,
    to,
    ZERO_AND_POSITIVE_INTEGERS,
} from '../nominal'

const computeEqualDivisionScalars: (equalDivision: Denominator, window?: Base) => Scalar[] =
    (equalDivision: Denominator, window: Base = OCTAVE): Scalar[] => {
        const division: number = from.Denominator(reciprocal(equalDivision))
        const logarithmicStep: Scalar = to.Scalar(from.Base(apply.Power(
            window,
            to.Power(division),
        )))

        return slice(ZERO_AND_POSITIVE_INTEGERS, INITIAL, to.Ordinal(from.Denominator(equalDivision)))
            .map((integer: Integer): Scalar =>
                apply.Power(logarithmicStep, to.Power(integer)))
    }

export {
    computeEqualDivisionScalars,
}
