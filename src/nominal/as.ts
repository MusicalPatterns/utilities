// tslint:disable variable-name max-file-line-count max-line-length

import { integerCheck, normalCheck } from './checks'
import { as } from './index'
import {
    Arc,
    ArrayedType,
    Base,
    Block,
    CanBeAsAnUnwholeUseOfNoType,
    CanBeAsAnUnwholeUseOfSomeType,
    CanBeAsAWholeUseOfNoType,
    CanBeAsAWholeUseOfSomeType,
    CanBeAsAWholeUseWithAnArrayOverloadOfNoType,
    CanBeAsAWholeUseWithAnArrayOverloadOfSomeType,
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
    Interval,
    Logarithm,
    Meters,
    Modulus,
    Ms,
    Multiple,
    NoOf,
    NormalScalar,
    NoUnits, NoUse,
    Numerator,
    Of,
    Ordinal,
    Point,
    Power,
    Radians,
    Remaindee,
    Rotation,
    Scalar,
    Semitones,
    Space,
    Time,
    Transition,
    Translation,
    Transposition,
    Turn,
    Unwhole,
} from './types'

// Removal

const number: <FractionOrNumericType extends Number | Fraction>(nothing: FractionOrNumericType) => number =
    <FractionOrNumericType extends Number | Fraction>(nothing: FractionOrNumericType): number => {
        if (nothing instanceof Array) {
            return as.number(nothing[ 0 ]) * (1 / as.number(nothing[ 1 ]))
        }

        return nothing as unknown as number
    }

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

// Whole Units

const Numerator: <NumericType extends NoUnits>(numerator: NumericType) => Numerator =
    <NumericType extends NoUnits>(numerator: NumericType): Numerator =>
        integerCheck(numerator, 'Numerator') as unknown as Numerator
const Denominator: <NumericType extends NoUnits>(denominator: NumericType) => Denominator =
    <NumericType extends NoUnits>(denominator: NumericType): Denominator =>
        integerCheck(denominator, 'Denominator') as unknown as Denominator

const Fraction: (fraction: [ Integer | Numerator, Integer | Denominator ]) => Fraction =
    ([ numerator, denominator ]: [ Integer | Numerator, Integer | Denominator ]): Fraction =>
        [
            integerCheck(numerator, 'Numerator'),
            integerCheck(denominator, 'Denominator'),
        ] as unknown as Fraction

// Unwhole Transformation Uses

const Scalar: {
    <OfType extends CanBeAsAnUnwholeUseOfNoType = number>(scalar: OfType): Scalar,
    <OfType extends CanBeAsAnUnwholeUseOfSomeType = number>(scalar: number | Of<OfType>): Scalar<OfType>,
    <OfType extends CanBeAsAnUnwholeUseOfNoType = number>(scalar: OfType): Scalar,
} =
    <OfType extends Unwhole | NoOf = number>(scalar: OfType | number | Of<OfType>): Scalar<OfType> =>
        scalar as unknown as Scalar<OfType>
const Translation: {
    <OfType extends CanBeAsAnUnwholeUseOfNoType = number>(translation: OfType): Translation,
    <OfType extends CanBeAsAnUnwholeUseOfSomeType = number>(translation: number | Of<OfType>): Translation<OfType>,
    <OfType extends CanBeAsAnUnwholeUseOfNoType = number>(translation: OfType): Translation,
} =
    <OfType extends Unwhole | NoOf = number>(translation: OfType | number | Of<OfType>): Translation<OfType> =>
        translation as unknown as Translation<OfType>
const Rotation: {
    <OfType extends CanBeAsAnUnwholeUseOfNoType = number>(rotation: OfType): Rotation,
    <OfType extends CanBeAsAnUnwholeUseOfSomeType = number>(rotation: number | Of<OfType>): Rotation<OfType>,
    <OfType extends CanBeAsAnUnwholeUseOfNoType = number>(rotation: OfType): Rotation,
} =
    <OfType extends Number | NoOf = number>(rotation: OfType | number | Of<OfType>): Rotation<OfType> =>
        rotation as unknown as Rotation<OfType>

// Unwhole Non-Transformation Uses

const Exponent: {
    <OfType extends CanBeAsAnUnwholeUseOfNoType = number>(exponent: OfType): Exponent,
    <OfType extends CanBeAsAnUnwholeUseOfSomeType = number>(exponent: number | Of<OfType>): Exponent<OfType>,
    <OfType extends CanBeAsAnUnwholeUseOfNoType = number>(exponent: OfType): Exponent,
} =
    <OfType extends Unwhole | NoOf = number>(exponent: OfType | number | Of<OfType>): Exponent<OfType> =>
        exponent as unknown as Exponent<OfType>
