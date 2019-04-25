import {
    as,
    Base,
    Frequency,
    INCREMENT,
    INITIAL,
    MAXIMUM_OCTAVE_RANGE_AUDIBLE_TO_HUMANS,
    notAs,
    OCTAVE,
    Ordinal, Scalar,
    use,
} from '../nominal'
import { Pitch } from './types'

const computeOctaveRepeatingPitchScalars: (scalars: Array<Scalar<Pitch>>) => Array<Scalar<Pitch>> =
    (scalars: Array<Scalar<Pitch>>): Array<Scalar<Pitch>> => {
        let octaveRepeatingPitchScalars: Array<Scalar<Pitch>> = []
        for (
            let index: Ordinal<Array<Base<Frequency>>> = INITIAL;
            notAs.Ordinal<Array<Base<Frequency>>>(index) < notAs.Cardinal(MAXIMUM_OCTAVE_RANGE_AUDIBLE_TO_HUMANS);
            index = use.Cardinal(index, INCREMENT)
        ) {
            const nextOctave: Base<Frequency> = use.Power(OCTAVE, as.Power<Base<Frequency>>(notAs.Ordinal(index)))
            octaveRepeatingPitchScalars = octaveRepeatingPitchScalars.concat(
                scalars.map((scalar: Scalar<Pitch>) =>
                    use.Scalar(
                        scalar,
                        as.Scalar<Scalar<Pitch>>(notAs.Base<Frequency>(nextOctave)),
                    ),
                ),
            )
        }

        return octaveRepeatingPitchScalars
    }

export {
    computeOctaveRepeatingPitchScalars,
}
