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

const map: <T, U>(array: T[], fn: MapCallback<T, U>) => U[] =
    <T, U>(array: T[], fn: MapCallback<T, U>): U[] =>
        // @ts-ignore
        array.map(fn)

const reduce: <T, U>(array: T[], fn: ReduceCallback<T, U>, accumulator: U) => U =
    <T, U>(array: T[], fn: ReduceCallback<T, U>, accumulator: U): U =>
        // @ts-ignore
        array.reduce(fn, accumulator)

export {
    slice,
    forEach,
    map,
    reduce,
}
