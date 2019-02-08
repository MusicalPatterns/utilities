import { Ordinal } from '../nominal'

type ForEachCallback<T> = ((el: T, index: Ordinal) => void) | ((el: T) => void)
type MapCallback<T> = ((el: T, index: Ordinal) => T) | ((el: T) => T)

export {
    ForEachCallback,
    MapCallback,
}
