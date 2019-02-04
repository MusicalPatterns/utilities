import { A_SUFFICIENT_COUNT_OF_NUMBERS } from './constants'

const zeroAndPositiveIntegers: number[] = [
    ...Array(A_SUFFICIENT_COUNT_OF_NUMBERS)
        .keys(),
]

const positiveIntegers: number[] =  zeroAndPositiveIntegers
    .map((n: number): number => n + 1)

export {
    zeroAndPositiveIntegers,
    positiveIntegers,
}
