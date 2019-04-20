import { reciprocal } from '../math'
import {
    as,
    Cents,
    CENTS_PER_OCTAVE,
    CENTS_PER_SEMITONE,
    Frequency,
    Logarithm,
    notAs,
    OCTAVE,
    Scalar,
    Semitones,
    Translation,
    use,
} from '../nominal'

const centsTranslationToPitchScalar: (centsTranslationToPitchScalar: Translation<Cents>) => Scalar<Frequency> =
    (cents: Translation<Cents>): Scalar<Frequency> =>
        as.Scalar<Frequency>(notAs.Logarithm(use.Exponent(
            OCTAVE,
            as.Exponent<Logarithm<Frequency>>(notAs.Translation<Cents>(use.Scalar(
                cents,
                as.Scalar<Translation<Cents>>(notAs.Cents(reciprocal(CENTS_PER_OCTAVE))),
            ))),
        )))

const semitonesToCents: (semitones: Semitones) => Cents =
    (semitones: Semitones): Cents =>
        use.Scalar(CENTS_PER_SEMITONE, as.Scalar<Cents>(notAs.Semitones(semitones)))

export {
    centsTranslationToPitchScalar,
    semitonesToCents,
}
