interface Scalar extends Number {_ScalarBrand: void}

interface Cardinal extends Number {_CardinalBrand: void}

interface Translation extends Number {_TranslationBrand: void}

interface Ordinal extends Number {_OrdinalBrand: void}

interface SumOfIndices extends Number {_SumOfIndicesBrand: void}

interface Base extends Number {_BaseBrand: void}

interface Power extends Number {_PowerBrand: void}

interface CoordinateElement extends Number {_CoordinateElementBrand: void}

type Coordinate = CoordinateElement[]

interface Frequency extends Number {_FrequencyBrand: void}

interface Length extends Number {_LengthBrand: void}

interface Time extends Number {_TimeBrand: void}

interface Milliseconds extends Number {_MillisecondBrand: void}

interface Radian extends Number {_RadianBrand: void}

interface Cents extends Number {_CentsBrand: void}

interface Semitones extends Number {_SemitonesBrand: void}

type Block = number[] & { _BlockBrand: void }

type ContourElement<N> = [ number, ...number[] ] & { length: N }
type ContourPiece<N> = Array<ContourElement<N>> & { _ContourPieceBrand: void }
type ContourWhole<N> = Array<ContourElement<N>> & { _ContourWholeBrand: void }

interface Numerator extends Number {_NumeratorBrand: void}

interface Denominator extends Number {_DenominatorBrand: void}

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
    Radian,
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
