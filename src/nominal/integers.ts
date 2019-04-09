import { A_SUFFICIENT_COUNT_OF_NUMBERS } from './constants'
import * as to from './to'
import { Integer } from './types'

const zeroAndPositiveIntegers: Integer[] = [
    ...Array(A_SUFFICIENT_COUNT_OF_NUMBERS)
        .keys(),
].map(to.Integer)

const positiveIntegers: Integer[] = zeroAndPositiveIntegers
    .map((integer: Integer): Integer => to.Integer(integer + 1))

export {
    zeroAndPositiveIntegers,
    positiveIntegers,
}
