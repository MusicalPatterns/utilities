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
    use,
    ZERO_AND_POSITIVE_INTEGERS,
} from '../nominal'
import { Pitch } from './types'

const computeEqualDivisionPitches: (equalDivision: Denominator, window?: Logarithm<Frequency>) => Pitch[] =
    (equalDivision: Denominator, window: Logarithm<Frequency> = OCTAVE): Pitch[] => {
        const equallyDividedPitchStep: Pitch = as.Point<Hz>(notAs.Logarithm<Frequency>(use.Exponent(
            window,
            as.Exponent<Logarithm<Frequency>>(reciprocal(equalDivision)),
        )))

        const integerForEachStep: Integer[] = slice(
            ZERO_AND_POSITIVE_INTEGERS,
            INITIAL,
            as.Ordinal<Integer[]>(notAs.Denominator(equalDivision)),
        )

        return map(
            integerForEachStep,
            (integer: Integer) => use.Power(equallyDividedPitchStep, as.Power<Pitch>(integer)),
        )
    }

export {
    computeEqualDivisionPitches,
}
