import { as, notAs, UnitScalar, use } from '../nominal'
import { negative } from './typedOperations'

const invertUnitScalar: (unitScalar: UnitScalar) => UnitScalar =
    (unitScalar: UnitScalar): UnitScalar =>
        as.UnitScalar(use.Translation(
            1,
            as.Translation(notAs.UnitScalar(negative(unitScalar))),
        ))

export {
    invertUnitScalar,
}
