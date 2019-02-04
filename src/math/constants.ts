// tslint:disable no-magic-numbers

import { Count, Index, Offset, Power, Scalar, to } from '../nominal'

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
const A_SUFFICIENT_COUNT_OF_NUMBERS: Count = to.Count(Math.pow(2, 8))
const ADJUSTMENT_FOR_ROTATION_MATRIX_CYCLING_FROM_AXIS: number = 2

const X_AXIS: Index = to.Index(0)
const Y_AXIS: Index = to.Index(1)
const Z_AXIS: Index = to.Index(2)

const TWO_DIMENSIONAL: Count = to.Count(2)
const THREE_DIMENSIONAL: Count = to.Count(3)

const SQUARED: Power = to.Power(2)
const SQUARE_ROOT: Power = to.Power(1 / 2)

const EVEN: number = 2
const TWO: number = 2

const NEGATIVE: Scalar = to.Scalar(-1)

const ONCE: Count = to.Count(1)
const TWICE: Count = to.Count(2)

const EVERY_OTHER: Scalar = to.Scalar(2)

const ADDITIVE_IDENTITY: Offset = to.Offset(0)
const MULTIPLICATIVE_IDENTITY: Scalar = to.Scalar(1)

const ARBITRARILY_LARGE_NUMBER: number = 999999999999

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
    EVEN,
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
}
