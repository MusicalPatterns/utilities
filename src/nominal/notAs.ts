// tslint:disable variable-name max-file-line-count max-line-length

import {
    Arc,
    ArrayOverload,
    Base,
    Block,
    Cardinal,
    Cents,
    Cycle,
    Delta,
    Denominator,
    Exponent,
    Factor,
    Fraction,
    Frequency,
    Gain,
    Hz,
    Integer,
    IntegerModulus,
    Interval,
    Logarithm,
    Meters,
    Modulus,
    Ms,
    Multiple,
    NaturalUseOfableWithArrayOverloadActive,
    Numerator,
    Ordinal,
    Point,
    Power,
    Radians,
    Rotation,
    Scalar,
    Semitones,
    Space,
    Time,
    Transition,
    Translation,
    Transposition,
    Turn,
    UnitScalar,
} from './types'

// Concrete Units

const Hz: (hz: Hz) => number =
    (hz: Hz): number =>
        hz as unknown as number
const Ms: (ms: Ms) => number =
    (ms: Ms): number =>
        ms as unknown as number
const Meters: (meters: Meters) => number =
    (meters: Meters): number =>
        meters as unknown as number

// Abstract Units

const Frequency: (frequency: Frequency) => number =
    (frequency: Frequency): number =>
        frequency as unknown as number
const Time: (time: Time) => number =
    (time: Time): number =>
        time as unknown as number
const Space: (space: Space) => number =
    (space: Space): number =>
        space as unknown as number

// Other Units

const Radians: (radians: Radians) => number =
    (radians: Radians): number =>
        radians as unknown as number

const Cents: (cents: Cents) => number =
    (cents: Cents): number =>
        cents as unknown as number
const Semitones: (semitones: Semitones) => number =
    (semitones: Semitones): number =>
        semitones as unknown as number

const Gain: (gain: Gain) => number =
    (gain: Gain): number =>
        gain as unknown as number

// Natural Units

const Numerator: (numerator: Numerator) => number =
    (numerator: Numerator): number =>
        numerator as unknown as number
const Denominator: (denominator: Denominator) => number =
    (denominator: Denominator): number =>
        denominator as unknown as number

const Fraction: (fraction: Fraction) => number =
    (fraction: Fraction): number =>
        Numerator(fraction[ 0 ]) * (1 / Denominator(fraction[ 1 ]))

// Unnatural Transformation Uses

const Scalar: <OfType extends Number = Number>(scalar: Scalar<OfType>) => number =
    <OfType extends Number = Number>(scalar: Scalar<OfType>): number =>
        scalar as unknown as number
const Translation: <OfType extends Number = Number>(translation: Translation<OfType>) => number =
    <OfType extends Number = Number>(translation: Translation<OfType>): number =>
        translation as unknown as number
const Rotation: <OfType extends Number = Number>(rotation: Rotation<OfType>) => number =
    <OfType extends Number = Number>(rotation: Rotation<OfType>): number =>
        rotation as unknown as number

// Unnatural Non-Transformation Uses

const Exponent: <OfType extends Number = Number>(exponent: Exponent<OfType>) => number =
    <OfType extends Number = Number>(exponent: Exponent<OfType>): number =>
        exponent as unknown as number
const Logarithm: <OfType extends Number = Number>(logarithm: Logarithm<OfType>) => number =
    <OfType extends Number = Number>(logarithm: Logarithm<OfType>): number =>
        logarithm as unknown as number
const Modulus: <OfType extends Number = Number>(modulus: Modulus<OfType>) => number =
    <OfType extends Number = Number>(modulus: Modulus<OfType>): number =>
        modulus as unknown as number

// Unnatural Fixed Uses

const Point: <OfType extends Number = Number>(point: Point<OfType>) => number =
    <OfType extends Number = Number>(point: Point<OfType>): number =>
        point as unknown as number

// Unnatural Compounds

const Interval: <OfType extends Number = Number>(interval: Interval<OfType>) => number =
    <OfType extends Number = Number>(interval: Interval<OfType>): number =>
        interval as unknown as number
