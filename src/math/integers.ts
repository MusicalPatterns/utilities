import { apply, to } from '../nominal'
import { A_SUFFICIENT_COUNT_OF_NUMBERS } from './constants'

const zeroAndPositiveIntegers: number[] = [
    ...Array(A_SUFFICIENT_COUNT_OF_NUMBERS)
        .keys(),
]

const positiveIntegers: number[] =  zeroAndPositiveIntegers
    .map((integer: number): number => integer + 1)

export {
    zeroAndPositiveIntegers,
    positiveIntegers,
}
