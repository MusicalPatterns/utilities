import { reciprocal } from '../math'
import { as, Frequency, notAs, OCTAVE, Scalar, use } from '../nominal'

const octaveReduce: (scalar: Scalar<Frequency>) => Scalar<Frequency> =
    (scalar: Scalar<Frequency>): Scalar<Frequency> =>
        windowReduce(scalar, as.Scalar<Scalar<Frequency>>(notAs.Base<Frequency>(OCTAVE)))

const windowReduce: (scalar: Scalar<Frequency>, window: Scalar<Scalar<Frequency>>) => Scalar<Frequency> =
    (scalar: Scalar<Frequency>, window: Scalar<Scalar<Frequency>>): Scalar<Frequency> => {
        let octaveReducedScalar: Scalar<Frequency> = scalar
        while (notAs.Scalar<Frequency>(octaveReducedScalar) >= notAs.Scalar<Scalar<Frequency>>(window)) {
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
