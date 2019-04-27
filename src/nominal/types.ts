// tslint:disable max-file-line-count no-magic-numbers max-line-length

import { Difference } from '../code'

interface NominalNumber {
    _NominalBrand?: string,
    _UnitsBrand?: string,
    _UseBrand?: string,
}

// Units Utilities

type NoUnits = Number & { _UnitsBrand?: 'NoUnits' }
type UnitsBrand<UnitsName> = NoUse & { _UnitsBrand: UnitsName } & MaybeWhole<UnitsName>

// Concrete Units

type Hz = UnitsBrand<'Hz'>
type Ms = UnitsBrand<'Ms'>
type Meters = UnitsBrand<'Meters'>

// Abstract Units

type Frequency = UnitsBrand<'Frequency'>
type Time = UnitsBrand<'Time'>
type Space = UnitsBrand<'Space'>

// Other Units

type Radians = UnitsBrand<'Radians'>

type Cents = UnitsBrand<'Cents'>
type Semitones = UnitsBrand<'Semitones'>

type Gain = UnitsBrand<'Gain'>

// Whole Units

type Numerator = UnitsBrand<'Numerator'>
type Denominator = UnitsBrand<'Denominator'>

type Fraction = [ Numerator, Denominator ]

// Uses Utilities

type NoUse = Number & { _UseBrand?: 'NoUse' }

type UseOf<OfType> = Number & { _UseOfBrand: OfType }

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
                        Use extends IntegerModulus ? 'IntegerModulus' & 'Modulus' :
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

type NoOf = number & { _OfBrand?: 'NoOf' }

type Of<OfType> = number | { _OfBrand: OfType }

// Unwhole Transformation Uses

type Scalar<OfType extends CanBeAsAnUnwholeUseOfSomeType = number> = UseBrand<'Scalar', OfType>
type Translation<OfType extends CanBeAsAnUnwholeUseOfSomeType = number> = UseBrand<'Translation', OfType>
type Rotation<OfType extends CanBeAsAnUnwholeUseOfSomeType = number> = UseBrand<'Rotation', OfType>

// Unwhole Non-Transformation Uses

type Exponent<OfType extends CanBeAsAnUnwholeUseOfSomeType = number> = UseBrand<'Exponent', OfType>
type Logarithm<OfType extends CanBeAsAnUnwholeUseOfSomeType = number> = UseBrand<'Logarithm', OfType>
type Modulus<OfType extends CanBeAsAnUnwholeUseOfSomeType = number> = UseBrand<'Modulus', OfType>

// Unwhole Fixed Uses

type Point<OfType extends CanBeAsAnUnwholeUseOfSomeType = number> = UseBrand<'Point', OfType>

// Unwhole Compound Uses

type Interval<OfType extends CanBeAsAnUnwholeUseOfSomeType = number> = Scalar<Point<OfType>>
type Delta<OfType extends CanBeAsAnUnwholeUseOfSomeType = number> = Translation<Point<OfType>>
type Arc<OfType extends CanBeAsAnUnwholeUseOfSomeType = number> = Rotation<Point<OfType>>

// Whole Transformation Uses (with overloads for arrays)

type Multiple<OfType extends CanBeAsAWholeUseWithAnArrayOverloadOfSomeType = number> = UseBrand<'Multiple' & 'Scalar', OfType>
type Cardinal<OfType extends CanBeAsAWholeUseWithAnArrayOverloadOfSomeType = number> = UseBrand<'Cardinal' & 'Translation', OfType>
type Transposition<OfType extends CanBeAsAWholeUseWithAnArrayOverloadOfSomeType = number> = UseBrand<'Transposition' & 'Rotation', OfType>

// Whole Non-Transformation Uses

type Power<OfType extends CanBeAsAWholeUseOfSomeType = number> = UseBrand<'Power' & 'Exponent', OfType>
type Base<OfType extends CanBeAsAWholeUseOfSomeType = number> = UseBrand<'Base' & 'Logarithm', OfType>
type IntegerModulus<OfType extends CanBeAsAWholeUseOfSomeType = number> = UseBrand<'IntegerModulus' & 'Modulus', OfType>

// Whole Fixed Uses (only used for arrays)

type Ordinal<OfType extends { _OfBrand?: 'NoOf' } & ArrayedType = number[]> = UseBrand<'Ordinal' & 'Point', OfType>

// Whole Compound Uses

type Factor<OfType extends { _OfBrand?: 'NoOf' } & ArrayedType = number[]> = Multiple<Ordinal<OfType>>
type Transition<OfType extends { _OfBrand?: 'NoOf' } & ArrayedType = number[]> = Cardinal<Ordinal<OfType>>
type Turn<OfType extends { _OfBrand?: 'NoOf' } & ArrayedType = number[]> = Transposition<Ordinal<OfType>>

// Normal Uses

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

