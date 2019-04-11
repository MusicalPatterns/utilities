// tslint:disable variable-name max-file-line-count max-line-length

import { integerCheck, normalScalarCheck } from './checks'
import {
    Amplitude,
    Base,
    Block,
    Cardinal,
    Cents,
    ContourElement,
    ContourPiece,
    ContourWhole,
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
    Multiple, NoDoubleInteriorMaybe,
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

const Hz: <OperationType extends NoUnits>(hz: OperationType) => Hz<OperationType> =
    <OperationType extends NoUnits>(hz: OperationType): Hz<OperationType> =>
        hz as Hz<OperationType>
const Ms: <OperationType extends NoUnits>(ms: OperationType) => Ms<OperationType> =
    <OperationType extends NoUnits>(ms: OperationType): Ms<OperationType> =>
        ms as Ms<OperationType>
const Radians: <OperationType extends NoUnits>(radians: OperationType) => Radians<OperationType> =
    <OperationType extends NoUnits>(radians: OperationType): Radians<OperationType> =>
        radians as Radians<OperationType>
const Cents: <OperationType extends NoUnits>(cents: OperationType) => Cents<OperationType> =
    <OperationType extends NoUnits>(cents: OperationType): Cents<OperationType> =>
        cents as Cents<OperationType>
const Semitones: <OperationType extends NoUnits>(semitones: OperationType) => Semitones<OperationType> =
    <OperationType extends NoUnits>(semitones: OperationType): Semitones<OperationType> =>
        semitones as Semitones<OperationType>
const Meters: <OperationType extends NoUnits>(meters: OperationType) => Meters<OperationType> =
    <OperationType extends NoUnits>(meters: OperationType): Meters<OperationType> =>
        meters as Meters<OperationType>
const Space: <OperationType extends NoUnits>(space: OperationType) => Space<OperationType> =
    <OperationType extends NoUnits>(space: OperationType): Space<OperationType> =>
        space as Space<OperationType>
const Time: <OperationType extends NoUnits>(time: OperationType) => Time<OperationType> =
    <OperationType extends NoUnits>(time: OperationType): Time<OperationType> =>
        time as Time<OperationType>
const Frequency: <OperationType extends NoUnits>(frequency: OperationType) => Frequency<OperationType> =
    <OperationType extends NoUnits>(frequency: OperationType): Frequency<OperationType> =>
        frequency as Frequency<OperationType>
const Amplitude: <OperationType extends NoUnits>(amplitude: OperationType) => Amplitude<OperationType> =
    <OperationType extends NoUnits>(amplitude: OperationType): Amplitude<OperationType> =>
        amplitude as Amplitude<OperationType>

// Operation

const Scalar: <NumericType extends NoDoubleInteriorNumeric>(scalar: NumericType) => Scalar<NumericType> =
    <NumericType extends NoDoubleInteriorNumeric>(scalar: NumericType): Scalar<NumericType> =>
        scalar as unknown as Scalar<NumericType>
const NormalScalar: <NumericType extends NoDoubleInteriorNumeric>(normalScalar: NumericType) => NormalScalar<NumericType> =
    <NumericType extends NoDoubleInteriorNumeric>(normalScalar: NumericType): NormalScalar<NumericType> => {
        normalScalarCheck(normalScalar)

        return normalScalar as unknown as NormalScalar<NumericType>
    }
const Rotation: <NumericType extends NoDoubleInteriorNumeric>(rotation: NumericType) => Rotation<NumericType> =
    <NumericType extends NoDoubleInteriorNumeric>(rotation: NumericType): Rotation<NumericType> =>
        rotation as unknown as Rotation<NumericType>
const Base: <NumericType extends NoDoubleInteriorNumeric>(base: NumericType) => Base<NumericType> =
    <NumericType extends NoDoubleInteriorNumeric>(base: NumericType): Base<NumericType> =>
        base as unknown as Base<NumericType>
const Power: <NumericType extends NoDoubleInteriorNumeric>(power: NumericType) => Power<NumericType> =
    <NumericType extends NoDoubleInteriorNumeric>(power: NumericType): Power<NumericType> =>
        power as unknown as Power<NumericType>
const Modulus: <NumericType extends NoDoubleInteriorNumeric>(modulus: NumericType) => Modulus<NumericType> =
    <NumericType extends NoDoubleInteriorNumeric>(modulus: NumericType): Modulus<NumericType> =>
        modulus as unknown as Modulus<NumericType>

// Special Units

const Integer: <OperationType extends NoUnits>(integer: OperationType) => Integer =
    <OperationType extends NoUnits>(integer: OperationType): Integer => integer as unknown as Integer

const Ordinal: <OperationType extends NoUnits>(ordinal: OperationType) => Ordinal<OperationType> =
    <OperationType extends NoUnits>(ordinal: OperationType): Ordinal<OperationType> => {
        integerCheck(ordinal, 'Ordinal')

        return ordinal as unknown as Ordinal<OperationType>
    }
const Cardinal: <OperationType extends NoUnits>(cardinal: OperationType) => Cardinal<OperationType> =
    <OperationType extends NoUnits>(cardinal: OperationType): Cardinal<OperationType> => {
        integerCheck(cardinal, 'Cardinal')

        return cardinal as unknown as Cardinal<OperationType>
    }
const Numerator: <OperationType extends NoUnits>(numerator: OperationType) => Numerator<OperationType> =
    <OperationType extends NoUnits>(numerator: OperationType): Numerator<OperationType> => {
        integerCheck(numerator, 'Numerator')

        return numerator as unknown as Numerator<OperationType>
    }
const Denominator: <OperationType extends NoUnits>(denominator: OperationType) => Denominator<OperationType> =
    <OperationType extends NoUnits>(denominator: OperationType): Denominator<OperationType> => {
        integerCheck(denominator, 'Denominator')

        return denominator as unknown as Denominator<OperationType>
    }

const Fraction: (fraction: [ Integer | Numerator, Integer | Denominator ]) => Fraction =
    (fraction: [ Integer | Numerator, Integer | Denominator ]): Fraction =>
        fraction as unknown as Fraction

// Special Operations

const Index: <IndexType extends NoDoubleInteriorMaybe>(index: IndexType) => Index<IndexType> =
    <IndexType extends NoDoubleInteriorMaybe>(index: IndexType): Index<IndexType> => {
        integerCheck(index as unknown as number, 'Index')

        return index as unknown as Index<IndexType>
    }

const Translation: <TranslationType extends NoDoubleInteriorMaybe>(translation: TranslationType) => Translation<TranslationType> =
    <TranslationType extends NoDoubleInteriorMaybe>(translation: TranslationType): Translation<TranslationType> =>
        translation as unknown as Translation<TranslationType>

const Multiple: <OperationType extends NoDoubleInteriorNumeric>(multiple: OperationType) => Multiple<OperationType> =
    <OperationType extends NoDoubleInteriorNumeric>(multiple: OperationType): Multiple<OperationType> => {
        integerCheck(multiple, 'Multiple')

        return multiple as unknown as Multiple<OperationType>
    }

// Other Stuff

const Block: (block: number[]) => Block =
    (block: number[]): Block => block as unknown as Block

const Cycle: <ElementType>(cycle: ElementType[]) => Cycle<ElementType> =
    <ElementType>(cycle: ElementType[]): Cycle<ElementType> => {
        (cycle as Cycle<ElementType>)._CycleBrand = true

        return cycle as Cycle<ElementType>
    }

const ContourElement: <ContourType>(contourElement: number[]) => ContourElement<ContourType> =
    <ContourType>(contourElement: number[]): ContourElement<ContourType> =>
        contourElement as unknown as ContourElement<ContourType>
const ContourPiece: <ContourType>(contourPiece: Array<number[] | ContourElement<ContourType>>) => ContourPiece<ContourType> =
    <ContourType>(contourPiece: Array<number[] | ContourElement<ContourType>>): ContourPiece<ContourType> =>
        contourPiece.map((contourElement: number[] | ContourElement<ContourType>): ContourElement<ContourType> =>
            contourElement as unknown as ContourElement<ContourType>) as unknown as ContourPiece<ContourType>
const ContourWhole: <ContourType>(contourWhole: Array<number[] | ContourElement<ContourType>>) => ContourWhole<ContourType> =
    <ContourType>(contourWhole: Array<number[] | ContourElement<ContourType>>): ContourWhole<ContourType> =>
        contourWhole.map((contourElement: number[] | ContourElement<ContourType>): ContourElement<ContourType> =>
            contourElement as unknown as ContourElement<ContourType>) as unknown as ContourWhole<ContourType>

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
    ContourElement,
    ContourPiece,
    ContourWhole,
    Fraction,
    Numerator,
    Denominator,
    Modulus,
    Rotation,
    Index,
    Integer,
    Meters,
    Space,
    Time,
    Frequency,
    Amplitude,
    NormalScalar,
    Multiple,
}
