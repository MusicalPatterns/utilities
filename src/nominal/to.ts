// tslint:disable variable-name max-file-line-count max-line-length

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
    Integer,
    Meters,
    Modulus,
    Ms,
    NoOperation,
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

const Scalar: <UnitsType extends NoOperation>(scalar: UnitsType) => Scalar<UnitsType> =
    <UnitsType extends NoOperation>(scalar: UnitsType): Scalar<UnitsType> =>
        scalar as Scalar<UnitsType>
const NormalScalar: <UnitsType extends NoOperation>(normalScalar: UnitsType) => NormalScalar<UnitsType> =
    <UnitsType extends NoOperation>(normalScalar: UnitsType): NormalScalar<UnitsType> => {
        if ((normalScalar as unknown as number > 1) || (normalScalar as unknown as number < 0)) {
            throw new Error(`NormalScalar must be between 0 and 1. It was ${normalScalar}`)
        }

        return normalScalar as NormalScalar<UnitsType>
    }
const Translation: <UnitsType extends NoOperation>(translation: UnitsType) => Translation<UnitsType> =
    <UnitsType extends NoOperation>(translation: UnitsType): Translation<UnitsType> =>
        translation as Translation<UnitsType>
const Rotation: <UnitsType extends NoOperation>(rotation: UnitsType) => Rotation<UnitsType> =
    <UnitsType extends NoOperation>(rotation: UnitsType): Rotation<UnitsType> =>
        rotation as Rotation<UnitsType>
const Base: <UnitsType extends NoOperation>(base: UnitsType) => Base<UnitsType> =
    <UnitsType extends NoOperation>(base: UnitsType): Base<UnitsType> =>
        base as Base<UnitsType>
const Power: <UnitsType extends NoOperation>(power: UnitsType) => Power<UnitsType> =
    <UnitsType extends NoOperation>(power: UnitsType): Power<UnitsType> =>
        power as Power<UnitsType>
const Modulus: <UnitsType extends NoOperation>(modulus: UnitsType) => Modulus<UnitsType> =
    <UnitsType extends NoOperation>(modulus: UnitsType): Modulus<UnitsType> =>
        modulus as Modulus<UnitsType>

// Special Units & Operation

const integerCheck: (value: number | Integer, type: string) => void =
    (value: number | Integer, type: string): void => {
        if (Math.round(value as unknown as number) !== value as unknown as number) {
            throw new Error(`${type}s must be Integers.`)
        }
    }

const Integer: <OperationType extends NoUnits>(integer: OperationType) => Integer =
    <OperationType extends NoUnits>(integer: OperationType): Integer => integer as unknown as Integer
const Ordinal: (ordinal: number | Integer) => Ordinal =
    (ordinal: number | Integer): Ordinal => {
        integerCheck(ordinal, 'Ordinal')

        return ordinal as unknown as Ordinal
    }
const Cardinal: (cardinal: number | Integer) => Cardinal =
    (cardinal: number | Integer): Cardinal => {
        integerCheck(cardinal, 'Cardinal')

        return cardinal as unknown as Cardinal
    }
const Numerator: (numerator: number | Integer) => Numerator =
    (numerator: number | Integer): Numerator => {
        integerCheck(numerator, 'Numerator')

        return numerator as unknown as Numerator
    }
const Denominator: (denominator: number | Integer) => Denominator =
    (denominator: number | Integer): Denominator => {
        integerCheck(denominator, 'Denominator')

        return denominator as unknown as Denominator
    }

const Fraction: (fraction: [ number | Numerator, number | Denominator ]) => Fraction =
    (fraction: [ number | Numerator, number | Denominator ]): Fraction =>
        fraction as unknown as Fraction

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
    Integer,
    Meters,
    Space,
    Time,
    Frequency,
    Amplitude,
    NormalScalar,
}
