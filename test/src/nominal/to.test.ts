// tslint:disable no-any no-unused-expression comment-format no-commented-code no-dead-store

import {
    Amplitude,
    Base,
    Cardinal,
    Cents,
    Denominator,
    Frequency,
    Hz,
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
    Translation,
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

        // it('DOES NOT ALLOW assignment to units from raw numbers (which is not using `to`, but why we need `to`)', () => {
        //     const hzFromRaw: Hz = 3
        // })
        //
        // it('DOES NOT ALLOW assignment to units by as\'ing (which is not using `to`, but why we need `to`)', () => {
        //     3 as Hz
        // })
        //
        // it('DOES NOT ALLOW assignment to raw numbers', () => {
        //     const hzToRaw: number = to.Hz(3)
        // })
        //
        // it('DOES NOT ALLOW assignment to the wrong unit', () => {
        //     const hzToMs: Ms = to.Hz(3)
        // })
        //
        // it('DOES NOT ALLOW re-assignment to the same unit', () => {
        //     to.Hz(to.Hz(3))
        // })
        //
        // it('DOES NOT ALLOW direct conversion from one unit into another, whether directly or intermediated by an explicit varible', () => {
        //     const ms: Ms = to.Ms(3)
        //     const centsFromExplicitMsVariable: Cents = to.Cents(ms)
        //
        //     const centsFromToMsDirectly: Cents = to.Cents(to.Ms(3))
        // })
        //
        // it('DOES NOT ALLOW unholy hybrids of units', () => {
        //     const centsMsFromMs: Cents<Ms> = 3 as any
        //     const msCentsFromMs: Ms<Cents> = 3 as any
        // })
    })

    describe('operations', () => {
        it('allows converting raw numbers into numbers for certain operations', () => {
            const scalar: Scalar = to.Scalar(3)
            const translation: Translation = to.Translation(3)
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

        // it('DOES NOT ALLOW assignment to operations from raw numbers (which is not using `to`, but why we need `to`)', () => {
        //     const rotationFromRaw: Rotation = 3
        // })
        //
        // it('DOES NOT ALLOW assignment to operations by as\'ing (which is not using `to`, but why we need `to`)', () => {
        //     3 as Rotation
        // })
        //
        // it('DOES NOT ALLOW assignment to raw numbers', () => {
        //     const rotationToRaw: number = to.Rotation(3)
        // })
        //
        // it('DOES NOT ALLOW assignment to the wrong operation', () => {
        //     const rotationToTranslation: Translation = to.Rotation(3)
        // })
        //
        // it('DOES NOT ALLOW re-assignment to the same operation', () => {
        //     to.Rotation(to.Rotation(3))
        // })
        //
        // it('DOES NOT ALLOW direct conversion from one operation into another, whether directly or intermediated by an explicit varible', () => {
        //     const rotation: Rotation = to.Rotation(3)
        //     const scalarFromExplicitRotationVariable: Scalar = to.Scalar(rotation)
        //
        //     const scalarFromRotationDirectly: Scalar = to.Scalar(to.Rotation(3))
        // })
        //
        // it('DOES NOT ALLOW unholy hybrids of operations', () => {
        //     const centsMsFromMs: Rotation<Scalar> = 3 as any
        //     const msCentsFromMs: Scalar<Rotation> = 3 as any
        // })
    })

    describe('units and operations', () => {
        it('allows attributing an operation to something already in units', () => {
            const hz: Hz = to.Hz(3)
            const hzScalar: Scalar<Hz> = to.Scalar(hz)
        })

        it('allows attributing units to something already with an operation', () => {
            const scalar: Scalar = to.Scalar(3)
            const scalarHz: Hz<Scalar> = to.Hz(scalar)
        })

        it('allows switching the nesting order of the types', () => {
            const exampleOne: Scalar<Hz> = to.Scalar(to.Hz(3))
            const exampleTwo: Hz<Scalar> = to.Hz(to.Scalar(3))

            const exampleThree: Hz<Scalar> = to.Scalar(to.Hz(3))
            const exampleFour: Scalar<Hz> = to.Hz(to.Scalar(3))
        })

        // it('DOES NOT ALLOW assigning something with both units and type to either the wrong units or the wrong type', () => {
        //     const scalarHzAsWrongHz: Hz<Translation> = to.Hz(to.Scalar(3))
        //     const scalarHzAsScalarWrong: Cents<Scalar> = to.Hz(to.Scalar(3))
        //     const scalarHzAsWrongWrong: Cents<Translation> = to.Hz(to.Scalar(3))
        // })
        //
        // it('DOES NOT ALLOW assigning something with both units and operation to something with only one or the other', () => {
        //     const scalarHzAsJustScalar: Scalar = to.Hz(to.Scalar(3))
        //     const scalarHzAsJustHz: Hz = to.Hz(to.Scalar(3))
        //     const scalarHzAsJustScalarDirect: Scalar = 3 as any as Hz<Scalar>
        //     const scalarHzAsJustHzDirect: Hz = 3 as any as Scalar<Hz>
        // })
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
                .toThrow(new Error('Cardinals must be Integers.'))
            expect(() => to.Ordinal(4.3))
                .toThrow(new Error('Ordinals must be Integers.'))
            expect(() => to.Numerator(4.3))
                .toThrow(new Error('Numerators must be Integers.'))
            expect(() => to.Denominator(4.3))
                .toThrow(new Error('Denominators must be Integers.'))
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

        it(`unfortunately for now allows making special operations if they are already that, but that's on you for trying I guess`, () => {
            const doubleOrdinal: Ordinal = to.Ordinal(to.Ordinal(3))
            const doubleCardinal: Cardinal = to.Cardinal(to.Cardinal(3))
            const doubleNumerator: Numerator = to.Numerator(to.Numerator(3))
            const doubleDenominator: Denominator = to.Denominator(to.Denominator(3))
        })

        it('allows making fractions out of integers or numerator/denominators or any combination thereof', () => {
            to.Fraction([ to.Integer(4), to.Integer(4) ])
            to.Fraction([ to.Numerator(4), to.Denominator(4) ])
            to.Fraction([ to.Numerator(4), to.Integer(4) ])
            to.Fraction([ to.Integer(4), to.Denominator(4) ])
        })

        // it('DOES NOT ALLOW creating fractions out of mere numbers', () => {
        //     to.Fraction([ 4, 4 ])
        // })

        // it('DOES NOT ALLOW making Cardinals or Ordinals if they are some other Units (not Integers)', () => {
        //     to.Ordinal(to.Hz(3))
        //     to.Cardinal(to.Hz(3))
        //     to.Numerator(to.Hz(3))
        //     to.Denominator(to.Hz(3))
        // })
        //
        // it('DOES NOT ALLOW making Cardinals or Ordinals generic of some other Units (besides Integers)', () => {
        //     const ordinalHz: Ordinal<Hz> = 3 as any as Ordinal<Hz>
        //     const cardinalHz: Cardinal<Hz> = 3 as any as Cardinal<Hz>
        //     const numeratorHz: Numerator<Hz> = 3 as any as Numerator<Hz>
        //     const denominatorHz: Denominator<Hz> = 3 as any as Denominator<Hz>
        // })
        //
        // it('DOES NOT ALLOW making Cardinals or Ordinals directly into other operations', () => {
        //     const ordinalScalar: Scalar<Ordinal> = to.Scalar(to.Ordinal(3))
        //     const cardinalScalar: Scalar<Cardinal> = to.Scalar(to.Cardinal(3))
        //     const numeratorScalar: Scalar<Numerator> = to.Scalar(to.Numerator(3))
        //     const denominatorScalar: Scalar<Denominator> = to.Scalar(to.Denominator(3))
        // })
    })
})
