import { as, primeFactorize } from '../../../src/indexForTest'

describe('prime factorize', () => {
    it('returns the prime factorization in monzo form', () => {
        expect(primeFactorize(as.Integer(1)))
            .toEqual(as.Monzo([].map(as.Integer)))
        expect(primeFactorize(as.Integer(2)))
            .toEqual(as.Monzo([ 1 ].map(as.Integer)))
        expect(primeFactorize(as.Integer(3)))
            .toEqual(as.Monzo([ 0, 1 ].map(as.Integer)))
        expect(primeFactorize(as.Integer(4)))
            .toEqual(as.Monzo([ 2 ].map(as.Integer)))
        expect(primeFactorize(as.Integer(5)))
            .toEqual(as.Monzo([ 0, 0, 1 ].map(as.Integer)))
        expect(primeFactorize(as.Integer(6)))
            .toEqual(as.Monzo([ 1, 1 ].map(as.Integer)))
        expect(primeFactorize(as.Integer(7)))
            .toEqual(as.Monzo([ 0, 0, 0, 1 ].map(as.Integer)))
        expect(primeFactorize(as.Integer(8)))
            .toEqual(as.Monzo([ 3 ].map(as.Integer)))
        expect(primeFactorize(as.Integer(9)))
            .toEqual(as.Monzo([ 0, 2 ].map(as.Integer)))
        expect(primeFactorize(as.Integer(10)))
            .toEqual(as.Monzo([ 1, 0, 1 ].map(as.Integer)))
    })

    it('fails on 0', () => {
        expect(() => primeFactorize(as.Integer(0)))
            .toThrow(new Error('The prime factorization of zero is not defined.'))
    })

    it('also works on fractions', () => {
        expect(primeFactorize(as.Fraction([ as.Numerator(4), as.Denominator(5) ])))
            .toEqual(as.Monzo([ 2, 0, -1 ].map(as.Integer)))
    })
})
