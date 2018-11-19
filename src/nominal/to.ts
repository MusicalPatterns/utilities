// tslint:disable:variable-name no-any

import {
    Base,
    Coordinate,
    CoordinateElement,
    Count,
    Frequency,
    Index,
    Offset,
    Power,
    Scalar,
    SumOfIndices,
    SumOfScalars,
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
const SumOfScalars: (sumOfScalars: number) => SumOfScalars =
    (sumOfScalars: number): SumOfScalars => sumOfScalars as any
const SumOfIndices: (sumOfIndices: number) => SumOfIndices =
    (sumOfIndices: number): SumOfIndices => sumOfIndices as any
const CoordinateElement: (coordinateElement: number) => CoordinateElement =
    (coordinateElement: number): CoordinateElement => coordinateElement as any
const Frequency: (frequency: number) => Frequency =
    (frequency: number): Frequency => frequency as any

const Coordinate: (coordinate: Array<number | CoordinateElement>) => Coordinate =
    (coordinate: Array<number | CoordinateElement>): Coordinate =>
        coordinate.map((coordinateElement: number | CoordinateElement): CoordinateElement =>
            coordinateElement as any) as any

export {
    Base,
    Count,
    Scalar,
    Offset,
    Power,
    Time,
    Index,
    SumOfScalars,
    SumOfIndices,
    Coordinate,
    CoordinateElement,
    Frequency,
}
