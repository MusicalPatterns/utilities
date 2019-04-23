import { DECREMENT, INCREMENT, Ordinal, use } from '../nominal'

const translateFromOneIndexedToZeroIndexed:
    <ElementType, ArrayType extends ElementType[]>(index: Ordinal<ArrayType>) => Ordinal<ArrayType> =
    <ElementType, ArrayType extends ElementType[]>(index: Ordinal<ArrayType>): Ordinal<ArrayType> =>
        use.Cardinal(index, DECREMENT)

const translateFromZeroIndexedToOneIndexed:
    <ElementType, ArrayType extends ElementType[]>(index: Ordinal<ArrayType>) => Ordinal<ArrayType> =
    <ElementType, ArrayType extends ElementType[]>(index: Ordinal<ArrayType>): Ordinal<ArrayType> =>
        use.Cardinal(index, INCREMENT)

export {
    translateFromOneIndexedToZeroIndexed,
    translateFromZeroIndexedToOneIndexed,
}
