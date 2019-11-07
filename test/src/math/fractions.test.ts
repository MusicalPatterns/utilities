import {
    as,
    computeCommonTerms,
    computeLowestCommonDenominator,
    computeLowestTerms,
    Fraction,
    getDenominator,
    getNumerator,
    multiplyFractions,
    setDenominator,
    setNumerator,
} from '../../../src/indexForTest'

describe('fractions', () => {
    describe('get numerator', () => {
        it('gives you a numerator type', () => {
            expect(getNumerator(as.Fraction([ as.Numerator(6), as.Denominator(7) ])))
                .toBe(as.Numerator(6))
        })
    })

    describe('get denominator', () => {
        it('gives you a denominator type', () => {
            expect(getDenominator(as.Fraction([ as.Numerator(6), as.Denominator(7) ])))
                .toBe(as.Denominator(7))
        })
    })

    describe('set numerator', () => {
        it('sets the numerator', () => {
            const fraction: Fraction = as.Fraction([ as.Numerator(6), as.Denominator(7) ])

            setNumerator(fraction, as.Numerator(8))

            expect(fraction[ 0 ])
                .toBe(as.Numerator(8))
        })
    })

    describe('set denominator', () => {
        it('sets the denominator', () => {
            const fraction: Fraction = as.Fraction([ as.Numerator(6), as.Denominator(7) ])

            setDenominator(fraction, as.Denominator(8))

            expect(fraction[ 1 ])
                .toBe(as.Denominator(8))
        })
    })

    describe('multiply fractions', () => {
        it('works for two fractions', () => {
            expect(multiplyFractions(
                as.Fraction([ as.Numerator(4), as.Denominator(5) ]),
                as.Fraction([ as.Numerator(4), as.Denominator(3) ]),
            ))
                .toEqual(as.Fraction([ as.Numerator(16), as.Denominator(15) ]))
        })

        it('works for more than two fractions', () => {
            expect(multiplyFractions(
                as.Fraction([ as.Numerator(4), as.Denominator(5) ]),
                as.Fraction([ as.Numerator(4), as.Denominator(3) ]),
                as.Fraction([ as.Numerator(7), as.Denominator(3) ]),
            ))
                .toEqual(as.Fraction([ as.Numerator(112), as.Denominator(45) ]))
        })

        it('puts them in lowest terms if they are not', () => {
            expect(multiplyFractions(
                as.Fraction([ as.Numerator(4), as.Denominator(6) ]),
                as.Fraction([ as.Numerator(4), as.Denominator(2) ]),
            ))
                .toEqual(as.Fraction([ as.Numerator(4), as.Denominator(3) ]))
        })
    })

    describe('lowest terms', () => {
        it('simplifies a fraction', () => {
            const fraction: Fraction = as.Fraction([ as.Numerator(15), as.Denominator(25) ])
            expect(computeLowestTerms(fraction))
                .toEqual(as.Fraction([ as.Numerator(3), as.Denominator(5) ]))
        })
    })

    describe('lowest common denominator', () => {
        it('finds the smallest denominator that all of the fractions can be expressed with', () => {
            expect(computeLowestCommonDenominator(
                as.Fraction([ as.Numerator(9), as.Denominator(4) ]),
                as.Fraction([ as.Numerator(4), as.Denominator(5) ]),
                as.Fraction([ as.Numerator(16), as.Denominator(15) ]),
            ))
                .toEqual(as.Denominator(60))
        })
    })

    describe('common terms', () => {
        it('maps a set of fractions to a form where they share a lowest common denominator', () => {
            expect(computeCommonTerms(
                as.Fraction([ as.Numerator(1), as.Denominator(1) ]),
                as.Fraction([ as.Numerator(4), as.Denominator(5) ]),
                as.Fraction([ as.Numerator(16), as.Denominator(15) ]),
            ))
                .toEqual([
                    as.Fraction([ as.Numerator(15), as.Denominator(15) ]),
                    as.Fraction([ as.Numerator(12), as.Denominator(15) ]),
                    as.Fraction([ as.Numerator(16), as.Denominator(15) ]),
                ])
        })

        it('puts them in lowest terms if they are not', () => {
            expect(computeCommonTerms(
                as.Fraction([ as.Numerator(2), as.Denominator(2) ]),
                as.Fraction([ as.Numerator(4), as.Denominator(5) ]),
                as.Fraction([ as.Numerator(16), as.Denominator(15) ]),
            ))
                .toEqual([
                    as.Fraction([ as.Numerator(15), as.Denominator(15) ]),
                    as.Fraction([ as.Numerator(12), as.Denominator(15) ]),
                    as.Fraction([ as.Numerator(16), as.Denominator(15) ]),
                ])
        })
    })
})
