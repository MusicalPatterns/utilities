import { from, Ordinal } from '../nominal'

// tslint:disable-next-line no-any
const slice: <T extends any[] | string>(array: T, initial: Ordinal, terminal?: Ordinal) => T =
    // tslint:disable-next-line no-any
    <T extends any[] | string>(array: T, initial: Ordinal, terminal?: Ordinal): T => {
        if (terminal !== undefined) {
            return array.slice(from.Ordinal(initial), from.Ordinal(terminal)) as T
        }
        else {
            return array.slice(from.Ordinal(initial)) as T
        }
    }

const forEach: <T>(array: T[], fn: (el: T, index: Ordinal, self: T[]) => void) => void =
    <T>(array: T[], fn: (el: T, index: Ordinal, self: T[]) => void): void => {
        // @ts-ignore
        array.forEach(fn)
    }

const map: <T, U>(array: T[], fn: (el: T, index: Ordinal, self: T[]) => U) => U[] =
    <T, U>(array: T[], fn: (el: T, index: Ordinal, self: T[]) => U): U[] =>
        // @ts-ignore
        array.map(fn)

const reduce: <T, U>(array: T[], fn: (accumulator: U, el: T, index: Ordinal, self: T[]) => U, accumulator: U) => U =
    <T, U>(array: T[], fn: (accumulator: U, el: T, index: Ordinal, self: T[]) => U, accumulator: U): U =>
        // @ts-ignore
        array.reduce(fn, accumulator)

const filter: <T>(array: T[], fn: (el: T, index: Ordinal, self: T[]) => boolean) => T[] =
    <T>(array: T[], fn: (el: T, index: Ordinal, self: T[]) => boolean): T[] =>
        // @ts-ignore
        array.filter(fn)

export {
    slice,
    forEach,
    map,
    reduce,
    filter,
}
