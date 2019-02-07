import { octaveReduce, ONE_HALF, THREE_HALVES, to } from '../../../src/indexForTest'

describe('octave reduce', () => {
    it('divides the scalar until it is less than 2, wrapping it within the octave window', () => {
        expect(octaveReduce(to.Scalar(3)))
            .toBe(THREE_HALVES)
        expect(octaveReduce(ONE_HALF))
            .toBe(ONE_HALF)
        expect(octaveReduce(to.Scalar(2)))
            .toBe(to.Scalar(1))
        expect(octaveReduce(to.Scalar(1)))
            .toBe(to.Scalar(1))
    })
})
