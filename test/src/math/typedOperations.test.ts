// tslint:disable no-unused-expression no-dead-store no-duplicate-string

import {
    as,
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
} from '../../../src/indexForTest'

describe('typed operations', () => {
    describe('round', () => {
        it('when not given a precision, assumes 0', () => {
            expect(round(as.Scalar(3.5)))
                .toBe(as.Scalar(4))
        })

        it('when given a precision, uses it', () => {
            expect(round(as.Scalar(3.524387), as.Integer(4)))
                .toBe(as.Scalar(3.5244))
        })

        it('does not poop out on tiny numbers when the precision is set', () => {
            expect(round(1 / 1000001, as.Integer(4)))
                .toBe(0)
        })

        it('works for negative numbers when the precision is set', () => {
            expect(round(as.Scalar(-1.111111111), as.Integer(4)))
                .toBe(as.Scalar(-1.1111))
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
                .toBe(as.Integer(0))
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
                .toBe(as.Integer(1))
        })
    })

    describe('delta vs difference', () => {
        it('delta returns a Translation type Of the Units; difference simply dumbly subtracts if types match and returns of the same Units', () => {
            expect(delta(as.Ms(4), as.Ms(1)))
                .toBe(as.Translation<Ms>(3))
            expect(difference(as.Ms(4), as.Ms(1)))
                .toBe(as.Ms(3))
        })
    })

    describe('interval vs quotient', () => {
        it('interval returns a Scalar type Of the Units; quotient simply dumbly divides if types match and returns of the same Units', () => {
            expect(interval(as.Ms(6), as.Ms(2)))
                .toBe(as.Scalar<Ms>(3))
            expect(quotient(as.Ms(6), as.Ms(2)))
                .toBe(as.Ms(3))
        })
    })

    describe('reciprocal', () => {
        it('when given an integer, removes the integer type in the return value', () => {
            const integer: number = reciprocal(as.Integer(3))
            const numerator: number = reciprocal(as.Numerator(3))
            const denominator: number = reciprocal(as.Denominator(3))

            const cardinal: number = reciprocal(as.Cardinal(3))

            const scalar: Scalar = reciprocal(as.Scalar(3))
            const exponent: Exponent = reciprocal(as.Exponent(3))
            const logarithm: Logarithm = reciprocal(as.Logarithm(3))
            const mod: Modulus = reciprocal(as.Modulus(3))

            const multiple: Scalar = reciprocal(as.Multiple(3))
            const power: Exponent = reciprocal(as.Power(3))
            const base: Logarithm = reciprocal(as.Base(3))
            const integerModulus: Modulus = reciprocal(as.IntegerModulus(3))
        })
    })

    describe('square root', () => {
        it('when given an integer, removes the integer type in the return value', () => {
            const scalar: Scalar = squareRoot(as.Scalar(3))
            const exponent: Exponent = squareRoot(as.Exponent(3))
            const logarithm: Logarithm = squareRoot(as.Logarithm(3))
            const mod: Modulus = squareRoot(as.Modulus(3))

            const multiple: Scalar = squareRoot(as.Multiple(3))
            const power: Exponent = squareRoot(as.Power(3))
            const base: Logarithm = squareRoot(as.Base(3))
            const integerModulus: Modulus = squareRoot(as.IntegerModulus(3))
        })
    })

    describe('cube root', () => {
        it('when given an integer, removes the integer type in the return value', () => {
            const scalar: Scalar = cubeRoot(as.Scalar(3))
            const exponent: Exponent = cubeRoot(as.Exponent(3))
            const logarithm: Logarithm = cubeRoot(as.Logarithm(3))
            const mod: Modulus = cubeRoot(as.Modulus(3))

            const multiple: Scalar = cubeRoot(as.Multiple(3))
            const power: Exponent = cubeRoot(as.Power(3))
            const base: Logarithm = cubeRoot(as.Base(3))
            const integerModulus: Modulus = cubeRoot(as.IntegerModulus(3))
        })
    })

    describe('modulus', () => {
        it('when given an integer type, removes the integer type in the return value', () => {
            const numeratorDowngraded: number = modulus(as.Numerator(3), as.Numerator(3))
            const denominatorDowngraded: number = modulus(as.Denominator(3), as.Denominator(3))
        })
    })

    describe('quotient', () => {
        it('when given an integer type, removes the integer type in the return value', () => {
            const numeratorDowngraded: number = quotient(as.Numerator(3), as.Numerator(3))
            const denominatorDowngraded: number = quotient(as.Denominator(3), as.Denominator(3))
        })
    })

    describe('interval', () => {
        it('when given an integer type, removes the integer type in the return value', () => {
            const numeratorDowngraded: Scalar = interval(as.Numerator(3), as.Numerator(3))
            const denominatorDowngraded: Scalar = interval(as.Denominator(3), as.Denominator(3))
        })
    })

    describe('floor and ceiling', () => {
        it('you can assign the return value as the integer version of the input type if you want', () => {
            const scalar: Scalar = floor(as.Scalar(1.3))
            const exponent: Exponent = floor(as.Exponent(1.3))
            const logarithm: Logarithm = floor(as.Logarithm(1.3))
            const mod: Modulus = floor(as.Modulus(1.3))

            const multiple: Multiple = floor(as.Scalar(1.3))
            const power: Power = floor(as.Exponent(1.3))
            const base: Base = floor(as.Logarithm(1.3))
            const integerModulus: IntegerModulus = floor(as.Modulus(1.3))
        })
    })
})
