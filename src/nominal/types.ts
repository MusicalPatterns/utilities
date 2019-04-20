// tslint:disable max-file-line-count no-magic-numbers max-line-length

import { Difference } from '../code'

interface NominalNumber {
    _NominalBrand?: string,
    _UnitsBrand?: string,
    _UseBrand?: string,
}

// Units

type NoUnits = Number & { _UnitsBrand?: 'NoUnits' }
type UnitsBrand<UnitsName> = NoUse & { _UnitsBrand: UnitsName } & MaybeNatural<UnitsName>

type Hz = UnitsBrand<'Hz'>
type Ms = UnitsBrand<'Ms'>
type Radians = UnitsBrand<'Radians'>
type Cents = UnitsBrand<'Cents'>
type Semitones = UnitsBrand<'Semitones'>
type Meters = UnitsBrand<'Meters'>

type Space = UnitsBrand<'Space'>
type Time = UnitsBrand<'Time'>
type Frequency = UnitsBrand<'Frequency'>
type Amplitude = UnitsBrand<'Amplitude'>

// Special Units

type Numerator = UnitsBrand<'Numerator'>
type Denominator = UnitsBrand<'Denominator'>

type Fraction = [ Numerator, Denominator ]

// Uses

type NoUse = Number & { _UseBrand?: 'NoUse' }

type UseOf<OfType> = Number & { _UseOfBrand: OfType }

type UseBrand<UseName, OfType = number> =
    UseOf<OfType>
    & { _UseBrand: UseName }
    & MaybeNatural<UseName>
    & MaybeNormal<UseName>

type Scalar<OfType extends NonNormal & Unnatural = number> = UseBrand<'Scalar', OfType>
type Rotation<OfType extends NonNormal & Unnatural = number> = UseBrand<'Rotation', OfType>
type Exponent<OfType extends NonNormal & Unnatural = number> = UseBrand<'Exponent', OfType>
type Logarithm<OfType extends NonNormal & Unnatural = number> = UseBrand<'Logarithm', OfType>

type Modulus<OfType extends NonNormal & Unnatural = number> = UseBrand<'Modulus', OfType>

// Special Uses

type Ordinal<OfType = number> = UseBrand<'Ordinal', OfType>
type Translation<OfType = number> = UseBrand<'Translation', OfType>
type Cardinal<OfType = number> = UseBrand<'Cardinal', OfType>

type NormalScalar<OfType extends Unnatural = number> = UseBrand<'NormalScalar' & 'Scalar', OfType>

type Base<OfType extends NonNormal = number> = UseBrand<'Base' & 'Logarithm', OfType>
type Power<OfType extends NonNormal = number> = UseBrand<'Power' & 'Exponent', OfType>
type Multiple<OfType extends NonNormal = number> = UseBrand<'Multiple' & 'Scalar', OfType>
type IntegerModulus<OfType extends NonNormal = number> = UseBrand<'IntegerModulus' & 'Modulus', OfType>

// Of

type NoOf = number & { _OfBrand?: 'NoOf' }
type Of<OfType> = number | { _OfBrand: OfType }

// Integer

type Integer = number & Natural
type Natural = Number & { _IntegerBrand: 'Integer' }
type Unnatural = Number & { _IntegerBrand?: 'NotInteger' }

type Denature<NumericType extends Number> = (
    NumericType extends Natural ?
        NumericType extends ({ _UseBrand: string } | { _UnitsBrand: string }) ?
            NaturalToUnnatural<NumericType> & { _IntegerBrand: 'NotInteger' } :
            number & { _IntegerBrand: 'NotInteger' } :
        NumericType extends ({ _UseBrand: string } | { _UnitsBrand: string }) ?
            NaturalToUnnatural<NumericType> :
            NumericType
    )

type Nature<NumericType extends Number> =
    { _IntegerBrand: 'Integer' } &
    (NumericType extends { _UseBrand: string } ? UnnaturalToNatural<NumericType> : NumericType)

