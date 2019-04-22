// tslint:disable no-magic-numbers max-file-line-count no-any

import * as as from './as'
import * as notAs from './notAs'
import {
    Base,
    Cardinal,
    Cents,
    Cycle,
    Exponent,
    Fraction,
    Frequency,
    Integer,
    Logarithm,
    Ms,
    Multiple,
    Of,
    Ordinal,
    Power,
    Radians,
    Scalar,
    Semitones,
    Space,
    Translation,
} from './types'

const DECIMAL: Integer = as.Integer(10)

const ONE_HALF: Scalar<any> = as.Scalar(1 / 2)
const ONE_THIRD: Scalar<any> = as.Scalar(1 / 3)
const ONE_FOURTH: Scalar<any> = as.Scalar(1 / 4)
const ONE_FIFTH: Scalar<any> = as.Scalar(1 / 5)
const ONE_SIXTH: Scalar<any> = as.Scalar(1 / 6)
const ONE_SEVENTH: Scalar<any> = as.Scalar(1 / 7)
const ONE_EIGHTH: Scalar<any> = as.Scalar(1 / 8)
const ONE_NINTH: Scalar<any> = as.Scalar(1 / 9)
const ONE_TENTH: Scalar<any> = as.Scalar(1 / 10)

const TWO_THIRDS: Scalar<any> = as.Scalar(2 / 3)
const TWO_FIFTHS: Scalar<any> = as.Scalar(2 / 5)
const THREE_FOURTHS: Scalar<any> = as.Scalar(3 / 4)
const THREE_FIFTHS: Scalar<any> = as.Scalar(3 / 5)
const FOUR_FIFTHS: Scalar<any> = as.Scalar(4 / 5)
const THREE_HALVES: Scalar<any> = as.Scalar(3 / 2)
const FIVE_HALVES: Scalar<any> = as.Scalar(5 / 2)
const FOUR_THIRDS: Scalar<any> = as.Scalar(4 / 3)
const FIVE_THIRDS: Scalar<any> = as.Scalar(5 / 3)
const FIVE_FOURTHS: Scalar<any> = as.Scalar(5 / 4)

const DOUBLE: Multiple = as.Multiple(2)
const TRIPLE: Multiple = as.Multiple(3)
const QUADRUPLE: Multiple = as.Multiple(4)
const PENTUPLE: Multiple = as.Multiple(5)
const SEXTUPLE: Multiple = as.Multiple(6)
const HEPTUPLE: Multiple = as.Multiple(7)
const OCTUPLE: Multiple = as.Multiple(8)
const NONTUPLE: Multiple = as.Multiple(9)

const EVERY_OTHER: Multiple<Ordinal<any>> = as.Multiple<Ordinal>(2)
const EVERY_THIRD: Multiple<Ordinal<any>> = as.Multiple<Ordinal>(3)
const EVERY_FOURTH: Multiple<Ordinal<any>> = as.Multiple<Ordinal>(4)
const EVERY_FIFTH: Multiple<Ordinal<any>> = as.Multiple<Ordinal>(5)

const ONCE: Cardinal<any> = as.Cardinal(1)
const TWICE: Cardinal<any> = as.Cardinal(2)
const THRICE: Cardinal<any> = as.Cardinal(3)
const FRICE: Cardinal<any> = as.Cardinal(4)
const FICE: Cardinal<any> = as.Cardinal(5)

const DEFAULT_PRECISION: Integer = as.Integer(2)
const A_SUFFICIENT_COUNT_OF_NUMBERS: Cardinal<any> = as.Cardinal(Math.pow(2, 8))
const ROTATION_VECTOR_OR_MATRIX_BASE_TRANSLATION_FOR_CYCLING_FOR_AXIS: Cardinal<Cycle> =
    as.Cardinal(-2 as Of<Cycle>)

const X_AXIS: Ordinal<any> = as.Ordinal(0)
const Y_AXIS: Ordinal<any> = as.Ordinal(1)
const Z_AXIS: Ordinal<any> = as.Ordinal(2)
const ORIGIN: Space = as.Space(0)
const TWO_DIMENSIONAL: Cardinal<any> = as.Cardinal(2)
const THREE_DIMENSIONAL: Cardinal<any> = as.Cardinal(3)

const SQUARED: Power<any> = as.Power(2)
const CUBED: Power<any> = as.Power(3)
const SQUARE_ROOT: Exponent<any> = as.Exponent(1 / 2)
const CUBE_ROOT: Exponent<any> = as.Exponent(1 / 3)

const TWO: Integer = as.Integer(2)
const THREE: Integer = as.Integer(3)
const FOUR: Integer = as.Integer(4)
const FIVE: Integer = as.Integer(5)
const SIX: Integer = as.Integer(6)
const SEVEN: Integer = as.Integer(7)
const EIGHT: Integer = as.Integer(8)
const NINE: Integer = as.Integer(9)
const TEN: Integer = as.Integer(10)

const NEGATIVE: Scalar<any> = as.Scalar(-1)

