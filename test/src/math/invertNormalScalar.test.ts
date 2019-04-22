import { as, invertNormalScalar } from '../../../src/indexForTest'

describe('invert normal scalar', () => {
    it('takes the number which is between 0 and 1 and maps it to between 1 and 0', () => {
        expect(invertNormalScalar(as.NormalScalar(0)))
            .toBeCloseToTyped(as.NormalScalar(1))
        expect(invertNormalScalar(as.NormalScalar(0.1)))
            .toBeCloseToTyped(as.NormalScalar(0.9))
        expect(invertNormalScalar(as.NormalScalar(0.5)))
            .toBeCloseToTyped(as.NormalScalar(0.5))
        expect(invertNormalScalar(as.NormalScalar(0.7)))
            .toBeCloseToTyped(as.NormalScalar(0.3))
        expect(invertNormalScalar(as.NormalScalar(1)))
            .toBeCloseToTyped(as.NormalScalar(0))

        expect(() => invertNormalScalar(as.NormalScalar(2)))
            .toThrowError('Numerals of type NormalScalar must be normalized (between 0 and 1). This numeral had value 2.')
    })
})
