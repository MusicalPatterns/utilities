import { as, invertUnitScalar } from '../../../src/indexForTest'

describe('invert unit scalar', () => {
    it('takes the number which is between 0 and 1 and maps it to between 1 and 0', () => {
        expect(invertUnitScalar(as.UnitScalar(0)))
            .toBeCloseToTyped(as.UnitScalar(1))
        expect(invertUnitScalar(as.UnitScalar(0.1)))
            .toBeCloseToTyped(as.UnitScalar(0.9))
        expect(invertUnitScalar(as.UnitScalar(0.5)))
            .toBeCloseToTyped(as.UnitScalar(0.5))
        expect(invertUnitScalar(as.UnitScalar(0.7)))
            .toBeCloseToTyped(as.UnitScalar(0.3))
        expect(invertUnitScalar(as.UnitScalar(1)))
            .toBeCloseToTyped(as.UnitScalar(0))

        expect(() => invertUnitScalar(as.UnitScalar(2)))
            .toThrowError('Numerals of type UnitScalar must be between 0 and 1. This numeral had value 2.')
    })
})
