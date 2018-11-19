interface Scalar extends Number {
    _ScalarBrand: string,
}

interface SumOfScalars extends Number {
    _SumOfScalarsBrand: string,
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

export {
    Base,
    Count,
    Scalar,
    Offset,
    Time,
    Index,
    Power,
    SumOfIndices,
    SumOfScalars,
    CoordinateElement,
    Coordinate,
    Frequency,
}
