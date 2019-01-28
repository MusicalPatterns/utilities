// tslint:disable:max-file-line-count use-primitive-type

interface Scalar extends Number {
    _ScalarBrand: string,
}

interface Offset extends Number {
    _OffsetBrand: string,
}

interface Time extends Number {
    _TimeBrand: string,
}

interface Index extends Number {
    _IndexBrand: string,
}

interface SumOfIndices extends Number {
    _SumOfIndicesBrand: string,
}

interface Count extends Number {
    _CountBrand: string,
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

interface Millisecond extends Number {
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

export {
    Base,
    Count,
    Scalar,
    Offset,
    Time,
    Index,
    Power,
    SumOfIndices,
    CoordinateElement,
    Coordinate,
    Frequency,
    Length,
    Millisecond,
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
}
