import { computeDeltas, to } from '../../../src/indexForTest'

describe('deltas', () => {
    it('gives you an array of all the deltas', () => {
        expect(computeDeltas([ 4, 7, 9, 4, 357, 3, 8 ].map(to.Scalar)))
            .toEqual([ 3, 2, -5, 353, -354, 5 ].map(to.Translation))
    })

    it('works for cycles, giving the delta back around from the end to the beginning', () => {
        expect(computeDeltas(to.Cycle([ 4, 7, 9, 4, 357, 3, 8 ].map(to.Scalar))))
            .toEqual([ 3, 2, -5, 353, -354, 5, -4 ].map(to.Translation))
    })
})
