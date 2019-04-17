import { apply, DECREMENT, INCREMENT, Ordinal } from '../nominal'

const translateFromOneIndexedToZeroIndexed: <IndexType>(index: Ordinal<IndexType>) => Ordinal<IndexType> =
    <IndexType>(index: Ordinal<IndexType>): Ordinal<IndexType> =>
        apply.Translation(index, DECREMENT)

const translateFromZeroIndexedToOneIndexed: <IndexType>(index: Ordinal<IndexType>) => Ordinal<IndexType> =
    <IndexType>(index: Ordinal<IndexType>): Ordinal<IndexType> =>
        apply.Translation(index, INCREMENT)

export {
    translateFromOneIndexedToZeroIndexed,
    translateFromZeroIndexedToOneIndexed,
}
