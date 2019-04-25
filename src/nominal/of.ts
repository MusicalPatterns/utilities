// tslint:disable variable-name max-file-line-count max-line-length

import {
    Arc,
    ArrayOverload,
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
    IntegerModulus,
    Interval,
    Logarithm,
    Meters,
    Modulus,
    Ms,
    Multiple,
    Numerator,
    Of,
    Ordinal,
    Point,
    Power,
    Radians,
    Rotation,
    Scalar,
    Semitones,
    Space,
    Time,
    Transition,
    Translation,
    Transposition,
    Turn,
    UnitScalar,
} from './types'

// Concrete Units

const Hz: (ofHz: number) => Of<Hz> =
    (ofHz: number): Of<Hz> =>
        ofHz as unknown as Of<Hz>
const Ms: (ofMs: number) => Of<Ms> =
    (ofMs: number): Of<Ms> =>
        ofMs as unknown as Of<Ms>
const Meters: (ofMeters: number) => Of<Meters> =
    (ofMeters: number): Of<Meters> =>
        ofMeters as unknown as Of<Meters>

// Abstract Units

const Frequency: (ofFrequency: number) => Of<Frequency> =
    (ofFrequency: number): Of<Frequency> =>
        ofFrequency as unknown as Of<Frequency>
const Time: (ofTime: number) => Of<Time> =
    (ofTime: number): Of<Time> =>
        ofTime as unknown as Of<Time>
const Space: (ofSpace: number) => Of<Space> =
    (ofSpace: number): Of<Space> =>
        ofSpace as unknown as Of<Space>

// Other Units

const Radians: (ofRadians: number) => Of<Radians> =
    (ofRadians: number): Of<Radians> =>
        ofRadians as unknown as Of<Radians>

const Cents: (ofCents: number) => Of<Cents> =
    (ofCents: number): Of<Cents> =>
        ofCents as unknown as Of<Cents>
const Semitones: (ofSemitones: number) => Of<Semitones> =
    (ofSemitones: number): Of<Semitones> =>
        ofSemitones as unknown as Of<Semitones>

const Gain: (ofGain: number) => Of<Gain> =
    (ofGain: number): Of<Gain> =>
        ofGain as unknown as Of<Gain>

// Natural Units

const Numerator: (ofNumerator: number) => Of<Numerator> =
    (ofNumerator: number): Of<Numerator> =>
        ofNumerator as unknown as Of<Numerator>
const Denominator: (ofDenominator: number) => Of<Denominator> =
    (ofDenominator: number): Of<Denominator> =>
        ofDenominator as unknown as Of<Denominator>

const Fraction: (ofFraction: number) => Of<Fraction> =
    (ofFraction: number): Of<Fraction> =>
        ofFraction as unknown as Of<Fraction>

// Unnatural Transformation Uses

const Scalar: <OfType extends Number = number>(ofScalar: number | OfType) => Of<Scalar<OfType>> =
    <OfType extends Number = number>(ofScalar: number | OfType): Of<Scalar<OfType>> =>
        ofScalar as unknown as Of<Scalar<OfType>>
const Translation: <OfType extends Number = number>(ofTranslation: number | OfType) => Of<Translation<OfType>> =
    <OfType extends Number = number>(ofTranslation: number | OfType): Of<Translation<OfType>> =>
        ofTranslation as unknown as Of<Translation<OfType>>
const Rotation: <OfType extends Number = number>(ofRotation: number | OfType) => Of<Rotation<OfType>> =
    <OfType extends Number = number>(ofRotation: number | OfType): Of<Rotation<OfType>> =>
        ofRotation as unknown as Of<Rotation<OfType>>

// Unnatural Non-Transformation Uses

const Exponent: <OfType extends Number = number>(ofExponent: number | OfType) => Of<Exponent<OfType>> =
    <OfType extends Number = number>(ofExponent: number | OfType): Of<Exponent<OfType>> =>
        ofExponent as unknown as Of<Exponent<OfType>>
const Logarithm: <OfType extends Number = number>(ofLogarithm: number | OfType) => Of<Logarithm<OfType>> =
    <OfType extends Number = number>(ofLogarithm: number | OfType): Of<Logarithm<OfType>> =>
        ofLogarithm as unknown as Of<Logarithm<OfType>>
const Modulus: <OfType extends Number = number>(ofModulus: number | OfType) => Of<Modulus<OfType>> =
    <OfType extends Number = number>(ofModulus: number | OfType): Of<Modulus<OfType>> =>
        ofModulus as unknown as Of<Modulus<OfType>>

// Unnatural Fixed Uses

const Point: <OfType extends Number = number>(ofPoint: number | OfType) => Of<Point<OfType>> =
    <OfType extends Number = number>(ofPoint: number | OfType): Of<Point<OfType>> =>
        ofPoint as unknown as Of<Point<OfType>>

// Unnatural Compounds

const Interval: <OfType extends Number = number>(ofInterval: number | OfType) => Of<Interval<OfType>> =
    <OfType extends Number = number>(ofInterval: number | OfType): Of<Interval<OfType>> =>
        ofInterval as unknown as Of<Interval<OfType>>
