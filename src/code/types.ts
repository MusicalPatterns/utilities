import { Ordinal } from '../nominal'

type ForEachCallback<T> = ((el: T, index: Ordinal) => void) | ((el: T) => void)
type MapCallback<T, U> = ((el: T, index: Ordinal) => U) | ((el: T) => U)
type ReduceCallback<T, U> = ((accumulator: U, el: T, index: Ordinal) => U) | ((accumulator: U, el: T) => U)

export {
    ForEachCallback,
    MapCallback,
    ReduceCallback,
}
