// tslint:disable variable-name max-file-line-count max-line-length

import {
    Amplitude,
    Base,
    Cardinal,
    Cents,
    Cycle,
    Denominator,
    Exponent,
    Fraction,
    Frequency,
    Hz,
    Integer,
    IntegerModulus,
    Logarithm,
    Meters,
    Modulus,
    Ms,
    Multiple,
    NormalScalar,
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
    Translation,
} from './types'

// Units

const Hz: (ofHz: number) => Of<Hz> =
    (ofHz: number): Of<Hz> =>
        ofHz as unknown as Of<Hz>
const Ms: (ofMs: number) => Of<Ms> =
    (ofMs: number): Of<Ms> =>
        ofMs as unknown as Of<Ms>
const Radians: (ofRadians: number) => Of<Radians> =
    (ofRadians: number): Of<Radians> =>
        ofRadians as unknown as Of<Radians>
const Cents: (ofCents: number) => Of<Cents> =
    (ofCents: number): Of<Cents> =>
        ofCents as unknown as Of<Cents>
const Semitones: (ofSemitones: number) => Of<Semitones> =
    (ofSemitones: number): Of<Semitones> =>
        ofSemitones as unknown as Of<Semitones>
const Meters: (ofMeters: number) => Of<Meters> =
    (ofMeters: number): Of<Meters> =>
        ofMeters as unknown as Of<Meters>
const Space: (ofSpace: number) => Of<Space> =
    (ofSpace: number): Of<Space> =>
        ofSpace as unknown as Of<Space>
const Time: (ofTime: number) => Of<Time> =
    (ofTime: number): Of<Time> =>
        ofTime as unknown as Of<Time>
const Frequency: (ofFrequency: number) => Of<Frequency> =
    (ofFrequency: number): Of<Frequency> =>
        ofFrequency as unknown as Of<Frequency>
const Amplitude: (ofAmplitude: number) => Of<Amplitude> =
    (ofAmplitude: number): Of<Amplitude> =>
        ofAmplitude as unknown as Of<Amplitude>

// Special Units

const Integer: (ofInteger: number) => Of<Integer> =
    (ofInteger: number): Of<Integer> =>
        ofInteger as unknown as Of<Integer>
const Numerator: (ofNumerator: number) => Of<Numerator> =
    (ofNumerator: number): Of<Numerator> =>
        ofNumerator as unknown as Of<Numerator>
const Denominator: (ofDenominator: number) => Of<Denominator> =
    (ofDenominator: number): Of<Denominator> =>
        ofDenominator as unknown as Of<Denominator>
const Fraction: (ofFraction: number) => Of<Fraction> =
    (ofFraction: number): Of<Fraction> =>
        ofFraction as unknown as Of<Fraction>

// Operations

const Scalar: <OfType extends Number = number>(ofScalar: number | OfType) => Of<Scalar<OfType>> =
    <OfType extends Number = number>(ofScalar: number | OfType): Of<Scalar<OfType>> =>
        ofScalar as unknown as Of<Scalar<OfType>>
const NormalScalar: <OfType extends Number = number>(ofNormalScalar: number | OfType) => Of<NormalScalar<OfType>> =
    <OfType extends Number = number>(ofNormalScalar: number | OfType): Of<NormalScalar<OfType>> =>
        ofNormalScalar as unknown as Of<NormalScalar<OfType>>
const Rotation: <OfType extends Number = number>(ofRotation: number | OfType) => Of<Rotation<OfType>> =
    <OfType extends Number = number>(ofRotation: number | OfType): Of<Rotation<OfType>> =>
        ofRotation as unknown as Of<Rotation<OfType>>
const Exponent: <OfType extends Number = number>(ofExponent: number | OfType) => Of<Exponent<OfType>> =
    <OfType extends Number = number>(ofExponent: number | OfType): Of<Exponent<OfType>> =>
        ofExponent as unknown as Of<Exponent<OfType>>
const Logarithm: <OfType extends Number = number>(ofLogarithm: number | OfType) => Of<Logarithm<OfType>> =
    <OfType extends Number = number>(ofLogarithm: number | OfType): Of<Logarithm<OfType>> =>
        ofLogarithm as unknown as Of<Logarithm<OfType>>
const Modulus: <OfType extends Number = number>(ofModulus: number | OfType) => Of<Modulus<OfType>> =
    <OfType extends Number = number>(ofModulus: number | OfType): Of<Modulus<OfType>> =>
        ofModulus as unknown as Of<Modulus<OfType>>

// Special Operations

const Ordinal: <OfType = number>(ofIndex: number | OfType) => Of<Ordinal<OfType>> =
    <OfType = number>(ofIndex: number | OfType): Of<Ordinal<OfType>> =>
        ofIndex as unknown as Of<Ordinal<OfType>>

const Cardinal: <OfType extends Number = number>(ofCardinal: number | OfType) => Of<Cardinal<OfType>> =
    <OfType extends Number = number>(ofCardinal: number | OfType): Of<Cardinal<OfType>> =>
        ofCardinal as unknown as Of<Cardinal<OfType>>
const Translation: <OfType extends Number = number>(ofTranslation: number | OfType) => Of<Translation<OfType>> =
    <OfType extends Number = number>(ofTranslation: number | OfType): Of<Translation<OfType>> =>
        ofTranslation as unknown as Of<Translation<OfType>>
const Multiple: <OfType extends Number = number>(ofMultiple: number | OfType) => Of<Multiple<OfType>> =
    <OfType extends Number = number>(ofMultiple: number | OfType): Of<Multiple<OfType>> =>
        ofMultiple as unknown as Of<Multiple<OfType>>
const IntegerModulus: <OfType extends Number = number>(ofIntegerModulus: number | OfType) => Of<IntegerModulus<OfType>> =
    <OfType extends Number = number>(ofIntegerModulus: number | OfType): Of<IntegerModulus<OfType>> =>
        ofIntegerModulus as unknown as Of<IntegerModulus<OfType>>
const Base: <OfType extends Number = number>(ofBase: number | OfType) => Of<Base<OfType>> =
    <OfType extends Number = number>(ofBase: number | OfType): Of<Base<OfType>> =>
        ofBase as unknown as Of<Base<OfType>>
const Power: <OfType extends Number = number>(ofPower: number | OfType) => Of<Power<OfType>> =
    <OfType extends Number = number>(ofPower: number | OfType): Of<Power<OfType>> =>
        ofPower as unknown as Of<Power<OfType>>

// Other

const Cycle: (ofCycle: number) => Of<Cycle> =
    (ofCycle: number): Of<Cycle> =>
        ofCycle as unknown as Of<Cycle>
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
    Amplitude,
    Scalar,
    NormalScalar,
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
}
