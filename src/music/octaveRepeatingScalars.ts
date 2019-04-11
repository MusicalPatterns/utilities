import {
    apply,
    Base,
    Frequency,
    from,
    Index,
    INITIAL,
    MAXIMUM_OCTAVE_RANGE_AUDIBLE_TO_HUMANS,
    NEXT,
    OCTAVE,
    Scalar,
    to,
} from '../nominal'

const computeOctaveRepeatingScalars: (scalars: Array<Scalar<Frequency>>) => Array<Scalar<Frequency>> =
    (scalars: Array<Scalar<Frequency>>): Array<Scalar<Frequency>> => {
        let octaveRepeatingScalars: Array<Scalar<Frequency>> = []
        for (
            let index: Index = INITIAL;
            from.Index(index) < from.Cardinal(MAXIMUM_OCTAVE_RANGE_AUDIBLE_TO_HUMANS);
            index = apply.Translation(index, NEXT)
        ) {
            const nextOctave: Base = apply.Power(OCTAVE, to.Power(to.Base(from.Index(index))))
            octaveRepeatingScalars = octaveRepeatingScalars.concat(
                scalars.map((scalar: Scalar<Frequency>): Scalar<Frequency> =>
                    apply.Scalar(
                        scalar,
                        to.Scalar(to.Scalar(to.Frequency(from.Base<number, Base>(nextOctave)))),
                    ),
                ),
            )
        }

        return octaveRepeatingScalars
    }

export {
    computeOctaveRepeatingScalars,
}
