// tslint:disable no-dead-store no-unused-expression

import {
    apply, Base,
    Cycle, Multiple,
    negative,
    NormalScalar,
    ONE_HALF,
    Ordinal, Power,
    Scalar,
    to,
    Translation,
} from '../../../src/indexForTest'

describe('apply', () => {
    describe('Scalar', () => {
        it('should be able to scale a plain number', () => {
            const scaledNumber: number = apply.Scalar(1, ONE_HALF)
        })
    })

    describe('Ordinal', () => {
        it('when the array is cyclical, wraps the index, whether negative or beyond its length', () => {
            const myCycle: Cycle<string> = to.Cycle([ 'a', 'b', 'c' ])
            const myArray: string[] = [ 'd', 'e', 'f' ]

            expect(apply.Ordinal(myCycle, to.Ordinal<string>(4)))
                .toBe('b')
            expect(apply.Ordinal(myCycle, to.Ordinal<string>(negative(1))))
                .toBe('c')
            expect(apply.Ordinal(myCycle, to.Ordinal<string>(1)))
                .toBe('b')
            expect(apply.Ordinal(myCycle, to.Ordinal<string>(0)))
                .toBe('a')

            expect(() => apply.Ordinal(myArray, to.Ordinal<string>(4)))
                .toThrowError(`Ordinal 4 exceeds available indices of array of length 3`)
            expect(apply.Ordinal(myArray, to.Ordinal<string>(negative(1))))
                .toBeUndefined()
            expect(apply.Ordinal(myArray, to.Ordinal<string>(1)))
                .toBe('e')
            expect(apply.Ordinal(myArray, to.Ordinal<string>(0)))
                .toBe('d')
        })
    })

    describe('Translation', () => {
        it('when applies to a number, translates it (sums)', () => {
            expect(apply.Translation(to.Scalar(4), to.Translation<Scalar>(1)))
                .toBe(to.Scalar(5))
        })

        it('when applies to a cyclical array, cycles it to the right', () => {
            expect(apply.Translation(to.Cycle([ 0, 1, 1, 0, 1 ]), to.Translation<Cycle>(negative(1))))
                .toEqual(to.Cycle([ 1, 1, 0, 1, 0 ]))
            expect(apply.Translation(to.Cycle([ 0, 1, 1, 0, 1 ]), to.Translation<Cycle>(0)))
                .toEqual(to.Cycle([ 0, 1, 1, 0, 1 ]))
            expect(apply.Translation(to.Cycle([ 0, 1, 1, 0, 1 ]), to.Translation<Cycle>(1)))
                .toEqual(to.Cycle([ 1, 0, 1, 1, 0 ]))
        })
    })

    describe('Fractions, Numerators, and Denominators', () => {
        it('applying a Numerator to a Denominator gives a Fraction', () => {
            expect(apply.Numerator(to.Denominator(5), to.Numerator(4)))
                .toEqual(to.Fraction([ to.Numerator(4), to.Denominator(5) ]))
        })

        it('applying a Denominator to a Numerator gives a Fraction', () => {
            expect(apply.Denominator(to.Numerator(5), to.Denominator(4)))
                .toEqual(to.Fraction([ to.Numerator(5), to.Denominator(4) ]))
        })
    })

    describe('Modulus', () => {
        it('addresses the bug in JavaScript where negative numbers give negative results', () => {
            expect(-3 % 5)
                .toBe(-3)
            expect(apply.Modulus(-3, to.Modulus(5)))
                .toBe(2)
        })
    })

    describe('NormalScalar', () => {
        it('checks the normalcy of the NormalScalar, and not the value', () => {
            expect(apply.NormalScalar(3, to.NormalScalar(0.5)))
                .toBe(1.5)

            const notReallyNormalScalar: NormalScalar = apply.Scalar(to.NormalScalar(0.5), to.Scalar<NormalScalar>(3))
            expect(() => apply.NormalScalar(0.5, notReallyNormalScalar))
                .toThrowError('A NormalScalar must be between 0 and 1. It was 1.5.')
        })
    })

    describe('Multiple', () => {
        it('checks the integerlike of the Multiple, and not the value', () => {
            expect(apply.Multiple(3, to.Multiple(2)))
                .toBe(6)

            const notReallyMultiple: Multiple = 1.5 as unknown as Multiple
            expect(() => apply.Multiple(1, notReallyMultiple))
                .toThrowError('Numerals of type Multiple must be Integers. This numeral had value 1.5.')
        })
    })

    describe('Base', () => {
        it('checks the integerlike of the Base, and not the value', () => {
            expect(apply.Base(3, to.Base(2)))
                .toBeCloseTo(1.584962500721156)

            const notReallyBase: Base = 1.5 as unknown as Base
            expect(() => apply.Base(1, notReallyBase))
                .toThrowError('Numerals of type Base must be Integers. This numeral had value 1.5.')
        })
    })

    describe('Power', () => {
        it('checks the integerlike of the Power, and not the value', () => {
            expect(apply.Power(3, to.Power(2)))
                .toBe(9)

            const notReallyPower: Power = 1.5 as unknown as Power
            expect(() => apply.Power(1, notReallyPower))
                .toThrowError('Numerals of type Power must be Integers. This numeral had value 1.5.')
        })
    })
})
