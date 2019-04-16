import {
    computeGreatestCommonDivisor,
    computeLeastCommonMultiple,
    Denominator,
    Fraction,
    Integer,
    Numerator,
    product,
    to,
} from '../indexForTest'
import { quotient } from '../math'
import { apply, DENOMINATOR_INDEX, FRACTIONAL_IDENTITY, from, Multiple, NUMERATOR_INDEX, of } from '../nominal'

const getNumerator: (fraction: Fraction) => Numerator =
    (fraction: Fraction): Numerator =>
        apply.Index(fraction, NUMERATOR_INDEX) as Numerator

const getDenominator: (fraction: Fraction) => Denominator =
    (fraction: Fraction): Denominator =>
        apply.Index(fraction, DENOMINATOR_INDEX) as Denominator

const multiplyFractions: (...fractions: Fraction[]) => Fraction =
    (...fractions: Fraction[]): Fraction => {
        const previousFraction: Fraction = fractions.pop() as Fraction

        const nextMultipliedFraction: Fraction = fractions.length ?
            multiplyFractions(...fractions) :
            FRACTIONAL_IDENTITY

        return to.Fraction([
            product(getNumerator(nextMultipliedFraction), getNumerator(previousFraction)),
            product(getDenominator(nextMultipliedFraction), getDenominator(previousFraction)),
        ])
    }

const computeLowestTerms: (fraction: Fraction) => Fraction =
    ([ numerator, denominator ]: Fraction): Fraction => {
        const gcd: Integer = computeGreatestCommonDivisor(
            numerator as unknown as Integer,
            denominator as unknown as Integer,
        )

        return to.Fraction([
            quotient(numerator as unknown as Integer, gcd),
            quotient(denominator as unknown as Integer, gcd),
        ])
    }

const computeLowestCommonDenominator: (...fractions: Fraction[]) => Denominator =
    (...fractions: Fraction[]): Denominator => {
        const fractionsInLowestTerms: Fraction[] = fractions.map(computeLowestTerms)
        const denominators: Denominator[] = fractionsInLowestTerms.map(getDenominator)

        return to.Denominator(computeLeastCommonMultiple(...denominators as unknown as Integer[]))
    }

const computeCommonTerms: (...fractions: Fraction[]) => Fraction[] =
    (...fractions: Fraction[]): Fraction[] => {
        const lowestCommonDenominator: Denominator = computeLowestCommonDenominator(...fractions)

        return fractions
            .map(computeLowestTerms)
            .map((fraction: Fraction): Fraction => {
                const denominator: Denominator = getDenominator(fraction)
                if (denominator === lowestCommonDenominator) {
                    return fraction
                }

                const termsMultiple: Multiple<Numerator> =
                    to.Multiple<Numerator>(from.Denominator(quotient(
                        lowestCommonDenominator,
                        denominator,
                    )))

                return to.Fraction([
                    apply.Multiple(getNumerator(fraction), termsMultiple),
                    lowestCommonDenominator,
                ])
            })
    }

export {
    multiplyFractions,
    getNumerator,
    getDenominator,
    computeLowestTerms,
    computeCommonTerms,
    computeLowestCommonDenominator,
}
