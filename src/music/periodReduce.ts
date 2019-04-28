import { reciprocal } from '../math'
import { as, Frequency, OCTAVE, Scalar, use } from '../nominal'

const octaveReduce: (scalar: Scalar<Frequency>) => Scalar<Frequency> =
    (scalar: Scalar<Frequency>): Scalar<Frequency> =>
        periodReduce(scalar, as.Scalar<Scalar<Frequency>>(as.number(OCTAVE)))

const periodReduce: (scalar: Scalar<Frequency>, period: Scalar<Scalar<Frequency>>) => Scalar<Frequency> =
    (scalar: Scalar<Frequency>, period: Scalar<Scalar<Frequency>>): Scalar<Frequency> => {
        let octaveReducedScalar: Scalar<Frequency> = scalar
        while (as.number(octaveReducedScalar) >= as.number(period)) {
            octaveReducedScalar = use.Scalar(octaveReducedScalar, reciprocal(period))
        }
        while (octaveReducedScalar < as.Scalar<Frequency>(1)) {
            octaveReducedScalar = use.Scalar(octaveReducedScalar, period)
        }

        return octaveReducedScalar
    }

export {
    octaveReduce,
    periodReduce,
}
