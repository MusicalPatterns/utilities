// tslint:disable max-file-line-count no-magic-numbers max-line-length

interface NominalNumber {
    _NominalBrand?: string,
    _OperationBrand?: string,
    _UnitsBrand?: string,
}

// Units

type NoUnits = Number & { _UnitsBrand?: 'NoUnits' }
type UnitsBrand<UnitsName> = NoOperation & { _UnitsBrand: UnitsName } & MaybeNatural<UnitsName>

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

type Cardinal = UnitsBrand<'Cardinal'>
type Numerator = UnitsBrand<'Numerator'>
type Denominator = UnitsBrand<'Denominator'>

type Fraction = [ Numerator, Denominator ]

// Operation

type NoOperation = Number & { _OperationBrand?: 'NoOperation' }

type OperationOf<OfType> = Number & { _OperationOfBrand: OfType }

type OperationBrand<OperationName, OfType = number> =
    OperationOf<OfType>
    & { _OperationBrand: OperationName }
    & MaybeNatural<OperationName>
    & MaybeNormal<OperationName>

type Scalar<OfType extends NonNormal & Unnatural = number> = OperationBrand<'Scalar', OfType>
type Rotation<OfType extends NonNormal & Unnatural = number> = OperationBrand<'Rotation', OfType>
type Exponent<OfType extends NonNormal & Unnatural = number> = OperationBrand<'Exponent', OfType>
type Logarithm<OfType extends NonNormal & Unnatural = number> = OperationBrand<'Logarithm', OfType>

type Modulus<OfType extends NonNormal & Unnatural = number> = OperationBrand<'Modulus', OfType>

// Special Operations

type NormalScalar<OfType extends Unnatural = number> = OperationBrand<'NormalScalar' & 'Scalar', OfType>

type Base<OfType extends NonNormal = number> = OperationBrand<'Base' & 'Logarithm', OfType>
type Power<OfType extends NonNormal = number> = OperationBrand<'Power' & 'Exponent', OfType>

type Ordinal<OfType = number> = OperationBrand<'Ordinal', OfType>
type Translation<OfType = number> = OperationBrand<'Translation', OfType>

type Multiple<OfType extends NonNormal = number> = OperationBrand<'Multiple' & 'Scalar', OfType>
type IntegerModulus<OfType extends NonNormal = number> = OperationBrand<'IntegerModulus' & 'Modulus', OfType>

// Of

type NoOf = number & { _OfBrand?: 'NoOf' }
type Of<OfType> = number & { _OfBrand: OfType }

// Integer

type Integer = number & Natural
type Natural = Number & { _IntegerBrand: 'Integer' }
type Unnatural = Number & { _IntegerBrand?: 'NotInteger' }

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
                                    {}

type MaybeNormal<Name> =
    Name extends 'NormalScalar' ? Normal :
        {}

type Normal = Number & { _NormalBrand: 'Normal' }
type NonNormal = Number & { _NormalBrand?: 'NonNormal' }

type OperationNameFromOperation<OperationType> =
    OperationType extends Scalar ? 'Scalar' :
        OperationType extends NormalScalar ? 'NormalScalar' :
            OperationType extends Rotation ? 'Rotation' :
                OperationType extends Base ? 'Base' :
                    OperationType extends Power ? 'Power' :
                        OperationType extends Modulus ? 'Modulus' :
                            OperationType extends Translation ? 'Translation' :
                                OperationType extends Multiple ? 'Multiple' :
                                    OperationType extends Ordinal ? 'Ordinal' :
                                        OperationType extends Exponent ? 'Exponent' :
                                            OperationType extends Logarithm ? 'Logarithm' :
                                                OperationType extends IntegerModulus ? 'IntegerModulus' :
                                                    ''

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
    NoOperation,
    Integer,
    Meters,
    Space,
    Time,
    Frequency,
    Amplitude,
    NominalNumber,
    NormalScalar,
    OperationBrand,
    OperationOf,
    UnitsBrand,
    Multiple,
    Of,
    OperationNameFromOperation,
    NoOf,
    Natural,
    Unnatural,
    Exponent,
    Logarithm,
    IntegerModulus,
    NonNormal,
}
