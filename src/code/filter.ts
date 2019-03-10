import { Ordinal } from '../nominal'

const uniqueFilter: <ElementType>(value: ElementType, index: Ordinal, self: ElementType[]) => boolean =
    <ElementType>(value: ElementType, index: Ordinal, self: ElementType[]): boolean =>
        self.indexOf(value) === index

export {
    uniqueFilter,
}
