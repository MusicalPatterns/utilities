import { computeLength, isArray, isNumber, isUndefined, throws } from '../code'
import { integerCheck } from './checks'
import { TWO } from './constants'
import { Cardinal, Cycle, Integer, Rational } from './types'

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

const isRational: (maybeRational: unknown) => maybeRational is Rational =
    (maybeRational: unknown): maybeRational is Rational =>
        isTwoElementArray(maybeRational) && isInteger(maybeRational[ 0 ]) && isInteger(maybeRational[ 1 ])

export {
    isCycle,
    isRational,
    isInteger,
}
