import { as, computeGreatestCommonDivisor, computeLeastCommonMultiple } from '../../../src/indexForTest'

describe('common', (): void => {
    describe('greatest divisor', (): void => {
        it('works', (): void => {
            expect(computeGreatestCommonDivisor(as.Integer(16), as.Integer(24)))
                .toBe(as.Integer(8))
        })

        it('works for co-prime numbers', (): void => {
            expect(computeGreatestCommonDivisor(as.Integer(5), as.Integer(8)))
                .toBe(as.Integer(1))
        })

        it('works when one number is itself the GCD', (): void => {
            expect(computeGreatestCommonDivisor(as.Integer(3), as.Integer(6)))
                .toBe(as.Integer(3))
        })

        it('works for more than two numbers', (): void => {
            expect(computeGreatestCommonDivisor(as.Integer(12), as.Integer(16), as.Integer(20)))
                .toBe(as.Integer(4))
        })

        it('works for one number', (): void => {
            expect(computeGreatestCommonDivisor(as.Integer(7)))
                .toBe(as.Integer(7))
        })

        it('works for zero numbers', (): void => {
            expect(computeGreatestCommonDivisor())
                .toBe(as.Integer(1))
        })

        it('returns the Whole type if shared; plain Integer otherwise', (): void => {
            expect(computeGreatestCommonDivisor(as.Cardinal(9), as.Multiple(6)))
                .toBe(as.Integer(3))
            expect(computeGreatestCommonDivisor(as.Cardinal(9), as.Cardinal(6)))
                .toBe(as.Cardinal(3))
        })
    })

    describe('least multiple', (): void => {
        it('works', (): void => {
            expect(computeLeastCommonMultiple(as.Integer(16), as.Integer(24)))
                .toBe(as.Integer(48))
        })

        it('works for co-prime numbers', (): void => {
            expect(computeLeastCommonMultiple(as.Integer(5), as.Integer(8)))
                .toBe(as.Integer(40))

        })

        it('works when one number is itself the LCM', (): void => {
            expect(computeLeastCommonMultiple(as.Integer(3), as.Integer(6)))
                .toBe(as.Integer(6))
        })

        it('works for more than two numbers', (): void => {
            expect(computeLeastCommonMultiple(as.Integer(12), as.Integer(16), as.Integer(20)))
                .toBe(as.Integer(240))
        })

        it('works for one number', (): void => {
            expect(computeLeastCommonMultiple(as.Integer(7)))
                .toBe(as.Integer(7))
        })

        it('works for zero numbers', (): void => {
            expect(computeLeastCommonMultiple())
                .toBe(as.Integer(1))
        })

        it('works for very large numbers', (): void => {
            expect(computeLeastCommonMultiple(as.Integer(43999999560), as.Integer(43999999560), as.Integer(43999999560), as.Integer(43999999560), as.Integer(43999999560), as.Integer(43999999560)))
                .toBe(as.Integer(43999999560))
        })

        it('returns the Whole type if shared; plain Integer otherwise', (): void => {
            expect(computeLeastCommonMultiple(as.Cardinal(9), as.Multiple(6)))
                .toBe(as.Integer(18))
            expect(computeLeastCommonMultiple(as.Cardinal(9), as.Cardinal(6)))
                .toBe(as.Cardinal(18))
        })
    })
})
