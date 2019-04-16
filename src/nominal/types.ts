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

type Index<OfType = number> = OperationBrand<'Index', OfType>
type Translation<OfType extends Number | string | unknown[] = number> = OperationBrand<'Translation', OfType>

type Multiple<OfType extends Number = number> = Integerlike & OperationBrand<'Multiple', OfType>

// Of

type Of<OfType> = number & { _OfBrand: OfType }

// Integer

type Integer = Number & Integerlike
type Integerlike = number & { _IntegerBrand: 'Integer' }

// Other Stuff

type Block = Number[] & { _BlockBrand: void }

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
    Index,
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
}