const Delta: <OfType extends Number = Number>(delta: Delta<OfType>) => number =
    <OfType extends Number = Number>(delta: Delta<OfType>): number =>
        delta as unknown as number
const Arc: <OfType extends Number = Number>(arc: Arc<OfType>) => number =
    <OfType extends Number = Number>(arc: Arc<OfType>): number =>
        arc as unknown as number

// Natural Transformation Uses (with overloads for arrays)

const Multiple: <OfType extends NaturalUseOfableWithArrayOverloadActive = number>(multiple: Multiple<OfType>) => number =
    <OfType extends NaturalUseOfableWithArrayOverloadActive = number>(multiple: Multiple<OfType>): number =>
        multiple as unknown as number
const Cardinal: <OfType extends NaturalUseOfableWithArrayOverloadActive = number>(cardinal: Cardinal<OfType>) => number =
    <OfType extends NaturalUseOfableWithArrayOverloadActive = number>(cardinal: Cardinal<OfType>): number =>
        cardinal as unknown as number
const Transposition: <OfType extends NaturalUseOfableWithArrayOverloadActive = number>(transposition: Transposition<OfType>) => number =
    <OfType extends NaturalUseOfableWithArrayOverloadActive = number>(transposition: Transposition<OfType>): number =>
        transposition as unknown as number

// Natural Non-Trasformation Uses

const Power: <OfType extends Number = number>(power: Power<OfType>) => number =
    <OfType extends Number = number>(power: Power<OfType>): number =>
        power as unknown as number
const Base: <OfType extends Number = number>(base: Base<OfType>) => number =
    <OfType extends Number = number>(base: Base<OfType>): number =>
        base as unknown as number
const IntegerModulus: <OfType extends Number = number>(integerModulus: IntegerModulus<OfType>) => number =
    <OfType extends Number = number>(integerModulus: IntegerModulus<OfType>): number =>
        integerModulus as unknown as number

// Natural Fixed Uses (only used for arrays)

const Ordinal: <OfType extends ArrayOverload = number[]>(ordinal: Ordinal<OfType>) => number =
    <OfType extends ArrayOverload = number[]>(ordinal: Ordinal<OfType>): number =>
        ordinal as unknown as number

// Natural Compounds

const Factor: <OfType extends ArrayOverload = number[]>(factor: Factor<OfType>) => number =
    <OfType extends ArrayOverload = number[]>(factor: Factor<OfType>): number =>
        factor as unknown as number
const Transition: <OfType extends ArrayOverload = number[]>(transition: Transition<OfType>) => number =
    <OfType extends ArrayOverload = number[]>(transition: Transition<OfType>): number =>
        transition as unknown as number
const Turn: <OfType extends ArrayOverload = number[]>(turn: Turn<OfType>) => number =
    <OfType extends ArrayOverload = number[]>(turn: Turn<OfType>): number =>
        turn as unknown as number

// Unit Uses

const UnitScalar: <OfType extends Number = number>(unitScalar: UnitScalar<OfType>) => number =
    <OfType extends Number = number>(unitScalar: UnitScalar<OfType>): number =>
        unitScalar as unknown as number

// Naturalness

const Integer: (integer: Integer) => number =
    (integer: Integer): number =>
        integer as unknown as number

// Cycle

const Cycle: <ElementType>(cycle: Cycle<ElementType>) => ElementType[] =
    <ElementType>(cycle: Cycle<ElementType>): ElementType[] => {
        delete cycle._CycleBrand

        return cycle as ElementType[]
    }

// Blocks & Contours

const Block: (block: Block) => number[] =
    (block: Block): number[] =>
        block as unknown as number[]

export {
    Base,
    Cardinal,
    Scalar,
    Translation,
    Power,
    Ms,
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
    Gain,
    UnitScalar,
    Rotation,
    Ordinal,
    Multiple,
    Exponent,
    Logarithm,
    IntegerModulus,
    Transposition,
    Point,
    Interval,
    Delta,
    Arc,
    Factor,
    Transition,
    Turn,
}
