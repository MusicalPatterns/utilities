import { as, computeDeltas, computeIntervals, musicalAs, Tone } from '../../../src/indexForTest'

describe('deltas', () => {
    describe('deltas', () => {
        it('gives you an array of all the deltas (additive)', () => {
            expect(computeDeltas([ 4, 7, 9, 4, 357, 3, 8 ].map((numeral: number) => musicalAs.Tone(numeral))))
                .toEqual(
                    [
                        3,
                        2,
                        -5,
                        353,
                        -354,
                        5,
                    ].map((expected: number) => as.Translation<Tone>(expected)),
                )
        })

        it('works for cycles, giving the delta back around from the end to the beginning', () => {
            expect(computeDeltas(as.Cycle([ 4, 7, 9, 4, 357, 3, 8 ].map((numeral: number) => musicalAs.Tone(numeral)))))
                .toEqual(
                    [
                        3,
                        2,
                        -5,
                        353,
                        -354,
                        5,
                        -4,
                    ].map((expected: number) => as.Translation<Tone>(expected)),
                )
        })
    })

    describe('intervals', () => {
        it('gives you an array of all the intervals (multiplicative)', () => {
            expect(computeIntervals([ 4, 7, 9, 4, 357, 3, 8 ].map((numeral: number) => musicalAs.Tone(numeral))))
                .toEqual(
                    [
                        7 / 4,
                        9 / 7,
                        4 / 9,
                        357 / 4,
                        3 / 357,
                        8 / 3,
                    ].map((expected: number) => as.Scalar<Tone>(expected)),
                )
        })

        it('works for cycles, giving the delta back around from the end to the beginning', () => {
            expect(computeIntervals(as.Cycle([ 4, 7, 9, 4, 357, 3, 8 ].map((numeral: number) => musicalAs.Tone(numeral)))))
                .toEqual(
                    [
                        7 / 4,
                        9 / 7,
                        4 / 9,
                        357 / 4,
                        3 / 357,
                        8 / 3,
                        1 / 2,
                    ].map((expected: number) => as.Scalar<Tone>(expected)),
                )
        })

        it('gives an interval of 0 to zeroes, but NaN from zeroes', () => {
            expect(computeIntervals([ 5, 5, 5, 0, 0, 0, 5, 5, 5 ].map(as.Point)))
                .toEqual([
                    as.Interval(1),
                    as.Interval(1),
                    as.Interval(0),
                    as.Interval(0),
                    as.Interval(0),
                    undefined,
                    as.Interval(1),
                    as.Interval(1),
                ])
        })
    })
})
