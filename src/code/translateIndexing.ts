import { ArrayedType, DECREMENT, INCREMENT, Ordinal, use } from '../nominal'

const translateFromOneIndexedToZeroIndexed:
    <ArrayType extends ArrayedType>(index: Ordinal<ArrayType>) => Ordinal<ArrayType> =
    <ArrayType extends ArrayedType>(index: Ordinal<ArrayType>): Ordinal<ArrayType> =>
        use.Cardinal(index, DECREMENT)

const translateFromZeroIndexedToOneIndexed:
    <ArrayType extends ArrayedType>(index: Ordinal<ArrayType>) => Ordinal<ArrayType> =
    <ArrayType extends ArrayedType>(index: Ordinal<ArrayType>): Ordinal<ArrayType> =>
        use.Cardinal(index, INCREMENT)

export {
    translateFromOneIndexedToZeroIndexed,
    translateFromZeroIndexedToOneIndexed,
}
