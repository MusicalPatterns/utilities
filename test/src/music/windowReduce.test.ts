import {
    FIVE_HALVES,
    FOUR_THIRDS,
    Frequency,
    insteadOf,
    octaveReduce,
    of,
    THREE_HALVES,
    to,
    TWO_THIRDS,
    windowReduce,
} from '../../../src/indexForTest'

describe('reducing', () => {
    describe('octave reduce', () => {
        it('if the scalar is greater than 2, repeatedly divides the scalar until it is less than 2, thereby wrapping it within the octave window', () => {
            expect(octaveReduce(to.Scalar(of.Frequency(3))))
                .toBe(insteadOf<Frequency, number, 'Scalar'>(THREE_HALVES))
        })

        it('does nothing if the scalar is already between 1 and 2', () => {
            expect(octaveReduce(insteadOf<Frequency, number, 'Scalar'>(THREE_HALVES)))
                .toBe(insteadOf<Frequency, number, 'Scalar'>(THREE_HALVES))
        })

        it('does nothing if the scalar is already 1', () => {
            expect(octaveReduce(to.Scalar(of.Frequency(1))))
                .toBe(to.Scalar(of.Frequency(1)))
        })

        it('if the scalar is 2, changes it to 1', () => {
            expect(octaveReduce(to.Scalar(of.Frequency(2))))
                .toBe(to.Scalar(of.Frequency(1)))
        })

        it('actually multiplies until it is greater than 1 but less than 2 if it was less than 1', () => {
            expect(octaveReduce(insteadOf<Frequency, number, 'Scalar'>(TWO_THIRDS)))
                .toBe(insteadOf<Frequency, number, 'Scalar'>(FOUR_THIRDS))
        })
    })

    describe('general window reduce', () => {
        it('if the scalar is greater than the window, repeatedly divides the scalar until it is less than the window', () => {
            expect(windowReduce(to.Scalar(of.Frequency(4)), to.Scalar(of.Scalar<Frequency>(3))))
                .toBe(insteadOf<Frequency, number, 'Scalar'>(FOUR_THIRDS))
        })

        it('does nothing if the scalar is already between 1 and the window', () => {
            expect(windowReduce(insteadOf<Frequency, number, 'Scalar'>(FIVE_HALVES), to.Scalar(of.Scalar<Frequency>(3))))
                .toBe(insteadOf<Frequency, number, 'Scalar'>(FIVE_HALVES))
        })

        it('does nothing if the scalar is already 1', () => {
            expect(windowReduce(to.Scalar(of.Frequency(1)), to.Scalar(of.Scalar<Frequency>(3))))
                .toBe(to.Scalar(of.Frequency(1)))
        })

        it('if the scalar is the window, changes it to 1', () => {
            expect(windowReduce(to.Scalar(of.Frequency(3)), to.Scalar(of.Scalar<Frequency>(3))))
                .toBe(to.Scalar(of.Frequency(1)))
        })

        it('actually multiplies until it is greater than 1 but less than the window if it was less than 1', () => {
            expect(windowReduce(insteadOf<Frequency, number, 'Scalar'>(TWO_THIRDS), to.Scalar(of.Scalar<Frequency>(3))))
                .toBe(to.Scalar(of.Frequency(2)))
        })
    })
})
