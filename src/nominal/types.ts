// tslint:disable ban-types max-file-line-count no-magic-numbers max-line-length

import { Difference } from '../code'

type OverrideInteriorNeutrality<UnitsOrOperationType, NeutralType> = UnitsOrOperationType extends NeutralType ?
    Difference<UnitsOrOperationType, NeutralType> & Number :
    UnitsOrOperationType

interface NominalNumber {
    _NominalBrand?: string,
    _OperationBrand?: string,
    _UnitsBrand?: string,
}

// Units

type NoUnits = Number & { _UnitsBrand?: 'NoUnits' | 'Integer' }
type ForUnits<OperationType> = OperationType extends number ?
    NoOperation :
    OverrideInteriorNeutrality<OperationType, NoUnits>
type UnitsBrand<Unit, OperationType extends NoUnits = number> =
    ForUnits<OperationType> & { _UnitsBrand: Unit }

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
type ForOperation<UnitsType> = UnitsType extends number ?
    NoUnits :
    OverrideInteriorNeutrality<UnitsType, NoOperation>
type OperationBrand<Operation, UnitsType extends NoOperation = number> =
    ForOperation<UnitsType> & { _OperationBrand: Operation }

type Scalar<UnitsType extends NoOperation = number> = OperationBrand<'Scalar', UnitsType>
type NormalScalar<UnitsType extends NoOperation = number> = OperationBrand<'Scalar', UnitsType>
type Translation<UnitsType extends NoOperation = number> = OperationBrand<'Translation', UnitsType>
type Rotation<UnitsType extends NoOperation = number> = OperationBrand<'Rotation', UnitsType>

type Base<UnitsType extends NoOperation = number> = OperationBrand<'Base', UnitsType>
type Power<UnitsType extends NoOperation = number> = OperationBrand<'Power', UnitsType>

type Modulus<UnitsType extends NoOperation = number> = OperationBrand<'Modulus', UnitsType>

// Special Units & Operation

type Integer = number & NoOperation & { _UnitsBrand: 'Integer' }

type Ordinal = Integer & { _OperationBrand: 'Ordinal' }
type Cardinal = Integer & { _OperationBrand: 'Cardinal' }
type Numerator = Integer & { _OperationBrand: 'Numerator' }
type Denominator = Integer & { _OperationBrand: 'Denominator' }

type Fraction = [ Numerator, Denominator ]

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
    Ordinal,
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
}
