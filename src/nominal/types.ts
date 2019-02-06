// tslint:disable max-file-line-count

interface Scalar extends Number {
    _ScalarBrand: string,
}

interface Translation extends Number {
    _TranslationBrand: string,
}

interface Time extends Number {
    _TimeBrand: string,
}

interface Ordinal extends Number {
    _OrdinalBrand: string,
}

interface SumOfIndices extends Number {
    _SumOfIndicesBrand: string,
}

interface Cardinal extends Number {
    _CardinalBrand: string,
}

interface Base extends Number {
    _BaseBrand: string,
}

interface Power extends Number {
    _PowerBrand: string,
}

interface CoordinateElement extends Number {
    _CoordinateElementBrand: string,
}

type Coordinate = CoordinateElement[]

interface Frequency extends Number {
    _FrequencyBrand: string,
}

interface Length extends Number {
    _LengthBrand: string,
}

interface Milliseconds extends Number {
    _MillisecondBrand: string,
}

interface Radian extends Number {
    _RadianBrand: string,
}

interface Cents extends Number {
    _CentsBrand: string,
}

interface Semitones extends Number {
    _SemitonesBrand: string,
}

enum _BlockBrand {}

type Block = _BlockBrand & number[]

type ContourElement<N> = [ number, ...number[] ] & { length: N }

enum _ContourPieceBrand {}

type ContourPiece<N> = _ContourPieceBrand & Array<ContourElement<N>>

enum _ContourWholeBrand {}

type ContourWhole<N> = _ContourWholeBrand & Array<ContourElement<N>>

interface Numerator extends Number {
    _NumeratorBrand: string,
}

interface Denominator extends Number {
    _DenominatorBrand: string,
}

type FractionalPart = Numerator | Denominator
type Ratio = [ Numerator, Denominator ]

enum _AbsoluteBrand {}
type Absolute<NominalType> = _AbsoluteBrand & NominalType

enum _IntervalBrand {}
type Interval<NominalType> = _IntervalBrand & NominalType

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
