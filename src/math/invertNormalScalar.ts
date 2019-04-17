import { apply, NormalScalar, ofFrom, to } from '../nominal'
import { negative } from './typedOperations'

const invertNormalScalar: (normalScalar: NormalScalar) => NormalScalar =
    (normalScalar: NormalScalar): NormalScalar =>
        apply.Translation(
            to.NormalScalar(1),
            to.Translation(ofFrom(negative(normalScalar))),
        )

export {
    invertNormalScalar,
}
