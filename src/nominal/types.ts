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
    Radian,
    Cents,
    Semitones,
    Block,
    ContourElement,
    ContourPiece,
    ContourWhole,
}
