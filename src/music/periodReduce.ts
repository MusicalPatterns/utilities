import { computeLowestTerms, getDenominator, getNumerator, reciprocal, setDenominator, setNumerator } from '../math'
import { as, Ator, isRational, Multiple, OCTAVE, Rational, Scalar, use } from '../nominal'
import { Pitch } from './types'

const rationalPeriodReduce: (rational: Rational, period: Multiple<Ator>) => Rational =
    (rational: Rational, period: Multiple<Ator>): Rational => {
        const reducedRational: Rational = rational.slice() as Rational

        while (
            as.Integer(as.number(getNumerator(reducedRational))) >
            as.Integer(as.number(use.Multiple(getDenominator(reducedRational), period)))
            ) {
            setDenominator(reducedRational, use.Multiple(getDenominator(reducedRational), period))
        }

        while (
            as.Integer(as.number(getDenominator(reducedRational))) >
            as.Integer(as.number(getNumerator(reducedRational)))
            ) {
            setNumerator(reducedRational, use.Multiple(getNumerator(reducedRational), period))
        }

        return computeLowestTerms(reducedRational)
    }

const integerPeriodReduce: (scalar: Scalar<Pitch>, period: Scalar<Scalar<Pitch>>) => Scalar<Pitch> =
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

const periodReduce: {
    (
        scalarOrRational: Scalar<Pitch>,
        period: Scalar<Scalar<Pitch>>,
    ): Scalar<Pitch>,
    (
        scalarOrRational: Rational,
        period: Multiple<Ator>,
    ): Rational,
} =
    (
        scalarOrRational: Scalar<Pitch> | Rational,
        period: Scalar<Scalar<Pitch>> | Multiple<Ator>,
    ): Scalar<Pitch> & Rational => {
        if (isRational(scalarOrRational)) {
            return rationalPeriodReduce(
                scalarOrRational,
                period as unknown as Multiple<Ator>,
            ) as Scalar<Pitch> & Rational
        }

        return integerPeriodReduce(
            scalarOrRational,
            period as unknown as Scalar<Scalar<Pitch>>,
        ) as Scalar<Pitch> & Rational
    }

const octaveReduce: {
    (scalarOrRational: Scalar<Pitch>): Scalar<Pitch>,
    (scalarOrRational: Rational): Rational,
} =
    (scalarOrRational: Scalar<Pitch> | Rational): Scalar<Pitch> & Rational =>
        periodReduce(
            scalarOrRational as Scalar<Pitch>,
            as.Scalar<Scalar<Pitch>>(as.number(OCTAVE)),
        ) as Scalar<Pitch> & Rational

export {
    octaveReduce,
    periodReduce,
}
