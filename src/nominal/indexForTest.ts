// tslint:disable no-reaching-imports

import * as as from './as'
import * as notAs from './notAs'
import * as of from './of'
import * as use from './use'

export {
    use,
    notAs,
    as,
    of,
}

export { insteadOf } from './insteadOf'
export { ofNotAs } from './ofNotAs'

export {
    computeNominalInterface,
    DUMMY_VALUE_FOR_COMPUTING_NOMINAL_INTERFACE,
    NominalInterface,
    NominalInterfaceOptionObject,
    CustomAs,
    CustomNotAs,
    CustomOf,
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
    Gain,
    Ordinal,
    Of,
    UnitScalar,
    Multiple,
    Exponent,
    Logarithm,
    Point,
    IntegerModulus,
} from './types'
