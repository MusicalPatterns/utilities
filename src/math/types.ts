// tslint:disable max-file-line-count

import {
    Cycle,
    Delta,
    Denature,
    Factor,
    Integer,
    Interval,
    Natural,
    NoUse,
    Ordinal,
    Point,
    Radians,
    Scalar,
    Space,
    Transition,
    Translation,
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

type TwoToOneIntegerOperation<IntegerType extends Natural = Integer> =
    (firstValue: IntegerType, secondValue: IntegerType) => IntegerType

interface Operands {
    lhs: number,
    rhs: number,
}

interface SumOperation {
    <IntegerType extends NoUse & Natural = Integer>(...values: IntegerType[]): IntegerType,
    (...values: number[]): number,
    <NumericType extends NoUse | number>(...values: NumericType[]): NumericType,
    <NumericType extends Number & { _UseBrand: 'Translation' }>(...values: NumericType[]): NumericType,
    <NumericType extends Number & { _UseBrand: 'Point' }>(...values: NumericType[]): NumericType,
}

interface ProductOperation {
    <IntegerType extends NoUse & Natural = Integer>(...values: IntegerType[]): IntegerType,
    (...values: number[]): number,
    <NumericType extends NoUse | number>(...values: NumericType[]): NumericType,
    <NumericType extends Number & { _UseBrand: 'Scalar' }>(...values: NumericType[]): NumericType,
    <NumericType extends Number & { _UseBrand: 'Point' }>(...values: NumericType[]): NumericType,
}

interface ManyToManyIntegerOperation {
    <SharedIntegerType extends Natural = Integer>(...values: SharedIntegerType[]): SharedIntegerType[]
    <OneIntegerType extends Natural = Integer, AnotherIntegerType extends Natural = Integer>(
        ...values: Array<Natural | AnotherIntegerType>
    ): Integer[]
}

interface ManyToOneIntegerOperation {
    <SharedIntegerType extends Natural = Integer>(...values: SharedIntegerType[]): SharedIntegerType
    <OneIntegerType extends Natural = Integer, AnotherIntegerType extends Natural = Integer>(
        ...values: Array<Natural | AnotherIntegerType>
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
    ): Interval<Denature<NumericType>>,
    <NumericType extends NoUse | number>(
        dividend: NumericType,
        divisor: NumericType,
    ): Denature<NumericType>,
    <NumericType extends Number & { _UseBrand: 'Scalar' }>(
        dividend: NumericType,
        divisor: NumericType,
    ): Denature<NumericType>,
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
    ): Delta<Denature<NumericType>>,
    <NumericType extends NoUse | number>(
        minuend: NumericType,
        subtrahend: NumericType,
    ): NumericType,
    <NumericType extends Number & { _UseBrand: 'Translation' }>(
        dividend: NumericType,
        divisor: NumericType,
    ): Denature<NumericType>,
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
