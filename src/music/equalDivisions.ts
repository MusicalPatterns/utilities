import { map, slice } from '../code'
import { reciprocal } from '../math'
import {
    apply,
    Base,
    Denominator,
    Frequency,
    from,
    INITIAL,
    Integer,
    OCTAVE,
    of,
    Scalar,
    to,
    ZERO_AND_POSITIVE_INTEGERS,
} from '../nominal'

const computeEqualDivisionScalars: (equalDivision: Denominator, window?: Base<Frequency>) => Array<Scalar<Frequency>> =
    (equalDivision: Denominator, window: Base<Frequency> = OCTAVE): Array<Scalar<Frequency>> => {
        const division: number = from.Denominator(reciprocal(equalDivision))
        const base: Base<Frequency> = apply.Power(
            window,
            to.Power<Base<Frequency>>(division),
        )

        const logarithmicStep: Scalar<Frequency> = to.Scalar(from.Base<Frequency>(base))

        return map(
            slice(
                ZERO_AND_POSITIVE_INTEGERS,
                INITIAL,
                to.Index(from.Denominator(equalDivision)),
            ),
            (integer: Integer): Scalar<Frequency> =>
                apply.Power(logarithmicStep, to.Power<Scalar<Frequency>>(integer)),
        )
    }

export {
    computeEqualDivisionScalars,
}
