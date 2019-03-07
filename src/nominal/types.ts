// tslint:disable ban-types max-file-line-count

import { Difference } from '../code'

type OverrideInteriorNeutrality<T, NeutralType> = T extends NeutralType ? Difference<T, NeutralType> & Number : T

interface NominalNumber {
    _NominalBrand?: string,
    _OperationBrand?: string,
    _UnitsBrand?: string,
}

// Units

type NoUnits = Number & { _UnitsBrand?: 'NoUnits' | 'Integer' }
type ForUnits<T> = T extends number ? NoOperation : OverrideInteriorNeutrality<T, NoUnits>
type UnitsBrand<Unit, T extends NoUnits = number> = ForUnits<T> & { _UnitsBrand: Unit }

type Hz<T extends NoUnits = number> = UnitsBrand<'Hz', T>
type Ms<T extends NoUnits = number> = UnitsBrand<'Ms', T>
type Radians<T extends NoUnits = number> = UnitsBrand<'Radians', T>
type Cents<T extends NoUnits = number> = UnitsBrand<'Cents', T>
type Semitones<T extends NoUnits = number> = UnitsBrand<'Semitones', T>
type Meters<T extends NoUnits = number> = UnitsBrand<'Meters', T>

type Space<T extends NoUnits = number> = UnitsBrand<'Space', T>
type Time<T extends NoUnits = number> = UnitsBrand<'Time', T>
type Frequency<T extends NoUnits = number> = UnitsBrand<'Frequency', T>
type Amplitude<T extends NoUnits = number> = UnitsBrand<'Amplitude', T>

// Operation

type NoOperation = Number & { _OperationBrand?: 'NoOperation' }
type ForOperation<T> = T extends number ? NoUnits : OverrideInteriorNeutrality<T, NoOperation>
type OperationBrand<Operation, T extends NoOperation = number> = ForOperation<T> & { _OperationBrand: Operation }

type Scalar<T extends NoOperation = number> = OperationBrand<'Scalar', T>
type Translation<T extends NoOperation = number> = OperationBrand<'Translation', T>
type Rotation<T extends NoOperation = number> = OperationBrand<'Rotation', T>

type Base<T extends NoOperation = number> = OperationBrand<'Base', T>
type Power<T extends NoOperation = number> = OperationBrand<'Power', T>

type Modulus<T extends NoOperation = number> = OperationBrand<'Modulus', T>

// Special Units & Operation

type Integer = number & NoOperation & { _UnitsBrand: 'Integer' }

type Ordinal = Integer & { _OperationBrand: 'Ordinal' }
type Cardinal = Integer & { _OperationBrand: 'Cardinal' }
type Numerator = Integer & { _OperationBrand: 'Numerator' }
type Denominator = Integer & { _OperationBrand: 'Denominator' }

type Fraction = [ Numerator, Denominator ]

// Other Stuff

type Block = number[] & { _BlockBrand: void }

type Cycle<T = number> = T[] & { _CycleBrand: boolean }

type ContourElement<N> = [ number, ...number[] ] & { length: N } & { [ index: string ]: number }
type ContourPiece<N> = Array<ContourElement<N>> & { _ContourPieceBrand: void }
type ContourWhole<N> = Array<ContourElement<N>> & { _ContourWholeBrand: void }

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
}
