// tslint:disable variable-name max-file-line-count max-line-length

import { integerCheck, unitCheck } from './checks'
import {
    Arc,
    ArrayOverload,
    Base,
    Block,
    Cardinal,
    Cents,
    ContourElement,
    ContourPiece,
    ContourWhole,
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
    NaturalUseOfable,
    NaturalUseOfableActive,
    NaturalUseOfableWithArrayOverload,
    NaturalUseOfableWithArrayOverloadActive,
    NoOf,
    NoUnits,
    Numerator,
    Of,
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
    Unnatural,
    UnnaturalUseOfable,
    UnnaturalUseOfableActive,
} from './types'

// Concrete Units

const Hz: <NumericType extends NoUnits>(hz: NumericType) => Hz =
    <NumericType extends NoUnits>(hz: NumericType): Hz =>
        hz as unknown as Hz
const Ms: <NumericType extends NoUnits>(ms: NumericType) => Ms =
    <NumericType extends NoUnits>(ms: NumericType): Ms =>
        ms as unknown as Ms
const Meters: <NumericType extends NoUnits>(meters: NumericType) => Meters =
    <NumericType extends NoUnits>(meters: NumericType): Meters =>
        meters as unknown as Meters

// Abstract Units

const Frequency: <NumericType extends NoUnits>(frequency: NumericType) => Frequency =
    <NumericType extends NoUnits>(frequency: NumericType): Frequency =>
        frequency as unknown as Frequency
const Space: <NumericType extends NoUnits>(space: NumericType) => Space =
    <NumericType extends NoUnits>(space: NumericType): Space =>
        space as unknown as Space
const Time: <NumericType extends NoUnits>(time: NumericType) => Time =
    <NumericType extends NoUnits>(time: NumericType): Time =>
        time as unknown as Time

// Other Units

const Radians: <NumericType extends NoUnits>(radians: NumericType) => Radians =
    <NumericType extends NoUnits>(radians: NumericType): Radians =>
        radians as unknown as Radians

const Cents: <NumericType extends NoUnits>(cents: NumericType) => Cents =
    <NumericType extends NoUnits>(cents: NumericType): Cents =>
        cents as unknown as Cents
const Semitones: <NumericType extends NoUnits>(semitones: NumericType) => Semitones =
    <NumericType extends NoUnits>(semitones: NumericType): Semitones =>
        semitones as unknown as Semitones

const Gain: <NumericType extends NoUnits>(gain: NumericType) => Gain =
    <NumericType extends NoUnits>(gain: NumericType): Gain =>
        gain as unknown as Gain

// Natural Units

const Numerator: <NumericType extends NoUnits>(numerator: NumericType) => Numerator =
    <NumericType extends NoUnits>(numerator: NumericType): Numerator =>
        integerCheck(numerator, 'Numerator') as unknown as Numerator
const Denominator: <NumericType extends NoUnits>(denominator: NumericType) => Denominator =
    <NumericType extends NoUnits>(denominator: NumericType): Denominator =>
        integerCheck(denominator, 'Denominator') as unknown as Denominator

const Fraction: (fraction: [ Integer | Numerator, Integer | Denominator ]) => Fraction =
    (fraction: [ Integer | Numerator, Integer | Denominator ]): Fraction =>
        fraction as unknown as Fraction

// Unnatural Transformation Uses

const Scalar: {
    <OfType extends UnnaturalUseOfable = number>(scalar: OfType): Scalar,
    <OfType extends UnnaturalUseOfableActive = number>(scalar: number | Of<OfType>): Scalar<OfType>,
    <OfType extends UnnaturalUseOfable = number>(scalar: OfType): Scalar,
} =
    <OfType extends Unnatural | NoOf = number>(scalar: OfType | number | Of<OfType>): Scalar<OfType> =>
        scalar as unknown as Scalar<OfType>
const Translation: {
    <OfType extends UnnaturalUseOfable = number>(translation: OfType): Translation,
    <OfType extends UnnaturalUseOfableActive = number>(translation: number | Of<OfType>): Translation<OfType>,
    <OfType extends UnnaturalUseOfable = number>(translation: OfType): Translation,
} =
    <OfType extends Unnatural | NoOf = number>(translation: OfType | number | Of<OfType>): Translation<OfType> =>
        translation as unknown as Translation<OfType>
