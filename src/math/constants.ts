// tslint:disable no-magic-numbers max-file-line-count

import { apply, Base, Cardinal, Ordinal, Power, Radians, Scalar, to, Translation } from '../nominal'

const DECIMAL: number = 10

const ONE_HALF: Scalar = to.Scalar(1 / 2)
const ONE_THIRD: Scalar = to.Scalar(1 / 3)
const ONE_FOURTH: Scalar = to.Scalar(1 / 4)
const ONE_FIFTH: Scalar = to.Scalar(1 / 5)
const ONE_SIXTH: Scalar = to.Scalar(1 / 6)
const ONE_SEVENTH: Scalar = to.Scalar(1 / 7)
const ONE_EIGHTH: Scalar = to.Scalar(1 / 8)
const ONE_NINTH: Scalar = to.Scalar(1 / 9)
const ONE_TENTH: Scalar = to.Scalar(1 / 10)

const DEFAULT_PRECISION: number = 2
const A_SUFFICIENT_COUNT_OF_NUMBERS: Cardinal = to.Cardinal(apply.Power(2, to.Power(8)))
const ADJUSTMENT_FOR_ROTATION_MATRIX_CYCLING_FROM_AXIS: number = 2

const X_AXIS: Ordinal = to.Ordinal(0)
const Y_AXIS: Ordinal = to.Ordinal(1)
const Z_AXIS: Ordinal = to.Ordinal(2)

const TWO_DIMENSIONAL: Cardinal = to.Cardinal(2)
const THREE_DIMENSIONAL: Cardinal = to.Cardinal(3)

const SQUARED: Power = to.Power(2)
const CUBED: Power = to.Power(3)
const SQUARE_ROOT: Power = to.Power(1 / 2)
const CUBE_ROOT: Power = to.Power(1 / 3)

const TWO: number = 2
const THREE: number = 3
const FOUR: number = 4
const FIVE: number = 5
const SIX: number = 6
const SEVEN: number = 7
const EIGHT: number = 8
const NINE: number = 9
const TEN: number = 10

const NEGATIVE: Scalar = to.Scalar(-1)

const ONCE: Cardinal = to.Cardinal(1)
const TWICE: Cardinal = to.Cardinal(2)
const THRICE: Cardinal = to.Cardinal(3)
const FRICE: Cardinal = to.Cardinal(4)
const FICE: Cardinal = to.Cardinal(5)

const ZEROTH: Ordinal = to.Ordinal(0)
const FIRST: Ordinal = to.Ordinal(1)
const SECOND: Ordinal = to.Ordinal(2)
const THIRD: Ordinal = to.Ordinal(3)
const FOURTH: Ordinal = to.Ordinal(4)
const FIFTH: Ordinal = to.Ordinal(5)
const SIXTH: Ordinal = to.Ordinal(6)
const SEVENTH: Ordinal = to.Ordinal(7)
const EIGHTH: Ordinal = to.Ordinal(8)
const NINTH: Ordinal = to.Ordinal(9)
const TENTH: Ordinal = to.Ordinal(10)
const ELEVENTH: Ordinal = to.Ordinal(11)
const TWELFTH: Ordinal = to.Ordinal(12)

const EVERY_OTHER: Cardinal = to.Cardinal(2)

const ADDITIVE_IDENTITY: Translation = to.Translation(0)
const MULTIPLICATIVE_IDENTITY: Scalar = to.Scalar(1)

const ARBITRARILY_LARGE_NUMBER: number = 999999999999

const PI: Radians = to.Radians(Math.PI)
const E: Base = to.Base(Math.E)
const SQUARE_ROOT_OF_TWO: number = Math.sqrt(2)
const SQUARE_ROOT_OF_THREE: number = Math.sqrt(3)
const CUBE_ROOT_OF_TWO: number = Math.cbrt(2)
const CUBE_ROOT_OF_THREE: number = Math.cbrt(3)

export {
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
    ADJUSTMENT_FOR_ROTATION_MATRIX_CYCLING_FROM_AXIS,
    X_AXIS,
    Y_AXIS,
    Z_AXIS,
    SQUARE_ROOT,
    SQUARED,
    ONCE,
    TWICE,
    EVERY_OTHER,
    TWO_DIMENSIONAL,
    THREE_DIMENSIONAL,
    TWO,
    ADDITIVE_IDENTITY,
    MULTIPLICATIVE_IDENTITY,
    ARBITRARILY_LARGE_NUMBER,
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
    SQUARE_ROOT_OF_TWO,
    SQUARE_ROOT_OF_THREE,
    CUBE_ROOT_OF_TWO,
    CUBE_ROOT_OF_THREE,
}
