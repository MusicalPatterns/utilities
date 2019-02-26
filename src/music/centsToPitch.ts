import { reciprocal } from '../math'
import { apply, Cents, Frequency, from, Scalar, to } from '../nominal'
import { CENTS_PER_OCTAVE, OCTAVE } from './constants'

const centsToPitch: (centsToPitch: Cents) => Scalar<Frequency> =
    (cents: Cents): Scalar<Frequency> =>
        to.Scalar(to.Frequency(from.Base(apply.Power(
            OCTAVE,
            to.Power(apply.Scalar(
                cents,
                to.Scalar(reciprocal(CENTS_PER_OCTAVE)),
            )),
        ))))

export {
    centsToPitch,
}
