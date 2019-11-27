// tslint:disable max-file-line-count

import {
    Cycle,
    Delta,
    Factor,
    Integer,
    Interval,
    NoUse,
    Ordinal,
    Point,
    PointBrand,
    Radians,
    Scalar,
    ScalarBrand,
    Space,
    Transition,
    TranslationBrand,
    UnwholeVersion,
    Whole,
} from '../nominal'

// tslint:disable-next-line no-magic-numbers
type TwoDimensional = 2
// tslint:disable-next-line no-magic-numbers
type ThreeDimensional = 3

type CycleMap = <VectorOrMatrix>(rotationVectorOrMatrix: Cycle<VectorOrMatrix>) => Cycle<VectorOrMatrix>

type Vector<NumericType extends Number = Number> = Array<Scalar<NumericType>>

type RotationMatrix<NumericType extends Number = Number> = Cycle<Cycle<Scalar<NumericType>>>

type Coordinate<NumericType extends Number = Space, Dimensionality extends Number = 0> =
    Dimensionality extends TwoDimensional ?
        [ NumericType, NumericType ] :
        Dimensionality extends ThreeDimensional ?
            [ NumericType, NumericType, NumericType ] :
            NumericType[]

interface RotateParameters<NumericType extends Number = Number, Dimensionality extends Number = Number> {
    axis?: Ordinal,
    coordinate: Coordinate<NumericType, Dimensionality>,
    fixedCoordinate?: Coordinate<NumericType, Dimensionality>,
    rotation: Radians,
}

type TwoToOneNumericOperation<NumericType extends Number = Number> =
    (firstValue: NumericType, secondValue: NumericType) => NumericType

type TwoToOneIntegerOperation<WholeType extends Whole = Integer> =
    (firstValue: WholeType, secondValue: WholeType) => WholeType

interface Operands {
    lhs: number,
    rhs: number,
}

interface SumOperation {
    <WholeType extends NoUse & Whole = Integer>(...values: WholeType[]): WholeType,
    (...values: number[]): number,
    <NumericType extends NoUse | number>(...values: NumericType[]): NumericType,
    <NumericType extends Number & { _UseBrand: TranslationBrand }>(...values: NumericType[]): NumericType,
    <NumericType extends Number & { _UseBrand: PointBrand }>(...values: NumericType[]): NumericType,
}

interface ProductOperation {
    <WholeType extends NoUse & Whole = Integer>(...values: WholeType[]): WholeType,
    (...values: number[]): number,
    <NumericType extends NoUse | number>(...values: NumericType[]): NumericType,
    <NumericType extends Number & { _UseBrand: ScalarBrand }>(...values: NumericType[]): NumericType,
    <NumericType extends Number & { _UseBrand: PointBrand }>(...values: NumericType[]): NumericType,
}

interface ManyToManyIntegerOperation {
    <SharedWholeType extends Whole = Integer>(...values: SharedWholeType[]): SharedWholeType[]
    <OneWholeType extends Whole = Integer, AnotherWholeType extends Whole = Integer>(
        ...values: Array<Whole | AnotherWholeType>
    ): Integer[]
}

interface ManyToOneIntegerOperation {
    <SharedWholeType extends Whole = Integer>(...values: SharedWholeType[]): SharedWholeType
    <OneWholeType extends Whole = Integer, AnotherWholeType extends Whole = Integer>(
        ...values: Array<Whole | AnotherWholeType>
    ): Integer
}

interface QuotientOperation {
    <ElementType>(
        dividend: Cycle<ElementType>,
        divisor: Cycle<ElementType>,
    ): Factor<Cycle<ElementType>>,
    <ElementType>(
        dividend: Ordinal<ElementType[]>,
        divisor: Ordinal<ElementType[]>,
    ): Factor<ElementType[]>,
    <NumericType extends NoUse | number>(
        dividend: Point<NumericType>,
        divisor: Point<NumericType>,
    ): Interval<UnwholeVersion<NumericType>>,
    <NumericType extends NoUse | number>(
        dividend: NumericType,
        divisor: NumericType,
    ): UnwholeVersion<NumericType>,
    <NumericType extends Number & { _UseBrand: ScalarBrand }>(
        dividend: NumericType,
        divisor: NumericType,
    ): UnwholeVersion<NumericType>,
}

interface DifferenceOperation {
    <ElementType>(
        minuend: Cycle<ElementType>,
        subtrahend: Cycle<ElementType>,
    ): Transition<Cycle<ElementType>>,
    <ElementType>(
        minuend: Ordinal<ElementType[]>,
        subtrahend: Ordinal<ElementType[]>,
    ): Transition<ElementType[]>,
    <NumericType extends NoUse | number>(
        minuend: Point<NumericType>,
        subtrahend: Point<NumericType>,
    ): Delta<UnwholeVersion<NumericType>>,
    <NumericType extends NoUse | number>(
        minuend: NumericType,
        subtrahend: NumericType,
    ): NumericType,
    <NumericType extends Number & { _UseBrand: TranslationBrand }>(
        dividend: NumericType,
        divisor: NumericType,
    ): UnwholeVersion<NumericType>,
}

export {
    CycleMap,
    RotateParameters,
    RotationMatrix,
    Coordinate,
    TwoToOneNumericOperation,
    TwoToOneIntegerOperation,
    Vector,
    TwoDimensional,
    ThreeDimensional,
    Operands,
    SumOperation,
    ProductOperation,
    ManyToManyIntegerOperation,
    ManyToOneIntegerOperation,
    QuotientOperation,
    DifferenceOperation,
}
