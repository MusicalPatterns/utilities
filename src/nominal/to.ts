// tslint:disable variable-name max-file-line-count no-any

import {
    Base,
    Block,
    Cardinal,
    Cents,
    ContourElement,
    ContourPiece,
    ContourWhole,
    Cycle,
    Denominator,
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
    Ratio,
    Rotation,
    Scalar,
    Semitones,
    Space,
    Translation,
} from './types'

// Units

const Hz: <T extends NoUnits>(hz: T) => Hz<T> =
    <T extends NoUnits>(hz: T): Hz<T> => hz as Hz<T>
const Ms: <T extends NoUnits>(ms: T) => Ms<T> =
    <T extends NoUnits>(ms: T): Ms<T> => ms as Ms<T>
const Radians: <T extends NoUnits>(radians: T) => Radians<T> =
    <T extends NoUnits>(radians: T): Radians<T> => radians as Radians<T>
const Cents: <T extends NoUnits>(cents: T) => Cents<T> =
    <T extends NoUnits>(cents: T): Cents<T> => cents as Cents<T>
const Semitones: <T extends NoUnits>(semitones: T) => Semitones<T> =
    <T extends NoUnits>(semitones: T): Semitones<T> => semitones as Semitones<T>
const Meters: <T extends NoUnits>(meters: T) => Meters<T> =
    <T extends NoUnits>(meters: T): Meters<T> => meters as Meters<T>
const Space: <T extends NoUnits>(space: T) => Space<T> =
    <T extends NoUnits>(space: T): Space<T> => space as Space<T>

// Operation

const Scalar: <T extends NoOperation>(scalar: T) => Scalar<T> =
    <T extends NoOperation>(scalar: T): Scalar<T> => scalar as Scalar<T>
const Translation: <T extends NoOperation>(translation: T) => Translation<T> =
    <T extends NoOperation>(translation: T): Translation<T> => translation as Translation<T>
const Rotation: <T extends NoOperation>(rotation: T) => Rotation<T> =
    <T extends NoOperation>(rotation: T): Rotation<T> => rotation as Rotation<T>
const Base: <T extends NoOperation>(base: T) => Base<T> =
    <T extends NoOperation>(base: T): Base<T> => base as Base<T>
const Power: <T extends NoOperation>(power: T) => Power<T> =
    <T extends NoOperation>(power: T): Power<T> => power as Power<T>
const Modulus: <T extends NoOperation>(modulus: T) => Modulus<T> =
    <T extends NoOperation>(modulus: T): Modulus<T> => modulus as Modulus<T>

// Special Units & Operation

const integerCheck: (value: number | Integer, type: string) => void =
    (value: number | Integer, type: string): void => {
        if (Math.round(value as any as number) !== value as any as number) {
            throw new Error(`${type}s must be Integers.`)
        }
    }

const Integer: <T extends NoUnits>(integer: T) => Integer =
    <T extends NoUnits>(integer: T): Integer => integer as any
const Ordinal: (ordinal: number | Integer) => Ordinal =
    (ordinal: number | Integer): Ordinal => {
        integerCheck(ordinal, 'Ordinal')

        return ordinal as any
    }
const Cardinal: (cardinal: number | Integer) => Cardinal =
    (cardinal: number | Integer): Cardinal => {
        integerCheck(cardinal, 'Cardinal')

        return cardinal as any
    }
const Numerator: (numerator: number | Integer) => Numerator =
    (numerator: number | Integer): Numerator => {
        integerCheck(numerator, 'Numerator')

        return numerator as any
    }
const Denominator: (denominator: number | Integer) => Denominator =
    (denominator: number | Integer): Denominator => {
        integerCheck(denominator, 'Denominator')

        return denominator as any
    }

const Ratio: (ratio: [ number | Numerator, number | Denominator ]) => Ratio =
    (ratio: [ number | Numerator, number | Denominator ]): Ratio =>
        ratio as any

// Other Stuff

const Block: (block: number[]) => Block =
    (block: number[]): Block => block as any

const Cycle: <T>(cycle: T[]) => Cycle<T> =
    <T>(cycle: T[]): Cycle<T> => {
        (cycle as Cycle<T>)._CycleBrand = true

        return cycle as any
    }

const ContourElement: <N>(contourElement: number[]) => ContourElement<N> =
    <N>(contourElement: number[]): ContourElement<N> =>
        contourElement as any
const ContourPiece: <N>(contourPiece: Array<number[] | ContourElement<N>>) => ContourPiece<N> =
    <N>(contourPiece: Array<number[] | ContourElement<N>>): ContourPiece<N> =>
        contourPiece.map((contourElement: number[] | ContourElement<N>): ContourElement<N> =>
            contourElement as any) as any
const ContourWhole: <N>(contourWhole: Array<number[] | ContourElement<N>>) => ContourWhole<N> =
    <N>(contourWhole: Array<number[] | ContourElement<N>>): ContourWhole<N> =>
        contourWhole.map((contourElement: number[] | ContourElement<N>): ContourElement<N> =>
            contourElement as any) as any

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
    Ratio,
    Numerator,
    Denominator,
    Modulus,
    Rotation,
    Integer,
    Meters,
    Space,
}
