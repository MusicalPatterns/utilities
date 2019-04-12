// tslint:disable no-unused-expression no-dead-store

import {
    Amplitude,
    Base,
    Cardinal,
    Cents,
    Denominator,
    Frequency,
    Hz, Index,
    Integer,
    Meters,
    Modulus,
    Ms,
    Numerator,
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

        it('allows operation of operations', () => {
            const rotationOfRotation: Rotation<Rotation> = to.Rotation(to.Rotation(3))
            const rotationOfScalar: Rotation<Scalar> = to.Rotation(to.Scalar(3))
        })
    })

    describe('units and operations', () => {
        it('allows attributing an operation to something already in units', () => {
            const hz: Hz = to.Hz(3)
            const hzScalar: Scalar<Hz> = to.Scalar(hz)
        })

        it('allows attributing units to something already with an operation', () => {
            const scalar: Scalar = to.Scalar(3)
            const scalarHz: Scalar<Hz> = to.Hz(scalar)
        })

        it('allows switching the nesting order of the types', () => {
            const exampleOne: Scalar<Hz> = to.Scalar(to.Hz(3))

            const exampleFour: Scalar<Hz> = to.Hz(to.Scalar(3))
        })

        it('allows double nesting', () => {
            const modulusOfIndexOfScalar: Modulus<Rotation<Scalar>> = to.Modulus(to.Rotation(to.Scalar(3)))
        })
    })

    describe('special units/operation', () => {
        it('allows making Cardinals or Ordinals if they are Integers, and does not require you to specify Integer as the generic parameter', () => {
            const integer: Integer = to.Integer(3)

            const ordinal: Ordinal = to.Ordinal(integer)
            const cardinal: Cardinal = to.Cardinal(integer)
            const numerator: Numerator = to.Numerator(integer)
            const denominator: Denominator = to.Denominator(integer)
        })

        it('allows making Cardinals or Ordinals if they are plain numbers which are integers', () => {
            const ordinal: Ordinal = to.Ordinal(3)
            const cardinal: Cardinal = to.Cardinal(3)
            const numerator: Numerator = to.Numerator(3)
            const denominator: Denominator = to.Denominator(3)
        })

        it(`allows calling with numbers which aren't integers, but throws`, () => {
            expect(() => to.Cardinal(4.3))
                .toThrow(new Error('Numerals of type Cardinal must be Integers. This numeral had value 4.3.'))
            expect(() => to.Ordinal(4.3))
                .toThrow(new Error('Numerals of type Ordinal must be Integers. This numeral had value 4.3.'))
            expect(() => to.Numerator(4.3))
                .toThrow(new Error('Numerals of type Numerator must be Integers. This numeral had value 4.3.'))
            expect(() => to.Denominator(4.3))
                .toThrow(new Error('Numerals of type Denominator must be Integers. This numeral had value 4.3.'))
        })

        it('allows setting things which are integers directly to other units, whether Integer is specified as the generic type or not', () => {
            const integer: Integer = to.Integer(3)

            const ms: Ms = to.Ms(integer)
            const msInteger: Ms<Integer> = to.Ms(integer)
        })

        it('allows setting things which are integers to operations, whether Integer is specified as the generic type or not', () => {
            const integer: Integer = to.Integer(3)

            const scalar: Scalar = to.Scalar(integer)
            const scalarInteger: Scalar<Integer> = to.Scalar(integer)
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

        it('allows these things for Index', () => {
            const index: Index = to.Index(3)
            const indexScalar: Index<Scalar> = to.Index(to.Scalar(3))
            const indexIndex: Index<Index> = to.Index(to.Index(3))
            const stringIndex: Index<string> = to.Index(3) as Index<string>
        })
    })
})
