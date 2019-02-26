import { ONE_HALF } from '../math'
import { apply, Frequency, from, Scalar } from '../nominal'
import { OCTAVE } from './constants'

const octaveReduce: (scalar: Scalar<Frequency>) => Scalar<Frequency> =
    (scalar: Scalar<Frequency>): Scalar<Frequency> => {
        let octaveReducedScalar: Scalar<Frequency> = scalar
        while (from.Scalar(octaveReducedScalar) >= from.Base(OCTAVE)) {
            octaveReducedScalar = apply.Scalar(octaveReducedScalar, ONE_HALF)
        }

        return octaveReducedScalar
    }

export {
    octaveReduce,
}
