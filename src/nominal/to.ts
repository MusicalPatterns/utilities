// tslint:disable:variable-name no-any

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
    Frequency,
    Index,
    Length,
    Offset,
    Power,
    Radian,
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
const Radian: (radian: number) => Radian =
    (radian: number): Radian => radian as any
const Cents: (cents: number) => Cents =
    (cents: number): Cents => cents as any
const Semitones: (semitones: number) => Semitones =
    (semitones: number): Semitones => semitones as any

const Coordinate: (coordinate: Array<number | CoordinateElement>) => Coordinate =
    (coordinate: Array<number | CoordinateElement>): Coordinate =>
        coordinate.map((coordinateElement: number | CoordinateElement): CoordinateElement =>
            coordinateElement as any) as any

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
    Radian,
    Cents,
    Semitones,
    Block,
    ContourPiece,
    ContourWhole,
}
