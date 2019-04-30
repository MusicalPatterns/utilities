import { reciprocal } from '../math'
import { as, OCTAVE, Scalar, use } from '../nominal'
import { Pitch } from './types'

const octaveReduce: (scalar: Scalar<Pitch>) => Scalar<Pitch> =
    (scalar: Scalar<Pitch>): Scalar<Pitch> =>
        periodReduce(scalar, as.Scalar<Scalar<Pitch>>(as.number(OCTAVE)))

const periodReduce: (scalar: Scalar<Pitch>, period: Scalar<Scalar<Pitch>>) => Scalar<Pitch> =
    (scalar: Scalar<Pitch>, period: Scalar<Scalar<Pitch>>): Scalar<Pitch> => {
        let octaveReducedScalar: Scalar<Pitch> = scalar
        while (as.number(octaveReducedScalar) >= as.number(period)) {
            octaveReducedScalar = use.Scalar(octaveReducedScalar, reciprocal(period))
        }
        while (octaveReducedScalar < as.Scalar<Pitch>(1)) {
            octaveReducedScalar = use.Scalar(octaveReducedScalar, period)
        }

        return octaveReducedScalar
    }

export {
    octaveReduce,
    periodReduce,
}
