// tslint:disable variable-name no-any

import {
    Absolute,
    Base,
    Block,
    Cardinal,
    Cents,
    CoordinateElement,
    Cycle,
    FractionalPart,
    Hz,
    Interval,
    Length,
    Modulus,
    Ms,
    Ordinal,
    Power,
    Radians,
    Scalar,
    Semitones,
    SumOfIndices,
    Translation,
} from './types'

const Cardinal: (cardinal: Cardinal) => number =
    (cardinal: Cardinal): number => cardinal as any
const Scalar: (scalar: Scalar) => number =
    (scalar: Scalar): number => scalar as any
const Translation: (translation: Translation) => number =
    (translation: Translation): number => translation as any
const Power: (power: Power) => number =
    (power: Power): number => power as any
const Base: (base: Base) => number =
    (base: Base): number => base as any
const Ms: (ms: Ms) => number =
    (ms: Ms): number => ms as any
const Ordinal: (ordinal: Ordinal) => number =
    (ordinal: Ordinal): number => ordinal as any
const SumOfIndices: (sumOfIndices: SumOfIndices) => number =
    (sumOfIndices: SumOfIndices): number => sumOfIndices as any
const CoordinateElement: (coordinateElement: CoordinateElement) => number =
    (coordinateElement: CoordinateElement): number => coordinateElement as any
const Hz: (hz: Hz) => number =
    (hz: Hz): number => hz as any
const Length: (length: Length) => number =
    (length: Length): number => length as any
const Radians: (radians: Radians) => number =
    (radians: Radians): number => radians as any
const Cents: (cents: Cents) => number =
    (cents: Cents): number => cents as any
const Semitones: (semitones: Semitones) => number =
    (semitones: Semitones): number => semitones as any
const FractionalPart: (fractionalPart: FractionalPart) => number =
    (fractionalPart: FractionalPart): number => fractionalPart as any
const Modulus: (modulus: Modulus) => number =
    (modulus: Modulus): number => modulus as any

const Coordinate: (coordinate: Array<CoordinateElement | number>) => number[] =
    (coordinate: Array<CoordinateElement | number>): number[] => coordinate as any

const Block: (block: number[]) => number[] =
    (block: number[]): number[] => block as any

const Cycle: <T>(cycle: Cycle<T>) => T[] =
    <T>(cycle: Cycle<T>): T[] => cycle as any

const Interval: <T>(interval: Interval<T>) => T =
    <T>(interval: Interval<T>): T => interval as T
const Absolute: <T>(absolute: Absolute<T>) => T =
    <T>(absolute: Absolute<T>): T => absolute as T

export {
    Base,
    Cardinal,
    Scalar,
    Translation,
    Power,
    Ms,
    Ordinal,
    SumOfIndices,
    CoordinateElement,
    Hz,
    Length,
    Radians,
    Cents,
    Semitones,
    Coordinate,
    Block,
    Cycle,
    FractionalPart,
    Interval,
    Absolute,
    Modulus,
}