const Delta: <OfType extends Number = number>(ofDelta: number | OfType) => Of<Delta<OfType>> =
    <OfType extends Number = number>(ofDelta: number | OfType): Of<Delta<OfType>> =>
        ofDelta as unknown as Of<Delta<OfType>>
const Arc: <OfType extends Number = number>(ofArc: number | OfType) => Of<Arc<OfType>> =
    <OfType extends Number = number>(ofArc: number | OfType): Of<Arc<OfType>> =>
        ofArc as unknown as Of<Arc<OfType>>

// Natural Transformation Uses (with overloads for arrays)

const Multiple: <OfType extends Number = number>(ofMultiple: number | OfType) => Of<Multiple<OfType>> =
    <OfType extends Number = number>(ofMultiple: number | OfType): Of<Multiple<OfType>> =>
        ofMultiple as unknown as Of<Multiple<OfType>>
const Cardinal: <OfType extends Number = number>(ofCardinal: number | OfType) => Of<Cardinal<OfType>> =
    <OfType extends Number = number>(ofCardinal: number | OfType): Of<Cardinal<OfType>> =>
        ofCardinal as unknown as Of<Cardinal<OfType>>
const Transposition: <OfType extends Number = number>(ofTransposition: number | OfType) => Of<Transposition<OfType>> =
    <OfType extends Number = number>(ofTransposition: number | OfType): Of<Transposition<OfType>> =>
        ofTransposition as unknown as Of<Transposition<OfType>>

// Natural Non-Transformation Uses

const Base: <OfType extends Number = number>(ofBase: number | OfType) => Of<Base<OfType>> =
    <OfType extends Number = number>(ofBase: number | OfType): Of<Base<OfType>> =>
        ofBase as unknown as Of<Base<OfType>>
const Power: <OfType extends Number = number>(ofPower: number | OfType) => Of<Power<OfType>> =
    <OfType extends Number = number>(ofPower: number | OfType): Of<Power<OfType>> =>
        ofPower as unknown as Of<Power<OfType>>
const IntegerModulus: <OfType extends Number = number>(ofIntegerModulus: number | OfType) => Of<IntegerModulus<OfType>> =
    <OfType extends Number = number>(ofIntegerModulus: number | OfType): Of<IntegerModulus<OfType>> =>
        ofIntegerModulus as unknown as Of<IntegerModulus<OfType>>

// Natural Fixed Uses (only used for arrays)

const Ordinal: <OfType extends ArrayOverload = number[]>(ofOrdinal: number | OfType) => Of<Ordinal<OfType>> =
    <OfType extends ArrayOverload = number[]>(ofOrdinal: number | OfType): Of<Ordinal<OfType>> =>
        ofOrdinal as unknown as Of<Ordinal<OfType>>

// Natural Compounds

const Factor: <OfType extends ArrayOverload = number[]>(ofFactor: number | OfType) => Of<Factor<OfType>> =
    <OfType extends ArrayOverload = number[]>(ofFactor: number | OfType): Of<Factor<OfType>> =>
        ofFactor as unknown as Of<Factor<OfType>>
const Transition: <OfType extends ArrayOverload = number[]>(ofTransition: number | OfType) => Of<Transition<OfType>> =
    <OfType extends ArrayOverload = number[]>(ofTransition: number | OfType): Of<Transition<OfType>> =>
        ofTransition as unknown as Of<Transition<OfType>>
const Turn: <OfType extends ArrayOverload = number[]>(ofTurn: number | OfType) => Of<Turn<OfType>> =
    <OfType extends ArrayOverload = number[]>(ofTurn: number | OfType): Of<Turn<OfType>> =>
        ofTurn as unknown as Of<Turn<OfType>>

// Unit Uses

const UnitScalar: <OfType extends Number = number>(ofUnitScalar: number | OfType) => Of<UnitScalar<OfType>> =
    <OfType extends Number = number>(ofUnitScalar: number | OfType): Of<UnitScalar<OfType>> =>
        ofUnitScalar as unknown as Of<UnitScalar<OfType>>

// Naturalness

const Integer: (ofInteger: number) => Of<Integer> =
    (ofInteger: number): Of<Integer> =>
        ofInteger as unknown as Of<Integer>

// Cycle

const Cycle: (ofCycle: number) => Of<Cycle> =
    (ofCycle: number): Of<Cycle> =>
        ofCycle as unknown as Of<Cycle>

// Other

const string: (ofString: number) => Of<string> =
    (ofString: number): Of<string> =>
        ofString as unknown as Of<string>

export {
    Hz,
    Ms,
    Radians,
    Cents,
    Semitones,
    Meters,
    Space,
    Time,
    Frequency,
    Gain,
    Scalar,
    UnitScalar,
    Rotation,
    Base,
    Power,
    Modulus,
    Integer,
    Cardinal,
    Numerator,
    Denominator,
    Fraction,
    Ordinal,
    Translation,
    Multiple,
    Cycle,
    string,
    Exponent,
    Logarithm,
    IntegerModulus,
    Transposition,
    Point,
    Interval,
    Delta,
    Arc,
    Factor,
    Transition,
    Turn,
}
