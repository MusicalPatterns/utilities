import { as, NormalScalar, ofNotAs, use } from '../nominal'
import { negative } from './typedOperations'

const invertNormalScalar: (normalScalar: NormalScalar) => NormalScalar =
    (normalScalar: NormalScalar): NormalScalar =>
        use.Translation(
            as.NormalScalar(1),
            as.Translation(ofNotAs(negative(normalScalar))),
        )

export {
    invertNormalScalar,
}
