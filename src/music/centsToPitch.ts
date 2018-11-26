import { apply, Cents, from, Scalar, to } from '../nominal'
import { CENTS_PER_OCTAVE, OCTAVE } from './constants'

const centsToPitch: (centsToPitch: Cents) => Scalar =
    (cents: Cents): Scalar =>
        apply.Power(OCTAVE, to.Power(from.Cents(cents) / from.Cents(CENTS_PER_OCTAVE)))

export {
    centsToPitch,
}
