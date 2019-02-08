import { negative } from '../math'
import { apply, Ordinal, to } from '../nominal'

const translateFromOneIndexedToZeroIndexed: (index: Ordinal) => Ordinal =
    (index: Ordinal): Ordinal =>
        apply.Translation(index, to.Translation(negative(1)))

const translateFromZeroIndexedToOneIndexed: (index: Ordinal) => Ordinal =
    (index: Ordinal): Ordinal =>
        apply.Translation(index, to.Translation(1))

export {
    translateFromOneIndexedToZeroIndexed,
    translateFromZeroIndexedToOneIndexed,
}
