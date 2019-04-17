import { apply, DECREMENT, INCREMENT, Index } from '../nominal'

const translateFromOneIndexedToZeroIndexed: <IndexType>(index: Index<IndexType>) => Index<IndexType> =
    <IndexType>(index: Index<IndexType>): Index<IndexType> =>
        apply.Translation(index, DECREMENT)

const translateFromZeroIndexedToOneIndexed: <IndexType>(index: Index<IndexType>) => Index<IndexType> =
    <IndexType>(index: Index<IndexType>): Index<IndexType> =>
        apply.Translation(index, INCREMENT)

export {
    translateFromOneIndexedToZeroIndexed,
    translateFromZeroIndexedToOneIndexed,
}
