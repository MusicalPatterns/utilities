import { as, NormalScalar, notAs, use } from '../nominal'
import { negative } from './typedOperations'

const invertNormalScalar: (normalScalar: NormalScalar) => NormalScalar =
    (normalScalar: NormalScalar): NormalScalar =>
        as.NormalScalar(use.Translation(
            1,
            as.Translation(notAs.NormalScalar(negative(normalScalar))),
        ))

export {
    invertNormalScalar,
}
