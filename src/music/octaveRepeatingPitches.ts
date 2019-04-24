import {
    as,
    Base,
    Frequency,
    INCREMENT,
    INITIAL,
    MAXIMUM_OCTAVE_RANGE_AUDIBLE_TO_HUMANS,
    notAs,
    OCTAVE,
    Ordinal,
    use,
} from '../nominal'
import { Pitch } from './types'

const computeOctaveRepeatingPitches: (scalars: Pitch[]) => Pitch[] =
    (scalars: Pitch[]): Pitch[] => {
        let octaveRepeatingScalars: Pitch[] = []
        for (
            let index: Ordinal<Array<Base<Frequency>>> = INITIAL;
            notAs.Ordinal<Array<Base<Frequency>>>(index) < notAs.Cardinal(MAXIMUM_OCTAVE_RANGE_AUDIBLE_TO_HUMANS);
            index = use.Cardinal(index, INCREMENT)
        ) {
            const nextOctave: Base<Frequency> = use.Power(OCTAVE, as.Power<Base<Frequency>>(notAs.Ordinal(index)))
            octaveRepeatingScalars = octaveRepeatingScalars.concat(
                scalars.map((scalar: Pitch): Pitch =>
                    use.Scalar(
                        scalar,
                        as.Scalar<Pitch>(notAs.Base<Frequency>(nextOctave)),
                    ),
                ),
            )
        }

        return octaveRepeatingScalars
    }

export {
    computeOctaveRepeatingPitches,
}
