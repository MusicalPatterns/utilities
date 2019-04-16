import { reciprocal } from '../math'
import {
    apply,
    Base,
    Cents,
    CENTS_PER_OCTAVE,
    CENTS_PER_SEMITONE,
    Frequency,
    from,
    OCTAVE,
    Scalar,
    Semitones,
    to,
    Translation,
} from '../nominal'

const centsTranslationToPitchScalar: (centsTranslationToPitchScalar: Translation<Cents>) => Scalar<Frequency> =
    (cents: Translation<Cents>): Scalar<Frequency> =>
        to.Scalar(from.Base<Frequency>(apply.Power(
            OCTAVE,
            to.Power<Base<Frequency>>(from.Translation<Cents, Translation<Cents>>(apply.Scalar(
                cents,
                to.Scalar<Translation<Cents>>(from.Cents(reciprocal(CENTS_PER_OCTAVE))),
            ))),
        )))

const semitonesToCents: (semitones: Semitones) => Cents =
    (semitones: Semitones): Cents =>
        apply.Scalar(CENTS_PER_SEMITONE, to.Scalar<Cents>(from.Semitones(semitones)))

export {
    centsTranslationToPitchScalar,
    semitonesToCents,
}
