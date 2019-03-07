// tslint:disable variable-name max-file-line-count ban-types

import {
    Amplitude,
    Base,
    Block,
    Cardinal,
    Cents,
    Cycle,
    Denominator,
    Fraction,
    Frequency,
    Hz,
    Integer,
    Meters,
    Modulus,
    Ms,
    NoOperation,
    NoUnits,
    Numerator,
    Ordinal,
    Power,
    Radians,
    Rotation,
    Scalar,
    Semitones,
    Space,
    Time,
    Translation,
} from './types'

// Units

const Hz: <U extends NoUnits, T extends Hz<U>>(hz: T) => U & number =
    <U extends NoUnits, T extends Hz<U>>(hz: T): U & number =>
        hz as unknown as U & number
const Ms: <U extends NoUnits, T extends Ms<U>>(ms: T) => U & number =
    <U extends NoUnits, T extends Ms<U>>(ms: T): U & number =>
        ms as unknown as U & number
const Radians: <U extends NoUnits, T extends Radians<U>>(radians: T) => U & number =
    <U extends NoUnits, T extends Radians<U>>(radians: T): U & number =>
        radians as unknown as U & number
const Cents: <U extends NoUnits, T extends Cents<U>>(cents: T) => U & number =
    <U extends NoUnits, T extends Cents<U>>(cents: T): U & number =>
        cents as unknown as U & number
const Semitones: <U extends NoUnits, T extends Semitones<U>>(semitones: T) => U & number =
    <U extends NoUnits, T extends Semitones<U>>(semitones: T): U & number =>
        semitones as unknown as U & number
const Meters: <U extends NoUnits, T extends Meters<U>>(meters: T) => U & number =
    <U extends NoUnits, T extends Meters<U>>(meters: T): U & number =>
        meters as unknown as U & number
const Space: <U extends NoUnits, T extends Space<U>>(space: T) => U & number =
    <U extends NoUnits, T extends Space<U>>(space: T): U & number =>
        space as unknown as U & number
const Time: <U extends NoUnits, T extends Time<U>>(time: T) => U & number =
    <U extends NoUnits, T extends Time<U>>(time: T): U & number =>
        time as unknown as U & number
const Frequency: <U extends NoUnits, T extends Frequency<U>>(frequency: T) => U & number =
    <U extends NoUnits, T extends Frequency<U>>(frequency: T): U & number =>
        frequency as unknown as U & number
const Amplitude: <U extends NoUnits, T extends Amplitude<U>>(amplitude: T) => U & number =
    <U extends NoUnits, T extends Amplitude<U>>(amplitude: T): U & number =>
        amplitude as unknown as U & number

// Operation

const Scalar: <U extends NoOperation, T extends Scalar<U>>(scalar: T) => U & number =
    <U extends NoOperation, T extends Scalar<U>>(scalar: T): U & number =>
        scalar as unknown as U & number
const Translation: <U extends NoOperation, T extends Translation<U>>(translation: T) => U & number =
    <U extends NoOperation, T extends Translation<U>>(translation: T): U & number =>
        translation as unknown as U & number
const Rotation: <U extends NoOperation, T extends Rotation<U>>(rotation: T) => U & number =
    <U extends NoOperation, T extends Rotation<U>>(rotation: T): U & number =>
        rotation as unknown as U & number

const Base: <U extends NoOperation, T extends Base<U>>(base: T) => U & number =
    <U extends NoOperation, T extends Base<U>>(base: T): U & number =>
        base as unknown as U & number
const Power: <U extends NoOperation, T extends Power<U>>(power: T) => U & number =
    <U extends NoOperation, T extends Power<U>>(power: T): U & number =>
        power as unknown as U & number

const Modulus: <U extends NoOperation, T extends Modulus<U>>(modulus: T) => U & number =
    <U extends NoOperation, T extends Modulus<U>>(modulus: T): U & number =>
        modulus as unknown as U & number

// Special Units & Operation

const Integer: <T extends Integer>(integer: T) => number =
    <T extends Integer>(integer: T): number =>
        integer as unknown as number

const Ordinal: (ordinal: Ordinal) =>
    number =
    (ordinal: Ordinal): number => ordinal as unknown as number
const Cardinal: (cardinal: Cardinal) =>
    number =
    (cardinal: Cardinal): number => cardinal as unknown as number
const Numerator: (numerator: Numerator) =>
    number =
    (numerator: Numerator): number =>
        numerator as unknown as number
const Denominator: (denominator: Denominator) => number =
    (denominator: Denominator): number =>
        denominator as unknown as number

const Fraction: (fraction: Fraction) => number =
    (fraction: Fraction): number =>
        Numerator(fraction[ 0 ]) * (1 / Denominator(fraction[ 1 ]))

// Other Stuff

const Block: (block: Block) => number[] =
    (block: Block): number[] =>
        block as unknown as number[]

const Cycle: <T>(cycle: Cycle<T>) => T[] =
    <T>(cycle: Cycle<T>): T[] => {
        delete cycle._CycleBrand

        return cycle as T[]
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
    Fraction,
    Space,
    Time,
    Frequency,
    Amplitude,
}
