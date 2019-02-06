import { INITIAL, Scalar, slice, to } from '../../../src/indexForTest'

describe('slice', () => {
    it('given an array and two ordinals, returns the slice of the array from that index to the other', () => {
        const array: Scalar[] = [ 1, 2, 3, 4, 5, 6 ].map(to.Scalar)

        const actualElements: Scalar[] = slice(array, INITIAL, to.Ordinal(3))

        expect(actualElements)
            .toEqual([ 1, 2, 3 ].map(to.Scalar))
    })
})
