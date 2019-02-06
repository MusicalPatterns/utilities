// tslint:disable no-magic-numbers

import { reciprocal } from '../math'
import { apply, Base, Cardinal, Cents, from, Time, to } from '../nominal'

const SEMITONES_PER_OCTAVE: Cardinal = to.Cardinal(12)

const OCTAVE: Base = to.Base(2)
const TRITAVE: Base = to.Base(3)
const SEMITONE: Base = apply.Power(OCTAVE, to.Power(reciprocal(from.Cardinal(SEMITONES_PER_OCTAVE))))

const CENTS_PER_SEMITONE: Cents = to.Cents(100)
const CENTS_PER_OCTAVE: Cents = apply.Scalar(CENTS_PER_SEMITONE, to.Scalar(from.Cardinal(SEMITONES_PER_OCTAVE)))

const BEGINNING: Time = to.Time(0)

const MAXIMUM_OCTAVE_RANGE_AUDIBLE_TO_HUMANS: Cardinal = to.Cardinal(10)

export {
    OCTAVE,
    TRITAVE,
    SEMITONE,
    CENTS_PER_OCTAVE,
    CENTS_PER_SEMITONE,
    BEGINNING,
    MAXIMUM_OCTAVE_RANGE_AUDIBLE_TO_HUMANS,
}
