import { from, Ordinal } from '../nominal'
import { ForEachCallback, MapCallback, ReduceCallback } from './types'

const slice: <T>(array: T[], initial: Ordinal, terminal: Ordinal) => T[] =
    <T>(array: T[], initial: Ordinal, terminal: Ordinal): T[] =>
        array.slice(from.Ordinal(initial), from.Ordinal(terminal))

const forEach: <T>(array: T[], fn: ForEachCallback<T>) => void =
    <T>(array: T[], fn: ForEachCallback<T>): void => {
        // @ts-ignore
        array.forEach(fn)
    }

const map: <T>(array: T[], fn: MapCallback<T>) => T[] =
    <T>(array: T[], fn: MapCallback<T>): T[] =>
        // @ts-ignore
        array.map(fn)

const reduce: <A, T>(array: T[], fn: ReduceCallback<A, T>, accumulator: A) => A =
    <A, T>(array: T[], fn: ReduceCallback<A, T>, accumulator: A): A =>
        // @ts-ignore
        array.reduce(fn, accumulator)

export {
    slice,
    forEach,
    map,
    reduce,
}