const Rotation: {
    <OfType extends UnnaturalUseOfable = number>(rotation: OfType): Rotation,
    <OfType extends UnnaturalUseOfableActive = number>(rotation: number | Of<OfType>): Rotation<OfType>,
    <OfType extends UnnaturalUseOfable = number>(rotation: OfType): Rotation,
} =
    <OfType extends Number | NoOf = number>(rotation: OfType | number | Of<OfType>): Rotation<OfType> =>
        rotation as unknown as Rotation<OfType>

// Unnatural Non-Transformation Uses

const Exponent: {
    <OfType extends UnnaturalUseOfable = number>(exponent: OfType): Exponent,
    <OfType extends UnnaturalUseOfableActive = number>(exponent: number | Of<OfType>): Exponent<OfType>,
    <OfType extends UnnaturalUseOfable = number>(exponent: OfType): Exponent,
} =
    <OfType extends Unnatural | NoOf = number>(exponent: OfType | number | Of<OfType>): Exponent<OfType> =>
        exponent as unknown as Exponent<OfType>
const Logarithm: {
    <OfType extends UnnaturalUseOfable = number>(logarithm: OfType): Logarithm,
    <OfType extends UnnaturalUseOfableActive = number>(logarithm: number | Of<OfType>): Logarithm<OfType>,
    <OfType extends UnnaturalUseOfable = number>(logarithm: OfType): Logarithm,
} =
    <OfType extends Unnatural | NoOf = number>(logarithm: OfType | number | Of<OfType>): Logarithm<OfType> =>
        logarithm as unknown as Logarithm<OfType>
const Modulus: {
    <OfType extends UnnaturalUseOfable = number>(modulus: OfType): Modulus,
    <OfType extends UnnaturalUseOfableActive = number>(modulus: number | Of<OfType>): Modulus<OfType>,
    <OfType extends UnnaturalUseOfable = number>(modulus: OfType): Modulus,
} =
    <OfType extends Unnatural | NoOf = number>(modulus: OfType | number | Of<OfType>): Modulus<OfType> =>
        modulus as unknown as Modulus<OfType>

// Unnatural Fixed Uses

const Point: {
    <OfType extends UnnaturalUseOfable = number>(point: OfType): Point,
    <OfType extends UnnaturalUseOfableActive = number>(point: number | Of<OfType>): Point<OfType>,
    <OfType extends UnnaturalUseOfable = number>(point: OfType): Point,
} =
    <OfType extends Unnatural | NoOf = number>(point: OfType | number | Of<OfType>): Point<OfType> =>
        point as unknown as Point<OfType>

// Unnatural Compound Uses

const Interval: {
    <OfType extends UnnaturalUseOfable = number>(interval: OfType): Interval,
    <OfType extends UnnaturalUseOfableActive = number>(interval: number | Of<OfType>): Interval<OfType>,
    <OfType extends UnnaturalUseOfable = number>(interval: OfType): Interval,
} =
    <OfType extends Unnatural | NoOf = number>(interval: OfType | number | Of<OfType>): Interval<OfType> =>
        interval as unknown as Interval<OfType>
const Delta: {
    <OfType extends UnnaturalUseOfable = number>(delta: OfType): Delta,
    <OfType extends UnnaturalUseOfableActive = number>(delta: number | Of<OfType>): Delta<OfType>,
    <OfType extends UnnaturalUseOfable = number>(delta: OfType): Delta,
} =
    <OfType extends Unnatural | NoOf = number>(delta: OfType | number | Of<OfType>): Delta<OfType> =>
        delta as unknown as Delta<OfType>
const Arc: {
    <OfType extends UnnaturalUseOfable = number>(arc: OfType): Arc,
    <OfType extends UnnaturalUseOfableActive = number>(arc: number | Of<OfType>): Arc<OfType>,
    <OfType extends UnnaturalUseOfable = number>(arc: OfType): Arc,
} =
    <OfType extends Unnatural | NoOf = number>(arc: OfType | number | Of<OfType>): Arc<OfType> =>
        arc as unknown as Arc<OfType>

