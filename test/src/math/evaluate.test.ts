import { evaluate } from '../../../src/indexForTest'

describe('evaluate', () => {
    it('works for fractions', () => {
        expect(evaluate('5/4'))
            .toBeCloseTo(1.25)
    })

    it('works for floats', () => {
        expect(evaluate('7.33'))
            .toBeCloseTo(7.33)
    })

    it('works for ints', () => {
        expect(evaluate('101'))
            .toBeCloseTo(101)
    })

    it('works for division', () => {
        expect(evaluate('2.2/2'))
            .toBeCloseTo(1.1)
    })

    it('works for multiplication', () => {
        expect(evaluate('2.2*2'))
            .toBeCloseTo(4.4)
    })

    it('works for addition', () => {
        expect(evaluate('4 + 3.1'))
            .toBeCloseTo(7.1)
    })

    it('works for subtraction', () => {
        expect(evaluate('4 - 3.1'))
            .toBeCloseTo(0.9)
    })

    it('works for modulus', () => {
        expect(evaluate('43 % 10'))
            .toBeCloseTo(3)
    })

    it('works for exponentiation', () => {
        expect(evaluate('4^3'))
            .toBeCloseTo(64)
    })

    it('works for repeated addition', () => {
        expect(evaluate('3 + 1 + 2'))
            .toBeCloseTo(6)
    })

    it('works for repeated subtraction', () => {
        expect(evaluate('3 - 1 - 2'))
            .toBeCloseTo(0)
    })

    it('works for repeated multiplication', () => {
        expect(evaluate('3 * 2 * 6'))
            .toBeCloseTo(36)
    })

    it('works for repeated division', () => {
        expect(evaluate('8 / 2 / 2'))
            .toBeCloseTo(2)
    })

    it('works for repeated exponentiation', () => {
        expect(evaluate('3 ^ 2 ^ 2'))
            .toBeCloseTo(81)
    })

    it('respects order of operations', () => {
        expect(evaluate('3.1 + 4 / 2'))
            .toBeCloseTo(5.1)
        expect(evaluate('3 + 4 / 2 * 6'))
            .toBeCloseTo(15)
        expect(evaluate('3^3 / 2.7 % 6'))
            .toBeCloseTo(4)
    })

    it('works when operations have whitespace', () => {
        expect(evaluate('2.2 / 2'))
            .toBeCloseTo(1.1)
    })

    it('can return zero', () => {
        expect(evaluate('3 - 3'))
            .toBeCloseTo(0)
    })

    it('can return negative numbers', () => {
        expect(evaluate('3 - 4'))
            .toBeCloseTo(-1)
    })

    it('works for negative numbers', () => {
        expect(evaluate('-5'))
            .toBeCloseTo(-5)
        expect(evaluate('5 + -3'))
            .toBeCloseTo(2)
    })

    it('throws when unparseable', () => {
        expect(() => evaluate('hellothere'))
            .toThrowError(`expression 'hellothere' was not able to be evaluated`)
    })

    it('allows grouping by parentheses', () => {
        expect(evaluate('(4 + 5) / 3'))
            .toBeCloseTo(3)
    })

    it('allows multiple groupings by parentheses', () => {
        expect(evaluate('(4 + 5) / (3 - 1)'))
            .toBeCloseTo(4.5)
    })

    it('allows nested groupings by parentheses', () => {
        expect(evaluate('24 / (8 / (8 / 2))'))
            .toBeCloseTo(12)
    })
})
