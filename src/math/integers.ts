import { from, Integer, to } from '../nominal'
import { A_SUFFICIENT_COUNT_OF_NUMBERS } from './constants'

const zeroAndPositiveIntegers: Integer[] = [
    ...Array(A_SUFFICIENT_COUNT_OF_NUMBERS)
        .keys(),
].map(to.Integer)

const positiveIntegers: Integer[] = zeroAndPositiveIntegers
    .map((integer: Integer): Integer => to.Integer(from.Integer(integer) + 1))

export {
    zeroAndPositiveIntegers,
    positiveIntegers,
}
