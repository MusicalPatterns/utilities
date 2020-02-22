import { as, invertNormalScalar } from '../../../src/indexForTest'

describe('invert normal scalar', (): void => {
    it('takes the number which is between 0 and 1 and maps it to between 1 and 0', (): void => {
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

        expect((): void => {
            invertNormalScalar(as.NormalScalar(2))
        })
            .toThrowError('Numerals of type NormalScalar must be between 0 and 1. This numeral was 2.')
    })
})
