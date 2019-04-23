import {
    as,
    Cycle,
    cycleSlice,
    EIGHTH,
    findIndex,
    FOURTH,
    INITIAL,
    Scalar,
    SEVENTH,
    SIXTH,
    slice,
    THIRD,
} from '../../../src/indexForTest'

describe('typed iterators', () => {
    describe('slice', () => {
        it('given an array and two ordinals, returns the slice of the array from that index to the other', () => {
            const array: Scalar[] = [ 1, 2, 3, 4, 5, 6 ].map(as.Scalar)

            const actualElements: Scalar[] = slice(array, INITIAL, THIRD)

            expect(actualElements)
                .toEqual([ 1, 2, 3 ].map(as.Scalar))
        })

        it('works for strings', () => {
            const str: string = '123456'

            const actualStr: string = slice(str, INITIAL, THIRD)

            expect(actualStr)
                .toEqual('123')
        })

        it('throws when you exceed the bounds, because i lost a day of my life trying to figure out what was wrong with my continuous mode hafuhafu logic and all that was wrong was that ZERO_AND_POSITIVE_INTEGERS only went up to 256 and was silently not giving me any more integers', () => {
            const array: Scalar[] = [ 1, 2, 3, 4, 5, 6 ].map(as.Scalar)

            expect(slice(array, INITIAL, SIXTH))
                .toBeTruthy()
            expect(() => slice(array, INITIAL, SEVENTH))
                .toThrow()
        })
    })

    describe('cycle slice', () => {
        it('returns a slice which wraps around (but the returned value is not a cycle)\'', () => {
            const cycle: Cycle = as.Cycle([ 1, 2, 3, 4, 5, 6 ])

            const actualElements: number[] = cycleSlice(cycle, FOURTH, EIGHTH)

            expect(actualElements)
                .toEqual([ 5, 6, 1, 2 ])
        })
    })

    describe('find index', () => {
        it('returns the index of the first matching element', () => {
            expect(findIndex([ 7, 4, 7, 23, 8, 3 ], (element: number) => element === 8))
                .toBe(as.Ordinal(4))
        })
    })
})
