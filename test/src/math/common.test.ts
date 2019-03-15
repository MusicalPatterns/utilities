import { computeGreatestCommonDivisor, computeLeastCommonMultiple, to } from '../../../src/indexForTest'

describe('common', () => {
    describe('greatest divisor', () => {
        it('works', () => {
            expect(computeGreatestCommonDivisor(to.Integer(16), to.Integer(24)))
                .toBe(to.Integer(8))
        })

        it('works for co-prime numbers', () => {
            expect(computeGreatestCommonDivisor(to.Integer(5), to.Integer(8)))
                .toBe(to.Integer(1))
        })

        it('works when one number is itself the GCD', () => {
            expect(computeGreatestCommonDivisor(to.Integer(3), to.Integer(6)))
                .toBe(to.Integer(3))
        })

        it('works for more than two numbers', () => {
            expect(computeGreatestCommonDivisor(to.Integer(12), to.Integer(16), to.Integer(20)))
                .toBe(to.Integer(4))
        })

        it('works for one number', () => {
            expect(computeGreatestCommonDivisor(to.Integer(7)))
                .toBe(to.Integer(7))
        })

        it('works for zero numbers', () => {
            expect(computeGreatestCommonDivisor())
                .toBe(to.Integer(1))
        })
    })

    describe('least multiple', () => {
        it('works', () => {
            expect(computeLeastCommonMultiple(to.Integer(16), to.Integer(24)))
                .toBe(to.Integer(48))
        })

        it('works for co-prime numbers', () => {
            expect(computeLeastCommonMultiple(to.Integer(5), to.Integer(8)))
                .toBe(to.Integer(40))

        })

        it('works when one number is itself the LCM', () => {
            expect(computeLeastCommonMultiple(to.Integer(3), to.Integer(6)))
                .toBe(to.Integer(6))
        })

        it('works for more than two numbers', () => {
            expect(computeLeastCommonMultiple(to.Integer(12), to.Integer(16), to.Integer(20)))
                .toBe(to.Integer(240))
        })

        it('works for one number', () => {
            expect(computeLeastCommonMultiple(to.Integer(7)))
                .toBe(to.Integer(7))
        })

        it('works for zero numbers', () => {
            expect(computeLeastCommonMultiple())
                .toBe(to.Integer(1))
        })

        it('works for very large numbers', () => {
            expect(computeLeastCommonMultiple(to.Integer(43999999560), to.Integer(43999999560), to.Integer(43999999560), to.Integer(43999999560), to.Integer(43999999560), to.Integer(43999999560)))
                .toBe(to.Integer(43999999560))
        })
    })
})
