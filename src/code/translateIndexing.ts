import { DECREMENT, INCREMENT, Ordinal, use } from '../nominal'

const translateFromOneIndexedToZeroIndexed: <IndexType>(index: Ordinal<IndexType>) => Ordinal<IndexType> =
    <IndexType>(index: Ordinal<IndexType>): Ordinal<IndexType> =>
        use.Translation(index, DECREMENT)

const translateFromZeroIndexedToOneIndexed: <IndexType>(index: Ordinal<IndexType>) => Ordinal<IndexType> =
    <IndexType>(index: Ordinal<IndexType>): Ordinal<IndexType> =>
        use.Translation(index, INCREMENT)

export {
    translateFromOneIndexedToZeroIndexed,
    translateFromZeroIndexedToOneIndexed,
}
