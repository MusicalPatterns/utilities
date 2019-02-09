import { from, Ordinal } from '../nominal'

const slice: <T>(array: T[], initial: Ordinal, terminal: Ordinal) => T[] =
    <T>(array: T[], initial: Ordinal, terminal: Ordinal): T[] =>
        array.slice(from.Ordinal(initial), from.Ordinal(terminal))

const forEach: <T>(array: T[], fn: (el: T, index: Ordinal) => void) => void =
    <T>(array: T[], fn: (el: T, index: Ordinal) => void): void => {
        // @ts-ignore
        array.forEach(fn)
    }

const map: <T, U>(array: T[], fn: (el: T, index: Ordinal) => U) => U[] =
    <T, U>(array: T[], fn: (el: T, index: Ordinal) => U): U[] =>
        // @ts-ignore
        array.map(fn)

const reduce: <T, U>(array: T[], fn: (accumulator: U, el: T, index: Ordinal) => U, accumulator: U) => U =
    <T, U>(array: T[], fn: (accumulator: U, el: T, index: Ordinal) => U, accumulator: U): U =>
        // @ts-ignore
        array.reduce(fn, accumulator)

export {
    slice,
    forEach,
    map,
    reduce,
}
