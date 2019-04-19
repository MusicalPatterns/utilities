// tslint:disable no-unused-expression no-dead-store

import {
    Amplitude,
    Base,
    Cardinal,
    Cents,
    Denominator, Exponent,
    Frequency,
    Hz,
    Integer, Logarithm,
    Meters,
    Modulus,
    Ms,
    Multiple, NormalScalar,
    Numerator,
    Of,
    of,
    Ordinal,
    Power,
    Radians,
    Rotation,
    Scalar,
    Semitones,
    Space,
    Time,
    to,
} from '../../../src/indexForTest'

describe('to', () => {
    describe('units', () => {
        it('allows converting raw numbers into numbers in certain units', () => {
            const hz: Hz = to.Hz(3)
            const ms: Ms = to.Ms(3)
            const radians: Radians = to.Radians(3)
            const cents: Cents = to.Cents(3)
            const semitones: Semitones = to.Semitones(3)
            const meters: Meters = to.Meters(3)
            const space: Space = to.Space(3)
            const time: Time = to.Time(3)
            const frequency: Frequency = to.Frequency(3)
            const amplitude: Amplitude = to.Amplitude(3)
        })

        it('allows comparing things in the same units but with different values', () => {
            expect(to.Hz(3.5))
                .not
                .toBe(to.Hz(4))
        })
    })

    describe('operations', () => {
        it('allows converting raw numbers into numbers for certain operations', () => {
            const scalar: Scalar = to.Scalar(3)
            const rotation: Rotation = to.Rotation(3)

            const base: Base = to.Base(3)
            const power: Power = to.Power(3)

            const modulus: Modulus = to.Modulus(3)
        })

        it('allows comparing things of the same operation but with different values', () => {
            expect(to.Rotation(3.5))
                .not
                .toBe(to.Rotation(4))
        })

        it('should be able to map', () => {
            const single: Scalar = to.Scalar(3)
            const array: Scalar[] = [ 3, 4, 5 ]
                .map(to.Scalar)
        })
    })

    describe('units and operations', () => {
        it('allows attributing an operation to something already Of units', () => {
            const ofHz: Of<Hz> = of.Hz(3)
            const hzScalar: Scalar<Hz> = to.Scalar(ofHz)
        })

        it('allows choosing the Of as a type parameter', () => {
            const rotationScalar: Scalar<Rotation> = to.Scalar<Rotation>(3)
            const scalarScalar: Scalar<Scalar> = to.Scalar<Scalar>(3)
            const hzScalar: Scalar<Hz> = to.Scalar<Hz>(3)
        })

        it('should allow generic numeric types (which extend Number)', () => {
            const genericOperation: <NumericType extends Number>(argument: NumericType) => void =
                <NumericType extends Number>(argument: NumericType): void => {
                    const numericScalar: Scalar<NumericType> = to.Scalar<NumericType>(3)
                }
        })
    })

    describe('special units/operation', () => {
        it('allows making Cardinals or Ordinals if they are Integers, and does not require you to specify Integer as the generic parameter', () => {
            const integer: Integer = to.Integer(3)

            const cardinal: Cardinal = to.Cardinal(integer)
            const numerator: Numerator = to.Numerator(integer)
            const denominator: Denominator = to.Denominator(integer)
        })

        it('allows making Cardinals or Ordinals if they are plain numbers which are integers', () => {
            const cardinal: Cardinal = to.Cardinal(3)
            const numerator: Numerator = to.Numerator(3)
            const denominator: Denominator = to.Denominator(3)
        })

        it(`allows calling with numbers which aren't integers, but throws`, () => {
            expect(() => to.Cardinal(4.3))
                .toThrow(new Error('Numerals of type Cardinal must be Integers. This numeral had value 4.3.'))
            expect(() => to.Numerator(4.3))
                .toThrow(new Error('Numerals of type Numerator must be Integers. This numeral had value 4.3.'))
            expect(() => to.Denominator(4.3))
                .toThrow(new Error('Numerals of type Denominator must be Integers. This numeral had value 4.3.'))
        })

        it(`allows calling with numbers which are very close to integers, off only probably due to javascript floating point arithmetic issues, and then rounds them`, () => {
            expect(to.Cardinal(9.000000000000004))
                .toBe(9 as unknown as Cardinal)
            expect(to.Cardinal(9.00000000004))
                .toBe(9 as unknown as Cardinal)
            expect(() => to.Cardinal(9.0000000004))
                .toThrow(new Error('Numerals of type Cardinal must be Integers. This numeral had value 9.0000000004.'))
        })

        it(`that also works for NormalScalar`, () => {
            expect(to.NormalScalar(1.000000000000004))
                .toBe(1 as unknown as NormalScalar)
            expect(to.NormalScalar(1.00000000004))
                .toBe(1 as unknown as NormalScalar)
            expect(() => to.NormalScalar(1.0000000004))
                .toThrow(new Error('A NormalScalar must be between 0 and 1. It was 1.0000000004.'))
        })

        it('allows setting things which are integers directly to other units', () => {
            const integer: Integer = to.Integer(3)

            const ms: Ms = to.Ms(integer)
        })

        it('allows setting things which are integers to operations, whether Integer is specified as the generic type or not', () => {
            const integer: Integer = to.Integer(3)

            const scalarNotOfIntegersJustConstructedFromOne: Scalar = to.Scalar(integer)
            const multipleOfIntegers: Multiple<Integer> = to.Multiple(of.Integer(integer))
        })

        it('allows using integers where you would use numbers', () => {
            const numberFromInteger: number = to.Integer(3)
        })

        it('allows making fractions out of integers or numerator/denominators or any combination thereof', () => {
            to.Fraction([ to.Integer(4), to.Integer(4) ])
            to.Fraction([ to.Numerator(4), to.Denominator(4) ])
            to.Fraction([ to.Numerator(4), to.Integer(4) ])
            to.Fraction([ to.Integer(4), to.Denominator(4) ])
        })

        it('allows these things for Ordinal', () => {
            const index: Ordinal = to.Ordinal(3)
            const stringIndex: Ordinal<string> = to.Ordinal<string>(3)
        })

        it('allows assigning more specific operations (normal, integer) to the less specific counterparts', () => {
            const scalarFromNormalScalar: Scalar = to.NormalScalar(0.5)

            const scalarFromMultiple: Scalar = to.Multiple(5)
            const logarithmFromBase: Logarithm = to.Base(5)
            const exponentFromPower: Exponent = to.Power(5)
        })
    })
})
