import {
    as,
    asRational,
    computeCommonTerms,
    computeLowestCommonDenominator,
    computeLowestTerms,
    getDenominator,
    getNumerator,
    multiplyRationals,
    Rational,
    setDenominator,
    setNumerator,
} from '../../../src/indexForTest'

describe('rationals', () => {
    describe('get numerator', () => {
        it('gives you a numerator type', () => {
            expect(getNumerator(as.Rational([ as.Numerator(6), as.Denominator(7) ])))
                .toBe(as.Numerator(6))
        })
    })

    describe('get denominator', () => {
        it('gives you a denominator type', () => {
            expect(getDenominator(as.Rational([ as.Numerator(6), as.Denominator(7) ])))
                .toBe(as.Denominator(7))
        })
    })

    describe('set numerator', () => {
        it('sets the numerator', () => {
            const rational: Rational = as.Rational([ as.Numerator(6), as.Denominator(7) ])

            setNumerator(rational, as.Numerator(8))

            expect(rational[ 0 ])
                .toBe(as.Numerator(8))
        })
    })

    describe('set denominator', () => {
        it('sets the denominator', () => {
            const rational: Rational = as.Rational([ as.Numerator(6), as.Denominator(7) ])

            setDenominator(rational, as.Denominator(8))

            expect(rational[ 1 ])
                .toBe(as.Denominator(8))
        })
    })

    describe('multiply rationals', () => {
        it('works for two rational numbers', () => {
            expect(multiplyRationals(
                as.Rational([ as.Numerator(4), as.Denominator(5) ]),
                as.Rational([ as.Numerator(4), as.Denominator(3) ]),
            ))
                .toEqual(as.Rational([ as.Numerator(16), as.Denominator(15) ]))
        })

        it('works for more than two rational numbers', () => {
            expect(multiplyRationals(
                as.Rational([ as.Numerator(4), as.Denominator(5) ]),
                as.Rational([ as.Numerator(4), as.Denominator(3) ]),
                as.Rational([ as.Numerator(7), as.Denominator(3) ]),
            ))
                .toEqual(as.Rational([ as.Numerator(112), as.Denominator(45) ]))
        })

        it('puts them in lowest terms if they are not', () => {
            expect(multiplyRationals(
                as.Rational([ as.Numerator(4), as.Denominator(6) ]),
                as.Rational([ as.Numerator(4), as.Denominator(2) ]),
            ))
                .toEqual(as.Rational([ as.Numerator(4), as.Denominator(3) ]))
        })
    })

    describe('lowest terms', () => {
        it('simplifies a rational number', () => {
            const rational: Rational = as.Rational([ as.Numerator(15), as.Denominator(25) ])
            expect(computeLowestTerms(rational))
                .toEqual(as.Rational([ as.Numerator(3), as.Denominator(5) ]))
        })
    })

    describe('lowest common denominator', () => {
        it('finds the smallest denominator that all of the rational numbers can be expressed with', () => {
            expect(computeLowestCommonDenominator(
                as.Rational([ as.Numerator(9), as.Denominator(4) ]),
                as.Rational([ as.Numerator(4), as.Denominator(5) ]),
                as.Rational([ as.Numerator(16), as.Denominator(15) ]),
            ))
                .toEqual(as.Denominator(60))
        })
    })

    describe('common terms', () => {
        it('maps a set of rational numbers to a form where they share a lowest common denominator', () => {
            expect(computeCommonTerms(
                as.Rational([ as.Numerator(1), as.Denominator(1) ]),
                as.Rational([ as.Numerator(4), as.Denominator(5) ]),
                as.Rational([ as.Numerator(16), as.Denominator(15) ]),
            ))
                .toEqual([
                    as.Rational([ as.Numerator(15), as.Denominator(15) ]),
                    as.Rational([ as.Numerator(12), as.Denominator(15) ]),
                    as.Rational([ as.Numerator(16), as.Denominator(15) ]),
                ])
        })

        it('puts them in lowest terms if they are not', () => {
            expect(computeCommonTerms(
                as.Rational([ as.Numerator(2), as.Denominator(2) ]),
                as.Rational([ as.Numerator(4), as.Denominator(5) ]),
                as.Rational([ as.Numerator(16), as.Denominator(15) ]),
            ))
                .toEqual([
                    as.Rational([ as.Numerator(15), as.Denominator(15) ]),
                    as.Rational([ as.Numerator(12), as.Denominator(15) ]),
                    as.Rational([ as.Numerator(16), as.Denominator(15) ]),
                ])
        })
    })

    describe('asRational', () => {
        it('returns a rational number', () => {
            expect(asRational(1, 3))
                .toEqual(as.Rational([ as.Numerator(1), as.Denominator(3) ]))
        })
    })
})
