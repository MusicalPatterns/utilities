// tslint:disable variable-name max-file-line-count ban-types max-line-length

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
    NoOperation,
    NoUnits,
    Numerator,
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

const Hz: <OperationType extends NoUnits, UnitsType extends Hz<OperationType>>(hz: UnitsType) => OperationType & number =
    <OperationType extends NoUnits, UnitsType extends Hz<OperationType>>(hz: UnitsType): OperationType & number =>
        hz as unknown as OperationType & number
const Ms: <OperationType extends NoUnits, UnitsType extends Ms<OperationType>>(ms: UnitsType) => OperationType & number =
    <OperationType extends NoUnits, UnitsType extends Ms<OperationType>>(ms: UnitsType): OperationType & number =>
        ms as unknown as OperationType & number
const Radians: <OperationType extends NoUnits, UnitsType extends Radians<OperationType>>(radians: UnitsType) => OperationType & number =
    <OperationType extends NoUnits, UnitsType extends Radians<OperationType>>(radians: UnitsType): OperationType & number =>
        radians as unknown as OperationType & number
const Cents: <OperationType extends NoUnits, UnitsType extends Cents<OperationType>>(cents: UnitsType) => OperationType & number =
    <OperationType extends NoUnits, UnitsType extends Cents<OperationType>>(cents: UnitsType): OperationType & number =>
        cents as unknown as OperationType & number
const Semitones: <OperationType extends NoUnits, UnitsType extends Semitones<OperationType>>(semitones: UnitsType) => OperationType & number =
    <OperationType extends NoUnits, UnitsType extends Semitones<OperationType>>(semitones: UnitsType): OperationType & number =>
        semitones as unknown as OperationType & number
const Meters: <OperationType extends NoUnits, UnitsType extends Meters<OperationType>>(meters: UnitsType) => OperationType & number =
    <OperationType extends NoUnits, UnitsType extends Meters<OperationType>>(meters: UnitsType): OperationType & number =>
        meters as unknown as OperationType & number
const Space: <OperationType extends NoUnits, UnitsType extends Space<OperationType>>(space: UnitsType) => OperationType & number =
    <OperationType extends NoUnits, UnitsType extends Space<OperationType>>(space: UnitsType): OperationType & number =>
        space as unknown as OperationType & number
const Time: <OperationType extends NoUnits, UnitsType extends Time<OperationType>>(time: UnitsType) => OperationType & number =
    <OperationType extends NoUnits, UnitsType extends Time<OperationType>>(time: UnitsType): OperationType & number =>
        time as unknown as OperationType & number
const Frequency: <OperationType extends NoUnits, UnitsType extends Frequency<OperationType>>(frequency: UnitsType) => OperationType & number =
    <OperationType extends NoUnits, UnitsType extends Frequency<OperationType>>(frequency: UnitsType): OperationType & number =>
        frequency as unknown as OperationType & number
const Amplitude: <OperationType extends NoUnits, UnitsType extends Amplitude<OperationType>>(amplitude: UnitsType) => OperationType & number =
    <OperationType extends NoUnits, UnitsType extends Amplitude<OperationType>>(amplitude: UnitsType): OperationType & number =>
        amplitude as unknown as OperationType & number

// Operation

const Scalar: <UnitsType extends NoOperation, OperationType extends Scalar<UnitsType>>(scalar: OperationType) => UnitsType & number =
    <UnitsType extends NoOperation, OperationType extends Scalar<UnitsType>>(scalar: OperationType): UnitsType & number =>
        scalar as unknown as UnitsType & number
const Translation: <UnitsType extends NoOperation, OperationType extends Translation<UnitsType>>(translation: OperationType) => UnitsType & number =
    <UnitsType extends NoOperation, OperationType extends Translation<UnitsType>>(translation: OperationType): UnitsType & number =>
        translation as unknown as UnitsType & number
const Rotation: <UnitsType extends NoOperation, OperationType extends Rotation<UnitsType>>(rotation: OperationType) => UnitsType & number =
    <UnitsType extends NoOperation, OperationType extends Rotation<UnitsType>>(rotation: OperationType): UnitsType & number =>
        rotation as unknown as UnitsType & number

const Base: <UnitsType extends NoOperation, OperationType extends Base<UnitsType>>(base: OperationType) => UnitsType & number =
    <UnitsType extends NoOperation, OperationType extends Base<UnitsType>>(base: OperationType): UnitsType & number =>
        base as unknown as UnitsType & number
const Power: <UnitsType extends NoOperation, OperationType extends Power<UnitsType>>(power: OperationType) => UnitsType & number =
    <UnitsType extends NoOperation, OperationType extends Power<UnitsType>>(power: OperationType): UnitsType & number =>
        power as unknown as UnitsType & number

const Modulus: <UnitsType extends NoOperation, OperationType extends Modulus<UnitsType>>(modulus: OperationType) => UnitsType & number =
    <UnitsType extends NoOperation, OperationType extends Modulus<UnitsType>>(modulus: OperationType): UnitsType & number =>
        modulus as unknown as UnitsType & number

// Special Units & Operation

const Integer: <IntegerType extends Integer>(integer: IntegerType) => number =
    <IntegerType extends Integer>(integer: IntegerType): number =>
        integer as unknown as number

const Ordinal: (ordinal: Ordinal) => number =
    (ordinal: Ordinal): number => ordinal as unknown as number
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
    Ordinal,
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
}
