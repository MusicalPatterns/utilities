// tslint:disable:variable-name max-file-line-count

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
    // @ts-ignore
    (scalar: number): Scalar => scalar
const Offset: (offset: number) => Offset =
    // @ts-ignore
    (offset: number): Offset => offset
const Power: (power: number) => Power =
    // @ts-ignore
    (power: number): Power => power
const Index: (index: number) => Index =
    // @ts-ignore
    (index: number): Index => index
const Time: (duration: number) => Time =
    // @ts-ignore
    (duration: number): Time => duration
const Base: (offset: number) => Base =
    // @ts-ignore
    (base: number): Base => base
const Count: (count: number) => Count =
    // @ts-ignore
    (count: number): Count => count
const SumOfIndices: (sumOfIndices: number) => SumOfIndices =
    // @ts-ignore
    (sumOfIndices: number): SumOfIndices => sumOfIndices
const CoordinateElement: (coordinateElement: number) => CoordinateElement =
    // @ts-ignore
    (coordinateElement: number): CoordinateElement => coordinateElement
const Frequency: (frequency: number) => Frequency =
    // @ts-ignore
    (frequency: number): Frequency => frequency
const Length: (length: number) => Length =
    // @ts-ignore
    (length: number): Length => length
const Millisecond: (millisecond: number) => Millisecond =
    // @ts-ignore
    (millisecond: number): Millisecond => millisecond
const Radian: (radian: number) => Radian =
    // @ts-ignore
    (radian: number): Radian => radian
const Cents: (cents: number) => Cents =
    // @ts-ignore
    (cents: number): Cents => cents
const Semitones: (semitones: number) => Semitones =
    // @ts-ignore
    (semitones: number): Semitones => semitones
const Numerator: (numerator: number) => Numerator =
    // @ts-ignore
    (numerator: number): Numerator => numerator
const Denominator: (denominator: number) => Denominator =
    // @ts-ignore
    (denominator: number): Denominator => denominator

const Coordinate: (coordinate: Array<number | CoordinateElement>) => Coordinate =
    (coordinate: Array<number | CoordinateElement>): Coordinate =>
        coordinate.map((coordinateElement: number | CoordinateElement): CoordinateElement =>
            // @ts-ignore
            coordinateElement)

const Block: (block: Array<number | Index>) => Block =
    (block: Array<number | Index>): Block =>
        // @ts-ignore
        block.map((blockElement: Index | number): Index => blockElement)

const ContourPiece: <N>(contourPiece: Array<number[] | ContourElement<N>>) => ContourPiece<N> =
    <N>(contourPiece: Array<number[] | ContourElement<N>>): ContourPiece<N> =>
        // @ts-ignore
        contourPiece.map((contourElement: number[] | ContourElement<N>): ContourElement<N> =>
            // @ts-ignore
            contourElement)

const ContourWhole: <N>(contourWhole: Array<number[] | ContourElement<N>>) => ContourWhole<N> =
    <N>(contourWhole: Array<number[] | ContourElement<N>>): ContourWhole<N> =>
        // @ts-ignore
        contourWhole.map((contourElement: number[] | ContourElement<N>): ContourElement<N> =>
            // @ts-ignore
            contourElement)

const Ratio: (ratio: [ number | Numerator, number | Denominator ]) => Ratio =
    (ratio: [ number | Numerator, number | Denominator ]): Ratio =>
        // @ts-ignore
        ratio

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
