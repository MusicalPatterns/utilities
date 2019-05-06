// tslint:disable no-magic-numbers max-file-line-count no-any

import * as as from './as'
import {
    AnyArrayedOrStringType,
    Base,
    Cardinal,
    Cents,
    Cycle,
    Delta,
    Exponent,
    Factor,
    Fraction,
    Frequency,
    Integer,
    Logarithm,
    Ms,
    Multiple,
    Of,
    Ordinal,
    Point,
    Power,
    Radians,
    Scalar,
    Semitones,
    Space,
    Time,
    Transition,
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

const EVERY_OTHER: Factor<AnyArrayedOrStringType> = as.Factor<AnyArrayedOrStringType>(2)
const EVERY_THIRD: Factor<AnyArrayedOrStringType> = as.Factor<AnyArrayedOrStringType>(3)
const EVERY_FOURTH: Factor<AnyArrayedOrStringType> = as.Factor<AnyArrayedOrStringType>(4)
const EVERY_FIFTH: Factor<AnyArrayedOrStringType> = as.Factor<AnyArrayedOrStringType>(5)

const ONCE: Cardinal<any> = as.Cardinal(1)
const TWICE: Cardinal<any> = as.Cardinal(2)
const THRICE: Cardinal<any> = as.Cardinal(3)
const FRICE: Cardinal<any> = as.Cardinal(4)
const FICE: Cardinal<any> = as.Cardinal(5)

const DEFAULT_PRECISION: Integer = as.Integer(2)

const ROTATION_VECTOR_OR_MATRIX_BASIS_TRANSLATION_FOR_CYCLING_FOR_AXIS: Cardinal<Cycle> =
    as.Cardinal(-2 as Of<Cycle>)

const X_AXIS: Ordinal<AnyArrayedOrStringType> = as.Ordinal<AnyArrayedOrStringType>(0)
const Y_AXIS: Ordinal<AnyArrayedOrStringType> = as.Ordinal<AnyArrayedOrStringType>(1)
const Z_AXIS: Ordinal<AnyArrayedOrStringType> = as.Ordinal<AnyArrayedOrStringType>(2)
const ORIGIN: Space = as.Space(0)
const TWO_DIMENSIONAL: Cardinal<AnyArrayedOrStringType> = as.Cardinal<AnyArrayedOrStringType>(2)
const THREE_DIMENSIONAL: Cardinal<AnyArrayedOrStringType> = as.Cardinal<AnyArrayedOrStringType>(3)

const SQUARED: Power<any> = as.Power(2)
const CUBED: Power<any> = as.Power(3)
const SQUARE_ROOT: Exponent<any> = as.Exponent(1 / 2)
const CUBE_ROOT: Exponent<any> = as.Exponent(1 / 3)

const ZERO: Integer = as.Integer(0)
const ONE: Integer = as.Integer(1)
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

const ZEROTH: Ordinal<AnyArrayedOrStringType> = as.Ordinal<AnyArrayedOrStringType>(0)
const FIRST: Ordinal<AnyArrayedOrStringType> = as.Ordinal<AnyArrayedOrStringType>(1)
const SECOND: Ordinal<AnyArrayedOrStringType> = as.Ordinal<AnyArrayedOrStringType>(2)
const THIRD: Ordinal<AnyArrayedOrStringType> = as.Ordinal<AnyArrayedOrStringType>(3)
const FOURTH: Ordinal<AnyArrayedOrStringType> = as.Ordinal<AnyArrayedOrStringType>(4)
const FIFTH: Ordinal<AnyArrayedOrStringType> = as.Ordinal<AnyArrayedOrStringType>(5)
const SIXTH: Ordinal<AnyArrayedOrStringType> = as.Ordinal<AnyArrayedOrStringType>(6)
const SEVENTH: Ordinal<AnyArrayedOrStringType> = as.Ordinal<AnyArrayedOrStringType>(7)
const EIGHTH: Ordinal<AnyArrayedOrStringType> = as.Ordinal<AnyArrayedOrStringType>(8)
const NINTH: Ordinal<AnyArrayedOrStringType> = as.Ordinal<AnyArrayedOrStringType>(9)
const TENTH: Ordinal<AnyArrayedOrStringType> = as.Ordinal<AnyArrayedOrStringType>(10)
const ELEVENTH: Ordinal<AnyArrayedOrStringType> = as.Ordinal<AnyArrayedOrStringType>(11)
const TWELFTH: Ordinal<AnyArrayedOrStringType> = as.Ordinal<AnyArrayedOrStringType>(12)

const ADDITIVE_IDENTITY: Translation<any> = as.Translation(0)
const MULTIPLICATIVE_IDENTITY: Scalar<any> = as.Scalar(1)
const FRACTIONAL_IDENTITY: Fraction = as.Fraction([ as.Numerator(1), as.Denominator(1) ])

const NEXT: Transition<AnyArrayedOrStringType> = as.Transition<AnyArrayedOrStringType>(1)
const PREVIOUS: Transition<AnyArrayedOrStringType> = as.Transition<AnyArrayedOrStringType>(-1)
const UP_ONE: Cardinal<Cardinal<any>> = as.Cardinal<Cardinal<any>>(1)
const DOWN_ONE: Cardinal<Cardinal<any>> = as.Cardinal<Cardinal<any>>(-1)
const INCREMENT: Cardinal<any> = as.Cardinal<any>(1)
const DECREMENT: Cardinal<any> = as.Cardinal<any>(-1)
const ONE_MORE: Cardinal<Cardinal<AnyArrayedOrStringType>> = as.Cardinal<Cardinal<AnyArrayedOrStringType>>(1)
const ONE_FEWER: Cardinal<Cardinal<AnyArrayedOrStringType>> = as.Cardinal<Cardinal<AnyArrayedOrStringType>>(-1)
const NO_SHIFT: Cardinal<any> = as.Cardinal<any>(0)

const NUMERATOR_INDEX: Ordinal<Fraction> = as.Ordinal<Fraction>(0)
const DENOMINATOR_INDEX: Ordinal<Fraction> = as.Ordinal<Fraction>(1)

const FIRST_FACTOR_NECESSARY_TO_CHECK_IF_COMMON: Integer = as.Integer(2)

const PI: Radians = as.Radians(Math.PI)
const E: Logarithm<any> = as.Logarithm(Math.E)

const GOOD_AMOUNT_OF_TIME_TO_SEE_WHAT_THE_SITUATION_IS_WHEN_HEADFULLY_DEBUGGING_TESTS: Delta<Ms> =
    as.Delta<Ms>(3000)

const INCLUSIVE: Transition<AnyArrayedOrStringType> = as.Transition<AnyArrayedOrStringType>(1)
const EXCLUSIVE: Transition<AnyArrayedOrStringType> = as.Transition<AnyArrayedOrStringType>(-1)
const INCLUSIVE_TO_LEFT: Transition<AnyArrayedOrStringType> = as.Transition<AnyArrayedOrStringType>(-1)
const EXCLUSIVE_TO_LEFT: Transition<AnyArrayedOrStringType> = as.Transition<AnyArrayedOrStringType>(1)

const INITIAL: Ordinal<AnyArrayedOrStringType> = as.Ordinal<AnyArrayedOrStringType>(0)
const SKIP_FIRST_ELEMENT: Ordinal<AnyArrayedOrStringType> = as.Ordinal<AnyArrayedOrStringType>(1)

const COUNT_FROM_LENGTH_TO_FINAL_INDEX: Cardinal<any> = as.Cardinal<any>(-1)
const EXAMPLE_ELEMENT_INDEX: Ordinal<AnyArrayedOrStringType> = as.Ordinal<AnyArrayedOrStringType>(0)

const NOT_FOUND: Ordinal<AnyArrayedOrStringType> = as.Ordinal<AnyArrayedOrStringType>(-1)

const SEMITONES_PER_OCTAVE: Cardinal<Semitones> = as.Cardinal<Semitones>(12)

const OCTAVE: Base<Frequency> = as.Base<Frequency>(2)
const TRITAVE: Base<Frequency> = as.Base<Frequency>(3)
const SEMITONE: Logarithm<Frequency> = as.Logarithm<Frequency>(Math.pow(
    as.number(OCTAVE),
    (1 / as.number(SEMITONES_PER_OCTAVE)),
))

const CENTS_PER_SEMITONE: Cents = as.Cents(100)
const CENTS_PER_OCTAVE: Cents =
    as.Cents(as.number(CENTS_PER_SEMITONE) * as.number(SEMITONES_PER_OCTAVE))

const NO_VALUE: Delta<Time> = as.Delta<Time>(0)

const BEGINNING: Point<Ms> = as.Point<Ms>(0)
const NO_DURATION: Delta<Ms> = as.Delta<Ms>(0)

const MAXIMUM_OCTAVE_RANGE_AUDIBLE_TO_HUMANS: Cardinal = as.Cardinal(10)

const MILLISECONDS_PER_SECOND: Cardinal<Ms> = as.Cardinal<Ms>(1000)
const SECONDS_PER_MINUTE: Cardinal = as.Cardinal(60)

const ONE_MILLISECOND: Delta<Ms> = as.Delta<Ms>(1)
const ONE_SECOND: Delta<Ms> = as.Delta<Ms>(1000)
const ONE_MINUTE: Delta<Ms> = as.Delta<Ms>(60000)
const ONE_HOUR: Delta<Ms> = as.Delta<Ms>(3600000)
const ONE_DAY: Delta<Ms> = as.Delta<Ms>(86400000)

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
}
