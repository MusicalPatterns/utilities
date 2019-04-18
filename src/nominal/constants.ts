// tslint:disable no-magic-numbers max-file-line-count no-any

import * as from from './from'
import * as to from './to'
import {
    Base,
    Cardinal,
    Cents,
    Cycle,
    Denominator,
    Exponent,
    Fraction,
    Frequency,
    Integer,
    Logarithm,
    Ms,
    Multiple,
    Numerator,
    Of,
    Ordinal,
    Power,
    Radians,
    Scalar,
    Space,
    Translation,
} from './types'

const DECIMAL: Integer = to.Integer(10)

const ONE_HALF: Scalar<any> = to.Scalar(1 / 2)
const ONE_THIRD: Scalar<any> = to.Scalar(1 / 3)
const ONE_FOURTH: Scalar<any> = to.Scalar(1 / 4)
const ONE_FIFTH: Scalar<any> = to.Scalar(1 / 5)
const ONE_SIXTH: Scalar<any> = to.Scalar(1 / 6)
const ONE_SEVENTH: Scalar<any> = to.Scalar(1 / 7)
const ONE_EIGHTH: Scalar<any> = to.Scalar(1 / 8)
const ONE_NINTH: Scalar<any> = to.Scalar(1 / 9)
const ONE_TENTH: Scalar<any> = to.Scalar(1 / 10)

const TWO_THIRDS: Scalar<any> = to.Scalar(2 / 3)
const TWO_FIFTHS: Scalar<any> = to.Scalar(2 / 5)
const THREE_FOURTHS: Scalar<any> = to.Scalar(3 / 4)
const THREE_FIFTHS: Scalar<any> = to.Scalar(3 / 5)
const FOUR_FIFTHS: Scalar<any> = to.Scalar(4 / 5)
const THREE_HALVES: Scalar<any> = to.Scalar(3 / 2)
const FIVE_HALVES: Scalar<any> = to.Scalar(5 / 2)
const FOUR_THIRDS: Scalar<any> = to.Scalar(4 / 3)
const FIVE_THIRDS: Scalar<any> = to.Scalar(5 / 3)
const FIVE_FOURTHS: Scalar<any> = to.Scalar(5 / 4)

const DOUBLE: Multiple = to.Multiple(2)
const TRIPLE: Multiple = to.Multiple(3)
const QUADRUPLE: Multiple = to.Multiple(4)
const PENTUPLE: Multiple = to.Multiple(5)
const SEXTUPLE: Multiple = to.Multiple(6)
const HEPTUPLE: Multiple = to.Multiple(7)
const OCTUPLE: Multiple = to.Multiple(8)
const NONTUPLE: Multiple = to.Multiple(9)

const EVERY_OTHER: Multiple<Ordinal<any>> = to.Multiple<Ordinal>(2)
const EVERY_THIRD: Multiple<Ordinal<any>> = to.Multiple<Ordinal>(3)
const EVERY_FOURTH: Multiple<Ordinal<any>> = to.Multiple<Ordinal>(4)
const EVERY_FIFTH: Multiple<Ordinal<any>> = to.Multiple<Ordinal>(5)

const ONCE: Cardinal = to.Cardinal(1)
const TWICE: Cardinal = to.Cardinal(2)
const THRICE: Cardinal = to.Cardinal(3)
const FRICE: Cardinal = to.Cardinal(4)
const FICE: Cardinal = to.Cardinal(5)

const DEFAULT_PRECISION: Integer = to.Integer(2)
const A_SUFFICIENT_COUNT_OF_NUMBERS: Cardinal = to.Cardinal(Math.pow(2, 8))
const ROTATION_VECTOR_OR_MATRIX_BASE_TRANSLATION_FOR_CYCLING_FOR_AXIS: Translation<Cycle> =
    to.Translation(-2 as Of<Cycle>)

const X_AXIS: Ordinal<any> = to.Ordinal(0)
const Y_AXIS: Ordinal<any> = to.Ordinal(1)
const Z_AXIS: Ordinal<any> = to.Ordinal(2)
const ORIGIN: Space = to.Space(0)
const TWO_DIMENSIONAL: Cardinal = to.Cardinal(2)
const THREE_DIMENSIONAL: Cardinal = to.Cardinal(3)

const SQUARED: Power<any> = to.Power(2)
const CUBED: Power<any> = to.Power(3)
const SQUARE_ROOT: Exponent<any> = to.Exponent(1 / 2)
const CUBE_ROOT: Exponent<any> = to.Exponent(1 / 3)

const TWO: Integer = to.Integer(2)
const THREE: Integer = to.Integer(3)
const FOUR: Integer = to.Integer(4)
const FIVE: Integer = to.Integer(5)
const SIX: Integer = to.Integer(6)
const SEVEN: Integer = to.Integer(7)
const EIGHT: Integer = to.Integer(8)
const NINE: Integer = to.Integer(9)
const TEN: Integer = to.Integer(10)

const NEGATIVE: Scalar<any> = to.Scalar(-1)

