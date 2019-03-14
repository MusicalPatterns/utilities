import {
    commonTerms,
    Fraction,
    getDenominator,
    getNumerator,
    lowestTerms,
    multiplyFractions,
    to,
} from '../../../src/indexForTest'

describe('fractions', () => {
    describe('get numerator', () => {
        it('gives you a numerator type', () => {
            expect(getNumerator(to.Fraction([ 6, 7 ])))
                .toBe(to.Numerator(6))
        })
    })

    describe('get denominator', () => {
        it('gives you a denominator type', () => {
            expect(getDenominator(to.Fraction([ 6, 7 ])))
                .toBe(to.Denominator(7))
        })
    })

    describe('multiply fractions', () => {
        it('works for two fractions', () => {
            expect(multiplyFractions(to.Fraction([ 4, 5 ]), to.Fraction([ 4, 3 ])))
                .toEqual(to.Fraction([ 16, 15 ]))
        })

        it('works for more than two fractions', () => {
            expect(multiplyFractions(to.Fraction([ 4, 5 ]), to.Fraction([ 4, 3 ]), to.Fraction([ 7, 3 ])))
                .toEqual(to.Fraction([ 112, 45 ]))
        })
    })

    describe('lowest terms', () => {
        it('simplifies a fraction', () => {
            const fraction: Fraction = to.Fraction([ 15, 25 ])
            expect(lowestTerms(fraction))
                .toEqual(to.Fraction([ 3, 5 ]))
        })
    })

    describe('common terms', () => {
        it('maps a set of fractions to a form where they share a lowest common denominator', () => {
            expect(commonTerms([
                to.Fraction([ 1, 1 ]),
                to.Fraction([ 4, 5 ]),
                to.Fraction([ 16, 15 ]),
            ]))
                .toEqual([
                    to.Fraction([ 15, 15 ]),
                    to.Fraction([ 12, 15 ]),
                    to.Fraction([ 16, 15 ]),
                ])
        })

        it('puts them in lowest terms if they are not', () => {
            expect(commonTerms([
                to.Fraction([ 2, 2 ]),
                to.Fraction([ 4, 5 ]),
                to.Fraction([ 16, 15 ]),
            ]))
                .toEqual([
                    to.Fraction([ 15, 15 ]),
                    to.Fraction([ 12, 15 ]),
                    to.Fraction([ 16, 15 ]),
                ])
        })
    })
})