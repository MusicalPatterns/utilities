import { apply, to } from '../nominal'
import { A_SUFFICIENT_COUNT_OF_NUMBERS } from './constants'

const zeroAndPositiveIntegers: number[] = [
    ...Array(A_SUFFICIENT_COUNT_OF_NUMBERS)
        .keys(),
]

const positiveIntegers: number[] =  zeroAndPositiveIntegers
    .map((integer: number): number => apply.Translation(integer, to.Translation((1))))

export {
    zeroAndPositiveIntegers,
    positiveIntegers,
}
