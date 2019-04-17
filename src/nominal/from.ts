// tslint:disable variable-name max-file-line-count max-line-length

import {
    Amplitude,
    Base,
    Block,
    Cardinal,
    Cents,
    Cycle,
    Denominator,
    Fraction,
    Frequency,
    Hz,
    Integer,
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

// Operation

const Scalar: <OfType extends Number = Number, OperationType extends Scalar<OfType> = Scalar<OfType>>(scalar: OperationType) => Of<OfType> =
    <OfType extends Number = Number, OperationType extends Scalar<OfType> = Scalar<OfType>>(scalar: OperationType): Of<OfType> =>
        scalar as unknown as Of<OfType>
const NormalScalar: <OfType extends Number = Number, OperationType extends NormalScalar<OfType> = NormalScalar<OfType>>(normalScalar: OperationType) => Of<OfType> =
    <OfType extends Number = Number, OperationType extends NormalScalar<OfType> = NormalScalar<OfType>>(normalScalar: OperationType): Of<OfType> =>
        normalScalar as unknown as Of<OfType>
const Rotation: <OfType extends Number = Number, OperationType extends Rotation<OfType> = Rotation<OfType>>(rotation: OperationType) => Of<OfType> =
    <OfType extends Number = Number, OperationType extends Rotation<OfType> = Rotation<OfType>>(rotation: OperationType): Of<OfType> =>
        rotation as unknown as Of<OfType>

const Base: <OfType extends Number = Number, OperationType extends Base<OfType> = Base<OfType>>(base: OperationType) => Of<OfType> =
    <OfType extends Number = Number, OperationType extends Base<OfType> = Base<OfType>>(base: OperationType): Of<OfType> =>
        base as unknown as Of<OfType>
const Power: <OfType extends Number = Number, OperationType extends Power<OfType> = Power<OfType>>(power: OperationType) => Of<OfType> =
    <OfType extends Number = Number, OperationType extends Power<OfType> = Power<OfType>>(power: OperationType): Of<OfType> =>
        power as unknown as Of<OfType>

const Modulus: <OfType extends Number = Number, OperationType extends Modulus<OfType> = Modulus<OfType>>(modulus: OperationType) => Of<OfType> =
    <OfType extends Number = Number, OperationType extends Modulus<OfType> = Modulus<OfType>>(modulus: OperationType): Of<OfType> =>
        modulus as unknown as Of<OfType>

// Special Units

const Integer: (integer: Integer) => number =
    (integer: Integer): number =>
        integer as unknown as number

const Cardinal: (cardinal: Cardinal) => number =
    (cardinal: Cardinal): number => cardinal as unknown as number
const Numerator: (numerator: Numerator) => number =
    (numerator: Numerator): number =>
        numerator as unknown as number
const Denominator: (denominator: Denominator) => number =
    (denominator: Denominator): number =>
        denominator as unknown as number

const Fraction: (fraction: Fraction) => number =
    (fraction: Fraction): number =>
        Numerator(fraction[ 0 ]) * (1 / Denominator(fraction[ 1 ]))

// Special Operations

const Ordinal: <OfType = Number, OperationType extends Ordinal<OfType> = Ordinal<OfType>>(index: OperationType) => Of<OfType> =
    <OfType = number, OperationType extends Ordinal<OfType> = Ordinal<OfType>>(index: OperationType): Of<OfType> =>
        index as unknown as Of<OfType>
const Translation: <OfType = Number, OperationType extends Translation<OfType> = Translation<OfType>>(translation: OperationType) => Of<OfType> =
    <OfType = number, OperationType extends Translation<OfType> = Translation<OfType>>(translation: OperationType): Of<OfType> =>
        translation as unknown as Of<OfType>

const Multiple: <OfType extends Number = Number, OperationType extends Multiple<OfType> = Multiple<OfType>>(multiple: OperationType) => Of<OfType> =
    <OfType extends Number = Number, OperationType extends Multiple<OfType> = Multiple<OfType>>(multiple: OperationType): Of<OfType> =>
        multiple as unknown as Of<OfType>

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
}
