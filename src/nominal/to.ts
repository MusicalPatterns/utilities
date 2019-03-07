// tslint:disable variable-name max-file-line-count

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

const Hz: <T extends NoUnits>(hz: T) => Hz<T> =
    <T extends NoUnits>(hz: T): Hz<T> =>
        hz as Hz<T>
const Ms: <T extends NoUnits>(ms: T) => Ms<T> =
    <T extends NoUnits>(ms: T): Ms<T> =>
        ms as Ms<T>
const Radians: <T extends NoUnits>(radians: T) => Radians<T> =
    <T extends NoUnits>(radians: T): Radians<T> =>
        radians as Radians<T>
const Cents: <T extends NoUnits>(cents: T) => Cents<T> =
    <T extends NoUnits>(cents: T): Cents<T> =>
        cents as Cents<T>
const Semitones: <T extends NoUnits>(semitones: T) => Semitones<T> =
    <T extends NoUnits>(semitones: T): Semitones<T> =>
        semitones as Semitones<T>
const Meters: <T extends NoUnits>(meters: T) => Meters<T> =
    <T extends NoUnits>(meters: T): Meters<T> =>
        meters as Meters<T>
const Space: <T extends NoUnits>(space: T) => Space<T> =
    <T extends NoUnits>(space: T): Space<T> =>
        space as Space<T>
const Time: <T extends NoUnits>(time: T) => Time<T> =
    <T extends NoUnits>(time: T): Time<T> =>
        time as Time<T>
const Frequency: <T extends NoUnits>(frequency: T) => Frequency<T> =
    <T extends NoUnits>(frequency: T): Frequency<T> =>
        frequency as Frequency<T>
const Amplitude: <T extends NoUnits>(amplitude: T) => Amplitude<T> =
    <T extends NoUnits>(amplitude: T): Amplitude<T> =>
        amplitude as Amplitude<T>

// Operation

const Scalar: <T extends NoOperation>(scalar: T) => Scalar<T> =
    <T extends NoOperation>(scalar: T): Scalar<T> =>
        scalar as Scalar<T>
const Translation: <T extends NoOperation>(translation: T) => Translation<T> =
    <T extends NoOperation>(translation: T): Translation<T> =>
        translation as Translation<T>
const Rotation: <T extends NoOperation>(rotation: T) => Rotation<T> =
    <T extends NoOperation>(rotation: T): Rotation<T> =>
        rotation as Rotation<T>
const Base: <T extends NoOperation>(base: T) => Base<T> =
    <T extends NoOperation>(base: T): Base<T> =>
        base as Base<T>
const Power: <T extends NoOperation>(power: T) => Power<T> =
    <T extends NoOperation>(power: T): Power<T> =>
        power as Power<T>
const Modulus: <T extends NoOperation>(modulus: T) => Modulus<T> =
    <T extends NoOperation>(modulus: T): Modulus<T> =>
        modulus as Modulus<T>

// Special Units & Operation

const integerCheck: (value: number | Integer, type: string) => void =
    (value: number | Integer, type: string): void => {
        if (Math.round(value as unknown as number) !== value as unknown as number) {
            throw new Error(`${type}s must be Integers.`)
        }
    }

const Integer: <T extends NoUnits>(integer: T) => Integer =
    <T extends NoUnits>(integer: T): Integer => integer as unknown as Integer
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

const Cycle: <T>(cycle: T[]) => Cycle<T> =
    <T>(cycle: T[]): Cycle<T> => {
        (cycle as Cycle<T>)._CycleBrand = true

        return cycle as Cycle<T>
    }

const ContourElement: <N>(contourElement: number[]) => ContourElement<N> =
    <N>(contourElement: number[]): ContourElement<N> =>
        contourElement as unknown as ContourElement<N>
const ContourPiece: <N>(contourPiece: Array<number[] | ContourElement<N>>) => ContourPiece<N> =
    <N>(contourPiece: Array<number[] | ContourElement<N>>): ContourPiece<N> =>
        contourPiece.map((contourElement: number[] | ContourElement<N>): ContourElement<N> =>
            contourElement as unknown as ContourElement<N>) as unknown as ContourPiece<N>
const ContourWhole: <N>(contourWhole: Array<number[] | ContourElement<N>>) => ContourWhole<N> =
    <N>(contourWhole: Array<number[] | ContourElement<N>>): ContourWhole<N> =>
        contourWhole.map((contourElement: number[] | ContourElement<N>): ContourElement<N> =>
            contourElement as unknown as ContourElement<N>) as unknown as ContourWhole<N>

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
}
