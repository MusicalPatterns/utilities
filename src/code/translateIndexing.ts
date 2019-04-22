import { DECREMENT, INCREMENT, Ordinal, use } from '../nominal'

const translateFromOneIndexedToZeroIndexed: <IndexType>(index: Ordinal<IndexType>) => Ordinal<IndexType> =
    <IndexType>(index: Ordinal<IndexType>): Ordinal<IndexType> =>
        use.Cardinal(index, DECREMENT)

const translateFromZeroIndexedToOneIndexed: <IndexType>(index: Ordinal<IndexType>) => Ordinal<IndexType> =
    <IndexType>(index: Ordinal<IndexType>): Ordinal<IndexType> =>
        use.Cardinal(index, INCREMENT)

export {
    translateFromOneIndexedToZeroIndexed,
    translateFromZeroIndexedToOneIndexed,
}
