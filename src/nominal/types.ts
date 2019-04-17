// tslint:disable max-file-line-count no-magic-numbers max-line-length

interface NominalNumber {
    _NominalBrand?: string,
    _OperationBrand?: string,
    _UnitsBrand?: string,
}

// Units

type NoUnits = Number & { _UnitsBrand?: 'NoUnits' }
type UnitsBrand<Unit> = NoOperation & { _UnitsBrand: Unit }

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

// Operation

type NoOperation = Number & { _OperationBrand?: 'NoOperation' }

type OperationOf<OfType> = Number & { _OperationOfBrand: OfType }

type OperationBrand<Operation, OfType = number> = OperationOf<OfType> & { _OperationBrand: Operation }

type Scalar<OfType extends Number = number> = OperationBrand<'Scalar', OfType>
type NormalScalar<OfType extends Number = number> = OperationBrand<'NormalScalar', OfType>
type Rotation<OfType extends Number = number> = OperationBrand<'Rotation', OfType>

type Base<OfType extends Number = number> = OperationBrand<'Base', OfType>
type Power<OfType extends Number = number> = OperationBrand<'Power', OfType>

type Modulus<OfType extends Number = number> = OperationBrand<'Modulus', OfType>

// Special Units

type Cardinal = Integerlike & UnitsBrand<'Cardinal'>
type Numerator = Integerlike & UnitsBrand<'Numerator'>
type Denominator = Integerlike & UnitsBrand<'Denominator'>

type Fraction = [ Numerator, Denominator ]

// Special Operations

type Ordinal<OfType = number> = OperationBrand<'Ordinal', OfType>
type Translation<OfType = number> = OperationBrand<'Translation', OfType>

type Multiple<OfType extends Number = number> = Integerlike & OperationBrand<'Multiple', OfType>

// Of

type NoOf = number & { _OfBrand?: 'NoOf' }
type Of<OfType> = number & { _OfBrand: OfType }

// Integer

type Integer = Number & Integerlike
type Integerlike = number & { _IntegerBrand: 'Integer' }

// Other Stuff

type UnitsNameFromUnits<UnitsType> =
    UnitsType extends Hz ? 'Hz' :
        UnitsType extends Ms ? 'Ms' :
            UnitsType extends Radians ? 'Radians' :
                UnitsType extends Cents ? 'Cents' :
                    UnitsType extends Semitones ? 'Semitones' :
                        UnitsType extends Meters ? 'Meters' :
                            UnitsType extends Space ? 'Space' :
                                UnitsType extends Time ? 'Time' :
                                    UnitsType extends Frequency ? 'Frequency' :
                                        UnitsType extends Amplitude ? 'Amplitude' :
                                            ''

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
    Integerlike,
    Multiple,
    Of,
    OperationNameFromOperation,
    UnitsNameFromUnits,
    NoOf,
}
