import { Ordinal } from '../nominal'

const uniqueFilter: <ElementType>(value: ElementType, index: Ordinal<ElementType[]>, self: ElementType[]) => boolean =
    <ElementType>(value: ElementType, index: Ordinal<ElementType[]>, self: ElementType[]): boolean =>
        self.indexOf(value) === index as unknown as number

export {
    uniqueFilter,
}
