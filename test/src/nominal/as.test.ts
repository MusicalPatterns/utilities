// tslint:disable no-unused-expression no-dead-store no-duplicate-string no-useless-cast

import {
    Arc,
    as,
    Base,
    Cardinal,
    Cents,
    Cycle,
    Delta,
    Denominator,
    Exponent,
    Factor,
    Fraction,
    Frequency,
    Gain,
    Hz,
    Integer,
    Interval,
    Logarithm,
    Meters,
    Modulus,
    Ms,
    Multiple,
    NormalScalar,
    Numerator,
    Ordinal,
    Point,
    Power,
    Radians,
    Remaindee,
    Rotation,
    Scalar,
    Semitones,
    Space,
    Time,
    Transition,
    Translation,
    Transposition,
    Turn,
} from '../../../src/indexForTest'

describe('as', () => {
    describe('removal', () => {
        it('removes the type from units', () => {
            const removedUnitUnwholeConcrete: number = as.number(as.Hz(1))
            const removedUnitUnwholeAbstract: number = as.number(as.Frequency(1))
            const removedUnitUnwholeOther: number = as.number(as.Frequency(1))
            const removedUnitWhole: number = as.number(as.Numerator(1))
        })

        it('removes the type from Fraction', () => {
            const removedFraction: number = as.number(as.Fraction([
                as.Numerator(3),
                as.Denominator(4),
            ] as [ Numerator, Denominator ]))
        })

        it('removes the type from unwhole uses', () => {
            const removedUseUnwholeTransformation: number = as.number(as.Scalar(1))
            const removedUseUnwholeNonTransformation: number = as.number(as.Exponent(1))
            const removedUseUnwholeFixed: number = as.number(as.Point(1))
            const removedUseUnwholeCompound: number = as.number(as.Interval(1))
        })

        it('removes the type from whole uses', () => {
            const removedUseWholeTransformation: number = as.number(as.Multiple(1))
            const removedUseWholeNonTransformation: number = as.number(as.Power(1))
            const removedUseWholeFixed: number = as.number(as.Ordinal(1))
            const removedUseWholeCompound: number = as.number(as.Factor(1))
        })

        it('removes the type from normal uses', () => {
            const removedUseNormal: number = as.number(as.NormalScalar(1))
        })

        it('removes the type from integers', () => {
            const removedUseInteger: number = as.number(as.Integer(1))
        })

        it('removes the type from uses of units', () => {
            const removedUseUnwholeOfUnitUnwhole: number = as.number(as.Scalar<Hz>(1))
            const removedUseWholeOfUnitWhole: number = as.number(as.Multiple<Numerator>(1))
        })

        it('removes the type from uses of uses', () => {
            const removedUseUnwholeOfUseUnwhole: number = as.number(as.Scalar<Rotation>(1))
            const removedUseWholeOfUseWhole: number = as.number(as.Multiple<Cardinal>(1))
        })
    })

    describe('units', () => {
        describe('unwhole concrete units', () => {
            it('allows casting numbers', () => {
                const asHz: Hz = as.Hz(3)
                const asMs: Ms = as.Ms(3)
                const asMeters: Meters = as.Meters(3)
            })

            it('allows comparing values', () => {
                expect(as.Hz(3.5))
                    .not
                    .toBe(as.Hz(4))
                expect(as.Ms(3.5))
                    .not
                    .toBe(as.Ms(4))
                expect(as.Meters(3.5))
                    .not
                    .toBe(as.Meters(4))
            })

            it('allows passing as the callback to an iterator', () => {
                const arrayOfHz: Hz[] = [ 3, 4, 5 ].map(as.Hz)
                const arrayOfMs: Ms[] = [ 3, 4, 5 ].map(as.Ms)
                const arrayOfMeters: Meters[] = [ 3, 4, 5 ].map(as.Meters)
            })

            it('allows casting from integers', () => {
                const fromIntegerHz: Hz = as.Hz(as.Integer(3))
                const fromIntegerMs: Ms = as.Ms(as.Integer(3))
                const fromIntegerMeters: Meters = as.Meters(as.Integer(3))
            })
        })

        describe('unwhole abstract units', () => {
            it('allows casting numbers', () => {
                const asFrequency: Frequency = as.Frequency(3)
                const asTime: Time = as.Time(3)
                const asSpace: Space = as.Space(3)
            })

            it('allows comparing values', () => {
                expect(as.Frequency(3.5))
                    .not
                    .toBe(as.Frequency(4))
                expect(as.Time(3.5))
                    .not
                    .toBe(as.Time(4))
                expect(as.Space(3.5))
                    .not
                    .toBe(as.Space(4))
            })

            it('allows passing as the callback to an iterator', () => {
                const arrayOfFrequency: Frequency[] = [ 3, 4, 5 ].map(as.Frequency)
                const arrayOfTime: Time[] = [ 3, 4, 5 ].map(as.Time)
                const arrayOfSpace: Space[] = [ 3, 4, 5 ].map(as.Space)
            })

            it('allows casting from integers', () => {
                const fromIntegerFrequency: Frequency = as.Frequency(as.Integer(3))
                const fromIntegerTime: Time = as.Time(as.Integer(3))
                const fromIntegerSpace: Space = as.Space(as.Integer(3))
            })
        })

        describe('unwhole other units', () => {
            it('allows casting numbers', () => {
                const asRadians: Radians = as.Radians(3)

                const asCents: Cents = as.Cents(3)
                const asSemitones: Semitones = as.Semitones(3)

                const asGain: Gain = as.Gain(3)
            })

            it('allows comparing values', () => {
                expect(as.Radians(3.5))
                    .not
                    .toBe(as.Radians(4))

                expect(as.Cents(3.5))
                    .not
                    .toBe(as.Cents(4))
                expect(as.Semitones(3.5))
                    .not
                    .toBe(as.Semitones(4))

                expect(as.Gain(3.5))
                    .not
                    .toBe(as.Gain(4))
            })

            it('allows passing as the callback to an iterator', () => {
                const arrayOfRadians: Radians[] = [ 3, 4, 5 ].map(as.Radians)

                const arrayOfCents: Cents[] = [ 3, 4, 5 ].map(as.Cents)
                const arrayOfSemitones: Semitones[] = [ 3, 4, 5 ].map(as.Semitones)

                const arrayOfGain: Gain[] = [ 3, 4, 5 ].map(as.Gain)
            })

            it('allows casting from integers', () => {
                const fromIntegerRadians: Radians = as.Radians(as.Integer(3))

                const fromIntegerCents: Cents = as.Cents(as.Integer(3))
                const fromIntegerSemitones: Semitones = as.Semitones(as.Integer(3))

                const fromIntegerGain: Gain = as.Gain(as.Integer(3))
            })
        })

        describe('whole units', () => {
            describe('fractional parts', () => {
                it('allows casting numbers', () => {
                    const asNumerator: Numerator = as.Numerator(3)
                    const asDenominator: Denominator = as.Denominator(3)
                })

                it('allows comparing values', () => {
                    expect(as.Numerator(3))
                        .not
                        .toBe(as.Numerator(4))
                    expect(as.Denominator(3))
                        .not
                        .toBe(as.Denominator(4))
                })

                it('allows passing as the callback to an iterator', () => {
                    const arrayOfNumerator: Numerator[] = [ 3, 4, 5 ].map(as.Numerator)
                    const arrayOfDenominator: Denominator[] = [ 3, 4, 5 ].map(as.Denominator)
                })

                it(`allows calling with numbers which aren't integers, but throws an error`, () => {
                    expect(() => as.Numerator(4.3))
                        .toThrow(new Error('Numerals of type Numerator must be integers. This numeral was 4.3.'))
                    expect(() => as.Denominator(4.3))
                        .toThrow(new Error('Numerals of type Denominator must be integers. This numeral was 4.3.'))
                })

                it('allows casting from integers', () => {
                    const fromIntegerNumerator: Numerator = as.Numerator(as.Integer(3))
                    const fromIntegerDenominator: Denominator = as.Denominator(as.Integer(3))
                })
            })

            describe('Fraction', () => {
                describe('casting', () => {
                    it('allows casting a tuple of Integer as Fraction', () => {
                        as.Fraction([ as.Integer(4), as.Integer(4) ])
                    })

                    it('allows casting a tuple of Numerator, Denominator as Fraction', () => {
                        as.Fraction([ as.Numerator(4), as.Denominator(4) ])
                    })

                    it('allows casting a tuple of Numerator, Denominator with either substituted with Integer as Fraction', () => {
                        as.Fraction([ as.Numerator(4), as.Integer(4) ])
                        as.Fraction([ as.Integer(4), as.Denominator(4) ])
                    })
                })

                it('allows comparing values', () => {
                    expect(as.Fraction([ as.Numerator(3), as.Integer(4) ]))
                        .not
                        .toBe(as.Fraction([ as.Integer(4), as.Denominator(3) ]))
                })

                it('allows passing as the callback to an iterator', () => {
                    const arrayOfFraction: Fraction[] = [
                        [ as.Integer(3), as.Integer(6) ] as [ Integer, Integer ],
                        [ as.Integer(4), as.Integer(6) ] as [ Integer, Integer ],
                        [ as.Integer(5), as.Integer(6) ] as [ Integer, Integer ],
                    ].map(as.Fraction)
                })

                it(`allows calling with numbers which aren't integers, but throws an error`, () => {
                    expect(() => as.Fraction([ 4.3 as unknown as Numerator, 4 as unknown as Denominator ]))
                        .toThrow(new Error('Numerals of type Numerator must be integers. This numeral was 4.3.'))
                    expect(() => as.Fraction([ 4 as unknown as Numerator, 4.3 as unknown as Denominator ]))
                        .toThrow(new Error('Numerals of type Denominator must be integers. This numeral was 4.3.'))
                    expect(() => as.Fraction([ 4.3 as unknown as Numerator, 4.3 as unknown as Denominator ]))
                        .toThrow(new Error('Numerals of type Numerator must be integers. This numeral was 4.3.'))
                })
            })
        })
    })

    describe('uses', () => {
        describe('unwhole', () => {
            describe('transformation', () => {
                it('allows casting numbers', () => {
                    const asScalar: Scalar = as.Scalar(3)
                    const asTranslation: Translation = as.Translation(3)
                    const asRotation: Rotation = as.Rotation(3)
                })

                it('allows comparing values', () => {
                    expect(as.Scalar(3))
                        .not
                        .toBe(as.Scalar(4))
                    expect(as.Translation(3))
                        .not
                        .toBe(as.Translation(4))
                    expect(as.Rotation(3))
                        .not
                        .toBe(as.Rotation(4))
                })

                it('allows passing as the callback to an iterator', () => {
                    const arrayOfScalar: Scalar[] = [ 3, 4, 5 ].map(as.Scalar)
                    const arrayOfTranslation: Translation[] = [ 3, 4, 5 ].map(as.Translation)
                    const arrayOfRotation: Rotation[] = [ 3, 4, 5 ].map(as.Rotation)
                })

                it('allows casting of generic numeric types (ones that extend Number)', () => {
                    const genericFunction: <NumericType extends Number>(argument: NumericType) => void =
                        <NumericType extends Number>(argument: NumericType): void => {
                            const ofGenericScalar: Scalar<NumericType> = as.Scalar<NumericType>(3)
                            const ofGenericTranslation: Translation<NumericType> = as.Translation<NumericType>(3)
                            const ofGenericRotation: Rotation<NumericType> = as.Rotation<NumericType>(3)
                        }
                })

                it('allows casting from integers', () => {
                    const fromIntegerScalar: Scalar = as.Scalar(as.Integer(3))
                    const fromIntegerTranslation: Translation = as.Translation(as.Integer(3))
                    const fromIntegerRotation: Rotation = as.Rotation(as.Integer(3))
                })

                it('allows being a use of another unwhole use', () => {
                    const otherUnwholeTransformationScalar: Scalar<Translation> = as.Scalar<Translation>(3)
                    const anotherUnwholeTransformationScalar: Scalar<Rotation> = as.Scalar<Rotation>(3)
                    const unwholeOtherScalar: Scalar<Exponent> = as.Scalar<Exponent>(3)

                    const otherUnwholeTransformationTranslation: Translation<Rotation> = as.Translation<Rotation>(3)
                    const anotherUnwholeTransformationTranslation: Translation<Scalar> = as.Translation<Scalar>(3)
                    const unwholeOtherTranslation: Translation<Logarithm> = as.Translation<Logarithm>(3)

                    const otherUnwholeTransformationRotation: Rotation<Scalar> = as.Rotation<Scalar>(3)
                    const anotherUnwholeTransformationRotation: Rotation<Translation> = as.Rotation<Translation>(3)
                    const unwholeOtherRotation: Rotation<Modulus> = as.Rotation<Modulus>(3)
                })

                it('allows being a use of another unwhole use, even if it is the same type of use', () => {
                    const useOfItsOwnUseTypeScalarScalar: Scalar<Scalar> = as.Scalar<Scalar>(3)
                    const useOfItsOwnUseTypeTranslationTranslation: Translation<Translation> = as.Translation<Translation>(3)
                    const useOfItsOwnUseTypeRotationRotation: Rotation<Rotation> = as.Rotation<Rotation>(3)
                })

                it('allows being a use of unwhole units', () => {
                    const unwholeConcreteScalar: Scalar<Hz> = as.Scalar<Hz>(3)
                    const unwholeAbstractScalar: Scalar<Frequency> = as.Scalar<Frequency>(3)
                    const unwholeOtherScalar: Scalar<Radians> = as.Scalar<Radians>(3)

                    const unwholeConcreteTranslation: Translation<Ms> = as.Translation<Ms>(3)
                    const unwholeAbstractTranslation: Translation<Time> = as.Translation<Time>(3)
                    const unwholeOtherTranslation: Translation<Cents> = as.Translation<Cents>(3)

                    const unwholeConcreteRotation: Rotation<Meters> = as.Rotation<Meters>(3)
                    const unwholeAbstractRotation: Rotation<Space> = as.Rotation<Space>(3)
                    const unwholeOtherRotation: Rotation<Gain> = as.Rotation<Gain>(3)
                })
            })

            describe('other', () => {
                it('allows casting numbers', () => {
                    const asExponent: Exponent = as.Exponent(3)
                    const asLogarithm: Logarithm = as.Logarithm(3)
                    const asModulus: Modulus = as.Modulus(3)
                })

                it('allows comparing values', () => {
                    expect(as.Exponent(3.5))
                        .not
                        .toBe(as.Exponent(4))
                    expect(as.Logarithm(3.5))
                        .not
                        .toBe(as.Logarithm(4))
                    expect(as.Modulus(3.5))
                        .not
                        .toBe(as.Modulus(4))
                })

                it('allows passing as the callback to an iterator', () => {
                    const arrayOfExponent: Exponent[] = [ 3, 4, 5 ].map(as.Exponent)
                    const arrayOfLogarithm: Logarithm[] = [ 3, 4, 5 ].map(as.Logarithm)
                    const arrayOfModulus: Modulus[] = [ 3, 4, 5 ].map(as.Modulus)
                })

                it('allows casting of generic numeric types (ones that extend Number)', () => {
                    const genericFunction: <NumericType extends Number>(argument: NumericType) => void =
                        <NumericType extends Number>(argument: NumericType): void => {
                            const ofGenericExponent: Exponent<NumericType> = as.Exponent<NumericType>(3)
                            const ofGenericLogarithm: Logarithm<NumericType> = as.Logarithm<NumericType>(3)
                            const ofGenericModulus: Modulus<NumericType> = as.Modulus<NumericType>(3)
                        }
                })

                it('allows casting from integers', () => {
                    const fromIntegerExponent: Exponent = as.Exponent(as.Integer(3))
                    const fromIntegerLogarithm: Logarithm = as.Logarithm(as.Integer(3))
                    const fromRemaindee: Modulus = as.Modulus(as.Integer(3))
                })

                it('allows being a use of another unwhole use', () => {
                    const otherUnwholeOtherExponent: Exponent<Logarithm> = as.Exponent<Logarithm>(3)
                    const anotherUnwholeOtherExponent: Exponent<Modulus> = as.Exponent<Modulus>(3)
                    const unwholeTransformationExponent: Exponent<Scalar> = as.Exponent<Scalar>(3)

                    const otherUnwholeOtherLogarithm: Logarithm<Modulus> = as.Logarithm<Modulus>(3)
                    const anotherUnwholeOtherLogarithm: Logarithm<Exponent> = as.Logarithm<Exponent>(3)
                    const unwholeTransformationLogarithm: Logarithm<Translation> = as.Logarithm<Translation>(3)

                    const otherUnwholeOtherModulus: Modulus<Exponent> = as.Modulus<Exponent>(3)
                    const anotherUnwholeOtherModulus: Modulus<Logarithm> = as.Modulus<Logarithm>(3)
                    const unwholeTransformationModulus: Modulus<Rotation> = as.Modulus<Rotation>(3)
                })

                it('allows being a use of another unwhole use, even if it is the same type of use', () => {
                    const useOfItsOwnUseTypeExponentExponent: Exponent<Exponent> = as.Exponent<Exponent>(3)
                    const useOfItsOwnUseTypeLogarithmLogarithm: Logarithm<Logarithm> = as.Logarithm<Logarithm>(3)
                    const useOfItsOwnUseTypeModulusModulus: Modulus<Modulus> = as.Modulus<Modulus>(3)
                })

                it('allows being a use of unwhole units', () => {
                    const unwholeConcreteExponent: Exponent<Hz> = as.Exponent<Hz>(3)
                    const unwholeAbstractExponent: Exponent<Frequency> = as.Exponent<Frequency>(3)
                    const unwholeOtherExponent: Exponent<Radians> = as.Exponent<Radians>(3)

                    const unwholeConcreteLogarithm: Logarithm<Ms> = as.Logarithm<Ms>(3)
                    const unwholeAbstractLogarithm: Logarithm<Time> = as.Logarithm<Time>(3)
                    const unwholeOtherLogarithm: Logarithm<Cents> = as.Logarithm<Cents>(3)

                    const unwholeConcreteModulus: Modulus<Meters> = as.Modulus<Meters>(3)
                    const unwholeAbstractModulus: Modulus<Space> = as.Modulus<Space>(3)
                    const unwholeOtherModulus: Modulus<Gain> = as.Modulus<Gain>(3)
                })
            })

            describe('fixed', () => {
                it('allows casting numbers', () => {
                    const asPoint: Point = as.Point(3)
                })

                it('allows comparing values', () => {
                    expect(as.Point(3.5))
                        .not
                        .toBe(as.Point(4))
                })

                it('allows passing as the callback to an iterator', () => {
                    const arrayOfPoint: Point[] = [ 3, 4, 5 ].map(as.Point)
                })

                it('allows casting of generic numeric types (ones that extend Number)', () => {
                    const genericFunction: <NumericType extends Number>(argument: NumericType) => void =
                        <NumericType extends Number>(argument: NumericType): void => {
                            const ofGenericPoint: Point<NumericType> = as.Point<NumericType>(3)
                        }
                })

                it('allows casting from integers', () => {
                    const fromPoint: Point = as.Point(as.Integer(3))
                })

                it('allows being a use of unwhole units', () => {
                    const unwholeConcretePoint: Point<Hz> = as.Point<Hz>(3)
                    const unwholeAbstractPoint: Point<Frequency> = as.Point<Frequency>(3)
                    const unwholeOtherPoint: Point<Radians> = as.Point<Radians>(3)
                })
            })

            describe('compounds', () => {
                it('allows casting numbers', () => {
                    const asInterval: Interval = as.Interval(3)
                    const asDelta: Delta = as.Delta(3)
                    const asArc: Arc = as.Arc(3)
                })

                it('allows comparing values', () => {
                    expect(as.Interval(3.5))
                        .not
                        .toBe(as.Interval(4))
                    expect(as.Delta(3.5))
                        .not
                        .toBe(as.Delta(4))
                    expect(as.Arc(3.5))
                        .not
                        .toBe(as.Arc(4))
                })

                it('allows passing as the callback to an iterator', () => {
                    const arrayOfInterval: Interval[] = [ 3, 4, 5 ].map(as.Interval)
                    const arrayOfDelta: Delta[] = [ 3, 4, 5 ].map(as.Delta)
                    const arrayOfArc: Arc[] = [ 3, 4, 5 ].map(as.Arc)
                })

                it('allows casting of generic numeric types (ones that extend Number)', () => {
                    const genericFunction: <NumericType extends Number>(argument: NumericType) => void =
                        <NumericType extends Number>(argument: NumericType): void => {
                            const ofGenericInterval: Interval<NumericType> = as.Interval<NumericType>(3)
                            const ofGenericDelta: Delta<NumericType> = as.Delta<NumericType>(3)
                            const ofGenericArc: Arc<NumericType> = as.Arc<NumericType>(3)
                        }
                })

                it('allows casting from integers', () => {
                    const fromIntegerInterval: Interval = as.Interval(as.Integer(3))
                    const fromIntegerDelta: Delta = as.Delta(as.Integer(3))
                    const fromIntegerArc: Arc = as.Arc(as.Integer(3))
                })

                it('allows being a use of another unwhole use', () => {
                    const otherUnwholeCompoundInterval: Interval<Delta> = as.Interval<Delta>(3)
                    const anotherUnwholeCompoundInterval: Interval<Arc> = as.Interval<Arc>(3)
                    const unwholeTransformationInterval: Interval<Translation> = as.Interval<Translation>(3)

                    const otherUnwholeCompoundDelta: Delta<Arc> = as.Delta<Arc>(3)
                    const anotherUnwholeCompoundDelta: Delta<Interval> = as.Delta<Interval>(3)
                    const unwholeTransformationDelta: Delta<Rotation> = as.Delta<Rotation>(3)

                    const otherUnwholeCompoundArc: Arc<Interval> = as.Arc<Interval>(3)
                    const anotherUnwholeCompoundArc: Arc<Delta> = as.Arc<Delta>(3)
                    const unwholeTransformationArc: Arc<Scalar> = as.Arc<Scalar>(3)
                })

                it('allows being a use of another unwhole use, even if it is the same type of use', () => {
                    const useOfItsOwnUseTypeIntervalInterval: Interval<Interval> = as.Interval<Interval>(3)
                    const useOfItsOwnUseTypeDeltaDelta: Delta<Delta> = as.Delta<Delta>(3)
                    const useOfItsOwnUseTypeArcArc: Arc<Arc> = as.Arc<Arc>(3)
                })

                it('allows being a use of unwhole units', () => {
                    const unwholeConcreteInterval: Interval<Hz> = as.Interval<Hz>(3)
                    const unwholeAbstractInterval: Interval<Frequency> = as.Interval<Frequency>(3)
                    const unwholeOtherInterval: Interval<Radians> = as.Interval<Radians>(3)

                    const unwholeConcreteDelta: Delta<Ms> = as.Delta<Ms>(3)
                    const unwholeAbstractDelta: Delta<Time> = as.Delta<Time>(3)
                    const unwholeOtherDelta: Delta<Cents> = as.Delta<Cents>(3)

                    const unwholeConcreteArc: Arc<Meters> = as.Arc<Meters>(3)
                    const unwholeAbstractArc: Arc<Space> = as.Arc<Space>(3)
                    const unwholeOtherArc: Arc<Gain> = as.Arc<Gain>(3)
                })
            })
        })

        describe('whole', () => {
            describe('transformation', () => {
                it('allows casting numbers', () => {
                    const asMultiple: Multiple = as.Multiple(3)
                    const asCardinal: Cardinal = as.Cardinal(3)
                    const asTransposition: Transposition = as.Transposition(3)
                })

                it('allows comparing values', () => {
                    expect(as.Multiple(3))
                        .not
                        .toBe(as.Multiple(4))
                    expect(as.Cardinal(3))
                        .not
                        .toBe(as.Cardinal(4))
                    expect(as.Transposition(3))
                        .not
                        .toBe(as.Transposition(4))
                })

                it('allows passing as the callback to an iterator', () => {
                    const arrayOfMultiple: Multiple[] = [ 3, 4, 5 ].map(as.Multiple)
                    const arrayOfCardinal: Cardinal[] = [ 3, 4, 5 ].map(as.Cardinal)
                    const arrayOfTransposition: Transposition[] = [ 3, 4, 5 ].map(as.Transposition)
                })

                it('allows casting of generic numeric types (ones that extend Number)', () => {
                    const genericFunction: <NumericType extends Number>(argument: NumericType) => void =
                        <NumericType extends Number>(argument: NumericType): void => {
                            const ofGenericMultiple: Multiple<NumericType> = as.Multiple<NumericType>(3)
                            const ofGenericCardinal: Cardinal<NumericType> = as.Cardinal<NumericType>(3)
                            const ofGenericTransposition: Transposition<NumericType> = as.Transposition<NumericType>(3)
                        }
                })

                it(`allows calling with numbers which aren't integers, but throws an error`, () => {
                    expect(() => as.Multiple(4.3))
                        .toThrow(new Error('Numerals of type Multiple must be integers. This numeral was 4.3.'))
                    expect(() => as.Cardinal(4.3))
                        .toThrow(new Error('Numerals of type Cardinal must be integers. This numeral was 4.3.'))
                    expect(() => as.Transposition(4.3))
                        .toThrow(new Error('Numerals of type Transposition must be integers. This numeral was 4.3.'))
                })

                it(`allows calling with numbers which are very close to integers, off only probably due to javascript floating point arithmetic issues, and then rounds them`, () => {
                    expect(as.Multiple(9.00000000004))
                        .toBe(9 as unknown as Multiple)
                    expect(() => as.Multiple(9.0000000004))
                        .toThrow(new Error('Numerals of type Multiple must be integers. This numeral was 9.0000000004.'))

                    expect(as.Cardinal(9.00000000004))
                        .toBe(9 as unknown as Cardinal)
                    expect(() => as.Cardinal(9.0000000004))
                        .toThrow(new Error('Numerals of type Cardinal must be integers. This numeral was 9.0000000004.'))

                    expect(as.Transposition(9.00000000004))
                        .toBe(9 as unknown as Transposition)
                    expect(() => as.Transposition(9.0000000004))
                        .toThrow(new Error('Numerals of type Transposition must be integers. This numeral was 9.0000000004.'))
                })

                it('allows casting from integers', () => {
                    const fromIntegerMultiple: Multiple = as.Multiple(as.Integer(3))
                    const fromIntegerCardinal: Cardinal = as.Cardinal(as.Integer(3))
                    const fromIntegerTransposition: Transposition = as.Transposition(as.Integer(3))
                })

                it('allows assigning to the unwhole version, since it is less specific', () => {
                    const unwholeFromMultiple: Scalar = as.Multiple(5)
                    const unwholeFromCardinal: Translation = as.Cardinal(5)
                    const unwholeFromTransposition: Rotation = as.Transposition(5)
                })

                it('allows being a use of another whole use', () => {
                    const otherWholeTransformationMultiple: Multiple<Cardinal> = as.Multiple<Cardinal>(3)
                    const anotherWholeTransformationMultiple: Multiple<Transposition> = as.Multiple<Transposition>(3)
                    const wholeOtherMultiple: Multiple<Power> = as.Multiple<Power>(3)

                    const otherWholeTransformationCardinal: Cardinal<Transposition> = as.Cardinal<Transposition>(3)
                    const anotherWholeTransformationCardinal: Cardinal<Multiple> = as.Cardinal<Multiple>(3)
                    const wholeOtherCardinal: Cardinal<Base> = as.Cardinal<Base>(3)

                    const otherWholeTransformationTransposition: Transposition<Multiple> = as.Transposition<Multiple>(3)
                    const anotherWholeTransformationTransposition: Transposition<Cardinal> = as.Transposition<Cardinal>(3)
                    const wholeOtherTransposition: Transposition<Remaindee> = as.Transposition<Remaindee>(3)
                })

                it('allows being a use of another whole use, even if it is the same type of use', () => {
                    const useOfItsOwnUseTypeMultipleMultiple: Multiple<Multiple> = as.Multiple<Multiple>(3)
                    const useOfItsOwnUseTypeCardinalCardinal: Cardinal<Cardinal> = as.Cardinal<Cardinal>(3)
                    const useOfItsOwnUseTypeTranspositionTransposition: Transposition<Transposition> = as.Transposition<Transposition>(3)
                })

                it('allows being a use of whole units', () => {
                    const wholeUnitMultiple: Multiple<Numerator> = as.Multiple<Numerator>(3)
                    const wholeUnitCardinal: Cardinal<Numerator> = as.Cardinal<Numerator>(3)
                    const wholeUnitTransposition: Transposition<Numerator> = as.Transposition<Numerator>(3)
                })
            })

            describe('other', () => {
                it('allows casting numbers', () => {
                    const asPower: Power = as.Power(3)
                    const asBase: Base = as.Base(3)
                    const asRemaindee: Remaindee = as.Remaindee(3)
                })

                it('allows comparing values', () => {
                    expect(as.Power(3))
                        .not
                        .toBe(as.Power(4))
                    expect(as.Base(3))
                        .not
                        .toBe(as.Base(4))
                    expect(as.Remaindee(3))
                        .not
                        .toBe(as.Remaindee(4))
                })

                it('allows passing as the callback to an iterator', () => {
                    const arrayOfPower: Power[] = [ 3, 4, 5 ].map(as.Power)
                    const arrayOfBase: Base[] = [ 3, 4, 5 ].map(as.Base)
                    const arrayOfRemaindee: Remaindee[] = [ 3, 4, 5 ].map(as.Remaindee)
                })

                it('allows casting of generic numeric types (ones that extend Number)', () => {
                    const genericFunction: <NumericType extends Number>(argument: NumericType) => void =
                        <NumericType extends Number>(argument: NumericType): void => {
                            const ofGenericPower: Power<NumericType> = as.Power<NumericType>(3)
                            const ofGenericBase: Base<NumericType> = as.Base<NumericType>(3)
                            const ofGenericRemaindee: Remaindee<NumericType> = as.Remaindee<NumericType>(3)
                        }
                })

                it(`allows calling with numbers which aren't integers, but throws an error`, () => {
                    expect(() => as.Power(4.3))
                        .toThrow(new Error('Numerals of type Power must be integers. This numeral was 4.3.'))
                    expect(() => as.Base(4.3))
                        .toThrow(new Error('Numerals of type Base must be integers. This numeral was 4.3.'))
                    expect(() => as.Remaindee(4.3))
                        .toThrow(new Error('Numerals of type Remaindee must be integers. This numeral was 4.3.'))
                })

                it(`allows calling with numbers which are very close to integers, off only probably due to javascript floating point arithmetic issues, and then rounds them`, () => {
                    expect(as.Power(9.00000000004))
                        .toBe(9 as unknown as Power)
                    expect(() => as.Power(9.0000000004))
                        .toThrow(new Error('Numerals of type Power must be integers. This numeral was 9.0000000004.'))

                    expect(as.Base(9.00000000004))
                        .toBe(9 as unknown as Base)
                    expect(() => as.Base(9.0000000004))
                        .toThrow(new Error('Numerals of type Base must be integers. This numeral was 9.0000000004.'))

                    expect(as.Remaindee(9.00000000004))
                        .toBe(9 as unknown as Remaindee)
                    expect(() => as.Remaindee(9.0000000004))
                        .toThrow(new Error('Numerals of type Remaindee must be integers. This numeral was 9.0000000004.'))
                })

                it('allows casting from integers', () => {
                    const fromIntegerPower: Power = as.Power(as.Integer(3))
                    const fromIntegerBase: Base = as.Base(as.Integer(3))
                    const fromIntegerRemaindee: Remaindee = as.Remaindee(as.Integer(3))
                })

                it('allows assigning to the unwhole version, since it is less specific', () => {
                    const unwholeFromPower: Exponent = as.Power(5)
                    const unwholeFromBase: Logarithm = as.Base(5)
                    const unwholeFromRemaindee: Modulus = as.Remaindee(5)
                })

                it('allows being a use of another whole use', () => {
                    const otherWholeOtherPower: Power<Base> = as.Power<Base>(3)
                    const anotherWholeOtherPower: Power<Remaindee> = as.Power<Remaindee>(3)
                    const wholeTransformationPower: Power<Multiple> = as.Power<Multiple>(3)

                    const otherWholeOtherBase: Base<Remaindee> = as.Base<Remaindee>(3)
                    const anotherWholeOtherBase: Base<Scalar> = as.Base<Scalar>(3)
                    const wholeTransformationBase: Base<Cardinal> = as.Base<Cardinal>(3)

                    const otherWholeOtherRemaindee: Remaindee<Scalar> = as.Remaindee<Scalar>(3)
                    const anotherWholeOtherRemaindee: Remaindee<Base> = as.Remaindee<Base>(3)
                    const wholeTransformationRemaindee: Remaindee<Transposition> = as.Remaindee<Transposition>(3)
                })

                it('allows being a use of another whole use, even if it is the same type of use', () => {
                    const useOfItsOwnUseTypePowerPower: Power<Power> = as.Power<Power>(3)
                    const useOfItsOwnUseTypeBaseBase: Base<Base> = as.Base<Base>(3)
                    const useOfItsOwnUseTypeRemaindeeRemaindee: Remaindee<Remaindee> = as.Remaindee<Remaindee>(3)
                })

                it('allows being a use of whole units', () => {
                    const wholeUnitPower: Power<Numerator> = as.Power<Numerator>(3)
                    const wholeUnitBase: Base<Numerator> = as.Base<Numerator>(3)
                    const wholeUnitRemaindee: Remaindee<Numerator> = as.Remaindee<Numerator>(3)
                })
            })

            describe('fixed', () => {
                it('allows casting from various things', () => {
                    const plainImplicitNumbersOrdinal: Ordinal = as.Ordinal(3)
                    const explicitAssignedNumbersOrdinal: Ordinal = as.Ordinal(3)
                    const explicitAsNumbersOrdinal: Ordinal = as.Ordinal(3)
                    const explicitBothSidesNumbersOrdinal: Ordinal = as.Ordinal(3)

                    const usesOrdinal: Ordinal<Scalar[]> = as.Ordinal<Scalar[]>(3)
                    const unitsOrdinal: Ordinal<Hz[]> = as.Ordinal<Hz[]>(3)

                    const indexOfCharacterInStringOrdinal: Ordinal<string> = as.Ordinal<string>(3)
                    const indexOfStringInArrayOfStringsOrdinal: Ordinal<string[]> = as.Ordinal<string[]>(3)

                    const implicitNubmersCycleOrdinal: Ordinal<Cycle> = as.Ordinal<Cycle>(3)
                    const scalarCycleOrdinal: Ordinal<Cycle<Scalar>> = as.Ordinal<Cycle<Scalar>>(3)
                })

                it('allows comparing values', () => {
                    expect(as.Ordinal(3))
                        .not
                        .toBe(as.Ordinal(4))
                })

                it('allows passing as the callback to an iterator', () => {
                    const arrayOfOrdinal: Ordinal[] = [ 3, 4, 5 ].map(as.Ordinal)
                })

                it('allows casting of generic numeric types (ones that extend Number)', () => {
                    const genericFunction: <NumericArrayType extends Number[]>(argument: NumericArrayType) => void =
                        <NumericArrayType extends Number[]>(argument: NumericArrayType): void => {
                            const ofGenericOrdinal: Ordinal<NumericArrayType> = as.Ordinal<NumericArrayType>(3)
                        }
                })

                it(`allows calling with numbers which aren't integers, but throws an error`, () => {
                    expect(() => as.Ordinal(4.3))
                        .toThrow(new Error('Numerals of type Ordinal must be integers. This numeral was 4.3.'))
                })

                it(`allows calling with numbers which are very close to integers, off only probably due to javascript floating point arithmetic issues, and then rounds them`, () => {
                    expect(as.Ordinal(9.00000000004))
                        .toBe(9 as unknown as Ordinal)
                    expect(() => as.Ordinal(9.0000000004))
                        .toThrow(new Error('Numerals of type Ordinal must be integers. This numeral was 9.0000000004.'))
                })

                it('allows casting from integers', () => {
                    const fromIntegerOrdinal: Ordinal = as.Ordinal(as.Integer(3))
                })
            })

            describe('compounds', () => {
                it('allows casting numbers', () => {
                    const asFactor: Factor = as.Factor(3)
                    const asTransition: Transition = as.Transition(3)
                    const asTurn: Turn = as.Turn(3)
                })

                it('allows comparing values', () => {
                    expect(as.Factor(3))
                        .not
                        .toBe(as.Factor(4))
                    expect(as.Transition(3))
                        .not
                        .toBe(as.Transition(4))
                    expect(as.Turn(3))
                        .not
                        .toBe(as.Turn(4))
                })

                it('allows passing as the callback to an iterator', () => {
                    const arrayOfFactor: Factor[] = [ 3, 4, 5 ].map(as.Factor)
                    const arrayOfTransition: Transition[] = [ 3, 4, 5 ].map(as.Transition)
                    const arrayOfTurn: Turn[] = [ 3, 4, 5 ].map(as.Turn)
                })

                it('allows casting of generic numeric types (ones that extend Number[])', () => {
                    const genericFunction: <NumericArrayType extends Number[]>(argument: NumericArrayType) => void =
                        <NumericArrayType extends Number[]>(argument: NumericArrayType): void => {
                            const ofGenericFactor: Factor<NumericArrayType> = as.Factor<NumericArrayType>(3)
                            const ofGenericTransition: Transition<NumericArrayType> = as.Transition<NumericArrayType>(3)
                            const ofGenericTurn: Turn<NumericArrayType> = as.Turn<NumericArrayType>(3)
                        }
                })

                it(`allows calling with numbers which aren't integers, but throws an error`, () => {
                    expect(() => as.Factor(4.3))
                        .toThrow(new Error('Numerals of type Factor must be integers. This numeral was 4.3.'))
                    expect(() => as.Transition(4.3))
                        .toThrow(new Error('Numerals of type Transition must be integers. This numeral was 4.3.'))
                    expect(() => as.Turn(4.3))
                        .toThrow(new Error('Numerals of type Turn must be integers. This numeral was 4.3.'))
                })

                it(`allows calling with numbers which are very close to integers, off only probably due to javascript floating point arithmetic issues, and then rounds them`, () => {
                    expect(as.Factor(9.00000000004))
                        .toBe(9 as unknown as Factor)
                    expect(() => as.Factor(9.0000000004))
                        .toThrow(new Error('Numerals of type Factor must be integers. This numeral was 9.0000000004.'))

                    expect(as.Transition(9.00000000004))
                        .toBe(9 as unknown as Transition)
                    expect(() => as.Transition(9.0000000004))
                        .toThrow(new Error('Numerals of type Transition must be integers. This numeral was 9.0000000004.'))

                    expect(as.Turn(9.00000000004))
                        .toBe(9 as unknown as Turn)
                    expect(() => as.Turn(9.0000000004))
                        .toThrow(new Error('Numerals of type Turn must be integers. This numeral was 9.0000000004.'))
                })

                it('allows casting from integers', () => {
                    const fromIntegerFactor: Factor = as.Factor(as.Integer(3))
                    const fromIntegerTransition: Transition = as.Transition(as.Integer(3))
                    const fromIntegerTurn: Turn = as.Turn(as.Integer(3))
                })

                it('allows casting from various things - the same things as Ordinal', () => {
                    const usesFactor: Factor<Scalar[]> = as.Factor<Scalar[]>(3)
                    const unitsFactor: Factor<Hz[]> = as.Factor<Hz[]>(3)
                    const indexOfCharacterInStringFactor: Factor<string> = as.Factor<string>(3)
                    const indexOfStringInArrayOfStringsFactor: Factor<string[]> = as.Factor<string[]>(3)
                    const implicitNubmersCycleFactor: Factor<Cycle> = as.Factor<Cycle>(3)
                    const scalarCycleFactor: Factor<Cycle<Scalar>> = as.Factor<Cycle<Scalar>>(3)

                    const usesTransition: Transition<Scalar[]> = as.Transition<Scalar[]>(3)
                    const unitsTransition: Transition<Hz[]> = as.Transition<Hz[]>(3)
                    const indexOfCharacterInStringTransition: Transition<string> = as.Transition<string>(3)
                    const indexOfStringInArrayOfStringsTransition: Transition<string[]> = as.Transition<string[]>(3)
                    const implicitNubmersCycleTransition: Transition<Cycle> = as.Transition<Cycle>(3)
                    const scalarCycleTransition: Transition<Cycle<Scalar>> = as.Transition<Cycle<Scalar>>(3)

                    const usesTurn: Turn<Scalar[]> = as.Turn<Scalar[]>(3)
                    const unitsTurn: Turn<Hz[]> = as.Turn<Hz[]>(3)
                    const indexOfCharacterInStringTurn: Turn<string> = as.Turn<string>(3)
                    const indexOfStringInArrayOfStringsTurn: Turn<string[]> = as.Turn<string[]>(3)
                    const implicitNubmersCycleTurn: Turn<Cycle> = as.Turn<Cycle>(3)
                    const scalarCycleTurn: Turn<Cycle<Scalar>> = as.Turn<Cycle<Scalar>>(3)
                })
            })
        })

        describe('normal', () => {
            it('allows casting numbers between 0 and 1, inclusive', () => {
                const asNormalScalarAtLowerBound: NormalScalar = as.NormalScalar(0)
                const asNormalScalarInBetween: NormalScalar = as.NormalScalar(0.3)
                const asNormalScalarAtUpperBound: NormalScalar = as.NormalScalar(1)
            })

            it('allows comparing values', () => {
                expect(as.NormalScalar(0.3))
                    .not
                    .toBe(as.NormalScalar(0.4))
            })

            it('allows passing as the callback to an iterator', () => {
                const arrayOfNormalScalars: NormalScalar[] = [ 0.3, 0.4, 0.5 ].map(as.NormalScalar)
            })

            it('allows casting of generic numeric types (ones that extend Number)', () => {
                const genericFunction: <NumericType extends Number>(argument: NumericType) => void =
                    <NumericType extends Number>(argument: NumericType): void => {
                        const ofGenericNormalScalar: NormalScalar<NumericType> = as.NormalScalar<NumericType>(1)
                    }
            })

            it('allows casting from integers, as long as they are 0 or 1', () => {
                const zeroIntegerNormalScalar: NormalScalar = as.NormalScalar(as.Integer(0))
                const oneIntegerNormalScalar: NormalScalar = as.NormalScalar(as.Integer(1))
            })

            it('allows assigning to the non-normal version, since it is less specific', () => {
                const nonNormalFromNormalScalar: Scalar = as.NormalScalar(0.5)
            })

            it('allows being a use of another normal use', () => {
                const normalScalarOfNormalScalar: NormalScalar<NormalScalar> = as.NormalScalar<NormalScalar>(0.5)
            })

            it('allows being a use of unwhole units', () => {
                const unwholeConcreteNormalScalar: NormalScalar<Hz> = as.NormalScalar<Hz>(0.5)
                const unwholeAbstractNormalScalar: NormalScalar<Frequency> = as.NormalScalar<Frequency>(0.5)
                const unwholeOtherNormalScalar: NormalScalar<Radians> = as.NormalScalar<Radians>(0.5)
            })

            describe('bounds', () => {
                it('it rounds numbers that are so close to being within the upper bound that they are almost certainly off only because of JavaScript floating-point math issues', () => {
                    expect(as.NormalScalar(1.00000000004))
                        .toBe(1 as unknown as NormalScalar)
                })

                it('it rounds numbers that are so close to being within the lower bound that they are almost certainly off only because of JavaScript floating-point math issues', () => {
                    expect(as.NormalScalar(-0.0000006))
                        .toBe(0 as unknown as NormalScalar)
                })

                it('still throws errors for numbers that are really close to being within the upper bound but are not quite close enough', () => {
                    expect(() => as.NormalScalar(1.0000000004))
                        .toThrow(new Error('Numerals of type NormalScalar must be between 0 and 1. This numeral was 1.0000000004.'))
                })

                it('still throws errors for numbers that are really close to being within the lower bound but are not quite close enough', () => {
                    expect(() => as.NormalScalar(-0.000006))
                        .toThrow(new Error('Numerals of type NormalScalar must be between 0 and 1. This numeral was -0.000006.'))
                })
            })
        })
    })

    describe('integers', () => {
        it('allows casting numbers', () => {
            const asInteger: Integer = as.Integer(3)
        })

        it('allows assigning to number, since it is less specific', () => {
            const asNumberFromInteger: number = as.Integer(3)
        })

        it('allows comparing values', () => {
            expect(as.Integer(3))
                .not
                .toBe(as.Integer(4))
        })

        it('allows passing as the callback to an iterator', () => {
            const arrayOfInteger: Integer[] = [ 3, 4, 5 ].map(as.Integer)
        })

        it(`allows calling with numbers which aren't integers, but throws an error`, () => {
            expect(() => as.Integer(4.3))
                .toThrow(new Error('Numerals of type Integer must be integers. This numeral was 4.3.'))
        })

        it(`allows calling with numbers which are very close to integers, off only probably due to javascript floating point arithmetic issues, and then rounds them`, () => {
            expect(as.Integer(9.00000000004))
                .toBe(9 as unknown as Integer)
            expect(() => as.Integer(9.0000000004))
                .toThrow(new Error('Numerals of type Integer must be integers. This numeral was 9.0000000004.'))
        })
    })
})
