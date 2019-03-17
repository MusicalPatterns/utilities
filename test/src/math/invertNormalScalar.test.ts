import { invertNormalScalar, testIsCloseTo, to } from '../../../src/indexForTest'

describe('invert normal scalar', () => {
    it('takes the number which is between 0 and 1 and maps it to between 1 and 0', () => {
        testIsCloseTo(
            invertNormalScalar(to.NormalScalar(0)),
            to.NormalScalar(1),
        )
        testIsCloseTo(
            invertNormalScalar(to.NormalScalar(0.1)),
            to.NormalScalar(0.9),
        )
        testIsCloseTo(
            invertNormalScalar(to.NormalScalar(0.5)),
            to.NormalScalar(0.5),
        )
        testIsCloseTo(
            invertNormalScalar(to.NormalScalar(0.7)),
            to.NormalScalar(0.3),
        )
        testIsCloseTo(
            invertNormalScalar(to.NormalScalar(1)),
            to.NormalScalar(0),
        )
        expect(() => invertNormalScalar(to.NormalScalar(2)))
            .toThrowError('A NormalScalar must be between 0 and 1. It was 2.')
    })
})
