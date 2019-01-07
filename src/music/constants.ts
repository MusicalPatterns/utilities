// tslint:disable no-magic-numbers

import { Cents, Scalar, Time, to } from '../nominal'

const OCTAVE: Scalar = to.Scalar(2)
const TRITAVE: Scalar = to.Scalar(3)

const CENTS_PER_OCTAVE: Cents = to.Cents(1200)
const CENTS_PER_SEMITONE: Cents = to.Cents(100)

const BEGINNING: Time = to.Time(0)

export {
    OCTAVE,
    TRITAVE,
    CENTS_PER_OCTAVE,
    CENTS_PER_SEMITONE,
    BEGINNING,
}
