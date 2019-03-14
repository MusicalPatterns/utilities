import { Cycle, EIGHTH, FOURTH, INITIAL, Scalar, slice, THIRD, to } from '../../../src/indexForTest'

describe('typed iterators', () => {
    describe('slice', () => {
        it('given an array and two ordinals, returns the slice of the array from that index to the other', () => {
            const array: Scalar[] = [ 1, 2, 3, 4, 5, 6 ].map(to.Scalar)

            const actualElements: Scalar[] = slice(array, INITIAL, THIRD)

            expect(actualElements)
                .toEqual([ 1, 2, 3 ].map(to.Scalar))
        })

        it('works for strings', () => {
            const str: string = '123456'

            const actualStr: string = slice(str, INITIAL, THIRD)

            expect(actualStr)
                .toEqual('123')
        })

        it('when given a cycle, is able to return a slice which wraps around (but the slice is not a cycle)', () => {
            const cycle: Cycle = to.Cycle([ 1, 2, 3, 4, 5, 6 ])

            const actualElements: number[] = slice(cycle, FOURTH, EIGHTH)

            expect(actualElements)
                .toEqual([ 5, 6, 1, 2 ])
        })
    })
})
