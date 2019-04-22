import { map, slice } from '../code'
import { reciprocal } from '../math'
import {
    as,
    Denominator,
    Frequency,
    Hz,
    INITIAL,
    Integer,
    Logarithm,
    notAs,
    OCTAVE,
    Scalar,
    use,
    ZERO_AND_POSITIVE_INTEGERS,
} from '../nominal'

const computeEqualDivisionScalars: (equalDivision: Denominator, window?: Logarithm<Frequency>) => Array<Scalar<Hz>> =
    (equalDivision: Denominator, window: Logarithm<Frequency> = OCTAVE): Array<Scalar<Hz>> => {
        const logarithmicStep: Scalar<Hz> = as.Scalar<Hz>(notAs.Logarithm<Frequency>(use.Exponent(
            window,
            as.Exponent<Logarithm<Frequency>>(reciprocal(equalDivision)),
        )))

        return map(
            slice(
                ZERO_AND_POSITIVE_INTEGERS,
                INITIAL,
                as.Ordinal<Integer[]>(notAs.Denominator(equalDivision)),
            ),
            (integer: Integer) =>
                use.Power(logarithmicStep, as.Power<Scalar<Hz>>(integer)),
        )
    }

export {
    computeEqualDivisionScalars,
}
