// tslint:disable no-unused-expression no-dead-store no-duplicate-string

import {
    as,
    Base,
    cubeRoot,
    difference,
    Exponent,
    floor, Integer, log,
    Logarithm,
    Modulus,
    modulus,
    Ms,
    Multiple, pow,
    Power,
    product,
    quotient,
    reciprocal,
    Remaindee,
    Rotation,
    round,
    Scalar,
    squareRoot,
    sum,
    Translation,
} from '../../../src/indexForTest'

describe('typed operations', () => {
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

        it('works for Uses which relate to addition/subtraction', () => {
            sum(as.Translation(3), as.Translation(4))
            sum(as.Point(3), as.Point(4))
            sum(as.Cardinal(3), as.Cardinal(4))
            sum(as.Ordinal(3), as.Ordinal(4))
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

        it('works for Uses which relate to multiplication/division', () => {
            product(as.Scalar(3), as.Scalar(4))
            product(as.Point(3), as.Point(4))
            product(as.Multiple(3), as.Multiple(4))
            product(as.Ordinal(3), as.Ordinal(4))
            product(as.NormalScalar(0.3), as.NormalScalar(0.4))
        })
    })

    describe('reciprocal', () => {
        it('when given an integer, removes the integer type in the return value', () => {
            const numerator: number = reciprocal(as.Numerator(3))
            const denominator: number = reciprocal(as.Denominator(3))

            const scalar: Scalar = reciprocal(as.Scalar(3))
            const translation: Translation = reciprocal(as.Translation(3))
            const rotation: Rotation = reciprocal(as.Rotation(3))
            const exponent: Exponent = reciprocal(as.Exponent(3))
            const logarithm: Logarithm = reciprocal(as.Logarithm(3))
            const mod: Modulus = reciprocal(as.Modulus(3))

            const multiple: Scalar = reciprocal(as.Multiple(3))
            const cardinal: Translation = reciprocal(as.Cardinal(3))
            const transposition: Rotation = reciprocal(as.Transposition(3))
            const power: Exponent = reciprocal(as.Power(3))
            const base: Logarithm = reciprocal(as.Base(3))
            const integerModulus: Modulus = reciprocal(as.Remaindee(3))

            const integer: number = reciprocal(as.Integer(3))
        })
    })

    describe('difference', () => {
        it('dumbly subtracts if types match and are not as Points, and returns of the same Units', () => {
            expect(difference(as.Ms(4), as.Ms(1)))
                .toBe(as.Ms(3))
        })

        it('returns a Delta type Of the Units if they are given as Points', () => {
            expect(difference(as.Point<Ms>(4), as.Point<Ms>(1)))
                .toBe(as.Delta<Ms>(3))
        })

        it('returns a Transition type Of the Units if they are given as Ordinals', () => {
            expect(difference(as.Ordinal<Ms[]>(4), as.Ordinal<Ms[]>(1)))
                .toBe(as.Transition<Ms[]>(3))
        })

        it('works for Uses that are related to addition/subtraction', () => {
            difference(as.Translation(3), as.Translation(4))
            difference(as.Point(3), as.Point(4))
            difference(as.Cardinal(3), as.Cardinal(4))
            difference(as.Ordinal(3), as.Ordinal(4))
        })
    })

    describe('quotient', () => {
        it('dumbly divides if types match and are not as Points, and returns of the same Units', () => {
            expect(quotient(as.Ms(6), as.Ms(2)))
                .toBe(as.Ms(3))
        })

        it('returns a Scalar type Of the Units if they are given as Points', () => {
            expect(quotient(as.Point<Ms>(6), as.Point<Ms>(2)))
                .toBe(as.Interval<Ms>(3))
        })

        it('returns a Multiple type Of the Units if they are given as Ordinals', () => {
            expect(quotient(as.Ordinal<Ms[]>(6), as.Ordinal<Ms[]>(2)))
                .toBe(as.Factor<Ms[]>(3))
        })

        it('when given an integer type, removes the integer type in the return value, because division is not closed on integers (by contrast, subtraction is, which is why we do not have an equivalent test above for `difference`)', () => {
            const numeratorDowngraded: number = quotient(as.Numerator(3), as.Numerator(3))
            const denominatorDowngraded: number = quotient(as.Denominator(3), as.Denominator(3))
        })

        it('works for Uses which relate to multiplication/division', () => {
            quotient(as.Scalar(3), as.Scalar(4))
            quotient(as.Point(3), as.Point(4))
            quotient(as.Multiple(3), as.Multiple(4))
            quotient(as.Ordinal(3), as.Ordinal(4))
            quotient(as.NormalScalar(0.3), as.NormalScalar(0.4))
        })
    })

    describe('modulus', () => {
        it('when given an integer type, removes the integer type in the return value', () => {
            const numeratorDowngraded: number = modulus(as.Numerator(3), as.Numerator(3))
            const denominatorDowngraded: number = modulus(as.Denominator(3), as.Denominator(3))
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
            const integerModulus: Modulus = squareRoot(as.Remaindee(3))
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
            const integerModulus: Modulus = cubeRoot(as.Remaindee(3))
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
            const integerModulus: Remaindee = floor(as.Modulus(1.3))
        })
    })

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

    describe('pow', () => {
        it('works for unwhole versions', () => {
            expect(pow(as.Logarithm(2), as.Exponent(3)))
                .toBe(8)
            expect(pow(as.Logarithm<Scalar>(2), as.Exponent<Scalar>(3)))
                .toBe(as.Scalar(8))
        })

        it('works for whole versions', () => {
            expect(pow(as.Base(2), as.Power(3)))
                .toBe(8)
            expect(pow(as.Base<Multiple>(2), as.Power<Multiple>(3)))
                .toBe(as.Multiple(8))
        })
    })

    describe('log', () => {
        it('works for unwhole versions', () => {
            expect(log(8, as.Logarithm(2)))
                .toBe(as.Exponent(3))
            expect(log(as.Scalar(8), as.Logarithm<Scalar>(2)))
                .toBe(as.Exponent<Scalar>(3))
        })

        it('works for whole versions', () => {
            expect(log(8, as.Base(2)))
                .toBe(as.Power(3))
            expect(log(as.Multiple(8), as.Base<Multiple>(2)))
                .toBe(as.Power<Multiple>(3))
        })
    })
})
