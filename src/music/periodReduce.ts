import { computeLowestTerms, getDenominator, getNumerator, reciprocal, setDenominator, setNumerator } from '../math'
import { as, Fraction, FractionalPart, isFraction, Multiple, OCTAVE, Scalar, use } from '../nominal'
import { Pitch } from './types'

const fractionPeriodReduce: (fraction: Fraction, period: Multiple<FractionalPart>) => Fraction =
    (fraction: Fraction, period: Multiple<FractionalPart>): Fraction => {
        const reducedFraction: Fraction = fraction.slice() as Fraction

        while (
            as.Integer(as.number(getNumerator(reducedFraction))) >
            as.Integer(as.number(use.Multiple(getDenominator(reducedFraction), period)))
            ) {
            setDenominator(reducedFraction, use.Multiple(getDenominator(reducedFraction), period))
        }

        while (
            as.Integer(as.number(getDenominator(reducedFraction))) >
            as.Integer(as.number(getNumerator(reducedFraction)))
            ) {
            setNumerator(reducedFraction, use.Multiple(getNumerator(reducedFraction), period))
        }

        return computeLowestTerms(reducedFraction)
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

const periodReduce:
    (
        scalarOrFraction: Scalar<Pitch> | Fraction,
        period: Scalar<Scalar<Pitch>> | Multiple<FractionalPart>,
    ) => Scalar<Pitch> | Fraction =
    (
        scalarOrFraction: Scalar<Pitch> | Fraction,
        period: Scalar<Scalar<Pitch>> | Multiple<FractionalPart>,
    ): Scalar<Pitch> | Fraction => {
        if (isFraction(scalarOrFraction)) {
            return fractionPeriodReduce(scalarOrFraction, period as unknown as Multiple<FractionalPart>)
        }

        return integerPeriodReduce(scalarOrFraction, period as unknown as Scalar<Scalar<Pitch>>)
    }

const octaveReduce: (scalarOrFraction: Scalar<Pitch> | Fraction) => Scalar<Pitch> | Fraction =
    (scalarOrFraction: Scalar<Pitch> | Fraction): Scalar<Pitch> | Fraction =>
        periodReduce(scalarOrFraction, as.Scalar<Scalar<Pitch>>(as.number(OCTAVE)))

export {
    octaveReduce,
    periodReduce,
}
