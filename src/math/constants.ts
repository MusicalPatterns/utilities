// tslint:disable no-magic-numbers

import { Count, Index, Power, Scalar, to } from '../nominal'

const DECIMAL: number = 10
const HALF: Scalar = to.Scalar(1 / 2)
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

const ONCE: Count = to.Count(1)
const TWICE: Count = to.Count(2)

const EVERY_OTHER: Scalar = to.Scalar(2)

export {
    DECIMAL,
    HALF,
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
}
