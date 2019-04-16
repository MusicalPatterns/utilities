import { delta, difference, interval, Ms, of, product, quotient, round, sum, to } from '../../../src/indexForTest'

describe('typed operations', () => {
    describe('round', () => {
        it('when not given a precision, assumes 0', () => {
            expect(round(to.Scalar(3.5)))
                .toBe(to.Scalar(4))
        })

        it('when given a precision, uses it', () => {
            expect(round(to.Scalar(3.524387), to.Integer(4)))
                .toBe(to.Scalar(3.5244))
        })

        it('does not poop out on tiny numbers when the precision is set', () => {
            expect(round(1 / 1000001, to.Integer(4)))
                .toBe(0)
        })

        it('works for negative numbers when the precision is set', () => {
            expect(round(to.Scalar(-1.111111111), to.Integer(4)))
                .toBe(to.Scalar(-1.1111))
        })
    })

    describe('sum', () => {
        it('works for 1 value', () => {
            expect(sum(3))
                .toBe(3)
        })

        it('works for 2 values', () => {
            expect(sum(3, 4))
                .toBe(7)
        })

        it('works for 3 values', () => {
            expect(sum(3, 4, 5))
                .toBe(12)
        })

        it('works for 0 values', () => {
            expect(sum())
                .toBe(to.Integer(0))
        })
    })

    describe('product', () => {
        it('works for 1 value', () => {
            expect(product(3))
                .toBe(3)
        })

        it('works for 2 values', () => {
            expect(product(3, 4))
                .toBe(12)
        })

        it('works for 3 values', () => {
            expect(product(3, 4, 5))
                .toBe(60)
        })

        it('works for 0 values', () => {
            expect(product())
                .toBe(to.Integer(1))
        })
    })

    describe('delta vs difference', () => {
        it('delta returns a Translation type Of the Units; difference simply dumbly subtracts if types match and returns of the same Units', () => {
            expect(delta(to.Ms(4), to.Ms(1)))
                .toBe(to.Translation<Ms>(3))
            expect(difference(to.Ms(4), to.Ms(1)))
                .toBe(to.Ms(3))
        })
    })

    describe('interval vs quotient', () => {
        it('interval returns a Scalar type Of the Units; quotient simply dumbly divides if types match and returns of the same Units', () => {
            expect(interval(to.Ms(6), to.Ms(2)))
                .toBe(to.Scalar<Ms>(3))
            expect(quotient(to.Ms(6), to.Ms(2)))
                .toBe(to.Ms(3))
        })
    })
})
