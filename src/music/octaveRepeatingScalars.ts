import {
    apply,
    Base,
    Frequency,
    from,
    Hz,
    INCREMENT,
    INITIAL,
    MAXIMUM_OCTAVE_RANGE_AUDIBLE_TO_HUMANS,
    OCTAVE,
    Ordinal,
    Scalar,
    to,
} from '../nominal'

const computeOctaveRepeatingScalars: (scalars: Array<Scalar<Hz>>) => Array<Scalar<Hz>> =
    (scalars: Array<Scalar<Hz>>): Array<Scalar<Hz>> => {
        let octaveRepeatingScalars: Array<Scalar<Hz>> = []
        for (
            let index: Ordinal<Base<Frequency>> = INITIAL;
            from.Ordinal<Base<Frequency>>(index) < from.Cardinal(MAXIMUM_OCTAVE_RANGE_AUDIBLE_TO_HUMANS);
            index = apply.Translation(index, INCREMENT)
        ) {
            const nextOctave: Base<Frequency> = apply.Power(OCTAVE, to.Power<Base<Frequency>>(from.Ordinal(index)))
            octaveRepeatingScalars = octaveRepeatingScalars.concat(
                scalars.map((scalar: Scalar<Hz>): Scalar<Hz> =>
                    apply.Scalar(
                        scalar,
                        to.Scalar<Scalar<Hz>>(from.Base<Frequency>(nextOctave)),
                    ),
                ),
            )
        }

        return octaveRepeatingScalars
    }

export {
    computeOctaveRepeatingScalars,
}
