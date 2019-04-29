import { pow } from '../math'
import {
    as,
    Base,
    Frequency,
    INCREMENT,
    INITIAL,
    MAXIMUM_OCTAVE_RANGE_AUDIBLE_TO_HUMANS,
    OCTAVE,
    Ordinal,
    Scalar,
    use,
} from '../nominal'
import { Pitch } from './types'

const computeOctaveRepeatingPitchScalars: (scalars: Array<Scalar<Pitch>>) => Array<Scalar<Pitch>> =
    (scalars: Array<Scalar<Pitch>>): Array<Scalar<Pitch>> => {
        let octaveRepeatingPitchScalars: Array<Scalar<Pitch>> = []
        for (
            let index: Ordinal<Array<Base<Frequency>>> = INITIAL;
            as.number(index) < as.number(MAXIMUM_OCTAVE_RANGE_AUDIBLE_TO_HUMANS);
            index = use.Cardinal(index, INCREMENT)
        ) {
            const nextOctave: Frequency = pow(OCTAVE, as.Power<Frequency>(as.number(index)))
            octaveRepeatingPitchScalars = octaveRepeatingPitchScalars.concat(
                scalars.map((scalar: Scalar<Pitch>) =>
                    use.Scalar(
                        scalar,
                        as.Scalar<Scalar<Pitch>>(as.number(nextOctave)),
                    ),
                ),
            )
        }

        return octaveRepeatingPitchScalars
    }

export {
    computeOctaveRepeatingPitchScalars,
}
