// tslint:disable no-magic-numbers

import { Count, Scalar, to } from '../nominal'

const DECIMAL: number = 10
const HALF: Scalar = to.Scalar(1 / 2)
const DEFAULT_PRECISION: number = 2
const A_SUFFICIENT_COUNT_OF_NUMBERS: Count = to.Count(Math.pow(2, 8))

export {
    DECIMAL,
    HALF,
    DEFAULT_PRECISION,
    A_SUFFICIENT_COUNT_OF_NUMBERS,
}