const ZEROTH: Ordinal<any> = as.Ordinal(0)
const FIRST: Ordinal<any> = as.Ordinal(1)
const SECOND: Ordinal<any> = as.Ordinal(2)
const THIRD: Ordinal<any> = as.Ordinal(3)
const FOURTH: Ordinal<any> = as.Ordinal(4)
const FIFTH: Ordinal<any> = as.Ordinal(5)
const SIXTH: Ordinal<any> = as.Ordinal(6)
const SEVENTH: Ordinal<any> = as.Ordinal(7)
const EIGHTH: Ordinal<any> = as.Ordinal(8)
const NINTH: Ordinal<any> = as.Ordinal(9)
const TENTH: Ordinal<any> = as.Ordinal(10)
const ELEVENTH: Ordinal<any> = as.Ordinal(11)
const TWELFTH: Ordinal<any> = as.Ordinal(12)

const ADDITIVE_IDENTITY: Translation<any> = as.Translation(0)
const MULTIPLICATIVE_IDENTITY: Scalar<any> = as.Scalar(1)
const FRACTIONAL_IDENTITY: Fraction = as.Fraction([ as.Numerator(1), as.Denominator(1) ])

const NEXT: Cardinal<Ordinal<any>> = as.Cardinal<Ordinal>(1)
const PREVIOUS: Cardinal<Ordinal<any>> = as.Cardinal<Ordinal>(-1)
const UP_ONE: Cardinal<Cardinal<any>> = as.Cardinal<Cardinal>(1)
const DOWN_ONE: Cardinal<Cardinal<any>> = as.Cardinal<Cardinal>(-1)
const INCREMENT: Cardinal<any> = as.Cardinal(1)
const DECREMENT: Cardinal<any> = as.Cardinal(-1)
const ONE_MORE: Cardinal<Cardinal<any>> = as.Cardinal<Cardinal>(1)
const ONE_FEWER: Cardinal<Cardinal<any>> = as.Cardinal<Cardinal>(-1)
const NO_SHIFT: Cardinal<any> = as.Cardinal(0)

const NUMERATOR_INDEX: Ordinal<Fraction> = as.Ordinal<Fraction>(0)
const DENOMINATOR_INDEX: Ordinal<Fraction> = as.Ordinal<Fraction>(1)

const FIRST_FACTOR_NECESSARY_TO_CHECK_IF_COMMON: Integer = as.Integer(2)

const PI: Radians = as.Radians(Math.PI)
const E: Logarithm<any> = as.Logarithm(Math.E)

const GOOD_AMOUNT_OF_TIME_TO_SEE_WHAT_THE_SITUATION_IS_WHEN_HEADFULLY_DEBUGGING_TESTS: Ms = as.Ms(3000)

const INCLUSIVE: Cardinal<Ordinal<any>> = as.Cardinal<Ordinal>(1)
const EXCLUSIVE: Cardinal<Ordinal<any>> = as.Cardinal<Ordinal>(-1)
const INCLUSIVE_TO_LEFT: Cardinal<Ordinal<any>> = as.Cardinal<Ordinal>(-1)
const EXCLUSIVE_TO_LEFT: Cardinal<Ordinal<any>> = as.Cardinal<Ordinal>(1)

const INITIAL: Ordinal<any> = as.Ordinal(0)
const SKIP_FIRST_ELEMENT: Ordinal<any> = as.Ordinal(1)

const COUNT_FROM_LENGTH_TO_FINAL_INDEX: Cardinal<any> = as.Cardinal(-1)
const EXAMPLE_ELEMENT_INDEX: Ordinal<any> = as.Ordinal(0)

const NOT_FOUND: Ordinal<any> = as.Ordinal(-1)

const SEMITONES_PER_OCTAVE: Cardinal<Semitones> = as.Cardinal<Semitones>(12)

const OCTAVE: Base<Frequency> = as.Base<Frequency>(2)
const TRITAVE: Base<Frequency> = as.Base<Frequency>(3)
const SEMITONE: Logarithm<Frequency> = as.Logarithm<Frequency>(Math.pow(
    notAs.Base<Frequency>(OCTAVE),
    (1 / notAs.Cardinal<Semitones>(SEMITONES_PER_OCTAVE)),
))

const CENTS_PER_SEMITONE: Cents = as.Cents(100)
const CENTS_PER_OCTAVE: Cents =
    as.Cents(notAs.Cents(CENTS_PER_SEMITONE) * notAs.Cardinal<Semitones>(SEMITONES_PER_OCTAVE))

const BEGINNING: Ms = as.Ms(0)
const NO_DURATION: Ms = as.Ms(0)

const MAXIMUM_OCTAVE_RANGE_AUDIBLE_TO_HUMANS: Cardinal = as.Cardinal(10)

const MILLISECONDS_PER_SECOND: Cardinal<Ms> = as.Cardinal<Ms>(1000)
const SECONDS_PER_MINUTE: Cardinal = as.Cardinal(60)

const ONE_MILLISECOND: Ms = as.Ms(1)
const ONE_SECOND: Ms = as.Ms(1000)
const ONE_MINUTE: Ms = as.Ms(60000)
const ONE_HOUR: Ms = as.Ms(3600000)
const ONE_DAY: Ms = as.Ms(86400000)

const VERY_HIGH_PRECISION: Integer = as.Integer(10)
const VERY_LOW_PRECISION: Integer = as.Integer(1)

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
}
