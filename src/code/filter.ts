import { Index } from '../nominal'

const uniqueFilter: <ElementType>(value: ElementType, index: Index, self: ElementType[]) => boolean =
    <ElementType>(value: ElementType, index: Index, self: ElementType[]): boolean =>
        self.indexOf(value) === index as unknown as number

export {
    uniqueFilter,
}
