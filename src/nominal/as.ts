// tslint:disable variable-name max-file-line-count max-line-length

import { integerCheck, normalCheck } from './checks'
import { as } from './index'
import {
    Amplitude,
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
    NoUnits,
    NoUse,
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

const number: <FractionOrNumericType extends Number | Fraction>(asNumber: FractionOrNumericType) => number =
    <FractionOrNumericType extends Number | Fraction>(asNumber: FractionOrNumericType): number => {
        if (asNumber instanceof Array) {
            return as.number(asNumber[ 0 ]) * (1 / as.number(asNumber[ 1 ]))
        }

        return asNumber as unknown as number
    }

// Units - Unwhole - Physical

const Hz: <NumericType extends NoUnits>(asHz: NumericType) => Hz =
    <NumericType extends NoUnits>(asHz: NumericType): Hz =>
        asHz as unknown as Hz
const Ms: <NumericType extends NoUnits>(asMs: NumericType) => Ms =
    <NumericType extends NoUnits>(asMs: NumericType): Ms =>
        asMs as unknown as Ms
const Meters: <NumericType extends NoUnits>(asMeters: NumericType) => Meters =
    <NumericType extends NoUnits>(asMeters: NumericType): Meters =>
        asMeters as unknown as Meters

// Units - Unwhole - Abstract

const Frequency: <NumericType extends NoUnits>(asFrequency: NumericType) => Frequency =
    <NumericType extends NoUnits>(asFrequency: NumericType): Frequency =>
        asFrequency as unknown as Frequency
const Space: <NumericType extends NoUnits>(asSpace: NumericType) => Space =
    <NumericType extends NoUnits>(asSpace: NumericType): Space =>
        asSpace as unknown as Space
const Time: <NumericType extends NoUnits>(asTime: NumericType) => Time =
    <NumericType extends NoUnits>(asTime: NumericType): Time =>
        asTime as unknown as Time

// Units - Unwhole - Other

const Radians: <NumericType extends NoUnits>(asRadians: NumericType) => Radians =
    <NumericType extends NoUnits>(asRadians: NumericType): Radians =>
        asRadians as unknown as Radians

const Cents: <NumericType extends NoUnits>(asCents: NumericType) => Cents =
    <NumericType extends NoUnits>(asCents: NumericType): Cents =>
        asCents as unknown as Cents
const Semitones: <NumericType extends NoUnits>(asSemitones: NumericType) => Semitones =
    <NumericType extends NoUnits>(asSemitones: NumericType): Semitones =>
        asSemitones as unknown as Semitones

const Amplitude: <NumericType extends NoUnits>(asAmplitude: NumericType) => Amplitude =
    <NumericType extends NoUnits>(asAmplitude: NumericType): Amplitude =>
        asAmplitude as unknown as Amplitude

// Units - Whole

const Numerator: <NumericType extends NoUnits>(asNumerator: NumericType) => Numerator =
    <NumericType extends NoUnits>(asNumerator: NumericType): Numerator =>
        integerCheck(asNumerator, 'Numerator') as unknown as Numerator
const Denominator: <NumericType extends NoUnits>(asDenominator: NumericType) => Denominator =
    <NumericType extends NoUnits>(asDenominator: NumericType): Denominator =>
        integerCheck(asDenominator, 'Denominator') as unknown as Denominator

const Fraction: (fraction: [ Integer | Numerator, Integer | Denominator ]) => Fraction =
    ([ asNumerator, asDenominator ]: [ Integer | Numerator, Integer | Denominator ]): Fraction =>
        [
            integerCheck(asNumerator, 'Numerator'),
            integerCheck(asDenominator, 'Denominator'),
        ] as unknown as Fraction

// Uses - Unwhole - Transformation

const Scalar: {
    <OfType extends CanBeAsAnUnwholeUseOfNoType = number>(asScalar: OfType): Scalar,
    <OfType extends CanBeAsAnUnwholeUseOfSomeType = number>(asScalar: number | Of<OfType>): Scalar<OfType>,
    <OfType extends CanBeAsAnUnwholeUseOfNoType = number>(asScalar: OfType): Scalar,
} =
    <OfType extends Unwhole | NoOf = number>(asScalar: OfType | number | Of<OfType>): Scalar<OfType> =>
        asScalar as unknown as Scalar<OfType>
const Translation: {
    <OfType extends CanBeAsAnUnwholeUseOfNoType = number>(asTranslation: OfType): Translation,
    <OfType extends CanBeAsAnUnwholeUseOfSomeType = number>(asTranslation: number | Of<OfType>): Translation<OfType>,
    <OfType extends CanBeAsAnUnwholeUseOfNoType = number>(asTranslation: OfType): Translation,
} =
    <OfType extends Unwhole | NoOf = number>(asTranslation: OfType | number | Of<OfType>): Translation<OfType> =>
        asTranslation as unknown as Translation<OfType>
const Rotation: {
    <OfType extends CanBeAsAnUnwholeUseOfNoType = number>(asRotation: OfType): Rotation,
    <OfType extends CanBeAsAnUnwholeUseOfSomeType = number>(asRotation: number | Of<OfType>): Rotation<OfType>,
    <OfType extends CanBeAsAnUnwholeUseOfNoType = number>(asRotation: OfType): Rotation,
} =
    <OfType extends Number | NoOf = number>(asRotation: OfType | number | Of<OfType>): Rotation<OfType> =>
        asRotation as unknown as Rotation<OfType>

// Uses - Unwhole - Other

const Exponent: {
    <OfType extends CanBeAsAnUnwholeUseOfNoType = number>(asExponent: OfType): Exponent,
    <OfType extends CanBeAsAnUnwholeUseOfSomeType = number>(asExponent: number | Of<OfType>): Exponent<OfType>,
    <OfType extends CanBeAsAnUnwholeUseOfNoType = number>(asExponent: OfType): Exponent,
} =
    <OfType extends Unwhole | NoOf = number>(asExponent: OfType | number | Of<OfType>): Exponent<OfType> =>
        asExponent as unknown as Exponent<OfType>
const Logarithm: {
    <OfType extends CanBeAsAnUnwholeUseOfNoType = number>(asLogarithm: OfType): Logarithm,
    <OfType extends CanBeAsAnUnwholeUseOfSomeType = number>(asLogarithm: number | Of<OfType>): Logarithm<OfType>,
    <OfType extends CanBeAsAnUnwholeUseOfNoType = number>(asLogarithm: OfType): Logarithm,
} =
    <OfType extends Unwhole | NoOf = number>(asLogarithm: OfType | number | Of<OfType>): Logarithm<OfType> =>
        asLogarithm as unknown as Logarithm<OfType>
const Modulus: {
    <OfType extends CanBeAsAnUnwholeUseOfNoType = number>(asModulus: OfType): Modulus,
    <OfType extends CanBeAsAnUnwholeUseOfSomeType = number>(asModulus: number | Of<OfType>): Modulus<OfType>,
    <OfType extends CanBeAsAnUnwholeUseOfNoType = number>(asModulus: OfType): Modulus,
} =
    <OfType extends Unwhole | NoOf = number>(asModulus: OfType | number | Of<OfType>): Modulus<OfType> =>
        asModulus as unknown as Modulus<OfType>

// Uses - Unwhole - Fixed

const Point: {
    <OfType extends CanBeAsAnUnwholeUseOfNoType & NoUse = number>(asPoint: OfType): Point,
    <OfType extends CanBeAsAnUnwholeUseOfSomeType & NoUse = number>(asPoint: number | Of<OfType>): Point<OfType>,
    <OfType extends CanBeAsAnUnwholeUseOfNoType & NoUse = number>(asPoint: OfType): Point,
} =
    <OfType extends Unwhole | NoOf = number>(asPoint: OfType | number | Of<OfType>): Point<OfType> =>
        asPoint as unknown as Point<OfType>

// Uses - Unwhole - Compound

const Interval: {
    <OfType extends CanBeAsAnUnwholeUseOfNoType = number>(asInterval: OfType): Interval,
    <OfType extends CanBeAsAnUnwholeUseOfSomeType = number>(asInterval: number | Of<OfType>): Interval<OfType>,
    <OfType extends CanBeAsAnUnwholeUseOfNoType = number>(asInterval: OfType): Interval,
} =
    <OfType extends Unwhole | NoOf = number>(asInterval: OfType | number | Of<OfType>): Interval<OfType> =>
        asInterval as unknown as Interval<OfType>
const Delta: {
    <OfType extends CanBeAsAnUnwholeUseOfNoType = number>(asDelta: OfType): Delta,
    <OfType extends CanBeAsAnUnwholeUseOfSomeType = number>(asDelta: number | Of<OfType>): Delta<OfType>,
    <OfType extends CanBeAsAnUnwholeUseOfNoType = number>(asDelta: OfType): Delta,
} =
    <OfType extends Unwhole | NoOf = number>(asDelta: OfType | number | Of<OfType>): Delta<OfType> =>
        asDelta as unknown as Delta<OfType>
const Arc: {
    <OfType extends CanBeAsAnUnwholeUseOfNoType = number>(asArc: OfType): Arc,
    <OfType extends CanBeAsAnUnwholeUseOfSomeType = number>(asArc: number | Of<OfType>): Arc<OfType>,
    <OfType extends CanBeAsAnUnwholeUseOfNoType = number>(asArc: OfType): Arc,
} =
    <OfType extends Unwhole | NoOf = number>(asArc: OfType | number | Of<OfType>): Arc<OfType> =>
        asArc as unknown as Arc<OfType>

// Uses - Whole - Transformation, with Array Overloads

const Multiple: {
    <OfType extends CanBeAsAWholeUseWithAnArrayOverloadOfNoType = number>(asMultiple: OfType): Multiple,
    <OfType extends CanBeAsAWholeUseWithAnArrayOverloadOfSomeType = number>(asMultiple: number | Of<OfType>): Multiple<OfType>,
    <OfType extends CanBeAsAWholeUseWithAnArrayOverloadOfNoType = number>(asMultiple: OfType): Multiple,
} =
    <OfType extends Unwhole | NoOf = number>(asMultiple: OfType | number | Of<OfType>): Multiple<OfType> =>
        integerCheck(asMultiple as number, 'Multiple') as unknown as Multiple<OfType>
const Cardinal: {
    <OfType extends CanBeAsAWholeUseWithAnArrayOverloadOfNoType = number>(asCardinal: OfType): Cardinal,
    <OfType extends CanBeAsAWholeUseWithAnArrayOverloadOfSomeType = number>(asCardinal: number | Of<OfType>): Cardinal<OfType>,
    <OfType extends CanBeAsAWholeUseWithAnArrayOverloadOfNoType = number>(asCardinal: OfType): Cardinal,
} =
    <OfType extends Unwhole | NoOf = number>(asCardinal: OfType | number | Of<OfType>): Cardinal<OfType> =>
        integerCheck(asCardinal as unknown as number, 'Cardinal') as unknown as Cardinal<OfType>
const Transposition: {
    <OfType extends CanBeAsAWholeUseWithAnArrayOverloadOfNoType = number>(asTransposition: OfType): Transposition,
    <OfType extends CanBeAsAWholeUseWithAnArrayOverloadOfSomeType = number>(asTransposition: number | Of<OfType>): Transposition<OfType>,
    <OfType extends CanBeAsAWholeUseWithAnArrayOverloadOfNoType = number>(asTransposition: OfType): Transposition,
} =
    <OfType extends Unwhole | NoOf = number>(asTransposition: OfType | number | Of<OfType>): Transposition<OfType> =>
        integerCheck(asTransposition as number, 'Transposition') as unknown as Transposition<OfType>

// Uses - Whole - Other

const Power: {
    <OfType extends CanBeAsAWholeUseOfNoType = number>(asPower: OfType): Power,
    <OfType extends CanBeAsAWholeUseOfSomeType = number>(asPower: number | Of<OfType>): Power<OfType>,
    <OfType extends CanBeAsAWholeUseOfNoType = number>(asPower: OfType): Power,
} =
    <OfType extends Unwhole | NoOf = number>(asPower: OfType | number | Of<OfType>): Power<OfType> =>
        integerCheck(asPower as number, 'Power') as unknown as Power<OfType>
const Base: {
    <OfType extends CanBeAsAWholeUseOfNoType = number>(asBase: OfType): Base,
    <OfType extends CanBeAsAWholeUseOfSomeType = number>(asBase: number | Of<OfType>): Base<OfType>,
    <OfType extends CanBeAsAWholeUseOfNoType = number>(asBase: OfType): Base,
} =
    <OfType extends Unwhole | NoOf = number>(asBase: OfType | number | Of<OfType>): Base<OfType> =>
        integerCheck(asBase as number, 'Base') as unknown as Base<OfType>
const Remaindee: {
    <OfType extends CanBeAsAWholeUseOfNoType = number>(asRemaindee: OfType): Remaindee,
    <OfType extends CanBeAsAWholeUseOfSomeType = number>(asRemaindee: number | Of<OfType>): Remaindee<OfType>,
    <OfType extends CanBeAsAWholeUseOfNoType = number>(asRemaindee: OfType): Remaindee,
} =
    <OfType extends Unwhole | NoOf = number>(asRemaindee: OfType | number | Of<OfType>): Remaindee<OfType> =>
        integerCheck(asRemaindee as number, 'Remaindee') as unknown as Remaindee<OfType>

// Uses - Whole - Fixed, only for Arrays

const Ordinal: {
    <OfType extends NoOf = number>(asOrdinal: OfType): Ordinal,
    <OfType extends ArrayedType = number[]>(asOrdinal: number | Of<OfType>): Ordinal<OfType>,
    <OfType extends NoOf = number>(asOrdinal: OfType): Ordinal,
} =
    <OfType = number>(asOrdinal: OfType | number | Of<OfType>): Ordinal<OfType[]> =>
        integerCheck(asOrdinal as unknown as number, 'Ordinal') as unknown as Ordinal<OfType[]>

// Uses - Whole - Compound, only for Arrays

const Factor: {
    <OfType extends NoOf = number>(asFactor: OfType): Factor,
    <OfType extends ArrayedType = number[]>(asFactor: number | Of<OfType>): Factor<OfType>,
    <OfType extends NoOf = number>(asFactor: OfType): Factor,
} =
    <OfType = number>(asFactor: OfType | number | Of<OfType>): Factor<OfType[]> =>
        integerCheck(asFactor as unknown as number, 'Factor') as unknown as Factor<OfType[]>
const Transition: {
    <OfType extends NoOf = number>(asTransition: OfType): Transition,
    <OfType extends ArrayedType = number[]>(asTransition: number | Of<OfType>): Transition<OfType>,
    <OfType extends NoOf = number>(asTransition: OfType): Transition,
} =
    <OfType = number>(asTransition: OfType | number | Of<OfType>): Transition<OfType[]> =>
        integerCheck(asTransition as unknown as number, 'Transition') as unknown as Transition<OfType[]>
const Turn: {
    <OfType extends NoOf = number>(asTurn: OfType): Turn,
    <OfType extends ArrayedType = number[]>(asTurn: number | Of<OfType>): Turn<OfType>,
    <OfType extends NoOf = number>(asTurn: OfType): Turn,
} =
    <OfType = number>(asTurn: OfType | number | Of<OfType>): Turn<OfType[]> =>
        integerCheck(asTurn as unknown as number, 'Turn') as unknown as Turn<OfType[]>

// Uses - Normal

const NormalScalar: {
    <OfType extends Unwhole & NoOf = number>(asNormalScalar: OfType): NormalScalar,
    <OfType extends Unwhole = number>(asNormalScalar: number | Of<OfType>): NormalScalar<OfType>,
    <OfType extends Unwhole & NoOf = number>(asNormalScalar: OfType): NormalScalar,
} =
    <OfType extends Unwhole | NoOf = number>(asNormalScalar: OfType | number | Of<OfType>): NormalScalar<OfType> =>
        normalCheck(asNormalScalar as unknown as number, 'NormalScalar') as unknown as NormalScalar<OfType>

// Wholeness

const Integer: <OfType extends NoUnits>(asInteger: OfType) => Integer =
    <OfType extends NoUnits>(asInteger: OfType): Integer =>
        integerCheck(asInteger as unknown as number, 'Integer') as unknown as Integer

// Array

const Cycle: <ElementType, ArrayType extends ArrayedType<ElementType>>(asCycle: ArrayType) => Cycle<ElementType> =
    <ElementType, ArrayType extends ArrayedType<ElementType>>(asCycle: ArrayType): Cycle<ElementType> => {
        const brandedAsCycle: Cycle<ElementType> = asCycle.slice() as Cycle<ElementType>

        // tslint:disable-next-line strict-type-predicates
        if (typeof brandedAsCycle !== 'string') {
            brandedAsCycle._CycleBrand = true
        }

        return brandedAsCycle
    }

const Block: (asBlock: number[]) => Block =
    (asBlock: number[]): Block => asBlock as unknown as Block

const ContourElement: <ContourType>(asContourElement: number[]) => ContourElement<ContourType> =
    <ContourType>(asContourElement: number[]): ContourElement<ContourType> =>
        asContourElement as unknown as ContourElement<ContourType>
const ContourPiece: <ContourType>(asContourPiece: Array<number[] | ContourElement<ContourType>>) => ContourPiece<ContourType> =
    <ContourType>(asContourPiece: Array<number[] | ContourElement<ContourType>>): ContourPiece<ContourType> =>
        asContourPiece.map((asContourElement: number[] | ContourElement<ContourType>): ContourElement<ContourType> =>
            asContourElement as unknown as ContourElement<ContourType>) as unknown as ContourPiece<ContourType>
const ContourWhole: <ContourType>(asContourWhole: Array<number[] | ContourElement<ContourType>>) => ContourWhole<ContourType> =
    <ContourType>(asContourWhole: Array<number[] | ContourElement<ContourType>>): ContourWhole<ContourType> =>
        asContourWhole.map((asContourElement: number[] | ContourElement<ContourType>): ContourElement<ContourType> =>
            asContourElement as unknown as ContourElement<ContourType>) as unknown as ContourWhole<ContourType>

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
    Amplitude,
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
