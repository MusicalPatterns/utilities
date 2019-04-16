import { reciprocal } from '../math'
import { apply, Cents, CENTS_PER_OCTAVE, Frequency, from, OCTAVE, of, Scalar, to, Translation } from '../nominal'

const centsTranslationToPitchScalar: (centsTranslationToPitchScalar: Translation<Cents>) => Scalar<Frequency> =
    (cents: Translation<Cents>): Scalar<Frequency> =>
        to.Scalar(of.Frequency(from.Base(apply.Power(
            OCTAVE,
            to.Power(of.Base(from.Translation<Cents, Translation<Cents>>(apply.Scalar(
                cents,
                to.Scalar(of.Translation<Cents>(from.Cents(reciprocal(CENTS_PER_OCTAVE)))),
            )))),
        ))))

export {
    centsTranslationToPitchScalar,
}
