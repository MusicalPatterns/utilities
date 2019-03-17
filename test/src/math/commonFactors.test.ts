import { areCoprime, computeCommonFactors, to } from '../../../src/indexForTest'

describe('common factors', () => {
    it('examples', () => {
        expect(computeCommonFactors(to.Integer(6), to.Integer(6)))
            .toEqual([ 1, 2, 3, 6 ].map(to.Integer))
        expect(computeCommonFactors(to.Integer(5), to.Integer(6)))
            .toEqual([ 1 ].map(to.Integer))
        expect(computeCommonFactors(to.Integer(4), to.Integer(6)))
            .toEqual([ 1, 2 ].map(to.Integer))
        expect(computeCommonFactors(to.Integer(3), to.Integer(6)))
            .toEqual([ 1, 3 ].map(to.Integer))
        expect(computeCommonFactors(to.Integer(2), to.Integer(6)))
            .toEqual([ 1, 2 ].map(to.Integer))
        expect(computeCommonFactors(to.Integer(1), to.Integer(6)))
            .toEqual([ 1 ].map(to.Integer))
    })

    describe('are co-prime', () => {
        it('returns true if the numbers have no common factors other than 1', () => {
            expect(areCoprime(to.Integer(6), to.Integer(6)))
                .toBeFalsy()
            expect(areCoprime(to.Integer(5), to.Integer(6)))
                .toBeTruthy()
            expect(areCoprime(to.Integer(4), to.Integer(6)))
                .toBeFalsy()
            expect(areCoprime(to.Integer(3), to.Integer(6)))
                .toBeFalsy()
            expect(areCoprime(to.Integer(2), to.Integer(6)))
                .toBeFalsy()
            expect(areCoprime(to.Integer(1), to.Integer(6)))
                .toBeTruthy()
        })
    })
})
