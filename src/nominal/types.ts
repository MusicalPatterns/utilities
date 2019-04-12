// tslint:disable max-file-line-count no-magic-numbers max-line-length

import { Difference, Maybe } from '../code'

interface NominalNumber {
    _NominalBrand?: string,
    _OperationBrand?: string,
    _UnitsBrand?: string,
}

// Units

type NoUnits = Number & { _UnitsBrand?: 'NoUnits' | 'Integer' }
type ForUnits<OperationType, Unit> = OperationType extends number ?
    NoOperation :
    OperationType extends NoOperation ?
        OverrideInteriorNeutrality<OperationType, NoUnits> :
        OverrideInteriorNeutrality<OperationType, NoUnits> & { _InteriorBrand: UnitsBrand<Unit> }
type UnitsBrand<Unit, OperationType extends NoUnits = number> =
    ForUnits<OperationType, Unit> & { _UnitsBrand: Unit }
type OverrideInteriorNeutrality<UnitsOrOperationType, NeutralType> = UnitsOrOperationType extends NeutralType ?
    Difference<UnitsOrOperationType, NeutralType> & Number :
    UnitsOrOperationType

type Hz<OperationType extends NoUnits = number> = UnitsBrand<'Hz', OperationType>
type Ms<OperationType extends NoUnits = number> = UnitsBrand<'Ms', OperationType>
type Radians<OperationType extends NoUnits = number> = UnitsBrand<'Radians', OperationType>
type Cents<OperationType extends NoUnits = number> = UnitsBrand<'Cents', OperationType>
type Semitones<OperationType extends NoUnits = number> = UnitsBrand<'Semitones', OperationType>
type Meters<OperationType extends NoUnits = number> = UnitsBrand<'Meters', OperationType>

type Space<OperationType extends NoUnits = number> = UnitsBrand<'Space', OperationType>
type Time<OperationType extends NoUnits = number> = UnitsBrand<'Time', OperationType>
type Frequency<OperationType extends NoUnits = number> = UnitsBrand<'Frequency', OperationType>
type Amplitude<OperationType extends NoUnits = number> = UnitsBrand<'Amplitude', OperationType>

// Operation

type NoOperation = Number & { _OperationBrand?: 'NoOperation' }
type NoInterior = Number & { _InteriorBrand?: 'NoInterior' }
type NoDoubleInteriorNumeric = (Number & { _DoubleInteriorBrand?: 'NoDoubleInteriorNumeric', [ index: string ]: unknown }) | number
type ForOperation<InteriorType> = InteriorType extends number ?
    NoInterior :
    InteriorType extends NoInterior ?
        InteriorType extends NoUnits ?
            Number & { _InteriorBrand: InteriorType } :
            InteriorType extends NoOperation ?
                Difference<InteriorType, NoOperation> & Number & { _InteriorBrand: InteriorType } :
                InteriorType & { _InteriorBrand: InteriorType } :
        InteriorType extends NoUnits ?
            Number & { _DoubleInteriorBrand: InteriorType } :
            InteriorType extends NoOperation ?
                Difference<InteriorType, NoOperation> & Number & { _InteriorBrand: InteriorType } :
                InteriorType & { _DoubleInteriorBrand: InteriorType }
type OperationBrand<Operation, InteriorType extends NoDoubleInteriorNumeric = number> =
    ForOperation<InteriorType> & { _OperationBrand: Operation }

type Scalar<InteriorType extends NoDoubleInteriorNumeric = number> = OperationBrand<'Scalar', InteriorType>
type NormalScalar<InteriorType extends NoDoubleInteriorNumeric = number> = OperationBrand<'Scalar', InteriorType>
type Rotation<InteriorType extends NoDoubleInteriorNumeric = number> = OperationBrand<'Rotation', InteriorType>

type Base<InteriorType extends NoDoubleInteriorNumeric = number> = OperationBrand<'Base', InteriorType>
type Power<InteriorType extends NoDoubleInteriorNumeric = number> = OperationBrand<'Power', InteriorType>

type Modulus<InteriorType extends NoDoubleInteriorNumeric = number> = OperationBrand<'Modulus', InteriorType>

// Special Units

type Integer = number & Integerlike
type Integerlike = Number & { _IntegerBrand: 'Integer' }

type Cardinal<OperationType extends NoUnits = number> = Integerlike & UnitsBrand<'Cardinal', OperationType>
type Numerator<OperationType extends NoUnits = number> = Integerlike & UnitsBrand<'Numerator', OperationType>
type Denominator<OperationType extends NoUnits = number> = Integerlike & UnitsBrand<'Denominator', OperationType>

type Fraction = [ Numerator, Denominator ]

// Special Operations

type NoDoubleInteriorMaybe = Maybe<{
    _DoubleInteriorBrand?: 'NoDoubleInteriorMaybe',
    [ index: string ]: unknown,
}> | number | string
type ForOperationMaybe<InteriorType> = InteriorType extends number ?
    NoInterior :
    InteriorType extends NoInterior ?
        InteriorType extends NoUnits ?
            { _InteriorBrand: InteriorType } :
            InteriorType extends NoOperation ?
                Difference<InteriorType, NoOperation> & { _InteriorBrand: InteriorType } :
                InteriorType & { _InteriorBrand: InteriorType } :
        InteriorType extends NoUnits ?
            { _DoubleInteriorBrand: InteriorType } :
            InteriorType extends NoOperation ?
                Difference<InteriorType, NoOperation> & { _InteriorBrand: InteriorType } :
                InteriorType & { _DoubleInteriorBrand: InteriorType }
type OperationBrandIndex<Operation, InteriorType extends NoDoubleInteriorMaybe = Number> =
    ForOperationMaybe<InteriorType> & { _OperationBrand: Operation }

type Index<InteriorType extends NoDoubleInteriorMaybe = number> =
    Number & OperationBrandIndex<'Index', InteriorType>
type Translation<InteriorType extends NoDoubleInteriorMaybe = number> =
    Number & OperationBrandIndex<'Translation', InteriorType>

type Multiple<InteriorType extends NoDoubleInteriorNumeric = number> = Integer & OperationBrand<'Multiple', InteriorType>

// Other Stuff

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
    NoDoubleInteriorNumeric,
    NoDoubleInteriorMaybe,
    Integerlike,
    Multiple,
}