type UnwholeToWhole<NumericType extends { _UseBrand: string }> =
    NumericType extends { _UseBrand: 'Scalar' } ? Difference<NumericType, { _UseBrand: 'Scalar' }> & { _UseBrand: 'Multiple' & 'Scalar' } :
        NumericType extends { _UseBrand: 'Translation' } ? Difference<NumericType, { _UseBrand: 'Translation' }> & { _UseBrand: 'Cardinal' & 'Translation' } :
            NumericType extends { _UseBrand: 'Rotation' } ? Difference<NumericType, { _UseBrand: 'Rotation' }> & { _UseBrand: 'Transposition' & 'Rotation' } :
                NumericType extends { _UseBrand: 'Exponent' } ? Difference<NumericType, { _UseBrand: 'Exponent' }> & { _UseBrand: 'Power' & 'Exponent' } :
                    NumericType extends { _UseBrand: 'Logarithm' } ? Difference<NumericType, { _UseBrand: 'Logarithm' }> & { _UseBrand: 'Base' & 'Logarithm' } :
                        NumericType extends { _UseBrand: 'Modulus' } ? Difference<NumericType, { _UseBrand: 'Modulus' }> & { _UseBrand: 'IntegerModulus' & 'Modulus' } :
                            NumericType extends { _UseBrand: 'Point' } ? Difference<NumericType, { _UseBrand: 'Point' }> & { _UseBrand: 'Ordinal' & 'Point' } :
                                NumericType

type WholeToUnwhole<NumericType extends { _UseBrand: string } | { _UnitsBrand: string }> =
    NumericType extends { _UnitsBrand: 'Numerator' } ? number :
        NumericType extends { _UnitsBrand: 'Denominator' } ? number :
            NumericType extends { _UseBrand: 'Multiple' & 'Scalar' } ? Difference<NumericType, { _UseBrand: 'Multiple' & 'Scalar' }> & { _UseBrand: 'Scalar' } :
                NumericType extends { _UseBrand: 'Cardinal' & 'Translation' } ? Difference<NumericType, { _UseBrand: 'Cardinal' & 'Translation' }> & { _UseBrand: 'Translation' } :
                    NumericType extends { _UseBrand: 'Transposition' & 'Rotation' } ? Difference<NumericType, { _UseBrand: 'Transposition' & 'Rotation' }> & { _UseBrand: 'Rotation' } :
                        NumericType extends { _UseBrand: 'Power' & 'Exponent' } ? Difference<NumericType, { _UseBrand: 'Power' & 'Exponent' }> & { _UseBrand: 'Exponent' } :
                            NumericType extends { _UseBrand: 'Base' & 'Logarithm' } ? Difference<NumericType, { _UseBrand: 'Base' & 'Logarithm' }> & { _UseBrand: 'Logarithm' } :
                                NumericType extends { _UseBrand: 'IntegerModulus' & 'Modulus' } ? Difference<NumericType, { _UseBrand: 'IntegerModulus' & 'Modulus' }> & { _UseBrand: 'Modulus' } :
                                    NumericType extends { _UseBrand: 'Ordinal' & 'Point' } ? Difference<NumericType, { _UseBrand: 'Ordinal' & 'Point' }> & { _UseBrand: 'Point' } :
                                        NumericType

type MaybeWhole<Name> =
    Name extends 'Multiple' ? Whole :
        Name extends 'Cardinal' ? Whole :
            Name extends 'Transposition' ? Whole :
                Name extends 'Power' ? Whole :
                    Name extends 'Base' ? Whole :
                        Name extends 'IntegerModulus' ? Whole :
                            Name extends 'Ordinal' ? Whole :
                                Name extends 'Numerator' ? Whole :
                                    Name extends 'Denominator' ? Whole :
                                        {}

type CanBeAsAWholeUseOfSomeType = NonNormal
type CanBeAsAWholeUseOfNoType = CanBeAsAWholeUseOfSomeType & NoOf
type CanBeAsAnUnwholeUseOfSomeType = CanBeAsAWholeUseOfSomeType & Unwhole
type CanBeAsAnUnwholeUseOfNoType = CanBeAsAWholeUseOfNoType & Unwhole
type ArrayedType = unknown[] | Cycle<unknown> | string
type CanBeAsAWholeUseWithAnArrayOverloadOfSomeType = CanBeAsAWholeUseOfSomeType | ArrayedType
type CanBeAsAWholeUseWithAnArrayOverloadOfNoType = CanBeAsAWholeUseOfNoType | ArrayedType
// tslint:disable-next-line no-any
type AnyArrayedType = any[] & Cycle<any> & string

// Normal

type MaybeNormal<Name> =
    Name extends 'NormalScalar' ? Normal :
        {}

type Normal = Number & { _NormalBrand: 'Normal' }
type NonNormal = Number & { _NormalBrand?: 'NonNormal' }

// Cycle

type Cycle<ElementType = number> = ElementType[] & { _CycleBrand: boolean }

// Blocks & Contours

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
    NominalNumber,
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
    IntegerModulus,
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
}
