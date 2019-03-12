import { INITIAL } from '../code'
import { NEXT } from '../math'
import { apply, Base, Frequency, from, NoOperation, Ordinal, Scalar, to } from '../nominal'
import { MAXIMUM_OCTAVE_RANGE_AUDIBLE_TO_HUMANS, OCTAVE } from './constants'

const computeOctaveRepeatingScalars: (scalars: Array<Scalar<Frequency>>) => Array<Scalar<Frequency>> =
    (scalars: Array<Scalar<Frequency>>): Array<Scalar<Frequency>> => {
        let octaveRepeatingScalars: Array<Scalar<Frequency>> = []
        for (
            let index: Ordinal = INITIAL;
            from.Ordinal(index) < from.Cardinal(MAXIMUM_OCTAVE_RANGE_AUDIBLE_TO_HUMANS);
            index = apply.Translation(index, NEXT)
        ) {
            const nextOctave: Base = apply.Power(OCTAVE, to.Power(from.Ordinal(index)))
            octaveRepeatingScalars = octaveRepeatingScalars.concat(
                scalars.map((scalar: Scalar<Frequency>): Scalar<Frequency> =>
                    apply.Scalar(
                        scalar,
                        to.Scalar(from.Base<NoOperation, Base>(nextOctave)),
                    ),
                ),
            )
        }

        return octaveRepeatingScalars
    }

export {
    computeOctaveRepeatingScalars,
}
