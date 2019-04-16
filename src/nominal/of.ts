// tslint:disable variable-name max-file-line-count max-line-length

import {
    Amplitude,
    Base,
    Cardinal,
    Cents,
    Cycle,
    Denominator,
    Fraction,
    Frequency,
    Hz,
    Index,
    Integer,
    Meters,
    Modulus,
    Ms,
    Multiple,
    NormalScalar,
    Numerator,
    Of,
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

// Operations

const Scalar: <OfType extends Number = number>(ofScalar: number) => Of<Scalar<OfType>> =
    <OfType extends Number = number>(ofScalar: number): Of<Scalar<OfType>> =>
        ofScalar as unknown as Of<Scalar<OfType>>
const NormalScalar: <OfType extends Number = number>(ofNormalScalar: number) => Of<NormalScalar<OfType>> =
    <OfType extends Number = number>(ofNormalScalar: number): Of<NormalScalar<OfType>> =>
        ofNormalScalar as unknown as Of<NormalScalar<OfType>>
const Rotation: <OfType extends Number = number>(ofRotation: number) => Of<Rotation<OfType>> =
    <OfType extends Number = number>(ofRotation: number): Of<Rotation<OfType>> =>
        ofRotation as unknown as Of<Rotation<OfType>>
const Base: <OfType extends Number = number>(ofBase: number) => Of<Base<OfType>> =
    <OfType extends Number = number>(ofBase: number): Of<Base<OfType>> =>
        ofBase as unknown as Of<Base<OfType>>
const Power: <OfType extends Number = number>(ofPower: number) => Of<Power<OfType>> =
    <OfType extends Number = number>(ofPower: number): Of<Power<OfType>> =>
        ofPower as unknown as Of<Power<OfType>>
const Modulus: <OfType extends Number = number>(ofModulus: number) => Of<Modulus<OfType>> =
    <OfType extends Number = number>(ofModulus: number): Of<Modulus<OfType>> =>
        ofModulus as unknown as Of<Modulus<OfType>>

// Special Units

const Integer: (ofInteger: number) => Of<Integer> =
    (ofInteger: number): Of<Integer> =>
        ofInteger as unknown as Of<Integer>
const Cardinal: (ofCardinal: number) => Of<Cardinal> =
    (ofCardinal: number): Of<Cardinal> =>
        ofCardinal as unknown as Of<Cardinal>
const Numerator: (ofNumerator: number) => Of<Numerator> =
    (ofNumerator: number): Of<Numerator> =>
        ofNumerator as unknown as Of<Numerator>
const Denominator: (ofDenominator: number) => Of<Denominator> =
    (ofDenominator: number): Of<Denominator> =>
        ofDenominator as unknown as Of<Denominator>
const Fraction: (ofFraction: number) => Of<Fraction> =
    (ofFraction: number): Of<Fraction> =>
        ofFraction as unknown as Of<Fraction>

// Special Operations

const Translation: <OfType extends Number = number>(ofTranslation: number) => Of<Translation<OfType>> =
    <OfType extends Number = number>(ofTranslation: number): Of<Translation<OfType>> =>
        ofTranslation as unknown as Of<Translation<OfType>>
const Index: <OfType = number>(ofIndex: number) => Of<Index<OfType>> =
    <OfType = number>(ofIndex: number): Of<Index<OfType>> =>
        ofIndex as unknown as Of<Index<OfType>>
const Multiple: <OfType extends Number = number>(ofMultiple: number) => Of<Multiple<OfType>> =
    <OfType extends Number = number>(ofMultiple: number): Of<Multiple<OfType>> =>
        ofMultiple as unknown as Of<Multiple<OfType>>

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
    Index,
    Translation,
    Multiple,
    Cycle,
    string,
}
