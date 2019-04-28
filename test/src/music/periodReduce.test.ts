import {
    as,
    FIVE_HALVES,
    FOUR_THIRDS,
    Frequency,
    octaveReduce,
    periodReduce,
    Scalar,
    THREE_HALVES,
    TWO_THIRDS,
} from '../../../src/indexForTest'

describe('reducing', () => {
    describe('octave reduce', () => {
        it('if the scalar is greater than 2, repeatedly divides the scalar until it is less than 2, thereby wrapping it within the octave period', () => {
            expect(octaveReduce(as.Scalar<Frequency>(3)))
                .toBe(THREE_HALVES)
        })

        it('does nothing if the scalar is already between 1 and 2', () => {
            expect(octaveReduce(THREE_HALVES))
                .toBe(THREE_HALVES)
        })

        it('does nothing if the scalar is already 1', () => {
            expect(octaveReduce(as.Scalar<Frequency>(1)))
                .toBe(as.Scalar<Frequency>(1))
        })

        it('if the scalar is 2, changes it to 1', () => {
            expect(octaveReduce(as.Scalar<Frequency>(2)))
                .toBe(as.Scalar<Frequency>(1))
        })

        it('actually multiplies until it is greater than 1 but less than 2 if it was less than 1', () => {
            expect(octaveReduce(TWO_THIRDS))
                .toBe(FOUR_THIRDS)
        })
    })

    describe('general period reduce', () => {
        it('if the scalar is greater than the period, repeatedly divides the scalar until it is less than the period', () => {
            expect(periodReduce(as.Scalar<Frequency>(4), as.Scalar<Scalar<Frequency>>(3)))
                .toBe(FOUR_THIRDS)
        })

        it('does nothing if the scalar is already between 1 and the period', () => {
            expect(periodReduce(FIVE_HALVES, as.Scalar<Scalar<Frequency>>(3)))
                .toBe(FIVE_HALVES)
        })

        it('does nothing if the scalar is already 1', () => {
            expect(periodReduce(as.Scalar<Frequency>(1), as.Scalar<Scalar<Frequency>>(3)))
                .toBe(as.Scalar<Frequency>(1))
        })

        it('if the scalar is the period, changes it to 1', () => {
            expect(periodReduce(as.Scalar<Frequency>(3), as.Scalar<Scalar<Frequency>>(3)))
                .toBe(as.Scalar<Frequency>(1))
        })

        it('actually multiplies until it is greater than 1 but less than the period if it was less than 1', () => {
            expect(periodReduce(TWO_THIRDS, as.Scalar<Scalar<Frequency>>(3)))
                .toBe(as.Scalar<Frequency>(2))
        })
    })
})
