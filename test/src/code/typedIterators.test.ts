import {
    Cycle,
    cycleSlice,
    EIGHTH,
    FOURTH,
    INITIAL,
    insteadOf,
    Scalar,
    slice,
    stringSlice,
    THIRD,
    to,
} from '../../../src/indexForTest'

describe('typed iterators', () => {
    describe('slice', () => {
        it('given an array and two ordinals, returns the slice of the array from that index to the other', () => {
            const array: Scalar[] = [ 1, 2, 3, 4, 5, 6 ].map(to.Scalar)

            const actualElements: Scalar[] = slice(array, insteadOf<Scalar, number, 'Index'>(INITIAL), insteadOf<Scalar, number, 'Index'>(THIRD))

            expect(actualElements)
                .toEqual([ 1, 2, 3 ].map(to.Scalar))
        })

        it('works for strings', () => {
            const str: string = '123456'

            const actualStr: string = stringSlice(str, insteadOf<string, number, 'Index'>(INITIAL), insteadOf<string, number, 'Index'>(THIRD))

            expect(actualStr)
                .toEqual('123')
        })

        it('throws when you exceed the bounds, because i lost a day of my life trying to figure out what was wrong with my continuous mode hafuhafu logic and all that was wrong was that ZERO_AND_POSITIVE_INTEGERS only went up to 256 and was silently not giving me any more integers', () => {
            const array: Scalar[] = [ 1, 2, 3, 4, 5, 6 ].map(to.Scalar)

            expect(() => slice(array, insteadOf<Scalar, number, 'Index'>(INITIAL), insteadOf<Scalar, number, 'Index'>(EIGHTH)))
                .toThrow()
        })
    })

    it('cycle slice returns a slice which wraps around (but the returned value is not a cycle)\'', () => {
        const cycle: Cycle = to.Cycle([ 1, 2, 3, 4, 5, 6 ])

        const actualElements: number[] = cycleSlice(cycle, FOURTH, EIGHTH)

        expect(actualElements)
            .toEqual([ 5, 6, 1, 2 ])
    })
})