const Logarithm: {
    <OfType extends CanBeAsAnUnwholeUseOfNoType = number>(logarithm: OfType): Logarithm,
    <OfType extends CanBeAsAnUnwholeUseOfSomeType = number>(logarithm: number | Of<OfType>): Logarithm<OfType>,
    <OfType extends CanBeAsAnUnwholeUseOfNoType = number>(logarithm: OfType): Logarithm,
} =
    <OfType extends Unwhole | NoOf = number>(logarithm: OfType | number | Of<OfType>): Logarithm<OfType> =>
        logarithm as unknown as Logarithm<OfType>
const Modulus: {
    <OfType extends CanBeAsAnUnwholeUseOfNoType = number>(modulus: OfType): Modulus,
    <OfType extends CanBeAsAnUnwholeUseOfSomeType = number>(modulus: number | Of<OfType>): Modulus<OfType>,
    <OfType extends CanBeAsAnUnwholeUseOfNoType = number>(modulus: OfType): Modulus,
} =
    <OfType extends Unwhole | NoOf = number>(modulus: OfType | number | Of<OfType>): Modulus<OfType> =>
        modulus as unknown as Modulus<OfType>

// Unwhole Fixed Uses

const Point: {
    <OfType extends CanBeAsAnUnwholeUseOfNoType & NoUse = number>(point: OfType): Point,
    <OfType extends CanBeAsAnUnwholeUseOfSomeType & NoUse = number>(point: number | Of<OfType>): Point<OfType>,
    <OfType extends CanBeAsAnUnwholeUseOfNoType & NoUse = number>(point: OfType): Point,
} =
    <OfType extends Unwhole | NoOf = number>(point: OfType | number | Of<OfType>): Point<OfType> =>
        point as unknown as Point<OfType>

// Unwhole Compound Uses

const Interval: {
    <OfType extends CanBeAsAnUnwholeUseOfNoType = number>(interval: OfType): Interval,
    <OfType extends CanBeAsAnUnwholeUseOfSomeType = number>(interval: number | Of<OfType>): Interval<OfType>,
    <OfType extends CanBeAsAnUnwholeUseOfNoType = number>(interval: OfType): Interval,
} =
    <OfType extends Unwhole | NoOf = number>(interval: OfType | number | Of<OfType>): Interval<OfType> =>
        interval as unknown as Interval<OfType>
const Delta: {
    <OfType extends CanBeAsAnUnwholeUseOfNoType = number>(delta: OfType): Delta,
    <OfType extends CanBeAsAnUnwholeUseOfSomeType = number>(delta: number | Of<OfType>): Delta<OfType>,
    <OfType extends CanBeAsAnUnwholeUseOfNoType = number>(delta: OfType): Delta,
} =
    <OfType extends Unwhole | NoOf = number>(delta: OfType | number | Of<OfType>): Delta<OfType> =>
        delta as unknown as Delta<OfType>
const Arc: {
    <OfType extends CanBeAsAnUnwholeUseOfNoType = number>(arc: OfType): Arc,
    <OfType extends CanBeAsAnUnwholeUseOfSomeType = number>(arc: number | Of<OfType>): Arc<OfType>,
    <OfType extends CanBeAsAnUnwholeUseOfNoType = number>(arc: OfType): Arc,
} =
    <OfType extends Unwhole | NoOf = number>(arc: OfType | number | Of<OfType>): Arc<OfType> =>
        arc as unknown as Arc<OfType>

// Whole Transformation Uses (with overloads for arrays)

const Multiple: {
    <OfType extends CanBeAsAWholeUseWithAnArrayOverloadOfNoType = number>(ordinal: OfType): Multiple,
    <OfType extends CanBeAsAWholeUseWithAnArrayOverloadOfSomeType = number>(ordinal: number | Of<OfType>): Multiple<OfType>,
    <OfType extends CanBeAsAWholeUseWithAnArrayOverloadOfNoType = number>(ordinal: OfType): Multiple,
} =
    <OfType extends Unwhole | NoOf = number>(multiple: OfType | number | Of<OfType>): Multiple<OfType> =>
        integerCheck(multiple as number, 'Multiple') as unknown as Multiple<OfType>
const Cardinal: {
    <OfType extends CanBeAsAWholeUseWithAnArrayOverloadOfNoType = number>(cardinal: OfType): Cardinal,
    <OfType extends CanBeAsAWholeUseWithAnArrayOverloadOfSomeType = number>(cardinal: number | Of<OfType>): Cardinal<OfType>,
    <OfType extends CanBeAsAWholeUseWithAnArrayOverloadOfNoType = number>(cardinal: OfType): Cardinal,
} =
    <OfType extends Unwhole | NoOf = number>(cardinal: OfType | number | Of<OfType>): Cardinal<OfType> =>
        integerCheck(cardinal as unknown as number, 'Cardinal') as unknown as Cardinal<OfType>
