import { arraysHaveNoCommonValues } from '../../../src/indexForTest'

describe('arrays have no common values', (): void => {
    it('returns true if there are no common values between any array', (): void => {
        expect(arraysHaveNoCommonValues(
            [ 1, 43, 67, 586, 45, 7, 53, 4 ],
            [ 56, 86, 54, 87, 78, 8, 75, 68 ],
            [ 3, 788, 9 ],
        ))
            .toBeTruthy()
    })

    it('returns false if there are any common values between any array', (): void => {
        expect(arraysHaveNoCommonValues(
            [ 1, 43, 67, 586, 45, 7, 53, 4 ],
            [ 56, 7, 86, 54, 87, 78, 8, 75, 68 ],
            [ 3, 788, 9 ],
        ))
            .toBeFalsy()
    })

    it('returns false if there is a common value within an array', (): void => {
        expect(arraysHaveNoCommonValues(
            [ 1, 43, 67, 586, 45, 7, 53, 7, 4 ],
        ))
            .toBeFalsy()
    })
})
