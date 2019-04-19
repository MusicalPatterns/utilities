import { computePartialSumOfExponents, to } from '../../../src/indexForTest'

describe('partial sum of exponents', () => {
    it('given a base and an upper bound, returns the sum of that base raised to each power up to that bound', () => {
        const partialSumOfExponents: number = computePartialSumOfExponents(to.Logarithm(3), to.Exponent(4))

        expect(partialSumOfExponents)
            .toBe(1 + 3 + 9 + 27 + 81)
    })

    it('another example', () => {
        const partialSumOfExponents: number = computePartialSumOfExponents(to.Logarithm(2), to.Exponent(2))

        expect(partialSumOfExponents)
            .toBe(1 + 2 + 4)
    })
})