const Transposition: {
    <OfType extends CanBeAsAWholeUseWithAnArrayOverloadOfNoType = number>(ordinal: OfType): Transposition,
    <OfType extends CanBeAsAWholeUseWithAnArrayOverloadOfSomeType = number>(ordinal: number | Of<OfType>): Transposition<OfType>,
    <OfType extends CanBeAsAWholeUseWithAnArrayOverloadOfNoType = number>(ordinal: OfType): Transposition,
} =
    <OfType extends Unwhole | NoOf = number>(transposition: OfType | number | Of<OfType>): Transposition<OfType> =>
        integerCheck(transposition as number, 'Transposition') as unknown as Transposition<OfType>

// Whole Non-Transformation Uses

const Power: {
    <OfType extends CanBeAsAWholeUseOfNoType = number>(power: OfType): Power,
    <OfType extends CanBeAsAWholeUseOfSomeType = number>(power: number | Of<OfType>): Power<OfType>,
    <OfType extends CanBeAsAWholeUseOfNoType = number>(power: OfType): Power,
} =
    <OfType extends Unwhole | NoOf = number>(power: OfType | number | Of<OfType>): Power<OfType> =>
        integerCheck(power as number, 'Power') as unknown as Power<OfType>
const Base: {
    <OfType extends CanBeAsAWholeUseOfNoType = number>(base: OfType): Base,
    <OfType extends CanBeAsAWholeUseOfSomeType = number>(base: number | Of<OfType>): Base<OfType>,
    <OfType extends CanBeAsAWholeUseOfNoType = number>(base: OfType): Base,
} =
    <OfType extends Unwhole | NoOf = number>(base: OfType | number | Of<OfType>): Base<OfType> =>
        integerCheck(base as number, 'Base') as unknown as Base<OfType>
const Remaindee: {
    <OfType extends CanBeAsAWholeUseOfNoType = number>(integerModulus: OfType): Remaindee,
    <OfType extends CanBeAsAWholeUseOfSomeType = number>(integerModulus: number | Of<OfType>): Remaindee<OfType>,
    <OfType extends CanBeAsAWholeUseOfNoType = number>(integerModulus: OfType): Remaindee,
} =
    <OfType extends Unwhole | NoOf = number>(integerModulus: OfType | number | Of<OfType>): Remaindee<OfType> =>
        integerCheck(integerModulus as number, 'Remaindee') as unknown as Remaindee<OfType>

// Whole Fixed Uses (only used for arrays)

const Ordinal: {
    <OfType extends NoOf = number>(ordinal: OfType): Ordinal,
    <OfType extends ArrayedType = number[]>(ordinal: number | Of<OfType>): Ordinal<OfType>,
    <OfType extends NoOf = number>(ordinal: OfType): Ordinal,
} =
    <OfType = number>(ordinal: OfType | number | Of<OfType>): Ordinal<OfType[]> =>
        integerCheck(ordinal as unknown as number, 'Ordinal') as unknown as Ordinal<OfType[]>

// Whole Compound Uses

const Factor: {
    <OfType extends NoOf = number>(factor: OfType): Factor,
    <OfType extends ArrayedType = number[]>(factor: number | Of<OfType>): Factor<OfType>,
    <OfType extends NoOf = number>(factor: OfType): Factor,
} =
    <OfType = number>(factor: OfType | number | Of<OfType>): Factor<OfType[]> =>
        integerCheck(factor as unknown as number, 'Factor') as unknown as Factor<OfType[]>
const Transition: {
    <OfType extends NoOf = number>(transition: OfType): Transition,
    <OfType extends ArrayedType = number[]>(transition: number | Of<OfType>): Transition<OfType>,
    <OfType extends NoOf = number>(transition: OfType): Transition,
} =
    <OfType = number>(transition: OfType | number | Of<OfType>): Transition<OfType[]> =>
        integerCheck(transition as unknown as number, 'Transition') as unknown as Transition<OfType[]>
const Turn: {
    <OfType extends NoOf = number>(turn: OfType): Turn,
    <OfType extends ArrayedType = number[]>(turn: number | Of<OfType>): Turn<OfType>,
    <OfType extends NoOf = number>(turn: OfType): Turn,
} =
    <OfType = number>(turn: OfType | number | Of<OfType>): Turn<OfType[]> =>
        integerCheck(turn as unknown as number, 'Turn') as unknown as Turn<OfType[]>

// Normal Uses

const NormalScalar: {
    <OfType extends Unwhole & NoOf = number>(normalScalar: OfType): NormalScalar,
    <OfType extends Unwhole = number>(normalScalar: number | Of<OfType>): NormalScalar<OfType>,
    <OfType extends Unwhole & NoOf = number>(normalScalar: OfType): NormalScalar,
} =
    <OfType extends Unwhole | NoOf = number>(normalScalar: OfType | number | Of<OfType>): NormalScalar<OfType> =>
        normalCheck(normalScalar as unknown as number, 'NormalScalar') as unknown as NormalScalar<OfType>

// Wholeness

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
    NormalScalar,
    Multiple,
    Exponent,
    Logarithm,
    Remaindee,
    Transposition,
    Point,
    Interval,
    Delta,
    Arc,
    Factor,
    Transition,
    Turn,
    number,
}
