import { evaluate } from '../../../src/indexForTest'

describe('evaluate', (): void => {
    it('works for rational numbers', (): void => {
        expect(evaluate('5/4'))
            .toBeCloseTo(1.25)
    })

    it('works for floats', (): void => {
        expect(evaluate('7.33'))
            .toBeCloseTo(7.33)
    })

    it('works for ints', (): void => {
        expect(evaluate('101'))
            .toBeCloseTo(101)
    })

    it('works for division', (): void => {
        expect(evaluate('2.2/2'))
            .toBeCloseTo(1.1)
    })

    it('works for multiplication', (): void => {
        expect(evaluate('2.2*2'))
            .toBeCloseTo(4.4)
    })

    it('works for addition', (): void => {
        expect(evaluate('4 + 3.1'))
            .toBeCloseTo(7.1)
    })

    it('works for subtraction', (): void => {
        expect(evaluate('4 - 3.1'))
            .toBeCloseTo(0.9)
    })

    it('works for modulus', (): void => {
        expect(evaluate('43 % 10'))
            .toBeCloseTo(3)
    })

    it('works for exponentiation', (): void => {
        expect(evaluate('4^3'))
            .toBeCloseTo(64)
    })

    it('works for repeated addition', (): void => {
        expect(evaluate('3 + 1 + 2'))
            .toBeCloseTo(6)
    })

    it('works for repeated subtraction', (): void => {
        expect(evaluate('3 - 1 - 2'))
            .toBeCloseTo(0)
    })

    it('works for repeated multiplication', (): void => {
        expect(evaluate('3 * 2 * 6'))
            .toBeCloseTo(36)
    })

    it('works for repeated division', (): void => {
        expect(evaluate('8 / 2 / 2'))
            .toBeCloseTo(2)
    })

    it('works for repeated exponentiation', (): void => {
        expect(evaluate('3 ^ 2 ^ 2'))
            .toBeCloseTo(81)
    })

    it('respects order of operations', (): void => {
        expect(evaluate('3.1 + 4 / 2'))
            .toBeCloseTo(5.1)
        expect(evaluate('3 + 4 / 2 * 6'))
            .toBeCloseTo(15)
        expect(evaluate('3^3 / 2.7 % 6'))
            .toBeCloseTo(4)
    })

    it('works when operations have whitespace', (): void => {
        expect(evaluate('2.2 / 2'))
            .toBeCloseTo(1.1)
    })

    it('can return zero', (): void => {
        expect(evaluate('3 - 3'))
            .toBeCloseTo(0)
    })

    it('can return negative numbers', (): void => {
        expect(evaluate('3 - 4'))
            .toBeCloseTo(-1)
    })

    it('works for negative numbers', (): void => {
        expect(evaluate('-5'))
            .toBeCloseTo(-5)
        expect(evaluate('5 + -3'))
            .toBeCloseTo(2)
    })

    it('throws when unparseable', (): void => {
        expect((): void => {
            evaluate('hellothere')
        })
            .toThrowError(`expression 'hellothere' was not able to be evaluated`)
    })

    it('allows grouping by parentheses', (): void => {
        expect(evaluate('(4 + 5) / 3'))
            .toBeCloseTo(3)
    })

    it('allows multiple groupings by parentheses', (): void => {
        expect(evaluate('(4 + 5) / (3 - 1)'))
            .toBeCloseTo(4.5)
    })

    it('allows nested groupings by parentheses', (): void => {
        expect(evaluate('24 / (8 / (8 / 2))'))
            .toBeCloseTo(12)
    })

    it('handles it when somehow gets served a number type', (): void => {
        expect(evaluate(123))
            .toBeCloseTo(123)
    })
})