// Natural Transformation Uses (with overloads for arrays)

const Multiple: {
    <OfType extends NaturalUseOfableWithArrayOverload = number>(ordinal: OfType): Multiple,
    <OfType extends NaturalUseOfableWithArrayOverloadActive = number>(ordinal: number | Of<OfType>): Multiple<OfType>,
    <OfType extends NaturalUseOfableWithArrayOverload = number>(ordinal: OfType): Multiple,
} =
    <OfType extends Unnatural | NoOf = number>(multiple: OfType | number | Of<OfType>): Multiple<OfType> =>
        integerCheck(multiple as number, 'Multiple') as unknown as Multiple<OfType>
const Cardinal: {
    <OfType extends NaturalUseOfableWithArrayOverload = number>(cardinal: OfType): Cardinal,
    <OfType extends NaturalUseOfableWithArrayOverloadActive = number>(cardinal: number | Of<OfType>): Cardinal<OfType>,
    <OfType extends NaturalUseOfableWithArrayOverload = number>(cardinal: OfType): Cardinal,
} =
    <OfType extends Unnatural | NoOf = number>(cardinal: OfType | number | Of<OfType>): Cardinal<OfType> =>
        integerCheck(cardinal as unknown as number, 'Cardinal') as unknown as Cardinal<OfType>
const Transposition: {
    <OfType extends NaturalUseOfableWithArrayOverload = number>(ordinal: OfType): Transposition,
    <OfType extends NaturalUseOfableWithArrayOverloadActive = number>(ordinal: number | Of<OfType>): Transposition<OfType>,
    <OfType extends NaturalUseOfableWithArrayOverload = number>(ordinal: OfType): Transposition,
} =
    <OfType extends Unnatural | NoOf = number>(transposition: OfType | number | Of<OfType>): Transposition<OfType> =>
        integerCheck(transposition as number, 'Transposition') as unknown as Transposition<OfType>

// Natural Non-Transformation Uses

const Power: {
    <OfType extends NaturalUseOfable = number>(power: OfType): Power,
    <OfType extends NaturalUseOfableActive = number>(power: number | Of<OfType>): Power<OfType>,
    <OfType extends NaturalUseOfable = number>(power: OfType): Power,
} =
    <OfType extends Unnatural | NoOf = number>(power: OfType | number | Of<OfType>): Power<OfType> =>
        integerCheck(power as number, 'Power') as unknown as Power<OfType>
const Base: {
    <OfType extends NaturalUseOfable = number>(base: OfType): Base,
    <OfType extends NaturalUseOfableActive = number>(base: number | Of<OfType>): Base<OfType>,
    <OfType extends NaturalUseOfable = number>(base: OfType): Base,
} =
    <OfType extends Unnatural | NoOf = number>(base: OfType | number | Of<OfType>): Base<OfType> =>
        integerCheck(base as number, 'Base') as unknown as Base<OfType>
const IntegerModulus: {
    <OfType extends NaturalUseOfable = number>(integerModulus: OfType): IntegerModulus,
    <OfType extends NaturalUseOfableActive = number>(integerModulus: number | Of<OfType>): IntegerModulus<OfType>,
    <OfType extends NaturalUseOfable = number>(integerModulus: OfType): IntegerModulus,
} =
    <OfType extends Unnatural | NoOf = number>(integerModulus: OfType | number | Of<OfType>): IntegerModulus<OfType> =>
        integerCheck(integerModulus as number, 'IntegerModulus') as unknown as IntegerModulus<OfType>

// Natural Fixed Uses (only used for arrays)

const Ordinal: {
    <OfType extends NoOf = number>(ordinal: OfType): Ordinal,
    <OfType extends ArrayOverload = number[]>(ordinal: number | Of<OfType>): Ordinal<OfType>,
    <OfType extends NoOf = number>(ordinal: OfType): Ordinal,
} =
    <OfType = number>(ordinal: OfType | number | Of<OfType>): Ordinal<OfType[]> =>
        integerCheck(ordinal as unknown as number, 'Ordinal') as unknown as Ordinal<OfType[]>

