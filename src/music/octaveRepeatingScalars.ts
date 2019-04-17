import {
    apply,
    Base,
    Frequency,
    from,
    INCREMENT,
    INITIAL,
    MAXIMUM_OCTAVE_RANGE_AUDIBLE_TO_HUMANS,
    OCTAVE,
    Ordinal,
    Scalar,
    to,
} from '../nominal'

const computeOctaveRepeatingScalars: (scalars: Array<Scalar<Frequency>>) => Array<Scalar<Frequency>> =
    (scalars: Array<Scalar<Frequency>>): Array<Scalar<Frequency>> => {
        let octaveRepeatingScalars: Array<Scalar<Frequency>> = []
        for (
            let index: Ordinal<Base<Frequency>> = INITIAL;
            from.Ordinal<Base<Frequency>>(index) < from.Cardinal(MAXIMUM_OCTAVE_RANGE_AUDIBLE_TO_HUMANS);
            index = apply.Translation(index, INCREMENT)
        ) {
            const nextOctave: Base<Frequency> = apply.Power(OCTAVE, to.Power<Base<Frequency>>(from.Ordinal(index)))
            octaveRepeatingScalars = octaveRepeatingScalars.concat(
                scalars.map((scalar: Scalar<Frequency>): Scalar<Frequency> =>
                    apply.Scalar(
                        scalar,
                        to.Scalar<Scalar<Frequency>>(from.Base<Frequency>(nextOctave)),
                    ),
                ),
            )
        }

        return octaveRepeatingScalars
    }

export {
    computeOctaveRepeatingScalars,
}
