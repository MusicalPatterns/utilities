// tslint:disable variable-name max-file-line-count no-any ban-types

import {
    Abstract,
    Base,
    Block,
    Cardinal,
    Cents,
    Cycle,
    Denominator,
    Hz,
    Integer,
    Meters,
    Modulus,
    Ms,
    Numerator,
    Operand,
    Ordinal,
    Power,
    Radians,
    Ratio,
    Rotation,
    Scalar,
    Semitones,
    Space,
    Translation,
} from './types'

// Units

const Hz: <U extends Abstract, T extends Hz<U>>(hz: T) => U & number =
    <U extends Abstract, T extends Hz<U>>(hz: T): U & number => hz as any
const Ms: <U extends Abstract, T extends Ms<U>>(ms: T) => U & number =
    <U extends Abstract, T extends Ms<U>>(ms: T): U & number => ms as any
const Radians: <U extends Abstract, T extends Radians<U>>(radians: T) => U & number =
    <U extends Abstract, T extends Radians<U>>(radians: T): U & number => radians as any
const Cents: <U extends Abstract, T extends Cents<U>>(cents: T) => U & number =
    <U extends Abstract, T extends Cents<U>>(cents: T): U & number => cents as any
const Semitones: <U extends Abstract, T extends Semitones<U>>(semitones: T) => U & number =
    <U extends Abstract, T extends Semitones<U>>(semitones: T): U & number => semitones as any
const Meters: <U extends Abstract, T extends Meters<U>>(meters: T) => U & number =
    <U extends Abstract, T extends Meters<U>>(meters: T): U & number => meters as any
const Space: <U extends Abstract, T extends Space<U>>(space: T) => U & number =
    <U extends Abstract, T extends Space<U>>(space: T): U & number => space as any

// Operation

const Scalar: <U extends Operand, T extends Scalar<U>>(scalar: T) => U & number =
    <U extends Operand, T extends Scalar<U>>(scalar: T): U & number => scalar as any
const Translation: <U extends Operand, T extends Translation<U>>(translation: T) => U & number =
    <U extends Operand, T extends Translation<U>>(translation: T): U & number => translation as any
const Rotation: <U extends Operand, T extends Rotation<U>>(rotation: T) => U & number =
    <U extends Operand, T extends Rotation<U>>(rotation: T): U & number => rotation as any

const Base: <U extends Operand, T extends Base<U>>(base: T) => U & number =
    <U extends Operand, T extends Base<U>>(base: T): U & number => base as any
const Power: <U extends Operand, T extends Power<U>>(power: T) => U & number =
    <U extends Operand, T extends Power<U>>(power: T): U & number => power as any

const Modulus: <U extends Operand, T extends Modulus<U>>(modulus: T) => U & number =
    <U extends Operand, T extends Modulus<U>>(modulus: T): U & number => modulus as any

// Special Units & Operation

const Integer: <T extends Integer>(integer: T) => number =
    <T extends Integer>(integer: T): number => integer as any

const Ordinal: (ordinal: Ordinal) => number =
    (ordinal: Ordinal): number => ordinal as any
const Cardinal: (cardinal: Cardinal) => number =
    (cardinal: Cardinal): number => cardinal as any
const Numerator: (numerator: Numerator) => number =
    (numerator: Numerator): number => numerator as any
const Denominator: (denominator: Denominator) => number =
    (denominator: Denominator): number => denominator as any

const Ratio: (ratio: Ratio) => number = (ratio: Ratio): number =>
    Numerator(ratio[ 0 ]) * (1 / Denominator(ratio[ 1 ]))

// Other Stuff

const Block: (block: number[]) => number[] =
    (block: number[]): number[] => block as any

const Cycle: <T>(cycle: Cycle<T>) => T[] =
    <T>(cycle: Cycle<T>): T[] => {
        delete cycle._CycleBrand

        return cycle as any
    }

export {
    Base,
    Cardinal,
    Scalar,
    Translation,
    Power,
    Ms,
    Ordinal,
    Hz,
    Radians,
    Cents,
    Semitones,
    Block,
    Cycle,
    Modulus,
    Integer,
    Numerator,
    Denominator,
    Meters,
    Ratio,
    Space,
}
