import { invertNormalScalar, to } from '../../../src/indexForTest'

describe('invert normal scalar', () => {
    it('takes the number which is between 0 and 1 and maps it to between 1 and 0', () => {
        expect(invertNormalScalar(to.NormalScalar(0)))
            .toBeCloseToTyped(to.NormalScalar(1))
        expect(invertNormalScalar(to.NormalScalar(0.1)))
            .toBeCloseToTyped(to.NormalScalar(0.9))
        expect(invertNormalScalar(to.NormalScalar(0.5)))
            .toBeCloseToTyped(to.NormalScalar(0.5))
        expect(invertNormalScalar(to.NormalScalar(0.7)))
            .toBeCloseToTyped(to.NormalScalar(0.3))
        expect(invertNormalScalar(to.NormalScalar(1)))
            .toBeCloseToTyped(to.NormalScalar(0))

        expect(() => invertNormalScalar(to.NormalScalar(2)))
            .toThrowError('A NormalScalar must be between 0 and 1. It was 2.')
    })
})
