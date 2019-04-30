// tslint:disable max-file-line-count no-magic-numbers max-line-length

import { Difference } from '../code'

// Utilities - Units

type NoUnits = Number & { _UnitsBrand?: 'NoUnits' }
type UnitsBrand<UnitsName> = NoUse & { _UnitsBrand: UnitsName } & MaybeWhole<UnitsName>

type AbstractToPhysical<AbstractType extends { _UnitsBrand: string }> =
    AbstractType extends { _UseBrand: 'Frequency' } ? Hz :
        AbstractType extends { _UseBrand: 'Time' } ? Ms :
            AbstractType extends { _UseBrand: 'Space' } ? Meters :
                AbstractType

// Units - Unwhole - Physical

type Hz = UnitsBrand<'Hz'>
type Ms = UnitsBrand<'Ms'>
type Meters = UnitsBrand<'Meters'>

// Units - Unwhole - Abstract

type Frequency = UnitsBrand<'Frequency'>
type Time = UnitsBrand<'Time'>
type Space = UnitsBrand<'Space'>

// Units - Unwhole - Other

type Radians = UnitsBrand<'Radians'>

type Cents = UnitsBrand<'Cents'>
type Semitones = UnitsBrand<'Semitones'>

type Gain = UnitsBrand<'Gain'>

// Units - Whole

type Numerator = UnitsBrand<'Numerator'>
type Denominator = UnitsBrand<'Denominator'>

type Fraction = [ Numerator, Denominator ]

// Utilities - Uses

type NoUse = Number & { _UseBrand?: 'NoUse' }

type UseBrand<UseName, OfType = number> =
    UseOf<OfType>
    & { _UseBrand: UseName }
    & MaybeWhole<UseName>
    & MaybeNormal<UseName>

type UseNameFromUse<Use> =
    Use extends Multiple ? 'Multiple' & 'Scalar' :
        Use extends Cardinal ? 'Cardinal' & 'Translation' :
            Use extends Transposition ? 'Transposition' & 'Rotation' :
                Use extends Power ? 'Power' & 'Exponent' :
                    Use extends Base ? 'Base' & 'Logarithm' :
                        Use extends Remaindee ? 'Remaindee' & 'Modulus' :
                            Use extends Ordinal ? 'Ordinal' & 'Point' :
                                Use extends NormalScalar ? 'NormalScalar' & 'Scalar' :
                                    Use extends Scalar ? 'Scalar' :
                                        Use extends Translation ? 'Translation' :
                                            Use extends Rotation ? 'Rotation' :
                                                Use extends Exponent ? 'Exponent' :
                                                    Use extends Logarithm ? 'Logarithm' :
                                                        Use extends Modulus ? 'Modulus' :
                                                            Use extends Point ? 'Point' :
                                                                ''

type UseOf<OfType> = Number & { _UseOfBrand: OfType }
type NoOf = number & { _OfBrand?: 'NoOf' }
type Of<OfType> = number | { _OfBrand: OfType }

// Uses - Unwhole - Transformation

type Scalar<OfType extends CanBeAsAnUnwholeUseOfSomeType = number> = UseBrand<'Scalar', OfType>
type Translation<OfType extends CanBeAsAnUnwholeUseOfSomeType = number> = UseBrand<'Translation', OfType>
type Rotation<OfType extends CanBeAsAnUnwholeUseOfSomeType = number> = UseBrand<'Rotation', OfType>

// Uses - Unwhole - Other

type Exponent<OfType extends CanBeAsAnUnwholeUseOfSomeType = number> = UseBrand<'Exponent', OfType>
type Logarithm<OfType extends CanBeAsAnUnwholeUseOfSomeType = number> = UseBrand<'Logarithm', OfType>
type Modulus<OfType extends CanBeAsAnUnwholeUseOfSomeType = number> = UseBrand<'Modulus', OfType>

// Uses - Unwhole - Fixed

type Point<OfType extends CanBeAsAnUnwholeUseOfSomeType & NoUse = number> = UseBrand<'Point', OfType>

// Uses - Unwhole - Compound

type Interval<OfType extends CanBeAsAnUnwholeUseOfSomeType = number> = Scalar<Point<OfType>>
type Delta<OfType extends CanBeAsAnUnwholeUseOfSomeType = number> = Translation<Point<OfType>>
type Arc<OfType extends CanBeAsAnUnwholeUseOfSomeType = number> = Rotation<Point<OfType>>

// Uses - Whole - Transformation, with Array Overloads

type Multiple<OfType extends CanBeAsAWholeUseWithAnArrayOverloadOfSomeType = number> = UseBrand<'Multiple' & 'Scalar', OfType>
type Cardinal<OfType extends CanBeAsAWholeUseWithAnArrayOverloadOfSomeType = number> = UseBrand<'Cardinal' & 'Translation', OfType>
type Transposition<OfType extends CanBeAsAWholeUseWithAnArrayOverloadOfSomeType = number> = UseBrand<'Transposition' & 'Rotation', OfType>

