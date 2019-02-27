import {
    FIVE_HALVES,
    FOUR_THIRDS,
    octaveReduce,
    THREE_HALVES,
    to,
    TWO_THIRDS,
    windowReduce,
} from '../../../src/indexForTest'

describe('reducing', () => {
    describe('octave reduce', () => {
        it('if the scalar is greater than 2, repeatedly divides the scalar until it is less than 2, thereby wrapping it within the octave window', () => {
            expect(octaveReduce(to.Frequency(to.Scalar(3))))
                .toBe(to.Frequency(THREE_HALVES))
        })

        it('does nothing if the scalar is already between 1 and 2', () => {
            expect(octaveReduce(to.Frequency(THREE_HALVES)))
                .toBe(to.Frequency(THREE_HALVES))
        })

        it('does nothing if the scalar is already 1', () => {
            expect(octaveReduce(to.Frequency(to.Scalar(1))))
                .toBe(to.Frequency(to.Scalar(1)))
        })

        it('if the scalar is 2, changes it to 1', () => {
            expect(octaveReduce(to.Frequency(to.Scalar(2))))
                .toBe(to.Frequency(to.Scalar(1)))
        })

        it('actually multiplies until it is greater than 1 but less than 2 if it was less than 1', () => {
            expect(octaveReduce(to.Frequency(TWO_THIRDS)))
                .toBe(to.Frequency(FOUR_THIRDS))
        })
    })

    describe('general window reduce', () => {
        it('if the scalar is greater than the window, repeatedly divides the scalar until it is less than the window', () => {
            expect(windowReduce(to.Frequency(to.Scalar(4)), to.Frequency(to.Scalar(3))))
                .toBe(to.Frequency(FOUR_THIRDS))
        })

        it('does nothing if the scalar is already between 1 and the window', () => {
            expect(windowReduce(to.Frequency(FIVE_HALVES), to.Frequency(to.Scalar(3))))
                .toBe(to.Frequency(FIVE_HALVES))
        })

        it('does nothing if the scalar is already 1', () => {
            expect(windowReduce(to.Frequency(to.Scalar(1)), to.Frequency(to.Scalar(3))))
                .toBe(to.Frequency(to.Scalar(1)))
        })

        it('if the scalar is the window, changes it to 1', () => {
            expect(windowReduce(to.Frequency(to.Scalar(3)), to.Frequency(to.Scalar(3))))
                .toBe(to.Frequency(to.Scalar(1)))
        })

        it('actually multiplies until it is greater than 1 but less than the window if it was less than 1', () => {
            expect(windowReduce(to.Frequency(TWO_THIRDS), to.Frequency(to.Scalar(3))))
                .toBe(to.Frequency(to.Scalar(2)))
        })
    })
})
