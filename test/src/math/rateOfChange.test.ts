import { as, computeDeltas, computeIntervals, musicalAs, Scalar, Tone, Translation } from '../../../src/indexForTest'

describe('deltas', (): void => {
    describe('deltas', (): void => {
        it('gives you an array of all the deltas (additive)', (): void => {
            expect(computeDeltas([ 4, 7, 9, 4, 357, 3, 8 ].map((numeral: number): Tone => musicalAs.Tone(numeral))))
                .toEqual(
                    [
                        3,
                        2,
                        -5,
                        353,
                        -354,
                        5,
                    ].map((expected: number): Translation<Tone> => as.Translation<Tone>(expected)),
                )
        })

        it('works for cycles, giving the delta back around from the end to the beginning', (): void => {
            expect(computeDeltas(as.Cycle<Tone, Tone[]>([ 4, 7, 9, 4, 357, 3, 8 ].map((numeral: number): Tone => musicalAs.Tone(numeral)))))
                .toEqual(
                    [
                        3,
                        2,
                        -5,
                        353,
                        -354,
                        5,
                        -4,
                    ].map((expected: number): Translation<Tone> => as.Translation<Tone>(expected)),
                )
        })
    })

    describe('intervals', (): void => {
        it('gives you an array of all the intervals (multiplicative)', (): void => {
            expect(computeIntervals([ 4, 7, 9, 4, 357, 3, 8 ].map((numeral: number): Tone => musicalAs.Tone(numeral))))
                .toEqual(
                    [
                        7 / 4,
                        9 / 7,
                        4 / 9,
                        357 / 4,
                        3 / 357,
                        8 / 3,
                    ].map((expected: number): Scalar<Tone> => as.Scalar<Tone>(expected)),
                )
        })

        it('works for cycles, giving the delta back around from the end to the beginning', (): void => {
            expect(computeIntervals(as.Cycle<Tone, Tone[]>([ 4, 7, 9, 4, 357, 3, 8 ].map((numeral: number): Tone => musicalAs.Tone(numeral)))))
                .toEqual(
                    [
                        7 / 4,
                        9 / 7,
                        4 / 9,
                        357 / 4,
                        3 / 357,
                        8 / 3,
                        1 / 2,
                    ].map((expected: number): Scalar<Tone> => as.Scalar<Tone>(expected)),
                )
        })

        it('gives an interval of 0 to zeroes, but NaN from zeroes', (): void => {
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
