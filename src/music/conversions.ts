import { pow, reciprocal } from '../math'
import {
    as,
    Cents,
    CENTS_PER_OCTAVE,
    CENTS_PER_SEMITONE,
    Frequency,
    OCTAVE,
    Scalar,
    Semitones,
    Translation,
    use,
} from '../nominal'
import { Pitch } from './types'

const centsTranslationToPitchScalar: (centsTranslationToPitchScalar: Translation<Cents>) => Scalar<Pitch> =
    (cents: Translation<Cents>): Scalar<Pitch> =>
        as.Scalar<Pitch>(as.number(pow(
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
