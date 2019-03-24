import { computePartialSumOfPowers, to } from '../../../src/indexForTest'

describe('partial sum of powers', () => {
    it('given a base and an upper bound, returns the sum of that base raised to each power up to that bound', () => {
        const partialSumOfPowers: number = computePartialSumOfPowers(to.Base(3), to.Power(4))

        expect(partialSumOfPowers)
            .toBe(1 + 3 + 9 + 27 + 81)
    })

    it('another example', () => {
        const partialSumOfPowers: number = computePartialSumOfPowers(to.Base(2), to.Power(2))

        expect(partialSumOfPowers)
            .toBe(1 + 2 + 4)
    })
})
