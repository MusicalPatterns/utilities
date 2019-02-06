// tslint:disable variable-name max-file-line-count no-any

import {
    Absolute,
    Base,
    Block,
    Cardinal,
    Cents,
    ContourElement,
    ContourPiece,
    ContourWhole,
    Coordinate,
    CoordinateElement,
    Denominator,
    Frequency,
    Interval,
    Length,
    Milliseconds,
    Numerator,
    Ordinal,
    Power,
    Radians,
    Ratio,
    Scalar,
    Semitones,
    SumOfIndices,
    Time,
    Translation,
} from './types'

const Scalar: (scalar: number) => Scalar =
    (scalar: number): Scalar => scalar as any
const Translation: (translation: number) => Translation =
    (translation: number): Translation => translation as any
const Power: (power: number) => Power =
    (power: number): Power => power as any
const Ordinal: (ordinal: number) => Ordinal =
    (ordinal: number): Ordinal => ordinal as any
const Time: (time: number) => Time =
    (time: number): Time => time as any
const Base: (base: number) => Base =
    (base: number): Base => base as any
const Cardinal: (cardinal: number) => Cardinal =
    (cardinal: number): Cardinal => cardinal as any
const SumOfIndices: (sumOfIndices: number) => SumOfIndices =
    (sumOfIndices: number): SumOfIndices => sumOfIndices as any
const CoordinateElement: (coordinateElement: number) => CoordinateElement =
    (coordinateElement: number): CoordinateElement => coordinateElement as any
const Frequency: (frequency: number) => Frequency =
    (frequency: number): Frequency => frequency as any
const Length: (length: number) => Length =
    (length: number): Length => length as any
const Milliseconds: (milliseconds: number) => Milliseconds =
    (milliseconds: number): Milliseconds => milliseconds as any
const Radians: (radians: number) => Radians =
    (radians: number): Radians => radians as any
const Cents: (cents: number) => Cents =
    (cents: number): Cents => cents as any
const Semitones: (semitones: number) => Semitones =
    (semitones: number): Semitones => semitones as any
const Numerator: (numerator: number) => Numerator =
    (numerator: number): Numerator => numerator as any
const Denominator: (denominator: number) => Denominator =
    (denominator: number): Denominator => denominator as any

const Coordinate: (coordinate: Array<number | CoordinateElement>) => Coordinate =
    (coordinate: Array<number | CoordinateElement>): Coordinate =>
        coordinate.map((coordinateElement: number | CoordinateElement): CoordinateElement =>
            coordinateElement as any)

const Block: (block: number[]) => Block =
    (block: number[]): Block =>
        block.map((blockElement: number): number => blockElement as any) as any

const ContourPiece: <N>(contourPiece: Array<number[] | ContourElement<N>>) => ContourPiece<N> =
    <N>(contourPiece: Array<number[] | ContourElement<N>>): ContourPiece<N> =>
        contourPiece.map((contourElement: number[] | ContourElement<N>): ContourElement<N> =>
            contourElement as any) as any

const ContourWhole: <N>(contourWhole: Array<number[] | ContourElement<N>>) => ContourWhole<N> =
    <N>(contourWhole: Array<number[] | ContourElement<N>>): ContourWhole<N> =>
        contourWhole.map((contourElement: number[] | ContourElement<N>): ContourElement<N> =>
            contourElement as any) as any

const Ratio: (ratio: [ number | Numerator, number | Denominator ]) => Ratio =
    (ratio: [ number | Numerator, number | Denominator ]): Ratio =>
        ratio as any

const Interval: <T>(interval: T) => Interval<T> =
    <T>(interval: T): Interval<T> =>
        interval as Interval<T>

const Absolute: <T>(absolute: T) => Absolute<T> =
    <T>(absolute: T): Absolute<T> =>
        absolute as Absolute<T>

export {
    Base,
    Cardinal,
    Scalar,
    Translation,
    Power,
    Time,
    Ordinal,
    SumOfIndices,
    Coordinate,
    CoordinateElement,
    Frequency,
    Length,
    Milliseconds,
    Radians,
    Cents,
    Semitones,
    Block,
    ContourPiece,
    ContourWhole,
    Ratio,
    Numerator,
    Denominator,
    Interval,
    Absolute,
}
