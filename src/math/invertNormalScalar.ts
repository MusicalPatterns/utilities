import { NormalScalar, to } from '../nominal'
import { difference } from './typedOperations'

const invertNormalScalar: (normalScalar: NormalScalar) => NormalScalar =
    (normalScalar: NormalScalar): NormalScalar =>
        difference(to.NormalScalar(1), normalScalar)

export {
    invertNormalScalar,
}
