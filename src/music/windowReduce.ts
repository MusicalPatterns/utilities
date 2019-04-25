import { reciprocal } from '../math'
import { as, Frequency, OCTAVE, Scalar, use } from '../nominal'

const octaveReduce: (scalar: Scalar<Frequency>) => Scalar<Frequency> =
    (scalar: Scalar<Frequency>): Scalar<Frequency> =>
        windowReduce(scalar, as.Scalar<Scalar<Frequency>>(as.number(OCTAVE)))

const windowReduce: (scalar: Scalar<Frequency>, window: Scalar<Scalar<Frequency>>) => Scalar<Frequency> =
    (scalar: Scalar<Frequency>, window: Scalar<Scalar<Frequency>>): Scalar<Frequency> => {
        let octaveReducedScalar: Scalar<Frequency> = scalar
        while (as.number(octaveReducedScalar) >= as.number(window)) {
            octaveReducedScalar = use.Scalar(octaveReducedScalar, reciprocal(window))
        }
        while (octaveReducedScalar < as.Scalar<Frequency>(1)) {
            octaveReducedScalar = use.Scalar(octaveReducedScalar, window)
        }

        return octaveReducedScalar
    }

export {
    octaveReduce,
    windowReduce,
}
