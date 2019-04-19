// tslint:disable no-unused-expression no-dead-store no-duplicate-string

import {
    Base,
    cubeRoot,
    delta,
    difference,
    Exponent,
    floor,
    IntegerModulus,
    interval,
    Logarithm,
    Modulus,
    modulus,
    Ms,
    Multiple,
    Power,
    product,
    quotient,
    reciprocal,
    round,
    Scalar,
    squareRoot,
    sum,
    to,
} from '../../../src/indexForTest'

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

    describe('reciprocal', () => {
        it('when given an integer, removes the integer type in the return value', () => {
            const integer: number = reciprocal(to.Integer(3))
            const numerator: number = reciprocal(to.Numerator(3))
            const denominator: number = reciprocal(to.Denominator(3))

            const cardinal: number = reciprocal(to.Cardinal(3))

            const scalar: Scalar = reciprocal(to.Scalar(3))
            const exponent: Exponent = reciprocal(to.Exponent(3))
            const logarithm: Logarithm = reciprocal(to.Logarithm(3))
            const mod: Modulus = reciprocal(to.Modulus(3))

            const multiple: Scalar = reciprocal(to.Multiple(3))
            const power: Exponent = reciprocal(to.Power(3))
            const base: Logarithm = reciprocal(to.Base(3))
            const integerModulus: Modulus = reciprocal(to.IntegerModulus(3))
        })
    })

    describe('square root', () => {
        it('when given an integer, removes the integer type in the return value', () => {
            const scalar: Scalar = squareRoot(to.Scalar(3))
            const exponent: Exponent = squareRoot(to.Exponent(3))
            const logarithm: Logarithm = squareRoot(to.Logarithm(3))
            const mod: Modulus = squareRoot(to.Modulus(3))

            const multiple: Scalar = squareRoot(to.Multiple(3))
            const power: Exponent = squareRoot(to.Power(3))
            const base: Logarithm = squareRoot(to.Base(3))
            const integerModulus: Modulus = squareRoot(to.IntegerModulus(3))
        })
    })

    describe('cube root', () => {
        it('when given an integer, removes the integer type in the return value', () => {
            const scalar: Scalar = cubeRoot(to.Scalar(3))
            const exponent: Exponent = cubeRoot(to.Exponent(3))
            const logarithm: Logarithm = cubeRoot(to.Logarithm(3))
            const mod: Modulus = cubeRoot(to.Modulus(3))

            const multiple: Scalar = cubeRoot(to.Multiple(3))
            const power: Exponent = cubeRoot(to.Power(3))
            const base: Logarithm = cubeRoot(to.Base(3))
            const integerModulus: Modulus = cubeRoot(to.IntegerModulus(3))
        })
    })

    describe('modulus', () => {
        it('when given an integer type, removes the integer type in the return value', () => {
            const numeratorDowngraded: number = modulus(to.Numerator(3), to.Numerator(3))
            const denominatorDowngraded: number = modulus(to.Denominator(3), to.Denominator(3))
        })
    })

    describe('quotient', () => {
        it('when given an integer type, removes the integer type in the return value', () => {
            const numeratorDowngraded: number = quotient(to.Numerator(3), to.Numerator(3))
            const denominatorDowngraded: number = quotient(to.Denominator(3), to.Denominator(3))
        })
    })

    describe('interval', () => {
        it('when given an integer type, removes the integer type in the return value', () => {
            const numeratorDowngraded: Scalar = interval(to.Numerator(3), to.Numerator(3))
            const denominatorDowngraded: Scalar = interval(to.Denominator(3), to.Denominator(3))
        })
    })

    describe('floor and ceiling', () => {
        it('you can assign the return value to the integer version of the input type if you want', () => {
            const scalar: Scalar = floor(to.Scalar(1.3))
            const exponent: Exponent = floor(to.Exponent(1.3))
            const logarithm: Logarithm = floor(to.Logarithm(1.3))
            const mod: Modulus = floor(to.Modulus(1.3))

            const multiple: Multiple = floor(to.Scalar(1.3))
            const power: Power = floor(to.Exponent(1.3))
            const base: Base = floor(to.Logarithm(1.3))
            const integerModulus: IntegerModulus = floor(to.Modulus(1.3))
        })
    })
})
