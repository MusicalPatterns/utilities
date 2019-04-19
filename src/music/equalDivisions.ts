import { map, slice } from '../code'
import { reciprocal } from '../math'
import {
    apply,
    Base,
    Denominator,
    Frequency,
    from,
    Hz,
    INITIAL,
    Integer,
    Logarithm,
    OCTAVE,
    Scalar,
    to,
    ZERO_AND_POSITIVE_INTEGERS,
} from '../nominal'

const computeEqualDivisionScalars: (equalDivision: Denominator, window?: Base<Frequency>) => Array<Scalar<Hz>> =
    (equalDivision: Denominator, window: Base<Frequency> = OCTAVE): Array<Scalar<Hz>> => {
        const logarithmicStep: Scalar<Hz> = to.Scalar<Hz>(from.Logarithm<Frequency>(apply.Exponent(
            window,
            to.Exponent<Logarithm<Frequency>>(from.Denominator(reciprocal(equalDivision))),
        )))

        return map(
            slice(
                ZERO_AND_POSITIVE_INTEGERS,
                INITIAL,
                to.Ordinal(from.Denominator(equalDivision)),
            ),
            (integer: Integer) =>
                apply.Power(logarithmicStep, to.Power<Scalar<Hz>>(integer)),
        )
    }

export {
    computeEqualDivisionScalars,
}
