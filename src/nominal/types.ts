// tslint:disable ban-types

type Scalar = Number & { _ScalarBrand: void }
type Cardinal = Number & { _CardinalBrand: void }
type Translation = Number & { _TranslationBrand: void }
type Ordinal = Number & { _OrdinalBrand: void }
type SumOfIndices = Number & { _SumOfIndicesBrand: void }
type Base = Number & { _BaseBrand: void }
type Power = Number & { _PowerBrand: void }
type Modulus = Number & { _ModulusBrand: void }

type CoordinateElement = Number & { _CoordinateElementBrand: void }
type Coordinate = CoordinateElement[]

type Hz = Number & { _HzBrand: void }
type Length = Number & { _LengthBrand: void }
type Ms = Number & { _MsBrand: void }

type Radians = Number & { _RadiansBrand: string }
type Cents = Number & { _CentsBrand: void }
type Semitones = Number & { _SemitonesBrand: void }

type Block = number[] & { _BlockBrand: void }

type Cycle<T> = T[] & { _CycleBrand: void }

type ContourElement<N> = [ number, ...number[] ] & { length: N }
type ContourPiece<N> = Array<ContourElement<N>> & { _ContourPieceBrand: void }
type ContourWhole<N> = Array<ContourElement<N>> & { _ContourWholeBrand: void }

type Numerator = Number & { _NumeratorBrand: void }
type Denominator = Number & { _DenominatorBrand: void }

type FractionalPart = Numerator | Denominator
type Ratio = [ Numerator, Denominator ]

type Absolute<NominalType> = NominalType & { _AbsoluteBrand: void }
type Interval<NominalType> = NominalType & { _IntervalBrand: void }

export {
    Base,
    Cardinal,
    Scalar,
    Translation,
    Ordinal,
    Power,
    SumOfIndices,
    CoordinateElement,
    Coordinate,
    Hz,
    Length,
    Ms,
    Radians,
    Cents,
    Semitones,
    Block,
    Cycle,
    ContourElement,
    ContourPiece,
    ContourWhole,
    FractionalPart,
    Ratio,
    Numerator,
    Denominator,
    Absolute,
    Interval,
    Modulus,
}