// Natural Compound Uses

const Factor: {
    <OfType extends NoOf = number>(factor: OfType): Factor,
    <OfType extends ArrayOverload = number[]>(factor: number | Of<OfType>): Factor<OfType>,
    <OfType extends NoOf = number>(factor: OfType): Factor,
} =
    <OfType = number>(factor: OfType | number | Of<OfType>): Factor<OfType[]> =>
        integerCheck(factor as unknown as number, 'Factor') as unknown as Factor<OfType[]>
const Transition: {
    <OfType extends NoOf = number>(transition: OfType): Transition,
    <OfType extends ArrayOverload = number[]>(transition: number | Of<OfType>): Transition<OfType>,
    <OfType extends NoOf = number>(transition: OfType): Transition,
} =
    <OfType = number>(transition: OfType | number | Of<OfType>): Transition<OfType[]> =>
        integerCheck(transition as unknown as number, 'Transition') as unknown as Transition<OfType[]>
const Turn: {
    <OfType extends NoOf = number>(turn: OfType): Turn,
    <OfType extends ArrayOverload = number[]>(turn: number | Of<OfType>): Turn<OfType>,
    <OfType extends NoOf = number>(turn: OfType): Turn,
} =
    <OfType = number>(turn: OfType | number | Of<OfType>): Turn<OfType[]> =>
        integerCheck(turn as unknown as number, 'Turn') as unknown as Turn<OfType[]>

// Unit Uses

const UnitScalar: {
    <OfType extends Unnatural & NoOf = number>(unitScalar: OfType): UnitScalar,
    <OfType extends Unnatural = number>(unitScalar: number | Of<OfType>): UnitScalar<OfType>,
    <OfType extends Unnatural & NoOf = number>(unitScalar: OfType): UnitScalar,
} =
    <OfType extends Unnatural | NoOf = number>(unitScalar: OfType | number | Of<OfType>): UnitScalar<OfType> =>
        unitCheck(unitScalar as unknown as number, 'UnitScalar') as unknown as UnitScalar<OfType>

// Naturalness

const Integer: <OfType extends NoUnits>(integer: OfType) => Integer =
    <OfType extends NoUnits>(integer: OfType): Integer =>
        integer as unknown as Integer

// Cycle

const Cycle: <ElementType>(cycle: ElementType[]) => Cycle<ElementType> =
    <ElementType>(cycle: ElementType[]): Cycle<ElementType> => {
        (cycle as Cycle<ElementType>)._CycleBrand = true

        return cycle as Cycle<ElementType>
    }

// Blocks & Contours

const Block: (block: number[]) => Block =
    (block: number[]): Block => block as unknown as Block

const ContourElement: <ContourType>(contourElement: number[]) => ContourElement<ContourType> =
    <ContourType>(contourElement: number[]): ContourElement<ContourType> =>
        contourElement as unknown as ContourElement<ContourType>
const ContourPiece: <ContourType>(contourPiece: Array<number[] | ContourElement<ContourType>>) => ContourPiece<ContourType> =
    <ContourType>(contourPiece: Array<number[] | ContourElement<ContourType>>): ContourPiece<ContourType> =>
        contourPiece.map((contourElement: number[] | ContourElement<ContourType>): ContourElement<ContourType> =>
            contourElement as unknown as ContourElement<ContourType>) as unknown as ContourPiece<ContourType>
const ContourWhole: <ContourType>(contourWhole: Array<number[] | ContourElement<ContourType>>) => ContourWhole<ContourType> =
    <ContourType>(contourWhole: Array<number[] | ContourElement<ContourType>>): ContourWhole<ContourType> =>
        contourWhole.map((contourElement: number[] | ContourElement<ContourType>): ContourElement<ContourType> =>
            contourElement as unknown as ContourElement<ContourType>) as unknown as ContourWhole<ContourType>

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
    ContourElement,
    ContourPiece,
    ContourWhole,
    Fraction,
    Numerator,
    Denominator,
    Modulus,
    Rotation,
    Ordinal,
    Integer,
    Meters,
    Space,
    Time,
    Frequency,
    Gain,
    UnitScalar,
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
