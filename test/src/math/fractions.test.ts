import {
    computeCommonTerms,
    computeLowestCommonDenominator,
    computeLowestTerms,
    Fraction,
    getDenominator,
    getNumerator,
    multiplyFractions,
    to,
} from '../../../src/indexForTest'

describe('fractions', () => {
    describe('get numerator', () => {
        it('gives you a numerator type', () => {
            expect(getNumerator(to.Fraction([ to.Numerator(6), to.Denominator(7) ])))
                .toBe(to.Numerator(6))
        })
    })

    describe('get denominator', () => {
        it('gives you a denominator type', () => {
            expect(getDenominator(to.Fraction([ to.Numerator(6), to.Denominator(7) ])))
                .toBe(to.Denominator(7))
        })
    })

    describe('multiply fractions', () => {
        it('works for two fractions', () => {
            expect(multiplyFractions(
                to.Fraction([ to.Numerator(4), to.Denominator(5) ]),
                to.Fraction([ to.Numerator(4), to.Denominator(3) ]),
            ))
                .toEqual(to.Fraction([ to.Numerator(16), to.Denominator(15) ]))
        })

        it('works for more than two fractions', () => {
            expect(multiplyFractions(
                to.Fraction([ to.Numerator(4), to.Denominator(5) ]),
                to.Fraction([ to.Numerator(4), to.Denominator(3) ]),
                to.Fraction([ to.Numerator(7), to.Denominator(3) ]),
            ))
                .toEqual(to.Fraction([ to.Numerator(112), to.Denominator(45) ]))
        })
    })

    describe('lowest terms', () => {
        it('simplifies a fraction', () => {
            const fraction: Fraction = to.Fraction([ to.Numerator(15), to.Denominator(25) ])
            expect(computeLowestTerms(fraction))
                .toEqual(to.Fraction([ to.Numerator(3), to.Denominator(5) ]))
        })
    })

    describe('lowest common denominator', () => {
        it('finds the smallest denominator that all of the fractions can be expressed with', () => {
            expect(computeLowestCommonDenominator(
                to.Fraction([ to.Numerator(9), to.Denominator(4) ]),
                to.Fraction([ to.Numerator(4), to.Denominator(5) ]),
                to.Fraction([ to.Numerator(16), to.Denominator(15) ]),
            ))
                .toEqual(to.Denominator(60))
        })
    })

    describe('common terms', () => {
        it('maps a set of fractions to a form where they share a lowest common denominator', () => {
            expect(computeCommonTerms(
                to.Fraction([ to.Numerator(1), to.Denominator(1) ]),
                to.Fraction([ to.Numerator(4), to.Denominator(5) ]),
                to.Fraction([ to.Numerator(16), to.Denominator(15) ]),
            ))
                .toEqual([
                    to.Fraction([ to.Numerator(15), to.Denominator(15) ]),
                    to.Fraction([ to.Numerator(12), to.Denominator(15) ]),
                    to.Fraction([ to.Numerator(16), to.Denominator(15) ]),
                ])
        })

        it('puts them in lowest terms if they are not', () => {
            expect(computeCommonTerms(
                to.Fraction([ to.Numerator(2), to.Denominator(2) ]),
                to.Fraction([ to.Numerator(4), to.Denominator(5) ]),
                to.Fraction([ to.Numerator(16), to.Denominator(15) ]),
            ))
                .toEqual([
                    to.Fraction([ to.Numerator(15), to.Denominator(15) ]),
                    to.Fraction([ to.Numerator(12), to.Denominator(15) ]),
                    to.Fraction([ to.Numerator(16), to.Denominator(15) ]),
                ])
        })
    })
})
