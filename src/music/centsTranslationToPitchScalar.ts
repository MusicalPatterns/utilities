import { reciprocal } from '../math'
import { apply, Cents, Frequency, from, Scalar, to, Translation } from '../nominal'
import { CENTS_PER_OCTAVE, OCTAVE } from './constants'

const centsTranslationToPitchScalar: (centsTranslationToPitchScalar: Translation<Cents>) => Scalar<Frequency> =
    (cents: Translation<Cents>): Scalar<Frequency> =>
        to.Scalar(to.Frequency(from.Base(apply.Power(
            OCTAVE,
            to.Power(from.Translation<Cents, Translation<Cents>>(apply.Scalar(
                cents,
                to.Scalar(reciprocal(CENTS_PER_OCTAVE)),
            ))),
        ))))

export {
    centsTranslationToPitchScalar,
}
