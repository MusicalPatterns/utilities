// tslint:disable variable-name max-file-line-count no-any ban-types

import {
    Base,
    Block,
    Cardinal,
    Cents,
    CoordinateElement,
    Cycle,
    Denominator,
    Hz,
    Integer,
    Modulus,
    Ms,
    Numerator,
    Ordinal,
    Power,
    Radians,
    Rotation,
    Scalar,
    Semitones,
    Translation,
} from './types'

// Units

const Hz: <U extends Number, T extends Hz<U>>(hz: T) => U & number =
    <U extends Number, T extends Hz<U>>(hz: T): U & number => hz as any
const Ms: <U extends Number, T extends Ms<U>>(ms: T) => U & number =
    <U extends Number, T extends Ms<U>>(ms: T): U & number => ms as any
const Radians: <U extends Number, T extends Radians<U>>(radians: T) => U & number =
    <U extends Number, T extends Radians<U>>(radians: T): U & number => radians as any
const Cents: <U extends Number, T extends Cents<U>>(cents: T) => U & number =
    <U extends Number, T extends Cents<U>>(cents: T): U & number => cents as any
const Semitones: <U extends Number, T extends Semitones<U>>(semitones: T) => U & number =
    <U extends Number, T extends Semitones<U>>(semitones: T): U & number => semitones as any

// Operation

const Scalar: <U extends Number, T extends Scalar<U>>(scalar: T) => U & number =
    <U extends Number, T extends Scalar<U>>(scalar: T): U & number => scalar as any
const Translation: <U extends Number, T extends Translation<U>>(translation: T) => U & number =
    <U extends Number, T extends Translation<U>>(translation: T): U & number => translation as any
const Rotation: <U extends Number, T extends Rotation<U>>(rotation: T) => U & number =
    <U extends Number, T extends Rotation<U>>(rotation: T): U & number => rotation as any

const Base: <U extends Number, T extends Base<U>>(base: T) => U & number =
    <U extends Number, T extends Base<U>>(base: T): U & number => base as any
const Power: <U extends Number, T extends Power<U>>(power: T) => U & number =
    <U extends Number, T extends Power<U>>(power: T): U & number => power as any

const Modulus: <U extends Number, T extends Modulus<U>>(modulus: T) => U & number =
    <U extends Number, T extends Modulus<U>>(modulus: T): U & number => modulus as any

const Numerator: <U extends Number, T extends Numerator<U>>(numerator: T) => U & number =
    <U extends Number, T extends Numerator<U>>(numerator: T): U & number => numerator as any
const Denominator: <U extends Number, T extends Denominator<U>>(denominator: T) => U & number =
    <U extends Number, T extends Denominator<U>>(denominator: T): U & number => denominator as any

// Special Units & Operation

const Integer: <U extends Number, T extends Integer<U>>(integer: T) => U & number =
    <U extends Number, T extends Integer<U>>(integer: T): U & number => integer as any

const Ordinal: (ordinal: Ordinal) => number =
    (ordinal: Ordinal): number => ordinal as any
const Cardinal: (cardinal: Cardinal) => number =
    (cardinal: Cardinal): number => cardinal as any

// Other Stuff

const Block: (block: number[]) => number[] =
    (block: number[]): number[] => block as any

const Cycle: <T>(cycle: Cycle<T>) => T[] =
    <T>(cycle: Cycle<T>): T[] => cycle as any

const CoordinateElement: (coordinateElement: CoordinateElement) => number =
    (coordinateElement: CoordinateElement): number => coordinateElement as any
const Coordinate: (coordinate: Array<CoordinateElement | number>) => number[] =
    (coordinate: Array<CoordinateElement | number>): number[] => coordinate as any

export {
    Base,
    Cardinal,
    Scalar,
    Translation,
    Power,
    Ms,
    Ordinal,
    CoordinateElement,
    Hz,
    Radians,
    Cents,
    Semitones,
    Coordinate,
    Block,
    Cycle,
    Modulus,
    Integer,
}
