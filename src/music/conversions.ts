import { pow, reciprocal } from '../math'
import {
    as,
    Cents,
    CENTS_PER_OCTAVE,
    CENTS_PER_SEMITONE,
    Frequency,
    Logarithm,
    OCTAVE,
    Scalar,
    Semitones,
    Translation,
    use,
} from '../nominal'

const centsTranslationToPitchScalar: (centsTranslationToPitchScalar: Translation<Cents>) => Scalar<Frequency> =
    (cents: Translation<Cents>): Scalar<Frequency> =>
        as.Scalar<Frequency>(as.number(pow(
            OCTAVE,
            as.Exponent<Frequency>(as.number(use.Scalar(
                cents,
                as.Scalar<Translation<Cents>>(as.number(reciprocal(CENTS_PER_OCTAVE))),
            ))),
        )))

const semitonesToCents: (semitones: Semitones) => Cents =
    (semitones: Semitones): Cents =>
        use.Scalar(CENTS_PER_SEMITONE, as.Scalar<Cents>(as.number(semitones)))

export {
    centsTranslationToPitchScalar,
    semitonesToCents,
}
