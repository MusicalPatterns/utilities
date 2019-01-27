// tslint:disable:variable-name no-any

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
    (count: Count): number => count as any as number
const Scalar: (scalar: Scalar) => number =
    (scalar: Scalar): number => scalar as any as number
const Offset: (offset: Offset) => number =
    (offset: Offset): number => offset as any as number
const Power: (power: Power) => number =
    (power: Power): number => power as any as number
const Base: (base: Base) => number =
    (base: Base): number => base as any as number
const Time: (time: Time) => number =
    (time: Time): number => time as any as number
const Index: (index: Index) => number =
    (index: Index): number => index as any as number
const SumOfIndices: (sumOfIndices: SumOfIndices) => number =
    (sumOfIndices: SumOfIndices): number => sumOfIndices as any as number
const CoordinateElement: (coordinateElement: CoordinateElement) => number =
    (coordinateElement: CoordinateElement): number => coordinateElement as any as number
const Frequency: (frequency: Frequency) => number =
    (frequency: Frequency): number => frequency as any as number
const Length: (length: Length) => number =
    (length: Length): number => length as any as number
const Millisecond: (millisecond: Millisecond) => number =
    (millisecond: Millisecond): number => millisecond as any as number
const Radian: (radian: Radian) => number =
    (radian: Radian): number => radian as any as number
const Cents: (cents: Cents) => number =
    (cents: Cents): number => cents as any as number
const Semitones: (semitones: Semitones) => number =
    (semitones: Semitones): number => semitones as any as number
const FractionalPart: (fractionalPart: FractionalPart) => number =
    (fractionalPart: FractionalPart): number => fractionalPart as any as number

const Coordinate: (_: Array<CoordinateElement | number>) => number[] =
    (coordinate: Array<CoordinateElement | number>): number[] => coordinate as any as number[]

const Block: (block: Array<Index | number> | Index[]) => number[] =
    (block: Array<Index | number> | Index[]): number[] => block as any as number[]

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
