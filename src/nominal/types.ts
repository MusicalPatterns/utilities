type Scalar = number & { _ScalarBrand: void }
type Cardinal = number & { _CardinalBrand: void }
type Translation = number & { _TranslationBrand: void }
type Ordinal = number & { _OrdinalBrand: void }
type SumOfIndices = number & { _SumOfIndicesBrand: void }
type Base = number & { _BaseBrand: void }
type Power = number & { _PowerBrand: void }

type CoordinateElement = number & { _CoordinateElementBrand: void }
type Coordinate = CoordinateElement[]

type Frequency = number & { _FrequencyBrand: void }
type Length = number & { _LengthBrand: void }
type Time = number & { _TimeBrand: void }

type Milliseconds = number & { _MillisecondBrand: void }
type Radians = number & { _RadiansBrand: void }
type Cents = number & { _CentsBrand: void }
type Semitones = number & { _SemitonesBrand: void }

type Block = number[] & { _BlockBrand: void }

type ContourElement<N> = [ number, ...number[] ] & { length: N }
type ContourPiece<N> = Array<ContourElement<N>> & { _ContourPieceBrand: void }
type ContourWhole<N> = Array<ContourElement<N>> & { _ContourWholeBrand: void }

type Numerator = number & { _NumeratorBrand: void }
type Denominator = number & { _DenominatorBrand: void }

type FractionalPart = Numerator | Denominator
type Ratio = [ Numerator, Denominator ]

type Absolute<NominalType> = NominalType & { _AbsoluteBrand: void }
type Interval<NominalType> = NominalType & { _IntervalBrand: void }

export {
    Base,
    Cardinal,
    Scalar,
    Translation,
    Time,
    Ordinal,
    Power,
    SumOfIndices,
    CoordinateElement,
    Coordinate,
    Frequency,
    Length,
    Milliseconds,
    Radians,
    Cents,
    Semitones,
    Block,
    ContourElement,
    ContourPiece,
    ContourWhole,
    FractionalPart,
    Ratio,
    Numerator,
    Denominator,
    Absolute,
    Interval,
}
