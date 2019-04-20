import { areCoprime, as, computeCommonFactors } from '../../../src/indexForTest'

describe('common factors', () => {
    it('normal examples', () => {
        expect(computeCommonFactors(...[ 6, 6 ].map(as.Integer)))
            .toEqual([ 1, 2, 3, 6 ].map(as.Integer))
        expect(computeCommonFactors(...[ 5, 6 ].map(as.Integer)))
            .toEqual([ 1 ].map(as.Integer))
        expect(computeCommonFactors(...[ 4, 6 ].map(as.Integer)))
            .toEqual([ 1, 2 ].map(as.Integer))
        expect(computeCommonFactors(...[ 3, 6 ].map(as.Integer)))
            .toEqual([ 1, 3 ].map(as.Integer))
        expect(computeCommonFactors(...[ 2, 6 ].map(as.Integer)))
            .toEqual([ 1, 2 ].map(as.Integer))
        expect(computeCommonFactors(...[ 1, 6 ].map(as.Integer)))
            .toEqual([ 1 ].map(as.Integer))
    })

    it('should return the integer type of the input values if they are the same, and plain Integer otherwise', () => {
        expect(computeCommonFactors(as.Cardinal(7), as.Denominator(4), as.Multiple(3)))
            .toEqual([ 1 ].map(as.Integer))
        expect(computeCommonFactors(...[ 7, 4 ].map(as.Cardinal)))
            .toEqual([ 1 ].map(as.Cardinal))
    })

    it('works for edge case - when zero is one of the values', () => {
        expect(computeCommonFactors(...[ 0, 6 ].map(as.Integer)))
            .toEqual([ 1, 2, 3, 6 ].map(as.Integer))
    })

    it('works for edge case - when only one value is provided', () => {
        expect(computeCommonFactors(...[ 6 ].map(as.Integer)))
            .toEqual([ 1, 2, 3, 6 ].map(as.Integer))
    })

    it('works for edge case - when more than two values are provided', () => {
        expect(computeCommonFactors(...[ 6, 4, 8 ].map(as.Integer)))
            .toEqual([ 1, 2 ].map(as.Integer))
        expect(computeCommonFactors(...[ 6, 4, 3 ].map(as.Integer)))
            .toEqual([ 1 ].map(as.Integer))
        expect(computeCommonFactors(...[ 6, 12, 18 ].map(as.Integer)))
            .toEqual([ 1, 2, 3, 6 ].map(as.Integer))
    })

    describe('are co-prime', () => {
        it('returns true if the numbers have no common factors other than 1', () => {
            expect(areCoprime(...[ 6, 6 ].map(as.Integer)))
                .toBeFalsy()
            expect(areCoprime(...[ 5, 6 ].map(as.Integer)))
                .toBeTruthy()
            expect(areCoprime(...[ 4, 6 ].map(as.Integer)))
                .toBeFalsy()
            expect(areCoprime(...[ 3, 6 ].map(as.Integer)))
                .toBeFalsy()
            expect(areCoprime(...[ 2, 6 ].map(as.Integer)))
                .toBeFalsy()
            expect(areCoprime(...[ 1, 6 ].map(as.Integer)))
                .toBeTruthy()
        })

        it('works for edge case - when zero is one of the values', () => {
            expect(areCoprime(...[ 0, 6 ].map(as.Integer)))
                .toBeFalsy()
        })

        it('works for edge case - when only one value is provided', () => {
            expect(areCoprime(...[ 6 ].map(as.Integer)))
                .toBeFalsy()
        })

        it('works for edge case - when more than two values are provided', () => {
            expect(areCoprime(...[ 6, 4, 8 ].map(as.Integer)))
                .toBeFalsy()
            expect(areCoprime(...[ 6, 4, 3 ].map(as.Integer)))
                .toBeTruthy()
            expect(areCoprime(...[ 6, 12, 18 ].map(as.Integer)))
                .toBeFalsy()
        })

        it('should be able to compare numbers that are not the same type but which are all integerlike', () => {
            expect(areCoprime(as.Cardinal(7), as.Denominator(4), as.Multiple(3)))
                .toBeTruthy()
        })
    })
})