type UnnaturalToNatural<NumericType extends { _UseBrand: string }> =
    NumericType extends { _UseBrand: 'Scalar' } ? Difference<NumericType, { _UseBrand: 'Scalar' }> & { _UseBrand: 'Multiple' & 'Scalar' } :
        NumericType extends { _UseBrand: 'Exponent' } ? Difference<NumericType, { _UseBrand: 'Exponent' }> & { _UseBrand: 'Power' & 'Exponent' } :
            NumericType extends { _UseBrand: 'Logarithm' } ? Difference<NumericType, { _UseBrand: 'Logarithm' }> & { _UseBrand: 'Base' & 'Logarithm' } :
                NumericType extends { _UseBrand: 'Modulus' } ? Difference<NumericType, { _UseBrand: 'Modulus' }> & { _UseBrand: 'IntegerModulus' & 'Modulus' } :
                    NumericType

type NaturalToUnnatural<NumericType extends { _UseBrand: string } | { _UnitsBrand: string }> =
    NumericType extends { _UnitsBrand: 'Numerator' } ? number :
        NumericType extends { _UnitsBrand: 'Denominator' } ? number :
            NumericType extends { _UseBrand: 'Cardinal' } ? number :
                NumericType extends { _UseBrand: 'Multiple' & 'Scalar' } ? Difference<NumericType, { _UseBrand: 'Multiple' & 'Scalar' }> & { _UseBrand: 'Scalar' } :
                    NumericType extends { _UseBrand: 'Power' & 'Exponent' } ? Difference<NumericType, { _UseBrand: 'Power' & 'Exponent' }> & { _UseBrand: 'Exponent' } :
                        NumericType extends { _UseBrand: 'Base' & 'Logarithm' } ? Difference<NumericType, { _UseBrand: 'Base' & 'Logarithm' }> & { _UseBrand: 'Logarithm' } :
                            NumericType extends { _UseBrand: 'IntegerModulus' & 'Modulus' } ? Difference<NumericType, { _UseBrand: 'IntegerModulus' & 'Modulus' }> & { _UseBrand: 'Modulus' } :
                                NumericType

// Other Stuff

type MaybeNatural<Name> =
    Name extends 'Cardinal' ? Natural :
        Name extends 'Numerator' ? Natural :
            Name extends 'Denominator' ? Natural :
                Name extends 'Multiple' ? Natural :
                    Name extends 'IntegerModulus' ? Natural :
                        Name extends 'Power' ? Natural :
                            Name extends 'Base' ? Natural :
                                Name extends 'Ordinal' ? Natural :
                                    Name extends 'Cardinal' ? Natural :
                                        {}

type MaybeNormal<Name> =
    Name extends 'NormalScalar' ? Normal :
        {}

type Normal = Number & { _NormalBrand: 'Normal' }
type NonNormal = Number & { _NormalBrand?: 'NonNormal' }

type UseNameFromUse<Use> =
    Use extends Scalar ? 'Scalar' :
        Use extends NormalScalar ? 'NormalScalar' :
            Use extends Rotation ? 'Rotation' :
                Use extends Base ? 'Base' :
                    Use extends Power ? 'Power' :
                        Use extends Modulus ? 'Modulus' :
                            Use extends Translation ? 'Translation' :
                                Use extends Multiple ? 'Multiple' :
                                    Use extends Ordinal ? 'Ordinal' :
                                        Use extends Cardinal ? 'Cardinal' :
                                            Use extends Exponent ? 'Exponent' :
                                                Use extends Logarithm ? 'Logarithm' :
                                                    Use extends IntegerModulus ? 'IntegerModulus' :
                                                        ''

type NaturalUseOfable = NonNormal & NoOf
type UnnaturalUseOfable = NaturalUseOfable & Unnatural

type Block = number[] & { _BlockBrand: void }

type Cycle<ElementType = number> = ElementType[] & { _CycleBrand: boolean }

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
    Amplitude,
    NominalNumber,
    NormalScalar,
    UseBrand,
    UseOf,
    UnitsBrand,
    Multiple,
    Of,
    UseNameFromUse,
    NoOf,
    Natural,
    Unnatural,
    Exponent,
    Logarithm,
    IntegerModulus,
    NonNormal,
    Denature,
    Nature,
    NaturalUseOfable,
    UnnaturalUseOfable,
}
