import { apply, Ordinal, to } from '../nominal'

const translateFromOneIndexedToZeroIndexed: (index: Ordinal) => Ordinal =
    (index: Ordinal): Ordinal =>
        apply.Translation(index, to.Translation(-1))

export {
    translateFromOneIndexedToZeroIndexed,
}
