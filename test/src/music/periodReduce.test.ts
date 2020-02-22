import {
    as,
    asRational,
    Ator,
    FIVE_HALVES,
    FOUR_THIRDS,
    octaveReduce,
    periodReduce,
    Pitch,
    Scalar,
    THREE_HALVES,
    TWO_THIRDS,
} from '../../../src/indexForTest'

describe('reducing', (): void => {
    describe('octave reduce', (): void => {
        it('if the scalar is greater than 2, repeatedly divides the scalar until it is less than 2, thereby wrapping it within the octave period', (): void => {
            expect(octaveReduce(as.Scalar<Pitch>(3)))
                .toBe(THREE_HALVES)
        })

        it('does nothing if the scalar is already between 1 and 2', (): void => {
            expect(octaveReduce(THREE_HALVES))
                .toBe(THREE_HALVES)
        })

        it('does nothing if the scalar is already 1', (): void => {
            expect(octaveReduce(as.Scalar<Pitch>(1)))
                .toBe(as.Scalar<Pitch>(1))
        })

        it('if the scalar is 2, changes it to 1', (): void => {
            expect(octaveReduce(as.Scalar<Pitch>(2)))
                .toBe(as.Scalar<Pitch>(1))
        })

        it('actually multiplies until it is greater than 1 but less than 2 if it was less than 1', (): void => {
            expect(octaveReduce(TWO_THIRDS))
                .toBe(FOUR_THIRDS)
        })

        describe('with rational numbers', (): void => {
            it('when necessary, increases the denominator', (): void => {
                expect(octaveReduce(asRational(23, 5)))
                    .toEqual(asRational(23, 20))
            })

            it('when necessary, increases the numerator', (): void => {
                expect(octaveReduce(asRational(1, 9)))
                    .toEqual(asRational(16, 9))
            })

            it('reduces to lowest terms', (): void => {
                expect(octaveReduce(asRational(12, 9)))
                    .toEqual(asRational(4, 3))
            })
        })
    })

    describe('general period reduce', (): void => {
        it('if the scalar is greater than the period, repeatedly divides the scalar until it is less than the period', (): void => {
            expect(periodReduce(as.Scalar<Pitch>(4), as.Scalar<Scalar<Pitch>>(3)))
                .toBe(FOUR_THIRDS)
        })

        it('does nothing if the scalar is already between 1 and the period', (): void => {
            expect(periodReduce(FIVE_HALVES, as.Scalar<Scalar<Pitch>>(3)))
                .toBe(FIVE_HALVES)
        })

        it('does nothing if the scalar is already 1', (): void => {
            expect(periodReduce(as.Scalar<Pitch>(1), as.Scalar<Scalar<Pitch>>(3)))
                .toBe(as.Scalar<Pitch>(1))
        })

        it('if the scalar is the period, changes it to 1', (): void => {
            expect(periodReduce(as.Scalar<Pitch>(3), as.Scalar<Scalar<Pitch>>(3)))
                .toBe(as.Scalar<Pitch>(1))
        })

        it('actually multiplies until it is greater than 1 but less than the period if it was less than 1', (): void => {
            expect(periodReduce(TWO_THIRDS, as.Scalar<Scalar<Pitch>>(3)))
                .toBe(as.Scalar<Pitch>(2))
        })

        describe('with rational numbers', (): void => {
            it('when necessary, increases the denominator', (): void => {
                expect(periodReduce(asRational(23, 5), as.Multiple<Ator>(3)))
                    .toEqual(asRational(23, 15))
            })

            it('when necessary, increases the numerator', (): void => {
                expect(periodReduce(asRational(1, 10), as.Multiple<Ator>(3)))
                    .toEqual(asRational(27, 10))
            })

            it('reduces to lowest terms', (): void => {
                expect(periodReduce(asRational(16, 8), as.Multiple<Ator>(3)))
                    .toEqual(asRational(2, 1))
            })
        })
    })
})
