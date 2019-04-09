import * as to from './to'
import { Cardinal, Integer } from './types'

// tslint:disable-next-line no-magic-numbers
const A_SUFFICIENT_COUNT_OF_NUMBERS: Cardinal = to.Cardinal(Math.pow(2, 8))
const ZERO_AND_POSITIVE_INTEGERS: Integer[] = [
    ...Array(A_SUFFICIENT_COUNT_OF_NUMBERS)
        .keys(),
].map(to.Integer)
const POSITIVE_INTEGERS: Integer[] = ZERO_AND_POSITIVE_INTEGERS
    .map((integer: Integer): Integer => to.Integer(integer + 1))

export {
    POSITIVE_INTEGERS,
    ZERO_AND_POSITIVE_INTEGERS,
}
