import { A_SUFFICIENT_COUNT_OF_NUMBERS } from './constants'
import * as to from './to'
import { Integer } from './types'

const ZERO_AND_POSITIVE_INTEGERS: Integer[] = [
    ...Array(A_SUFFICIENT_COUNT_OF_NUMBERS)
        .keys(),
].map(to.Integer)

const POSITIVE_INTEGERS: Integer[] = ZERO_AND_POSITIVE_INTEGERS
    .map((integer: Integer): Integer => to.Integer(integer + 1))

export {
    ZERO_AND_POSITIVE_INTEGERS,
    POSITIVE_INTEGERS,
}
