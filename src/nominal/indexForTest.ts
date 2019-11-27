// tslint:disable no-reaching-imports

import * as as from './as'
import { ArrayedOrStringType } from './types'
import * as use from './use'

export {
    use,
    as,
}

export { insteadOf } from './insteadOf'
export { isCycle, isFraction, isInteger } from './typeGuards'
export { ofNotAs } from './ofNotAs'

export {
    computeNominalInterface,
    DUMMY_VALUE_FOR_COMPUTING_NOMINAL_INTERFACE,
    NominalInterface,
    NominalInterfaceOptionObject,
    CustomAs,
} from './custom'

export {
    OCTAVE,
    TRITAVE,
    INITIAL,
    X_AXIS,
    Y_AXIS,
    PI,
    ONE_HALF,
    THREE_HALVES,
    FOUR_THIRDS,
    TWO_THIRDS,
    FIVE_HALVES,
    EIGHTH,
    FOURTH,
    THIRD,
    FIFTH,
    SIXTH,
    SEVENTH,
    NO_SHIFT,
} from './constants'

export {
    Scalar,
    Cycle,
    Cents,
    Ms,
    Semitones,
    Hz,
    Rotation,
    Base,
    Modulus,
    Power,
    Radians,
    Translation,
    Cardinal,
    Numerator,
    Denominator,
    Integer,
    Meters,
    Fraction,
    Space,
    Time,
    Frequency,
    Amplitude,
    Ordinal,
    Of,
    NormalScalar,
    Multiple,
    Exponent,
    Logarithm,
    Point,
    Remaindee,
    Interval,
    Delta,
    Arc,
    Factor,
    Transition,
    Turn,
    Transposition,
    ArrayedType,
    ArrayedOrStringType,
    Block,
    ContourElement,
    ContourPiece,
    ContourWhole,
    Monzo,
    Val,
    FractionalPart,
} from './types'
