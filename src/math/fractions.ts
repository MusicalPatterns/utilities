// tslint:disable max-file-line-count

import { arraySet, computeLength } from '../code'
import { computeGreatestCommonDivisor, computeLeastCommonMultiple, product, quotient } from '../math'
import {
    as,
    Denominator,
    DENOMINATOR_INDEX,
    Fraction,
    FRACTIONAL_IDENTITY,
    Integer,
    Multiple,
    Numerator,
    NUMERATOR_INDEX,
    use,
} from '../nominal'

const getNumerator: (fraction: Fraction) => Numerator =
    (fraction: Fraction): Numerator =>
        use.Ordinal(fraction, NUMERATOR_INDEX) as Numerator

const getDenominator: (fraction: Fraction) => Denominator =
    (fraction: Fraction): Denominator =>
        use.Ordinal(fraction, DENOMINATOR_INDEX) as Denominator

const setNumerator: (fraction: Fraction, numerator: Numerator) => Fraction =
    (fraction: Fraction, numerator: Numerator): Fraction =>
        arraySet(fraction, NUMERATOR_INDEX, numerator) as Fraction

const setDenominator: (fraction: Fraction, denominator: Denominator) => Fraction =
    (fraction: Fraction, denominator: Denominator): Fraction =>
        arraySet(fraction, DENOMINATOR_INDEX, denominator) as Fraction

const multiplyFractions: (...fractions: Fraction[]) => Fraction =
    (...fractions: Fraction[]): Fraction => {
        const previousFraction: Fraction = fractions.pop() as Fraction

        const nextMultipliedFraction: Fraction = computeLength(fractions) > as.Cardinal<Fraction[]>(0) ?
            multiplyFractions(...fractions) :
            FRACTIONAL_IDENTITY

        return computeLowestTerms(as.Fraction([
            product(getNumerator(nextMultipliedFraction), getNumerator(previousFraction)),
            product(getDenominator(nextMultipliedFraction), getDenominator(previousFraction)),
        ]))
    }

const computeLowestTerms: (fraction: Fraction) => Fraction =
    ([ numerator, denominator ]: Fraction): Fraction => {
        const gcd: Integer = computeGreatestCommonDivisor(
            numerator as unknown as Integer,
            denominator as unknown as Integer,
        )

        return asFraction(
            quotient(numerator as unknown as Integer, gcd),
            quotient(denominator as unknown as Integer, gcd),
        )
    }

const computeLowestCommonDenominator: (...fractions: Fraction[]) => Denominator =
    (...fractions: Fraction[]): Denominator => {
        const fractionsInLowestTerms: Fraction[] = fractions.map(computeLowestTerms)
        const denominators: Denominator[] = fractionsInLowestTerms.map(getDenominator)

        return as.Denominator(computeLeastCommonMultiple(...denominators as unknown as Integer[]))
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
                    as.Multiple<Numerator>(quotient(
                        lowestCommonDenominator,
                        denominator,
                    ))

                return as.Fraction([
                    use.Multiple(getNumerator(fraction), termsMultiple),
                    lowestCommonDenominator,
                ])
            })
    }

const asFraction: (rawNumerator: number, rawDenominator: number) => Fraction =
    (rawNumerator: number, rawDenominator: number): Fraction =>
        as.Fraction([ as.Numerator(rawNumerator), as.Denominator(rawDenominator) ])

export {
    multiplyFractions,
    getNumerator,
    getDenominator,
    computeLowestTerms,
    computeCommonTerms,
    computeLowestCommonDenominator,
    setDenominator,
    setNumerator,
    asFraction,
}
