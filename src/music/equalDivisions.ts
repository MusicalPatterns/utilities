import { map, slice } from '../code'
import { reciprocal } from '../math'
import {
    apply,
    Base,
    Denominator,
    from,
    INITIAL,
    Integer,
    OCTAVE,
    of,
    Scalar,
    to,
    ZERO_AND_POSITIVE_INTEGERS,
} from '../nominal'

const computeEqualDivisionScalars: (equalDivision: Denominator, window?: Base) => Scalar[] =
    (equalDivision: Denominator, window: Base = OCTAVE): Scalar[] => {
        const division: number = from.Denominator(reciprocal(equalDivision))
        const base: Base = apply.Power(
            window,
            to.Power(of.Base(division)),
        )

        const logarithmicStep: Scalar = to.Scalar(from.Base(base))

        return map(
            slice(
                ZERO_AND_POSITIVE_INTEGERS,
                to.Index(of.Integer(from.Index(INITIAL))),
                to.Index(from.Denominator(equalDivision)),
            ),
            (integer: Integer): Scalar =>
                apply.Power(logarithmicStep, to.Power(of.Scalar(integer))),
        )
    }

export {
    computeEqualDivisionScalars,
}