// Uses - Whole - Other

type Power<OfType extends CanBeAsAWholeUseOfSomeType = number> = UseBrand<'Power' & 'Exponent', OfType>
type Base<OfType extends CanBeAsAWholeUseOfSomeType = number> = UseBrand<'Base' & 'Logarithm', OfType>
type Remaindee<OfType extends CanBeAsAWholeUseOfSomeType = number> = UseBrand<'Remaindee' & 'Modulus', OfType>

// Uses - Whole - Fixed, only for Arrays

type Ordinal<OfType extends { _OfBrand?: 'NoOf' } & ArrayedType = number[]> = UseBrand<'Ordinal' & 'Point', OfType>

// Uses - Whole - Compound, only for Arrays

type Factor<OfType extends { _OfBrand?: 'NoOf' } & ArrayedType = number[]> = Multiple<Ordinal<OfType>>
type Transition<OfType extends { _OfBrand?: 'NoOf' } & ArrayedType = number[]> = Cardinal<Ordinal<OfType>>
type Turn<OfType extends { _OfBrand?: 'NoOf' } & ArrayedType = number[]> = Transposition<Ordinal<OfType>>

// Utilities - Normal

type MaybeNormal<Name> =
    Name extends 'NormalScalar' ? Normal :
        {}

type Normal = Number & { _NormalBrand: 'Normal' }
type NonNormal = Number & { _NormalBrand?: 'NonNormal' }

// Uses - Normal

type NormalScalar<OfType extends Unwhole = number> = UseBrand<'NormalScalar' & 'Scalar', OfType>

// Wholeness

type Integer = number & Whole
type Whole = Number & { _IntegerBrand: 'Integer' }
type Unwhole = Number & { _IntegerBrand?: 'NotInteger' }

type UnwholeVersion<NumericType extends Number> = (
    NumericType extends Whole ?
        NumericType extends ({ _UseBrand: string } | { _UnitsBrand: string }) ?
            WholeToUnwhole<NumericType> & { _IntegerBrand: 'NotInteger' } :
            number & { _IntegerBrand: 'NotInteger' } :
        NumericType extends ({ _UseBrand: string } | { _UnitsBrand: string }) ?
            WholeToUnwhole<NumericType> :
            NumericType
    )

type WholeVersion<NumericType extends Number> =
    { _IntegerBrand: 'Integer' } &
    (NumericType extends { _UseBrand: string } ? UnwholeToWhole<NumericType> : NumericType)

type UnwholeToWhole<UnwholeType extends { _UseBrand: string }> =
    UnwholeType extends { _UseBrand: 'Scalar' } ? Difference<UnwholeType, { _UseBrand: 'Scalar' }> & { _UseBrand: 'Multiple' & 'Scalar' } :
        UnwholeType extends { _UseBrand: 'Translation' } ? Difference<UnwholeType, { _UseBrand: 'Translation' }> & { _UseBrand: 'Cardinal' & 'Translation' } :
            UnwholeType extends { _UseBrand: 'Rotation' } ? Difference<UnwholeType, { _UseBrand: 'Rotation' }> & { _UseBrand: 'Transposition' & 'Rotation' } :
                UnwholeType extends { _UseBrand: 'Exponent' } ? Difference<UnwholeType, { _UseBrand: 'Exponent' }> & { _UseBrand: 'Power' & 'Exponent' } :
                    UnwholeType extends { _UseBrand: 'Logarithm' } ? Difference<UnwholeType, { _UseBrand: 'Logarithm' }> & { _UseBrand: 'Base' & 'Logarithm' } :
                        UnwholeType extends { _UseBrand: 'Modulus' } ? Difference<UnwholeType, { _UseBrand: 'Modulus' }> & { _UseBrand: 'Remaindee' & 'Modulus' } :
                            UnwholeType extends { _UseBrand: 'Point' } ? Difference<UnwholeType, { _UseBrand: 'Point' }> & { _UseBrand: 'Ordinal' & 'Point' } :
                                UnwholeType

type WholeToUnwhole<WholeType extends { _UseBrand: string } | { _UnitsBrand: string }> =
    WholeType extends { _UnitsBrand: 'Numerator' } ? number :
        WholeType extends { _UnitsBrand: 'Denominator' } ? number :
            WholeType extends { _UseBrand: 'Multiple' & 'Scalar' } ? Difference<WholeType, { _UseBrand: 'Multiple' & 'Scalar' }> & { _UseBrand: 'Scalar' } :
                WholeType extends { _UseBrand: 'Cardinal' & 'Translation' } ? Difference<WholeType, { _UseBrand: 'Cardinal' & 'Translation' }> & { _UseBrand: 'Translation' } :
                    WholeType extends { _UseBrand: 'Transposition' & 'Rotation' } ? Difference<WholeType, { _UseBrand: 'Transposition' & 'Rotation' }> & { _UseBrand: 'Rotation' } :
                        WholeType extends { _UseBrand: 'Power' & 'Exponent' } ? Difference<WholeType, { _UseBrand: 'Power' & 'Exponent' }> & { _UseBrand: 'Exponent' } :
                            WholeType extends { _UseBrand: 'Base' & 'Logarithm' } ? Difference<WholeType, { _UseBrand: 'Base' & 'Logarithm' }> & { _UseBrand: 'Logarithm' } :
                                WholeType extends { _UseBrand: 'Remaindee' & 'Modulus' } ? Difference<WholeType, { _UseBrand: 'Remaindee' & 'Modulus' }> & { _UseBrand: 'Modulus' } :
                                    WholeType extends { _UseBrand: 'Ordinal' & 'Point' } ? Difference<WholeType, { _UseBrand: 'Ordinal' & 'Point' }> & { _UseBrand: 'Point' } :
                                        WholeType

