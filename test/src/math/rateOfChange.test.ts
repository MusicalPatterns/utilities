import { as, computeDeltas, computeIntervals, Hz, Point } from '../../../src/indexForTest'

describe('deltas', () => {
    describe('deltas', () => {
        it('gives you an array of all the deltas (additive)', () => {
            expect(computeDeltas([ 4, 7, 9, 4, 357, 3, 8 ].map((value: number) => as.Point<Hz>(value))))
                .toEqual(
                    [
                        3,
                        2,
                        -5,
                        353,
                        -354,
                        5,
                    ].map((expected: number) => as.Translation<Point<Hz>>(expected)),
                )
        })

        it('works for cycles, giving the delta back around from the end to the beginning', () => {
            expect(computeDeltas(as.Cycle([ 4, 7, 9, 4, 357, 3, 8 ].map((value: number) => as.Point<Hz>(value)))))
                .toEqual(
                    [
                        3,
                        2,
                        -5,
                        353,
                        -354,
                        5,
                        -4,
                    ].map((expected: number) => as.Translation<Point<Hz>>(expected)),
                )
        })
    })

    describe('intervals', () => {
        it('gives you an array of all the intervals (multiplicative)', () => {
            expect(computeIntervals([ 4, 7, 9, 4, 357, 3, 8 ].map((value: number) => as.Point<Hz>(value))))
                .toEqual(
                    [
                        7 / 4,
                        9 / 7,
                        4 / 9,
                        357 / 4,
                        3 / 357,
                        8 / 3,
                    ].map((expected: number) => as.Scalar<Point<Hz>>(expected)),
                )
        })

        it('works for cycles, giving the delta back around from the end to the beginning', () => {
            expect(computeIntervals(as.Cycle([ 4, 7, 9, 4, 357, 3, 8 ].map((value: number) => as.Point<Hz>(value)))))
                .toEqual(
                    [
                        7 / 4,
                        9 / 7,
                        4 / 9,
                        357 / 4,
                        3 / 357,
                        8 / 3,
                        1 / 2,
                    ].map((expected: number) => as.Scalar<Point<Hz>>(expected)),
                )
        })

        it('gives an interval of 0 to zeroes, but NaN from zeroes', () => {
            expect(computeIntervals([ 5, 5, 5, 0, 0, 0, 5, 5, 5 ].map(as.Point)))
                .toEqual([
                    as.Scalar<Point>(1),
                    as.Scalar<Point>(1),
                    as.Scalar<Point>(0),
                    as.Scalar<Point>(0),
                    as.Scalar<Point>(0),
                    undefined,
                    as.Scalar<Point>(1),
                    as.Scalar<Point>(1),
                ])
        })
    })
})
