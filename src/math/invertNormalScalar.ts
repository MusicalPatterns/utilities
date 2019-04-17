import { apply, NormalScalar, ofOperation, to } from '../nominal'
import { negative } from './typedOperations'

const invertNormalScalar: (normalScalar: NormalScalar) => NormalScalar =
    (normalScalar: NormalScalar): NormalScalar =>
        apply.Translation(
            to.NormalScalar(1),
            to.Translation(ofOperation<NormalScalar>(negative(normalScalar))),
        )

export {
    invertNormalScalar,
}