const ZEROTH: Ordinal<any> = to.Ordinal(0)
const FIRST: Ordinal<any> = to.Ordinal(1)
const SECOND: Ordinal<any> = to.Ordinal(2)
const THIRD: Ordinal<any> = to.Ordinal(3)
const FOURTH: Ordinal<any> = to.Ordinal(4)
const FIFTH: Ordinal<any> = to.Ordinal(5)
const SIXTH: Ordinal<any> = to.Ordinal(6)
const SEVENTH: Ordinal<any> = to.Ordinal(7)
const EIGHTH: Ordinal<any> = to.Ordinal(8)
const NINTH: Ordinal<any> = to.Ordinal(9)
const TENTH: Ordinal<any> = to.Ordinal(10)
const ELEVENTH: Ordinal<any> = to.Ordinal(11)
const TWELFTH: Ordinal<any> = to.Ordinal(12)

const ADDITIVE_IDENTITY: Translation<any> = to.Translation(0)
const MULTIPLICATIVE_IDENTITY: Scalar<any> = to.Scalar(1)
const FRACTIONAL_IDENTITY: Fraction = to.Fraction([ to.Numerator(1), to.Denominator(1) ])

const NEXT: Translation<Ordinal<any>> = to.Translation<Ordinal>(1)
const PREVIOUS: Translation<Ordinal<any>> = to.Translation<Ordinal>(-1)
const UP_ONE: Translation<Cardinal> = to.Translation<Cardinal>(1)
const DOWN_ONE: Translation<Cardinal> = to.Translation<Cardinal>(-1)
const INCREMENT: Translation<any> = to.Translation(1)
const DECREMENT: Translation<any> = to.Translation(-1)
const ONE_MORE: Translation<Cardinal> = to.Translation<Cardinal>(1)
const ONE_FEWER: Translation<Cardinal> = to.Translation<Cardinal>(-1)
const NO_TRANSLATION: Translation<any> = to.Translation(0)

const NUMERATOR_INDEX: Ordinal<Numerator> = to.Ordinal<Numerator>(0)
const DENOMINATOR_INDEX: Ordinal<Denominator> = to.Ordinal<Denominator>(1)

const FIRST_FACTOR_NECESSARY_TO_CHECK_IF_COMMON: Integer = to.Integer(2)

const PI: Radians = to.Radians(Math.PI)
const E: Logarithm<any> = to.Logarithm(Math.E)

const GOOD_AMOUNT_OF_TIME_TO_SEE_WHAT_THE_SITUATION_IS_WHEN_HEADFULLY_DEBUGGING_TESTS: Ms = to.Ms(3000)

const INCLUSIVE: Translation<Ordinal<any>> = to.Translation<Ordinal>(1)
const EXCLUSIVE: Translation<Ordinal<any>> = to.Translation<Ordinal>(-1)
const INCLUSIVE_TO_LEFT: Translation<Ordinal<any>> = to.Translation<Ordinal>(-1)
const EXCLUSIVE_TO_LEFT: Translation<Ordinal<any>> = to.Translation<Ordinal>(1)

const INITIAL: Ordinal<any> = to.Ordinal(0)
const SKIP_FIRST_ELEMENT: Ordinal<any> = to.Ordinal(1)

const TRANSLATION_FROM_LENGTH_TO_FINAL_INDEX: Translation<Cardinal> = to.Translation<Cardinal>(-1)
const EXAMPLE_ELEMENT_INDEX: Ordinal<any> = to.Ordinal(0)

const NOT_FOUND: Ordinal<any> = to.Ordinal(-1)

const SEMITONES_PER_OCTAVE: Cardinal = to.Cardinal(12)

const OCTAVE: Base<Frequency> = to.Base<Frequency>(2)
const TRITAVE: Base<Frequency> = to.Base<Frequency>(3)
const SEMITONE: Logarithm<Frequency> =
    to.Logarithm<Frequency>(Math.pow(from.Base<Frequency>(OCTAVE), (1 / from.Cardinal(SEMITONES_PER_OCTAVE))))

const CENTS_PER_SEMITONE: Cents = to.Cents(100)
const CENTS_PER_OCTAVE: Cents = to.Cents(from.Cents(CENTS_PER_SEMITONE) * from.Cardinal(SEMITONES_PER_OCTAVE))

const BEGINNING: Ms = to.Ms(0)
const NO_DURATION: Ms = to.Ms(0)

const MAXIMUM_OCTAVE_RANGE_AUDIBLE_TO_HUMANS: Cardinal = to.Cardinal(10)

const MILLISECONDS_PER_SECOND: Cardinal = to.Cardinal(1000)
const SECONDS_PER_MINUTE: Cardinal = to.Cardinal(60)

const ONE_MILLISECOND: Ms = to.Ms(1)
const ONE_SECOND: Ms = to.Ms(1000)
const ONE_MINUTE: Ms = to.Ms(60000)
const ONE_HOUR: Ms = to.Ms(3600000)
const ONE_DAY: Ms = to.Ms(86400000)

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
}
