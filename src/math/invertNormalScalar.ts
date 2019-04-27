import { as, NormalScalar, use } from '../nominal'
import { negative } from './typedOperations'

const invertNormalScalar: (normalScalar: NormalScalar) => NormalScalar =
    (normalScalar: NormalScalar): NormalScalar =>
        as.NormalScalar(use.Translation(
            1,
            as.Translation(as.number(negative(normalScalar))),
        ))

export {
    invertNormalScalar,
}
