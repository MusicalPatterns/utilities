// tslint:disable max-file-line-count

import * as apply from './apply'
import * as from from './from'
import * as of from './of'
import * as to from './to'

export {
    apply,
    from,
    to,
    of,
}

export {
    DUMMY_VALUE_FOR_COMPUTING_NOMINAL_INTERFACE,
    computeNominalInterface,
    NominalInterface,
} from './custom'
export { POSITIVE_INTEGERS, ZERO_AND_POSITIVE_INTEGERS } from './integers'
export {
    isCycle,
} from './typeGuards'
export { insteadOf } from './insteadOf'
export { ofFrom } from './ofFrom'

export {
    TWO_THIRDS,
    TWO_FIFTHS,
    THREE_FOURTHS,
    THREE_FIFTHS,
    FOUR_FIFTHS,
    THREE_HALVES,
    FIVE_HALVES,
    FOUR_THIRDS,
    FIVE_THIRDS,
    FIVE_FOURTHS,
    NEXT,
    PREVIOUS,
    UP_ONE,
    DOWN_ONE,
    NO_TRANSLATION,
    INCREMENT,
    DECREMENT,
    NUMERATOR_INDEX,
    DENOMINATOR_INDEX,
    ORIGIN,
    DOUBLE,
    TRIPLE,
    QUADRUPLE,
    PENTUPLE,
    SEXTUPLE,
    HEPTUPLE,
    OCTUPLE,
    NONTUPLE,
    FIRST_FACTOR_NECESSARY_TO_CHECK_IF_COMMON,
    ONE_FEWER,
    ONE_MORE,
    DECIMAL,
    ONE_HALF,
    ONE_THIRD,
    ONE_FOURTH,
    ONE_FIFTH,
    ONE_SIXTH,
    ONE_SEVENTH,
    ONE_EIGHTH,
    ONE_NINTH,
    ONE_TENTH,
    DEFAULT_PRECISION,
    A_SUFFICIENT_COUNT_OF_NUMBERS,
    ROTATION_VECTOR_OR_MATRIX_BASE_TRANSLATION_FOR_CYCLING_FOR_AXIS,
    X_AXIS,
    Y_AXIS,
    Z_AXIS,
    SQUARE_ROOT,
    SQUARED,
    ONCE,
    TWICE,
    EVERY_OTHER,
    EVERY_THIRD,
    EVERY_FOURTH,
    EVERY_FIFTH,
    TWO_DIMENSIONAL,
    THREE_DIMENSIONAL,
    TWO,
    ADDITIVE_IDENTITY,
    MULTIPLICATIVE_IDENTITY,
    FRACTIONAL_IDENTITY,
    NEGATIVE,
    CUBE_ROOT,
    CUBED,
    THRICE,
    FRICE,
    FICE,
    ZEROTH,
    FIRST,
    SECOND,
    THIRD,
    FOURTH,
    FIFTH,
    SIXTH,
    SEVENTH,
    EIGHTH,
    NINTH,
    TENTH,
    ELEVENTH,
    TWELFTH,
    THREE,
    FOUR,
    FIVE,
    SIX,
    SEVEN,
    EIGHT,
    NINE,
    TEN,
    PI,
    E,
    GOOD_AMOUNT_OF_TIME_TO_SEE_WHAT_THE_SITUATION_IS_WHEN_HEADFULLY_DEBUGGING_TESTS,
    INCLUSIVE,
    EXCLUSIVE,
    INITIAL,
    SKIP_FIRST_ELEMENT,
    INCLUSIVE_TO_LEFT,
    EXCLUSIVE_TO_LEFT,
    TRANSLATION_FROM_LENGTH_TO_FINAL_INDEX,
    EXAMPLE_ELEMENT_INDEX,
    NOT_FOUND,
    OCTAVE,
    TRITAVE,
    SEMITONE,
    CENTS_PER_OCTAVE,
    CENTS_PER_SEMITONE,
    BEGINNING,
    MAXIMUM_OCTAVE_RANGE_AUDIBLE_TO_HUMANS,
    NO_DURATION,
    MILLISECONDS_PER_SECOND,
    SECONDS_PER_MINUTE,
    ONE_MILLISECOND,
    ONE_SECOND,
    ONE_MINUTE,
    ONE_HOUR,
    ONE_DAY,
} from './constants'

export {
    Base,
    Translation,
    Scalar,
    Ms,
    Power,
    Cardinal,
    Hz,
    Radians,
    Cents,
    Semitones,
    Block,
    ContourWhole,
    ContourPiece,
    ContourElement,
    Numerator,
    Denominator,
    Fraction,
    Modulus,
    Cycle,
    Integer,
    Meters,
    Space,
    NoOperation,
    NoUnits,
    Time,
    Frequency,
    Amplitude,
    NominalNumber,
    NormalScalar,
    Ordinal,
    Multiple,
    Of,
    Integerlike,
} from './types'
