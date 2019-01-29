// tslint:disable:variable-name

import {
    Base,
    Block,
    Cents,
    CoordinateElement,
    Count,
    FractionalPart,
    Frequency,
    Index,
    Length,
    Milliseconds,
    Offset,
    Power,
    Radian,
    Scalar,
    Semitones,
    SumOfIndices,
    Time,
} from './types'

const Count: (count: Count) => number =
    // @ts-ignore
    (count: Count): number => count
const Scalar: (scalar: Scalar) => number =
    // @ts-ignore
    (scalar: Scalar): number => scalar
const Offset: (offset: Offset) => number =
    // @ts-ignore
    (offset: Offset): number => offset
const Power: (power: Power) => number =
    // @ts-ignore
    (power: Power): number => power
const Base: (base: Base) => number =
    // @ts-ignore
    (base: Base): number => base
const Time: (time: Time) => number =
    // @ts-ignore
    (time: Time): number => time
const Index: (index: Index) => number =
    // @ts-ignore
    (index: Index): number => index
const SumOfIndices: (sumOfIndices: SumOfIndices) => number =
    // @ts-ignore
    (sumOfIndices: SumOfIndices): number => sumOfIndices
const CoordinateElement: (coordinateElement: CoordinateElement) => number =
    // @ts-ignore
    (coordinateElement: CoordinateElement): number => coordinateElement
const Frequency: (frequency: Frequency) => number =
    // @ts-ignore
    (frequency: Frequency): number => frequency
const Length: (length: Length) => number =
    // @ts-ignore
    (length: Length): number => length
const Milliseconds: (milliseconds: Milliseconds) => number =
    // @ts-ignore
    (milliseconds: Milliseconds): number => milliseconds
const Radian: (radian: Radian) => number =
    // @ts-ignore
    (radian: Radian): number => radian
const Cents: (cents: Cents) => number =
    // @ts-ignore
    (cents: Cents): number => cents
const Semitones: (semitones: Semitones) => number =
    // @ts-ignore
    (semitones: Semitones): number => semitones
const FractionalPart: (fractionalPart: FractionalPart) => number =
    // @ts-ignore
    (fractionalPart: FractionalPart): number => fractionalPart

const Coordinate: (_: Array<CoordinateElement | number>) => number[] =
    // @ts-ignore
    (coordinate: Array<CoordinateElement | number>): number[] => coordinate

const Block: (block: Array<Index | number> | Index[]) => number[] =
    // @ts-ignore
    (block: Array<Index | number> | Index[]): number[] => block

export {
    Base,
    Count,
    Scalar,
    Offset,
    Power,
    Time,
    Index,
    SumOfIndices,
    CoordinateElement,
    Frequency,
    Length,
    Milliseconds,
    Radian,
    Cents,
    Semitones,
    Coordinate,
    Block,
    FractionalPart,
}
