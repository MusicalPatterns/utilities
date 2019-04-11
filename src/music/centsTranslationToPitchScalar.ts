import { reciprocal } from '../math'
import { apply, Cents, CENTS_PER_OCTAVE, Frequency, from, OCTAVE, Scalar, to, Translation } from '../nominal'

const centsTranslationToPitchScalar: (centsTranslationToPitchScalar: Translation<Cents>) => Scalar<Frequency> =
    (cents: Translation<Cents>): Scalar<Frequency> =>
        to.Scalar(to.Frequency(from.Base(apply.Power(
            OCTAVE,
            to.Power(to.Base(from.Translation<Cents, Translation<Cents>>(apply.Scalar(
                cents,
                to.Scalar(to.Translation(reciprocal(CENTS_PER_OCTAVE))),
            )))),
        ))))

export {
    centsTranslationToPitchScalar,
}
