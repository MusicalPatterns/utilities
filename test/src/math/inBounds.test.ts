import { inBounds } from '../../../src/indexForTest'

describe('in bounds', (): void => {
    it('returns true if all values in the array are between the lower and upper bound', (): void => {
        expect(inBounds([ 34, 6, 4, 6, 7, 534, 4 ], 2, 4888))
            .toBeTruthy()
    })

    it('returns false if any value in the array is outside the upper bound', (): void => {
        expect(inBounds([ 34, 6, 4, 6, 7, 5334, 4 ], 2, 4888))
            .toBeFalsy()
    })

    it('returns false if any value in the array is outside the lower bound', (): void => {
        expect(inBounds([ 34, 6, 4, 6, 7, 1, 4 ], 2, 4888))
            .toBeFalsy()
    })

    it('returns true if a value is outside the range but not beyond the precision', (): void => {
        expect(inBounds([ 34.00001, 6, 4, 6, 7, 17, 4 ], 2, 34, 2))
            .toBeTruthy()
    })
})
