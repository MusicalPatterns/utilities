import { apply, Index, NEXT, PREVIOUS } from '../nominal'

const translateFromOneIndexedToZeroIndexed: (index: Index) => Index =
    (index: Index): Index =>
        apply.Translation(index, PREVIOUS)

const translateFromZeroIndexedToOneIndexed: (index: Index) => Index =
    (index: Index): Index =>
        apply.Translation(index, NEXT)

export {
    translateFromOneIndexedToZeroIndexed,
    translateFromZeroIndexedToOneIndexed,
}
