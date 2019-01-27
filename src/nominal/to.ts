// tslint:disable:variable-name no-any max-file-line-count

import {
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
    Length,
    Millisecond,
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
    (scalar: number): Scalar => scalar as any as Scalar
const Offset: (offset: number) => Offset =
    (offset: number): Offset => offset as any as Offset
const Power: (power: number) => Power =
    (power: number): Power => power as any as Power
const Index: (index: number) => Index =
    (index: number): Index => index as any as Index
const Time: (duration: number) => Time =
    (duration: number): Time => duration as any as Time
const Base: (offset: number) => Base =
    (base: number): Base => base as any as Base
const Count: (count: number) => Count =
    (count: number): Count => count as any as Count
const SumOfIndices: (sumOfIndices: number) => SumOfIndices =
    (sumOfIndices: number): SumOfIndices => sumOfIndices as any as SumOfIndices
const CoordinateElement: (coordinateElement: number) => CoordinateElement =
    (coordinateElement: number): CoordinateElement => coordinateElement as any as CoordinateElement
const Frequency: (frequency: number) => Frequency =
    (frequency: number): Frequency => frequency as any as Frequency
const Length: (length: number) => Length =
    (length: number): Length => length as any as Length
const Millisecond: (millisecond: number) => Millisecond =
    (millisecond: number): Millisecond => millisecond as any as Millisecond
const Radian: (radian: number) => Radian =
    (radian: number): Radian => radian as any as Radian
const Cents: (cents: number) => Cents =
    (cents: number): Cents => cents as any as Cents
const Semitones: (semitones: number) => Semitones =
    (semitones: number): Semitones => semitones as any as Semitones
const Numerator: (numerator: number) => Numerator =
    (numerator: number): Numerator => numerator as any as Numerator
const Denominator: (denominator: number) => Denominator =
    (denominator: number): Denominator => denominator as any as Denominator

const Coordinate: (coordinate: Array<number | CoordinateElement>) => Coordinate =
    (coordinate: Array<number | CoordinateElement>): Coordinate =>
        coordinate.map((coordinateElement: number | CoordinateElement): CoordinateElement =>
            coordinateElement as any) as any as Coordinate

const Block: (block: Array<number | Index>) => Block =
    (block: Array<number | Index>): Block =>
        block.map((blockElement: Index | number): Index => blockElement as any) as any as Block

const ContourPiece: <N>(contourPiece: Array<number[] | ContourElement<N>>) => ContourPiece<N> =
    <N>(contourPiece: Array<number[] | ContourElement<N>>): ContourPiece<N> =>
        contourPiece.map((contourElement: number[] | ContourElement<N>): ContourElement<N> =>
            contourElement as any) as any as ContourPiece<N>

const ContourWhole: <N>(contourWhole: Array<number[] | ContourElement<N>>) => ContourWhole<N> =
    <N>(contourWhole: Array<number[] | ContourElement<N>>): ContourWhole<N> =>
        contourWhole.map((contourElement: number[] | ContourElement<N>): ContourElement<N> =>
            contourElement as any) as any as ContourWhole<N>

const Ratio: (ratio: [ number | Numerator, number | Denominator ]) => Ratio =
    (ratio: [ number | Numerator, number | Denominator ]): Ratio =>
        ratio as any as Ratio

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
    Millisecond,
    Radian,
    Cents,
    Semitones,
    Block,
    ContourPiece,
    ContourWhole,
    Ratio,
    Numerator,
    Denominator,
}
