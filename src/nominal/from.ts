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
    Index,
    Integer,
    Meters,
    Modulus,
    Ms,
    Multiple,
    NoDoubleInteriorMaybe,
    NoDoubleInteriorNumeric,
    NormalScalar,
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

const Scalar: <InteriorType extends NoDoubleInteriorNumeric, OperationType extends Scalar<InteriorType>>(scalar: OperationType) => InteriorType & number =
    <InteriorType extends NoDoubleInteriorNumeric, OperationType extends Scalar<InteriorType>>(scalar: OperationType): InteriorType & number =>
        scalar as unknown as InteriorType & number
const NormalScalar: <InteriorType extends NoDoubleInteriorNumeric, OperationType extends NormalScalar<InteriorType>>(normalScalar: OperationType) => InteriorType & number =
    <InteriorType extends NoDoubleInteriorNumeric, OperationType extends NormalScalar<InteriorType>>(normalScalar: OperationType): InteriorType & number =>
        normalScalar as unknown as InteriorType & number
const Rotation: <InteriorType extends NoDoubleInteriorNumeric, OperationType extends Rotation<InteriorType>>(rotation: OperationType) => InteriorType & number =
    <InteriorType extends NoDoubleInteriorNumeric, OperationType extends Rotation<InteriorType>>(rotation: OperationType): InteriorType & number =>
        rotation as unknown as InteriorType & number

const Base: <InteriorType extends NoDoubleInteriorNumeric, OperationType extends Base<InteriorType>>(base: OperationType) => InteriorType & number =
    <InteriorType extends NoDoubleInteriorNumeric, OperationType extends Base<InteriorType>>(base: OperationType): InteriorType & number =>
        base as unknown as InteriorType & number
const Power: <InteriorType extends NoDoubleInteriorNumeric, OperationType extends Power<InteriorType>>(power: OperationType) => InteriorType & number =
    <InteriorType extends NoDoubleInteriorNumeric, OperationType extends Power<InteriorType>>(power: OperationType): InteriorType & number =>
        power as unknown as InteriorType & number

const Modulus: <InteriorType extends NoDoubleInteriorNumeric, OperationType extends Modulus<InteriorType>>(modulus: OperationType) => InteriorType & number =
    <InteriorType extends NoDoubleInteriorNumeric, OperationType extends Modulus<InteriorType>>(modulus: OperationType): InteriorType & number =>
        modulus as unknown as InteriorType & number

// Special Units

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

// Special Operations

const Index: <NumericType extends NoDoubleInteriorMaybe = number, OperationType extends Index<NumericType> = Index<NumericType>>(index: OperationType) => NumericType & number =
    <NumericType extends NoDoubleInteriorMaybe = number, OperationType extends Index<NumericType> = Index<NumericType>>(index: OperationType): NumericType & number =>
        index as unknown as NumericType & number
const Translation: <NumericType extends NoDoubleInteriorMaybe = number, OperationType extends Translation<NumericType> = Translation<NumericType>>(translation: OperationType) => NumericType & number =
    <NumericType extends NoDoubleInteriorMaybe = number, OperationType extends Translation<NumericType> = Translation<NumericType>>(translation: OperationType): NumericType & number =>
        translation as unknown as NumericType & number

const Multiple: <InteriorType extends NoDoubleInteriorNumeric, OperationType extends Multiple<InteriorType>>(multiple: OperationType) => InteriorType & number =
    <InteriorType extends NoDoubleInteriorNumeric, OperationType extends Multiple<InteriorType>>(multiple: OperationType): InteriorType & number =>
        multiple as unknown as InteriorType & number

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
    NormalScalar,
    Rotation,
    Index,
    Multiple,
}
