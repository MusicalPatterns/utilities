import { reciprocal } from '../math'
import { apply, Cents, from, Scalar, to } from '../nominal'
import { CENTS_PER_OCTAVE, OCTAVE } from './constants'

const centsToPitch: (centsToPitch: Cents) => Scalar =
    (cents: Cents): Scalar =>
        to.Scalar(from.Base(apply.Power(
            OCTAVE,
            to.Power(from.Cents(apply.Scalar(
                cents,
                to.Scalar(from.Cents(reciprocal(CENTS_PER_OCTAVE))),
            ))),
        )))

export {
    centsToPitch,
}
