import { Ordinal } from '../nominal'

const uniqueFilter: <T>(value: T, index: Ordinal, self: T[]) => boolean =
    <T>(value: T, index: Ordinal, self: T[]): boolean =>
        self.indexOf(value) === index

export {
    uniqueFilter,
}
