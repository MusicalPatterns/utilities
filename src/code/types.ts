import { Ordinal } from '../nominal'

type ForEachCallback<T> = ((el: T, index: Ordinal) => void) | ((el: T) => void)
type MapCallback<T> = ((el: T, index: Ordinal) => T) | ((el: T) => T)
type ReduceCallback<A, T> = ((accumulator: A, el: T, index: Ordinal) => A) | ((accumulator: A, el: T) => A)

export {
    ForEachCallback,
    MapCallback,
    ReduceCallback,
}