type MaybeWhole<Name> =
    Name extends 'Multiple' ? Whole :
        Name extends 'Cardinal' ? Whole :
            Name extends 'Transposition' ? Whole :
                Name extends 'Power' ? Whole :
                    Name extends 'Base' ? Whole :
                        Name extends 'Remaindee' ? Whole :
                            Name extends 'Ordinal' ? Whole :
                                Name extends 'Numerator' ? Whole :
                                    Name extends 'Denominator' ? Whole :
                                        {}

type CanBeAsAWholeUseOfSomeType = NonNormal
type CanBeAsAWholeUseOfNoType = CanBeAsAWholeUseOfSomeType & NoOf
type CanBeAsAnUnwholeUseOfSomeType = CanBeAsAWholeUseOfSomeType & Unwhole
type CanBeAsAnUnwholeUseOfNoType = CanBeAsAWholeUseOfNoType & Unwhole

// Array

type ArrayedType = unknown[] | Cycle<unknown> | string
type CanBeAsAWholeUseWithAnArrayOverloadOfSomeType = CanBeAsAWholeUseOfSomeType | ArrayedType
type CanBeAsAWholeUseWithAnArrayOverloadOfNoType = CanBeAsAWholeUseOfNoType | ArrayedType
// tslint:disable-next-line no-any
type AnyArrayedType = any[] & Cycle<any> & string

type Cycle<ElementType = number> = ElementType[] & { _CycleBrand: boolean }

type Block = number[] & { _BlockBrand: void }

type ContourElement<ContourType> = [ number, ...number[] ] &
    { length: ContourType } & (
    ContourType extends 1 ? { 0: number } :
        ContourType extends 2 ? { 0: number, 1: number } :
            ContourType extends 3 ? { 0: number, 1: number, 2: number } :
                ContourType extends 4 ? { 0: number, 1: number, 2: number, 3: number } :
                    ContourType extends 5 ? { 0: number, 1: number, 2: number, 3: number, 4: number } :
                        ContourType extends 6 ? { 0: number, 1: number, 2: number, 3: number, 4: number, 5: number } :
                            ContourType extends 7 ? { 0: number, 1: number, 2: number, 3: number, 4: number, 5: number, 6: number } :
                                ContourType extends 8 ? { 0: number, 1: number, 2: number, 3: number, 4: number, 5: number, 6: number, 7: number } :
                                    ContourType extends 9 ? { 0: number, 1: number, 2: number, 3: number, 4: number, 5: number, 6: number, 7: number, 8: number } :
                                        ContourType extends 10 ? { 0: number, 1: number, 2: number, 3: number, 4: number, 5: number, 6: number, 7: number, 8: number, 9: number } :
                                            { [ index: number ]: number }
    )

type ContourPiece<ContourType> = Array<ContourElement<ContourType>> & { _ContourPieceBrand: void }
type ContourWhole<ContourType> = Array<ContourElement<ContourType>> & { _ContourWholeBrand: void }

export {
    Base,
    Cardinal,
    Scalar,
    Translation,
    Power,
    Hz,
    Ms,
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
    NoUnits,
    NoUse,
    Integer,
    Meters,
    Space,
    Time,
    Frequency,
    Gain,
    NormalScalar,
    UseBrand,
    UseOf,
    UnitsBrand,
    Multiple,
    Of,
    UseNameFromUse,
    NoOf,
    Whole,
    Unwhole,
    Exponent,
    Logarithm,
    Remaindee,
    NonNormal,
    UnwholeVersion,
    WholeVersion,
    CanBeAsAWholeUseOfNoType,
    CanBeAsAnUnwholeUseOfNoType,
    Transposition,
    Point,
    CanBeAsAWholeUseOfSomeType,
    CanBeAsAnUnwholeUseOfSomeType,
    CanBeAsAWholeUseWithAnArrayOverloadOfNoType,
    CanBeAsAWholeUseWithAnArrayOverloadOfSomeType,
    ArrayedType,
    AnyArrayedType,
    Interval,
    Delta,
    Arc,
    Factor,
    Transition,
    Turn,
    AbstractToPhysical,
}
