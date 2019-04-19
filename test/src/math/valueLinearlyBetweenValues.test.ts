import { to, valueLinearlyBetweenValues } from '../../../src/indexForTest'

describe('value linearly between values', () => {
    it('given two values and a normal scalar, gives the value that far between the two values', () => {
        expect(valueLinearlyBetweenValues(10, 20, to.NormalScalar(0.4)))
            .toBe(14)
    })

    it('works when the second value is less than the first', () => {
        expect(valueLinearlyBetweenValues(20, 10, to.NormalScalar(0.4)))
            .toBe(16)
    })
})
