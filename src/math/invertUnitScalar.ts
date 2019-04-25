import { as, UnitScalar, use } from '../nominal'
import { negative } from './typedOperations'

const invertUnitScalar: (unitScalar: UnitScalar) => UnitScalar =
    (unitScalar: UnitScalar): UnitScalar =>
        as.UnitScalar(use.Translation(
            1,
            as.Translation(as.number(negative(unitScalar))),
        ))

export {
    invertUnitScalar,
}
