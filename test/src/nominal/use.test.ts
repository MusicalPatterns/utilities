// tslint:disable no-dead-store no-unused-expression no-duplicate-string

import {
    as,
    Base,
    Cycle,
    Exponent,
    Logarithm,
    Multiple,
    negative,
    NormalScalar,
    ONE_HALF,
    Ordinal,
    Power,
    Scalar,
    Translation,
    use,
} from '../../../src/indexForTest'

describe('use', () => {
    // Whole Units

    describe('Fractions, Numerators, and Denominators', () => {
        it('using a Numerator to a Denominator gives a Fraction', () => {
            expect(use.Numerator(as.Denominator(5), as.Numerator(4)))
                .toEqual(as.Fraction([ as.Numerator(4), as.Denominator(5) ]))
        })

        it('using a Denominator to a Numerator gives a Fraction', () => {
            expect(use.Denominator(as.Numerator(5), as.Denominator(4)))
                .toEqual(as.Fraction([ as.Numerator(5), as.Denominator(4) ]))
        })
    })

    // Unwhole Transformation Uses

    describe('Scalar', () => {
        it('should be able to scale a plain number', () => {
            const scaledNumber: number = use.Scalar(1, ONE_HALF)
        })
    })

    describe('Translation', () => {
        it('when applies to a number, translates it (sums)', () => {
            expect(use.Translation(as.Scalar(4.2), as.Translation<Scalar>(1.2)))
                .toBe(as.Scalar(5.4))
        })
    })

    // Unwhole Non-Transformation Uses

    describe('Modulus', () => {
        it('addresses the bug in JavaScript where negative numbers give negative results', () => {
            expect(-3 % 5)
                .toBe(-3)
            expect(use.Modulus(-3, as.Modulus(5)))
                .toBe(2)
        })
    })

    // Whole Transformation Uses (with overloads for arrays)

    describe('Multiple', () => {
        it('checks the integerlike of the Multiple, and not the value', () => {
            expect(use.Multiple(3, as.Multiple(2)))
                .toBe(6)

            const notReallyMultiple: Multiple = 1.5 as unknown as Multiple
            expect(() => use.Multiple(1, notReallyMultiple))
                .toThrowError('Numerals of type Multiple must be integers. This numeral was 1.5.')
        })

        it('when given a Multiple that is really close to an integer, rounds it', () => {
            expect(use.Multiple(3, as.Multiple(2.00000000000003)))
                .toBe(6)
        })

        it('can be applied wherever a Scalar could be', () => {
            expect(use.Scalar(3, as.Multiple(5)))
                .toBe(15)
        })

        it('when a use of a Scalar is applied as a Multiple, it works, and vice versa', () => {
            expect(use.Multiple(as.Multiple(5), as.Multiple<Scalar>(3)))
                .toBe(as.Multiple(15))

            expect(use.Multiple(as.Scalar(5), as.Multiple<Multiple>(3)))
                .toBe(as.Scalar(15))
        })
    })

    describe('Cardinal', () => {
        it('when applies to a cyclical array, cycles it to the right', () => {
            expect(use.Cardinal(as.Cycle([ 0, 1, 1, 0, 1 ]), as.Cardinal<Cycle>(negative(1))))
                .toEqual(as.Cycle([ 1, 1, 0, 1, 0 ]))
            expect(use.Cardinal(as.Cycle([ 0, 1, 1, 0, 1 ]), as.Cardinal<Cycle>(0)))
                .toEqual(as.Cycle([ 0, 1, 1, 0, 1 ]))
            expect(use.Cardinal(as.Cycle([ 0, 1, 1, 0, 1 ]), as.Cardinal<Cycle>(1)))
                .toEqual(as.Cycle([ 1, 0, 1, 1, 0 ]))
        })
    })

    // Whole Non-Transformation Uses

    describe('Base', () => {
        it('checks the integerlike of the Base, and not the value', () => {
            expect(use.Base(3, as.Base(2)))
                .toBeCloseTo(1.584962500721156)

            const notReallyBase: Base = 1.5 as unknown as Base
            expect(() => use.Base(1, notReallyBase))
                .toThrowError('Numerals of type Base must be integers. This numeral was 1.5.')
        })

        it('when given a Base that is really close to an integer, rounds it', () => {
            expect(use.Base(8, as.Base(2.00000000000003)))
                .toBe(3)
        })

        it('can be applied wherever a Logarithm could be', () => {
            expect(use.Logarithm(3, as.Base(2)))
                .toBe(1.584962500721156)
        })

        it('when a use of a Logarithm is applied as a Base, it works, and vice versa', () => {
            expect(use.Multiple(as.Base(5), as.Multiple<Logarithm>(3)))
                .toBe(as.Base(15))

            expect(use.Multiple(as.Logarithm(5), as.Multiple<Base>(3)))
                .toBe(as.Logarithm(15))
        })

        it('works on Ordinals', () => {
            expect(use.Base(as.Ordinal(8), as.Base<Ordinal>(2)))
                .toBe(as.Ordinal(3))
        })
    })

    describe('Power', () => {
        it('checks the integerlike of the Power, and not the value', () => {
            expect(use.Power(3, as.Power(2)))
                .toBe(9)

            const notReallyPower: Power = 1.5 as unknown as Power
            expect(() => use.Power(1, notReallyPower))
                .toThrowError('Numerals of type Power must be integers. This numeral was 1.5.')
        })

        it('when given a Power that is really close to an integer, rounds it', () => {
            expect(use.Power(3, as.Power(2.00000000000003)))
                .toBe(9)
        })

        it('can be applied wherever an Exponent could be', () => {
            expect(use.Exponent(3, as.Power(2)))
                .toBe(9)
        })

        it('when a use of a Exponent is applied as a Power, it works, and vice versa', () => {
            expect(use.Multiple(as.Power(5), as.Multiple<Exponent>(3)))
                .toBe(as.Power(15))

            expect(use.Multiple(as.Exponent(5), as.Multiple<Power>(3)))
                .toBe(as.Exponent(15))
        })

        it('works on Ordinals', () => {
            expect(use.Power(as.Ordinal(2), as.Power<Ordinal>(3)))
                .toBe(as.Ordinal(8))
        })
    })

    describe('IntegerModulus', () => {
        it('works on Ordinals', () => {
            expect(use.IntegerModulus(as.Ordinal(8), as.IntegerModulus<Ordinal>(3)))
                .toBe(as.Ordinal(2))
        })
    })

    // Whole Fixed Uses (only used for arrays)

    describe('Ordinal', () => {
        it('when the array is cyclical, wraps the index, whether negative or beyond its length', () => {
            const myCycle: Cycle<string> = as.Cycle([ 'a', 'b', 'c' ])
            const myArray: string[] = [ 'd', 'e', 'f' ]

            expect(use.Ordinal(myCycle, as.Ordinal<Cycle<string>>(4)))
                .toBe('b')
            expect(use.Ordinal(myCycle, as.Ordinal<Cycle<string>>(negative(1))))
                .toBe('c')
            expect(use.Ordinal(myCycle, as.Ordinal<Cycle<string>>(1)))
                .toBe('b')
            expect(use.Ordinal(myCycle, as.Ordinal<Cycle<string>>(0)))
                .toBe('a')

            expect(() => use.Ordinal(myArray, as.Ordinal<string[]>(4)))
                .toThrowError(`Ordinal 4 exceeds available indices of array of length 3`)
            expect(use.Ordinal(myArray, as.Ordinal<string[]>(negative(1))))
                .toBeUndefined()
            expect(use.Ordinal(myArray, as.Ordinal<string[]>(1)))
                .toBe('e')
            expect(use.Ordinal(myArray, as.Ordinal<string[]>(0)))
                .toBe('d')
        })
    })

    // Normal Uses

    describe('NormalScalar', () => {
        it('checks the normalcy of the NormalScalar, and not the value', () => {
            expect(use.NormalScalar(3, as.NormalScalar(0.5)))
                .toBe(1.5)

            expect(() => use.NormalScalar(0.5, 3 as unknown as NormalScalar))
                .toThrowError('Numerals of type NormalScalar must be between 0 and 1. This numeral was 3.')
        })

        it('can be applied wherever a Scalar could be', () => {
            expect(use.Scalar(3, as.NormalScalar(0.5)))
                .toBe(1.5)
        })

        it('when a use of a Scalar is applied as a NormalScalar, it works, and vice versa', () => {
            expect(use.NormalScalar(as.NormalScalar(0.5), as.NormalScalar<Scalar>(0.5)))
                .toBe(as.NormalScalar(0.25))

            expect(use.NormalScalar(as.Scalar(0.5), as.NormalScalar<NormalScalar>(0.5)))
                .toBe(as.Scalar(0.25))
        })

        it('rounds the value if it is close', () => {
            expect(use.NormalScalar(3, -2.220446049250313e-16 as unknown as NormalScalar))
                .toBe(0)
        })
    })
})
