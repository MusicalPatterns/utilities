import { apply, NEXT, Ordinal, PREVIOUS } from '../nominal'

const translateFromOneIndexedToZeroIndexed: (index: Ordinal) => Ordinal =
    (index: Ordinal): Ordinal =>
        apply.Translation(index, PREVIOUS)

const translateFromZeroIndexedToOneIndexed: (index: Ordinal) => Ordinal =
    (index: Ordinal): Ordinal =>
        apply.Translation(index, NEXT)

export {
    translateFromOneIndexedToZeroIndexed,
    translateFromZeroIndexedToOneIndexed,
}
