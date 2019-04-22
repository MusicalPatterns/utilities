import {
    as,
    Base,
    Frequency,
    Hz,
    INCREMENT,
    INITIAL,
    MAXIMUM_OCTAVE_RANGE_AUDIBLE_TO_HUMANS,
    notAs,
    OCTAVE,
    Ordinal,
    Scalar,
    use,
} from '../nominal'

const computeOctaveRepeatingScalars: (scalars: Array<Scalar<Hz>>) => Array<Scalar<Hz>> =
    (scalars: Array<Scalar<Hz>>): Array<Scalar<Hz>> => {
        let octaveRepeatingScalars: Array<Scalar<Hz>> = []
        for (
            let index: Ordinal<Array<Base<Frequency>>> = INITIAL;
            notAs.Ordinal<Array<Base<Frequency>>>(index) < notAs.Cardinal(MAXIMUM_OCTAVE_RANGE_AUDIBLE_TO_HUMANS);
            index = use.Cardinal(index, INCREMENT)
        ) {
            const nextOctave: Base<Frequency> = use.Power(OCTAVE, as.Power<Base<Frequency>>(notAs.Ordinal(index)))
            octaveRepeatingScalars = octaveRepeatingScalars.concat(
                scalars.map((scalar: Scalar<Hz>): Scalar<Hz> =>
                    use.Scalar(
                        scalar,
                        as.Scalar<Scalar<Hz>>(notAs.Base<Frequency>(nextOctave)),
                    ),
                ),
            )
        }

        return octaveRepeatingScalars
    }

export {
    computeOctaveRepeatingScalars,
}
