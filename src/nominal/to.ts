// tslint:disable variable-name max-file-line-count no-any

import {
    Absolute,
    Base,
    Block,
    Cents,
    ContourElement,
    ContourPiece,
    ContourWhole,
    Coordinate,
    CoordinateElement,
    Count,
    Denominator,
    Frequency,
    Index,
    Interval,
    Length,
    Milliseconds,
    Numerator,
    Offset,
    Power,
    Radian,
    Ratio,
    Scalar,
    Semitones,
    SumOfIndices,
    Time,
} from './types'

const Scalar: (scalar: number) => Scalar =
    (scalar: number): Scalar => scalar as any
const Offset: (offset: number) => Offset =
    (offset: number): Offset => offset as any
const Power: (power: number) => Power =
    (power: number): Power => power as any
const Index: (index: number) => Index =
    (index: number): Index => index as any
const Time: (duration: number) => Time =
    (duration: number): Time => duration as any
const Base: (offset: number) => Base =
    (base: number): Base => base as any
const Count: (count: number) => Count =
    (count: number): Count => count as any
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
const Radian: (radian: number) => Radian =
    (radian: number): Radian => radian as any
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

const Block: (block: Array<number | Index>) => Block =
    (block: Array<number | Index>): Block =>
        block.map((blockElement: Index | number): Index => blockElement as any) as any

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
    Count,
    Scalar,
    Offset,
    Power,
    Time,
    Index,
    SumOfIndices,
    Coordinate,
    CoordinateElement,
    Frequency,
    Length,
    Milliseconds,
    Radian,
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
