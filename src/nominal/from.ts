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

// Operation

const Scalar: <OfType extends Number = number, OperationType extends Scalar<OfType> = Scalar<OfType>>(scalar: OperationType) => Of<OfType> =
    <OfType extends Number = number, OperationType extends Scalar<OfType> = Scalar<OfType>>(scalar: OperationType): Of<OfType> =>
        scalar as unknown as Of<OfType>
const NormalScalar: <OfType extends Number = number, OperationType extends NormalScalar<OfType> = NormalScalar<OfType>>(normalScalar: OperationType) => Of<OfType> =
    <OfType extends Number = number, OperationType extends NormalScalar<OfType> = NormalScalar<OfType>>(normalScalar: OperationType): Of<OfType> =>
        normalScalar as unknown as Of<OfType>
const Rotation: <OfType extends Number = number, OperationType extends Rotation<OfType> = Rotation<OfType>>(rotation: OperationType) => Of<OfType> =
    <OfType extends Number = number, OperationType extends Rotation<OfType> = Rotation<OfType>>(rotation: OperationType): Of<OfType> =>
        rotation as unknown as Of<OfType>

const Exponent: <OfType extends Number = number, OperationType extends Exponent<OfType> = Exponent<OfType>>(exponent: OperationType) => Of<OfType> =
    <OfType extends Number = number, OperationType extends Exponent<OfType> = Exponent<OfType>>(exponent: OperationType): Of<OfType> =>
        exponent as unknown as Of<OfType>
const Logarithm: <OfType extends Number = number, OperationType extends Logarithm<OfType> = Logarithm<OfType>>(logarithm: OperationType) => Of<OfType> =
    <OfType extends Number = number, OperationType extends Logarithm<OfType> = Logarithm<OfType>>(logarithm: OperationType): Of<OfType> =>
        logarithm as unknown as Of<OfType>

const Modulus: <OfType extends Number = number, OperationType extends Modulus<OfType> = Modulus<OfType>>(modulus: OperationType) => Of<OfType> =
    <OfType extends Number = number, OperationType extends Modulus<OfType> = Modulus<OfType>>(modulus: OperationType): Of<OfType> =>
        modulus as unknown as Of<OfType>

// Special Operations

const Cardinal: <OfType = number, OperationType extends Cardinal<OfType> = Cardinal<OfType>>(cardinal: OperationType) => Of<OfType> =
    <OfType = number, OperationType extends Cardinal<OfType> = Cardinal<OfType>>(cardinal: OperationType): Of<OfType> =>
        cardinal as unknown as Of<OfType>
const Ordinal: <OfType = number, OperationType extends Ordinal<OfType> = Ordinal<OfType>>(ordinal: OperationType) => Of<OfType> =
    <OfType = number, OperationType extends Ordinal<OfType> = Ordinal<OfType>>(ordinal: OperationType): Of<OfType> =>
        ordinal as unknown as Of<OfType>
const Translation: <OfType = number, OperationType extends Translation<OfType> = Translation<OfType>>(translation: OperationType) => Of<OfType> =
    <OfType = number, OperationType extends Translation<OfType> = Translation<OfType>>(translation: OperationType): Of<OfType> =>
        translation as unknown as Of<OfType>

const Multiple: <OfType extends Number = number, OperationType extends Multiple<OfType> = Multiple<OfType>>(multiple: OperationType) => Of<OfType> =
    <OfType extends Number = number, OperationType extends Multiple<OfType> = Multiple<OfType>>(multiple: OperationType): Of<OfType> =>
        multiple as unknown as Of<OfType>
const IntegerModulus: <OfType extends Number = number, OperationType extends IntegerModulus<OfType> = IntegerModulus<OfType>>(integerModulus: OperationType) => Of<OfType> =
    <OfType extends Number = number, OperationType extends IntegerModulus<OfType> = IntegerModulus<OfType>>(integerModulus: OperationType): Of<OfType> =>
        integerModulus as unknown as Of<OfType>
const Base: <OfType extends Number = number, OperationType extends Base<OfType> = Base<OfType>>(base: OperationType) => Of<OfType> =
    <OfType extends Number = number, OperationType extends Base<OfType> = Base<OfType>>(base: OperationType): Of<OfType> =>
        base as unknown as Of<OfType>
const Power: <OfType extends Number = number, OperationType extends Power<OfType> = Power<OfType>>(power: OperationType) => Of<OfType> =
    <OfType extends Number = number, OperationType extends Power<OfType> = Power<OfType>>(power: OperationType): Of<OfType> =>
        power as unknown as Of<OfType>

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
