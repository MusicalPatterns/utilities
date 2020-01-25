// tslint:disable max-file-line-count

import { arraySet, computeLength } from '../code'
import { computeGreatestCommonDivisor, computeLeastCommonMultiple, product, quotient } from '../math'
import {
    as,
    Denominator,
    DENOMINATOR_INDEX,
    Integer,
    Multiple,
    Numerator,
    NUMERATOR_INDEX,
    Rational,
    RATIONAL_IDENTITY,
    use,
} from '../nominal'

const getNumerator: (rational: Rational) => Numerator =
    (rational: Rational): Numerator =>
        use.Ordinal(rational, NUMERATOR_INDEX) as Numerator

const getDenominator: (rational: Rational) => Denominator =
    (rational: Rational): Denominator =>
        use.Ordinal(rational, DENOMINATOR_INDEX) as Denominator

const setNumerator: (rational: Rational, numerator: Numerator) => Rational =
    (rational: Rational, numerator: Numerator): Rational =>
        arraySet(rational, NUMERATOR_INDEX, numerator) as Rational

const setDenominator: (rational: Rational, denominator: Denominator) => Rational =
    (rational: Rational, denominator: Denominator): Rational =>
        arraySet(rational, DENOMINATOR_INDEX, denominator) as Rational

const multiplyRationals: (...rationals: Rational[]) => Rational =
    (...rationals: Rational[]): Rational => {
        const previousRational: Rational = rationals.pop() as Rational

        const nextMultipliedRational: Rational = computeLength(rationals) > as.Cardinal<Rational[]>(0) ?
            multiplyRationals(...rationals) :
            RATIONAL_IDENTITY

        return computeLowestTerms(as.Rational([
            product(getNumerator(nextMultipliedRational), getNumerator(previousRational)),
            product(getDenominator(nextMultipliedRational), getDenominator(previousRational)),
        ]))
    }

const computeLowestTerms: (rational: Rational) => Rational =
    ([ numerator, denominator ]: Rational): Rational => {
        const gcd: Integer = computeGreatestCommonDivisor(
            numerator as unknown as Integer,
            denominator as unknown as Integer,
        )

        return asRational(
            quotient(numerator as unknown as Integer, gcd),
            quotient(denominator as unknown as Integer, gcd),
        )
    }

const computeLowestCommonDenominator: (...rationals: Rational[]) => Denominator =
    (...rationals: Rational[]): Denominator => {
        const rationalsInLowestTerms: Rational[] = rationals.map(computeLowestTerms)
        const denominators: Denominator[] = rationalsInLowestTerms.map(getDenominator)

        return as.Denominator(computeLeastCommonMultiple(...denominators as unknown as Integer[]))
    }

const computeCommonTerms: (...rationals: Rational[]) => Rational[] =
    (...rationals: Rational[]): Rational[] => {
        const lowestCommonDenominator: Denominator = computeLowestCommonDenominator(...rationals)

        return rationals
            .map(computeLowestTerms)
            .map((rational: Rational): Rational => {
                const denominator: Denominator = getDenominator(rational)
                if (denominator === lowestCommonDenominator) {
                    return rational
                }

                const termsMultiple: Multiple<Numerator> =
                    as.Multiple<Numerator>(quotient(
                        lowestCommonDenominator,
                        denominator,
                    ))

                return as.Rational([
                    use.Multiple(getNumerator(rational), termsMultiple),
                    lowestCommonDenominator,
                ])
            })
    }

const asRational: (rawNumerator: number, rawDenominator: number) => Rational =
    (rawNumerator: number, rawDenominator: number): Rational =>
        as.Rational([ as.Numerator(rawNumerator), as.Denominator(rawDenominator) ])

export {
    multiplyRationals,
    getNumerator,
    getDenominator,
    computeLowestTerms,
    computeCommonTerms,
    computeLowestCommonDenominator,
    setDenominator,
    setNumerator,
    asRational,
}
