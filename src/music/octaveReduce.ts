import { HALF } from '../math'
import { apply, from, Scalar, to } from '../nominal'
import { OCTAVE } from './constants'

const octaveReduce: (scalar: Scalar) => Scalar =
    (scalar: Scalar): Scalar => {
        let octaveReducedScalar: Scalar = scalar
        while (from.Scalar(octaveReducedScalar) >= from.Base(OCTAVE)) {
            octaveReducedScalar = apply.Scalar(octaveReducedScalar, HALF)
        }

        return octaveReducedScalar
    }

export {
    octaveReduce,
}
