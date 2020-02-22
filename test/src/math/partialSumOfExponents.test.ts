import { as, computePartialSumOfExponents } from '../../../src/indexForTest'

describe('partial sum of exponents', (): void => {
    it('given a base and an upper bound, returns the sum of that base raised to each power up to that bound', (): void => {
        const partialSumOfExponents: number = computePartialSumOfExponents(as.Logarithm(3), as.Exponent(4))

        expect(partialSumOfExponents)
            .toBe(1 + 3 + 9 + 27 + 81)
    })

    it('another example', (): void => {
        const partialSumOfExponents: number = computePartialSumOfExponents(as.Logarithm(2), as.Exponent(2))

        expect(partialSumOfExponents)
            .toBe(1 + 2 + 4)
    })
})
