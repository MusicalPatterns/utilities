import { from, Ordinal } from '../nominal'

const slice: <T>(array: T[], initial: Ordinal, terminal: Ordinal) => T[] =
    <T>(array: T[], initial: Ordinal, terminal: Ordinal): T[] =>
        array.slice(from.Ordinal(initial), from.Ordinal(terminal))

const forEach: <T>(array: T[], fn: (el: T, index?: Ordinal) => void) => void =
    <T>(array: T[], fn: (el: T, index?: Ordinal) => void): void => {
        // @ts-ignore
        array.forEach(fn)
    }

const map: <T>(array: T[], fn: (el: T, index?: Ordinal) => T) => T[] =
    <T>(array: T[], fn: (el: T, index?: Ordinal) => T): T[] =>
        // @ts-ignore
        array.map(fn)

export {
    slice,
    forEach,
    map,
}
