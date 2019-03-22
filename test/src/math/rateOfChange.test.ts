import { computeDeltas, computeIntervals, to } from '../../../src/indexForTest'

describe('deltas', () => {
    describe('deltas', () => {
        it('gives you an array of all the deltas (additive)', () => {
            expect(computeDeltas([ 4, 7, 9, 4, 357, 3, 8 ].map(to.Hz)))
                .toEqual([ 3, 2, -5, 353, -354, 5 ].map(to.Translation))
        })

        it('works for cycles, giving the delta back around from the end to the beginning', () => {
            expect(computeDeltas(to.Cycle([ 4, 7, 9, 4, 357, 3, 8 ].map(to.Hz))))
                .toEqual([ 3, 2, -5, 353, -354, 5, -4 ].map(to.Translation))
        })
    })

    describe('intervals', () => {
        it('gives you an array of all the intervals (multiplicative)', () => {
            expect(computeIntervals([ 4, 7, 9, 4, 357, 3, 8 ].map(to.Hz)))
                .toEqual([ 7 / 4, 9 / 7, 4 / 9, 357 / 4, 3 / 357, 8 / 3 ].map(to.Scalar))
        })

        it('works for cycles, giving the delta back around from the end to the beginning', () => {
            expect(computeIntervals(to.Cycle([ 4, 7, 9, 4, 357, 3, 8 ].map(to.Hz))))
                .toEqual([ 7 / 4, 9 / 7, 4 / 9, 357 / 4, 3 / 357, 8 / 3, 1 / 2 ].map(to.Scalar))
        })
    })
})
