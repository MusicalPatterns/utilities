import {
    Denominator,
    Fraction,
    greatestCommonDivisor,
    Integer,
    leastCommonMultiple,
    Numerator,
    product,
    Scalar,
    to,
} from '../indexForTest'
import { DENOMINATOR_INDEX, FRACTIONAL_IDENTITY, NUMERATOR_INDEX, quotient } from '../math'
import { apply } from '../nominal'

const getNumerator: (fraction: Fraction) => Numerator =
    (fraction: Fraction): Numerator =>
        apply.Ordinal(fraction, NUMERATOR_INDEX)

const getDenominator: (fraction: Fraction) => Denominator =
    (fraction: Fraction): Denominator =>
        apply.Ordinal(fraction, DENOMINATOR_INDEX)

const multiplyFractions: (...fractions: Fraction[]) => Fraction =
    (...fractions: Fraction[]): Fraction => {
        const lastFraction: Fraction = fractions.pop() as Fraction

        const nextMultipliedFraction: Fraction = fractions.length ?
            multiplyFractions(...fractions) :
            FRACTIONAL_IDENTITY

        return to.Fraction([
            product(getNumerator(nextMultipliedFraction), getNumerator(lastFraction)),
            product(getDenominator(nextMultipliedFraction), getDenominator(lastFraction)),
        ])
    }

const lowestTerms: (fraction: Fraction) => Fraction =
    ([ numerator, denominator ]: Fraction): Fraction => {
        const gcd: Integer = greatestCommonDivisor(numerator, denominator)

        return [
            quotient(numerator, to.Numerator(gcd)),
            quotient(denominator, to.Denominator(gcd)),
        ]
    }

const commonTerms: (fractions: Fraction[]) => Fraction[] =
    (fractions: Fraction[]): Fraction[] => {
        const fractionsInLowestTerms: Fraction[] = fractions.map(lowestTerms)

        const denominators: Denominator[] = fractionsInLowestTerms.map(getDenominator)
        const lowestCommonDenominator: Denominator = leastCommonMultiple(...denominators)

        return fractionsInLowestTerms.map((fraction: Fraction): Fraction => {
            const denominator: Denominator = getDenominator(fraction)
            if (denominator === lowestCommonDenominator) {
                return fraction
            }

            const termsScalar: Scalar = to.Scalar(quotient(lowestCommonDenominator, denominator))

            return to.Fraction([
                apply.Scalar(getNumerator(fraction), termsScalar),
                lowestCommonDenominator,
            ])
        })
    }

export {
    multiplyFractions,
    getNumerator,
    getDenominator,
    lowestTerms,
    commonTerms,
}
