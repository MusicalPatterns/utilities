// tslint:disable variable-name max-file-line-count max-line-length

import {
    Amplitude,
    Base,
    Block,
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
    Numerator, Of,
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

const Hz: (hz: Hz) => number =
    (hz: Hz): number =>
        hz as unknown as number
const Ms: (ms: Ms) => number =
    (ms: Ms): number =>
        ms as unknown as number
const Radians: (radians: Radians) => number =
    (radians: Radians): number =>
        radians as unknown as number
const Cents: (cents: Cents) => number =
    (cents: Cents): number =>
        cents as unknown as number
const Semitones: (semitones: Semitones) => number =
    (semitones: Semitones): number =>
        semitones as unknown as number
const Meters: (meters: Meters) => number =
    (meters: Meters): number =>
        meters as unknown as number
const Space: (space: Space) => number =
    (space: Space): number =>
        space as unknown as number
const Time: (time: Time) => number =
    (time: Time): number =>
        time as unknown as number
const Frequency: (frequency: Frequency) => number =
    (frequency: Frequency): number =>
        frequency as unknown as number
const Amplitude: (amplitude: Amplitude) => number =
    (amplitude: Amplitude): number =>
        amplitude as unknown as number

// Special Units

const Integer: (integer: Integer) => number =
    (integer: Integer): number =>
        integer as unknown as number

const Numerator: (numerator: Numerator) => number =
    (numerator: Numerator): number =>
        numerator as unknown as number
const Denominator: (denominator: Denominator) => number =
    (denominator: Denominator): number =>
        denominator as unknown as number

const Fraction: (fraction: Fraction) => number =
    (fraction: Fraction): number =>
        Numerator(fraction[ 0 ]) * (1 / Denominator(fraction[ 1 ]))

// Uses

const Scalar: <OfType extends Number = Number>(scalar: Scalar<OfType>) => number =
    <OfType extends Number = Number>(scalar: Scalar<OfType>): number =>
        scalar as unknown as number
const Rotation: <OfType extends Number = Number>(rotation: Rotation<OfType>) => number =
    <OfType extends Number = Number>(rotation: Rotation<OfType>): number =>
        rotation as unknown as number
const Exponent: <OfType extends Number = Number>(exponent: Exponent<OfType>) => number =
    <OfType extends Number = Number>(exponent: Exponent<OfType>): number =>
        exponent as unknown as number
const Logarithm: <OfType extends Number = Number>(logarithm: Logarithm<OfType>) => number =
    <OfType extends Number = Number>(logarithm: Logarithm<OfType>): number =>
        logarithm as unknown as number
const Modulus: <OfType extends Number = Number>(modulus: Modulus<OfType>) => number =
    <OfType extends Number = Number>(modulus: Modulus<OfType>): number =>
        modulus as unknown as number

// Special Uses

const Cardinal: <OfType = number>(cardinal: Cardinal<OfType>) => number =
    <OfType = number>(cardinal: Cardinal<OfType>): number =>
        cardinal as unknown as number
const Ordinal: <OfType = number>(ordinal: Ordinal<OfType>) => number =
    <OfType = number>(ordinal: Ordinal<OfType>): number =>
        ordinal as unknown as number
const Translation: <OfType = number>(translation: Translation<OfType>) => number =
    <OfType = number>(translation: Translation<OfType>): number =>
        translation as unknown as number

const NormalScalar: <OfType extends Number = Number>(normalScalar: NormalScalar<OfType>) => number =
    <OfType extends Number = Number>(normalScalar: NormalScalar<OfType>): number =>
        normalScalar as unknown as number

const Multiple: <OfType extends Number = number>(multiple: Multiple<OfType>) => number =
    <OfType extends Number = number>(multiple: Multiple<OfType>): number =>
        multiple as unknown as number
const IntegerModulus: <OfType extends Number = number>(integerModulus: IntegerModulus<OfType>) => number =
    <OfType extends Number = number>(integerModulus: IntegerModulus<OfType>): number =>
        integerModulus as unknown as number
const Base: <OfType extends Number = number>(base: Base<OfType>) => number =
    <OfType extends Number = number>(base: Base<OfType>): number =>
        base as unknown as number
const Power: <OfType extends Number = number>(power: Power<OfType>) => number =
    <OfType extends Number = number>(power: Power<OfType>): number =>
        power as unknown as number

// Other Stuff

const Block: (block: Block) => number[] =
    (block: Block): number[] =>
        block as unknown as number[]

const Cycle: <ElementType>(cycle: Cycle<ElementType>) => ElementType[] =
    <ElementType>(cycle: Cycle<ElementType>): ElementType[] => {
        delete cycle._CycleBrand

        return cycle as ElementType[]
    }

export {
    Base,
    Cardinal,
    Scalar,
    Translation,
    Power,
    Ms,
    Hz,
    Radians,
    Cents,
    Semitones,
    Block,
    Cycle,
    Modulus,
    Integer,
    Numerator,
    Denominator,
    Meters,
    Fraction,
    Space,
    Time,
    Frequency,
    Amplitude,
    NormalScalar,
    Rotation,
    Ordinal,
    Multiple,
    Exponent,
    Logarithm,
    IntegerModulus,
}
