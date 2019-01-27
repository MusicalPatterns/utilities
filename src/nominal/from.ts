// tslint:disable:variable-name no-any no-unsafe-any

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
    Millisecond,
    Offset,
    Power,
    Radian,
    Scalar,
    Semitones,
    SumOfIndices,
    Time,
} from './types'

const Count: (count: Count) => number =
    (count: Count): number => count as any
const Scalar: (scalar: Scalar) => number =
    (scalar: Scalar): number => scalar as any
const Offset: (offset: Offset) => number =
    (offset: Offset): number => offset as any
const Power: (power: Power) => number =
    (power: Power): number => power as any
const Base: (base: Base) => number =
    (base: Base): number => base as any
const Time: (time: Time) => number =
    (time: Time): number => time as any
const Index: (index: Index) => number =
    (index: Index): number => index as any
const SumOfIndices: (sumOfIndices: SumOfIndices) => number =
    (sumOfIndices: SumOfIndices): number => sumOfIndices as any
const CoordinateElement: (coordinateElement: CoordinateElement) => number =
    (coordinateElement: CoordinateElement): number => coordinateElement as any
const Frequency: (frequency: Frequency) => number =
    (frequency: Frequency): number => frequency as any
const Length: (length: Length) => number =
    (length: Length): number => length as any
const Millisecond: (millisecond: Millisecond) => number =
    (millisecond: Millisecond): number => millisecond as any
const Radian: (radian: Radian) => number =
    (radian: Radian): number => radian as any
const Cents: (cents: Cents) => number =
    (cents: Cents): number => cents as any
const Semitones: (semitones: Semitones) => number =
    (semitones: Semitones): number => semitones as any
const FractionalPart: (fractionalPart: FractionalPart) => number =
    (fractionalPart: FractionalPart): number => fractionalPart as any

const Coordinate: (_: Array<CoordinateElement | number>) => number[] =
    (coordinate: Array<CoordinateElement | number>): number[] => coordinate as any

const Block: (block: Array<Index | number> | Index[]) => number[] =
    (block: Array<Index | number> | Index[]): number[] => block as any

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
    Millisecond,
    Radian,
    Cents,
    Semitones,
    Coordinate,
    Block,
    FractionalPart,
}
