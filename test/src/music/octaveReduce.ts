import { octaveReduce, to } from '../../../src/indexForTest'

describe('octave reduce', () => {
    it('divides the scalar until it is less than 2, wrapping it within the octave window', () => {
        expect(octaveReduce(to.Scalar(3)))
            .toBe(to.Scalar(3 / 2))
        expect(octaveReduce(to.Scalar(1 / 2)))
            .toBe(to.Scalar(1 / 2))
        expect(octaveReduce(to.Scalar(2)))
            .toBe(to.Scalar(1))
        expect(octaveReduce(to.Scalar(1)))
            .toBe(to.Scalar(1))
    })
})
