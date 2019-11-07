import { computeLength, isArray, isNumber, isUndefined, throws } from '../code'
import { integerCheck } from './checks'
import { TWO } from './constants'
import { Cardinal, Cycle, Fraction, Integer } from './types'

const isCycle: (maybeCycle: unknown) => maybeCycle is Cycle<unknown> =
    (maybeCycle: unknown): maybeCycle is Cycle<unknown> =>
        maybeCycle && (maybeCycle as Cycle<unknown>)._CycleBrand

const isTwoElementArray: (maybeTwoElementArray: unknown) => maybeTwoElementArray is unknown[] =
    (maybeTwoElementArray: unknown): maybeTwoElementArray is unknown[] =>
        !isUndefined(maybeTwoElementArray) &&
        isArray(maybeTwoElementArray) &&
        computeLength(maybeTwoElementArray) === TWO as unknown as Cardinal<unknown[]>

const isInteger: (maybeInteger: unknown) => maybeInteger is Integer =
    (maybeInteger: unknown): maybeInteger is Integer =>
        isNumber(maybeInteger) && !throws(() => integerCheck(maybeInteger))

const isFraction: (maybeFraction: unknown) => maybeFraction is Fraction =
    (maybeFraction: unknown): maybeFraction is Fraction =>
        isTwoElementArray(maybeFraction) && isInteger(maybeFraction[ 0 ]) && isInteger(maybeFraction[ 1 ])

export {
    isCycle,
    isFraction,
    isInteger,
}
