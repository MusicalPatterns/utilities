// tslint:disable max-file-line-count

import * as as from './as'
import { ArrayedOrStringType } from './types'
import * as use from './use'

export {
    use,
    as,
}

export {
    DUMMY_VALUE_FOR_COMPUTING_NOMINAL_INTERFACE,
    computeNominalInterface,
    NominalInterface,
    NominalNumber,
} from './custom'
export {
    isCycle,
    isRational,
    isInteger,
} from './typeGuards'
export { insteadOf } from './insteadOf'
export { ofNotAs } from './ofNotAs'

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
    NO_SHIFT,
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
    ROTATION_VECTOR_OR_MATRIX_BASIS_TRANSLATION_FOR_CYCLING_FOR_AXIS,
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
    RATIONAL_IDENTITY,
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
    COUNT_FROM_LENGTH_TO_FINAL_INDEX,
    EXAMPLE_ELEMENT_INDEX,
    NOT_FOUND,
    OCTAVE,
    TRITAVE,
    SEMITONE,
    CENTS_PER_OCTAVE,
    CENTS_PER_SEMITONE,
    BEGINNING,
    MAXIMUM_OCTAVE_RANGE_AUDIBLE_TO_HUMANS,
    NO_VALUE,
    NO_DURATION,
    MILLISECONDS_PER_SECOND,
    SECONDS_PER_MINUTE,
    ONE_MILLISECOND,
    ONE_SECOND,
    ONE_MINUTE,
    ONE_HOUR,
    ONE_DAY,
    VERY_HIGH_PRECISION,
    VERY_LOW_PRECISION,
    ONE,
    ZERO,
    NONE,
    PHI,
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
    Rational,
    Modulus,
    Cycle,
    Integer,
    Meters,
    Space,
    NoUse,
    NoUnits,
    Time,
    Frequency,
    Amplitude,
    NormalScalar,
    Ordinal,
    Multiple,
    Of,
    Whole,
    Exponent,
    Logarithm,
    WholeVersion,
    UnwholeVersion,
    Transposition,
    Point,
    ArrayedType,
    AnyArrayedType,
    ArrayedOrStringType,
    Interval,
    Delta,
    Arc,
    Factor,
    Transition,
    Turn,
    Rotation,
    Remaindee,
    Monzo,
    Val,
    TranslationBrand,
    PointBrand,
    ScalarBrand,
    Ator,
    AnyArrayedOrStringType,
} from './types'
