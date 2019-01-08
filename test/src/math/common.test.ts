import { greatestCommonDivisor, lowestCommonMultiple } from '../../../src/indexForTest'

describe('common', () => {
    describe('greatest divisor', () => {
        it('works', () => {
            expect(greatestCommonDivisor(16, 24))
                .toBe(8)
        })

        it('works for co-prime numbers', () => {
            expect(greatestCommonDivisor(5, 8))
                .toBe(1)
        })

        it('works when one number is itself the GCD', () => {
            expect(greatestCommonDivisor(3, 6))
                .toBe(3)
        })

        it('works for more than two numbers', () => {
            expect(greatestCommonDivisor(12, 16, 20))
                .toBe(4)
        })

        it('works for one number', () => {
            expect(greatestCommonDivisor(7))
                .toBe(7)
        })

        it('works for zero numbers', () => {
            expect(greatestCommonDivisor())
                .toBe(1)
        })
    })

    describe('lowest multiple', () => {
        it('works', () => {
            expect(lowestCommonMultiple(16, 24))
                .toBe(48)
        })

        it('works for co-prime numbers', () => {
            expect(lowestCommonMultiple(5, 8))
                .toBe(40)

        })

        it('works when one number is itself the LCM', () => {
            expect(lowestCommonMultiple(3, 6))
                .toBe(6)
        })

        it('works for more than two numbers', () => {
            expect(lowestCommonMultiple(12, 16, 20))
                .toBe(240)
        })

        it('works for one number', () => {
            expect(lowestCommonMultiple(7))
                .toBe(7)
        })

        it('works for zero numbers', () => {
            expect(lowestCommonMultiple())
                .toBe(1)
        })
    })
})
