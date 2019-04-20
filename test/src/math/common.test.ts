import { as, computeGreatestCommonDivisor, computeLeastCommonMultiple } from '../../../src/indexForTest'

describe('common', () => {
    describe('greatest divisor', () => {
        it('works', () => {
            expect(computeGreatestCommonDivisor(as.Integer(16), as.Integer(24)))
                .toBe(as.Integer(8))
        })

        it('works for co-prime numbers', () => {
            expect(computeGreatestCommonDivisor(as.Integer(5), as.Integer(8)))
                .toBe(as.Integer(1))
        })

        it('works when one number is itself the GCD', () => {
            expect(computeGreatestCommonDivisor(as.Integer(3), as.Integer(6)))
                .toBe(as.Integer(3))
        })

        it('works for more than two numbers', () => {
            expect(computeGreatestCommonDivisor(as.Integer(12), as.Integer(16), as.Integer(20)))
                .toBe(as.Integer(4))
        })

        it('works for one number', () => {
            expect(computeGreatestCommonDivisor(as.Integer(7)))
                .toBe(as.Integer(7))
        })

        it('works for zero numbers', () => {
            expect(computeGreatestCommonDivisor())
                .toBe(as.Integer(1))
        })

        it('returns the Natural type if shared; plain Integer otherwise', () => {
            expect(computeGreatestCommonDivisor(as.Cardinal(9), as.Multiple(6)))
                .toBe(as.Integer(3))
            expect(computeGreatestCommonDivisor(as.Cardinal(9), as.Cardinal(6)))
                .toBe(as.Cardinal(3))
        })
    })

    describe('least multiple', () => {
        it('works', () => {
            expect(computeLeastCommonMultiple(as.Integer(16), as.Integer(24)))
                .toBe(as.Integer(48))
        })

        it('works for co-prime numbers', () => {
            expect(computeLeastCommonMultiple(as.Integer(5), as.Integer(8)))
                .toBe(as.Integer(40))

        })

        it('works when one number is itself the LCM', () => {
            expect(computeLeastCommonMultiple(as.Integer(3), as.Integer(6)))
                .toBe(as.Integer(6))
        })

        it('works for more than two numbers', () => {
            expect(computeLeastCommonMultiple(as.Integer(12), as.Integer(16), as.Integer(20)))
                .toBe(as.Integer(240))
        })

        it('works for one number', () => {
            expect(computeLeastCommonMultiple(as.Integer(7)))
                .toBe(as.Integer(7))
        })

        it('works for zero numbers', () => {
            expect(computeLeastCommonMultiple())
                .toBe(as.Integer(1))
        })

        it('works for very large numbers', () => {
            expect(computeLeastCommonMultiple(as.Integer(43999999560), as.Integer(43999999560), as.Integer(43999999560), as.Integer(43999999560), as.Integer(43999999560), as.Integer(43999999560)))
                .toBe(as.Integer(43999999560))
        })

        it('returns the Natural type if shared; plain Integer otherwise', () => {
            expect(computeLeastCommonMultiple(as.Cardinal(9), as.Multiple(6)))
                .toBe(as.Integer(18))
            expect(computeLeastCommonMultiple(as.Cardinal(9), as.Cardinal(6)))
                .toBe(as.Cardinal(18))
        })
    })
})
