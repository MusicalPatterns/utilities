import { A_SUFFICIENT_COUNT_OF_NUMBERS } from './constants'

const numbers: number[] = [
    ...Array(A_SUFFICIENT_COUNT_OF_NUMBERS)
        .keys(),
]
    .map((n: number): number => n + 1)

export {
    numbers,
}
