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
    Multiple,
    NormalScalar,
    NoUnits,
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

const Hz: <NumericType extends NoUnits>(hz: NumericType) => Hz =
    <NumericType extends NoUnits>(hz: NumericType): Hz =>
        hz as unknown as Hz
const Ms: <NumericType extends NoUnits>(ms: NumericType) => Ms =
    <NumericType extends NoUnits>(ms: NumericType): Ms =>
        ms as unknown as Ms
const Radians: <NumericType extends NoUnits>(radians: NumericType) => Radians =
    <NumericType extends NoUnits>(radians: NumericType): Radians =>
        radians as unknown as Radians
const Cents: <NumericType extends NoUnits>(cents: NumericType) => Cents =
    <NumericType extends NoUnits>(cents: NumericType): Cents =>
        cents as unknown as Cents
const Semitones: <NumericType extends NoUnits>(semitones: NumericType) => Semitones =
    <NumericType extends NoUnits>(semitones: NumericType): Semitones =>
        semitones as unknown as Semitones
const Meters: <NumericType extends NoUnits>(meters: NumericType) => Meters =
    <NumericType extends NoUnits>(meters: NumericType): Meters =>
        meters as unknown as Meters
const Space: <NumericType extends NoUnits>(space: NumericType) => Space =
    <NumericType extends NoUnits>(space: NumericType): Space =>
        space as unknown as Space
const Time: <NumericType extends NoUnits>(time: NumericType) => Time =
    <NumericType extends NoUnits>(time: NumericType): Time =>
        time as unknown as Time
const Frequency: <NumericType extends NoUnits>(frequency: NumericType) => Frequency =
    <NumericType extends NoUnits>(frequency: NumericType): Frequency =>
        frequency as unknown as Frequency
const Amplitude: <NumericType extends NoUnits>(amplitude: NumericType) => Amplitude =
    <NumericType extends NoUnits>(amplitude: NumericType): Amplitude =>
        amplitude as unknown as Amplitude

// Operation

const Scalar: <NumericType extends Number = number>(scalar: number | Of<NumericType>) => Scalar<NumericType> =
    <NumericType extends Number = number>(scalar: number | Of<NumericType>): Scalar<NumericType> =>
        scalar as unknown as Scalar<NumericType>
const NormalScalar: <NumericType extends Number = number>(normalScalar: number | Of<NumericType>) => NormalScalar<NumericType> =
    <NumericType extends Number = number>(normalScalar: number | Of<NumericType>): NormalScalar<NumericType> => {
        normalScalarCheck(normalScalar)

        return normalScalar as unknown as NormalScalar<NumericType>
    }
const Rotation: <NumericType extends Number = number>(rotation: number | Of<NumericType>) => Rotation<NumericType> =
    <NumericType extends Number = number>(rotation: number | Of<NumericType>): Rotation<NumericType> =>
        rotation as unknown as Rotation<NumericType>
const Base: <NumericType extends Number = number>(base: number | Of<NumericType>) => Base<NumericType> =
    <NumericType extends Number = number>(base: number | Of<NumericType>): Base<NumericType> =>
        base as unknown as Base<NumericType>
const Power: <NumericType extends Number = number>(power: number | Of<NumericType>) => Power<NumericType> =
    <NumericType extends Number = number>(power: number | Of<NumericType>): Power<NumericType> =>
        power as unknown as Power<NumericType>
const Modulus: <NumericType extends Number = number>(modulus: number | Of<NumericType>) => Modulus<NumericType> =
    <NumericType extends Number = number>(modulus: number | Of<NumericType>): Modulus<NumericType> =>
        modulus as unknown as Modulus<NumericType>

// Special Units

const Integer: <NumericType extends NoUnits>(integer: NumericType) => Integer =
    <NumericType extends NoUnits>(integer: NumericType): Integer =>
        integer as unknown as Integer

const Cardinal: <NumericType extends NoUnits>(cardinal: NumericType) => Cardinal =
    <NumericType extends NoUnits>(cardinal: NumericType): Cardinal => {
        integerCheck(cardinal, 'Cardinal')

        return cardinal as unknown as Cardinal
    }
const Numerator: <NumericType extends NoUnits>(numerator: NumericType) => Numerator =
    <NumericType extends NoUnits>(numerator: NumericType): Numerator => {
        integerCheck(numerator, 'Numerator')

        return numerator as unknown as Numerator
    }
const Denominator: <NumericType extends NoUnits>(denominator: NumericType) => Denominator =
    <NumericType extends NoUnits>(denominator: NumericType): Denominator => {
        integerCheck(denominator, 'Denominator')

        return denominator as unknown as Denominator
    }

const Fraction: (fraction: [ Integer | Numerator, Integer | Denominator ]) => Fraction =
    (fraction: [ Integer | Numerator, Integer | Denominator ]): Fraction =>
        fraction as unknown as Fraction

// Special Operations

const Index: <IndexType = number>(index: number | Of<IndexType>) => Index<IndexType> =
    <IndexType = number>(index: number | Of<IndexType>): Index<IndexType> => {
        integerCheck(index as unknown as number, 'Index')

        return index as unknown as Index<IndexType>
    }
const Translation: <TranslationType = number>(translation: number | Of<TranslationType>) => Translation<TranslationType> =
    <TranslationType = number>(translation: number | Of<TranslationType>): Translation<TranslationType> =>
        translation as unknown as Translation<TranslationType>

const Multiple: <NumericType extends Number = number>(multiple: number | Of<NumericType>) => Multiple<NumericType> =
    <NumericType extends Number = number>(multiple: number | Of<NumericType>): Multiple<NumericType> => {
        integerCheck(multiple as number, 'Multiple')

        return multiple as unknown as Multiple<NumericType>
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
