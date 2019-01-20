// tslint:disable no-magic-numbers

import { Base, Cents, Time, to } from '../nominal'

const OCTAVE: Base = to.Base(2)
const TRITAVE: Base = to.Base(3)

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
