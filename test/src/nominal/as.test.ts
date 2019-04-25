// tslint:disable no-unused-expression no-dead-store

import {
    as,
    Base,
    Cardinal,
    Cents,
    Cycle,
    Denominator,
    Exponent,
    Frequency,
    Gain,
    Hz,
    Integer,
    Logarithm,
    Meters,
    Modulus,
    Ms,
    Numerator,
    Of,
    Ordinal,
    Power,
    Radians,
    Rotation,
    Scalar,
    Semitones,
    Space,
    Time,
    UnitScalar,
} from '../../../src/indexForTest'

describe('as', () => {
    describe('units', () => {
        it('allows converting raw numbers into numbers in certain units', () => {
            const hz: Hz = as.Hz(3)
            const ms: Ms = as.Ms(3)
            const radians: Radians = as.Radians(3)
            const cents: Cents = as.Cents(3)
            const semitones: Semitones = as.Semitones(3)
            const meters: Meters = as.Meters(3)
            const space: Space = as.Space(3)
            const time: Time = as.Time(3)
            const frequency: Frequency = as.Frequency(3)
            const gain: Gain = as.Gain(3)
        })

        it('allows comparing things in the same units but with different values', () => {
            expect(as.Hz(3.5))
                .not
                .toBe(as.Hz(4))
        })
    })

    describe('uses', () => {
        it('allows converting raw numbers into numbers for certain uses', () => {
            const scalar: Scalar = as.Scalar(3)
            const rotation: Rotation = as.Rotation(3)

            const base: Base = as.Base(3)
            const power: Power = as.Power(3)

            const modulus: Modulus = as.Modulus(3)
        })

        it('allows comparing things of the same use but with different values', () => {
            expect(as.Rotation(3.5))
                .not
                .toBe(as.Rotation(4))
        })

        it('should be able to map', () => {
            const single: Scalar = as.Scalar(3)
            const array: Scalar[] = [ 3, 4, 5 ]
                .map(as.Scalar)
        })
    })

    describe('units and uses', () => {
        it('allows choosing the Of as a type parameter', () => {
            const rotationScalar: Scalar<Rotation> = as.Scalar<Rotation>(3)
            const scalarScalar: Scalar<Scalar> = as.Scalar<Scalar>(3)
            const hzScalar: Scalar<Hz> = as.Scalar<Hz>(3)
        })

        it('should allow generic numeric types (which extend Number)', () => {
            const genericUse: <NumericType extends Number>(argument: NumericType) => void =
                <NumericType extends Number>(argument: NumericType): void => {
                    const numericScalar: Scalar<NumericType> = as.Scalar<NumericType>(3)
                }
        })
    })

    describe('special units/use', () => {
        it('allows making Cardinals or Ordinals if they are Integers, and does not require you to specify Integer as the generic parameter', () => {
            const integer: Integer = as.Integer(3)

            const cardinal: Cardinal = as.Cardinal(integer)
            const numerator: Numerator = as.Numerator(integer)
            const denominator: Denominator = as.Denominator(integer)
        })

        it('allows making Cardinals or Ordinals if they are plain numbers which are integers', () => {
            const cardinal: Cardinal = as.Cardinal(3)
            const numerator: Numerator = as.Numerator(3)
            const denominator: Denominator = as.Denominator(3)
        })

        it(`allows calling with numbers which aren't integers, but throws`, () => {
            expect(() => as.Cardinal(4.3))
                .toThrow(new Error('Numerals of type Cardinal must be integers. This numeral had value 4.3.'))
            expect(() => as.Numerator(4.3))
                .toThrow(new Error('Numerals of type Numerator must be integers. This numeral had value 4.3.'))
            expect(() => as.Denominator(4.3))
                .toThrow(new Error('Numerals of type Denominator must be integers. This numeral had value 4.3.'))
        })

        it(`allows calling with numbers which are very close to integers, off only probably due to javascript floating point arithmetic issues, and then rounds them`, () => {
            expect(as.Cardinal(9.000000000000004))
                .toBe(9 as unknown as Cardinal)
            expect(as.Cardinal(9.00000000004))
                .toBe(9 as unknown as Cardinal)
            expect(() => as.Cardinal(9.0000000004))
                .toThrow(new Error('Numerals of type Cardinal must be integers. This numeral had value 9.0000000004.'))
        })

        it(`that also works for UnitScalar`, () => {
            expect(as.UnitScalar(1.000000000000004))
                .toBe(1 as unknown as UnitScalar)
            expect(as.UnitScalar(1.00000000004))
                .toBe(1 as unknown as UnitScalar)
            expect(() => as.UnitScalar(1.0000000004))
                .toThrow(new Error('Numerals of type UnitScalar must be between 0 and 1. This numeral had value 1.0000000004.'))
        })

        it('allows setting things which are integers directly as other units', () => {
            const integer: Integer = as.Integer(3)

            const ms: Ms = as.Ms(integer)
        })

        it('allows setting things which are integers as unnatural uses if it is not explicitly tried to be as as the Of', () => {
            const acceptIntegerWithoutAskingForItToBeTheOfWorksForUnnatural: Scalar = as.Scalar(as.Integer(3))
        })

        it('allows using integers where you would use numbers', () => {
            const numberFromInteger: number = as.Integer(3)
        })

        it('allows making fractions out of integers or numerator/denominators or any combination thereof', () => {
            as.Fraction([ as.Integer(4), as.Integer(4) ])
            as.Fraction([ as.Numerator(4), as.Denominator(4) ])
            as.Fraction([ as.Numerator(4), as.Integer(4) ])
            as.Fraction([ as.Integer(4), as.Denominator(4) ])
        })

        it('allows these things for Ordinal', () => {
            const index: Ordinal = as.Ordinal(3)
            const stringIndex: Ordinal<string> = as.Ordinal<string>(3)
            const stringsIndex: Ordinal<string[]> = as.Ordinal<string[]>(3)
        })

        it('allows assigning more specific uses (unit, integer) as the less specific counterparts', () => {
            const scalarFromUnitScalar: Scalar = as.UnitScalar(0.5)

            const scalarFromMultiple: Scalar = as.Multiple(5)
            const logarithmFromBase: Logarithm = as.Base(5)
            const exponentFromPower: Exponent = as.Power(5)
        })

        it('this works for Ordinal', () => {
            const jim: Ordinal<Cycle<Scalar>> = as.Ordinal<Cycle<Scalar>>(3)
            const never: number = as.number(jim)
        })
    })

    describe('nothing', () => {
        it('removes the type', () => {
            const removed1: number = as.number(as.Scalar(1))
            const removed2: number = as.number(as.Cardinal(1))
            const removed3: number = as.number(as.UnitScalar(1))
            const removed4: number = as.number(as.Ordinal(1))
            const removed5: number = as.number(as.Scalar<Rotation>(1))
            const removed6: number = as.number(as.Scalar<Hz>(1))
        })
    })
})
