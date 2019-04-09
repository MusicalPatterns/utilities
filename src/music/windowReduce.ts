import { reciprocal } from '../math'
import { apply, Frequency, from, OCTAVE, Scalar, to } from '../nominal'

const octaveReduce: (scalar: Scalar<Frequency>) => Scalar<Frequency> =
    (scalar: Scalar<Frequency>): Scalar<Frequency> =>
        windowReduce(scalar, to.Scalar(to.Frequency(from.Base(OCTAVE))))

const windowReduce: (scalar: Scalar<Frequency>, window: Scalar<Frequency>) => Scalar<Frequency> =
    (scalar: Scalar<Frequency>, window: Scalar<Frequency>): Scalar<Frequency> => {
        let octaveReducedScalar: Scalar<Frequency> = scalar
        while (octaveReducedScalar >= window) {
            octaveReducedScalar = apply.Scalar(octaveReducedScalar, reciprocal(window))
        }
        while (octaveReducedScalar < to.Scalar(to.Frequency(1))) {
            octaveReducedScalar = apply.Scalar(octaveReducedScalar, window)
        }

        return octaveReducedScalar
    }

export {
    octaveReduce,
    windowReduce,
}
