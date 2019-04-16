import { Cycle, Index, Integer, Integerlike, NoOperation, Radians, Scalar, Space } from '../nominal'

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
    axis?: Index,
    coordinate: Coordinate<NumericType, Dimensionality>,
    fixedCoordinate?: Coordinate<NumericType, Dimensionality>,
    rotation: Radians,
}

type NumericOperation<NumericType extends Number = Number> =
    (firstValue: NumericType, secondValue: NumericType) => NumericType

type IntegerOperation<IntegerType extends Integerlike = Integer> =
    (firstValue: IntegerType, secondValue: IntegerType) => IntegerType

interface Operands {
    lhs: number,
    rhs: number,
}

interface ManyToOneOperation {
    <IntegerType extends Integerlike>(...values: IntegerType[]): IntegerType,
    (...values: number[]): number,
    <NumericType extends NoOperation | number>(...values: NumericType[]): NumericType,
}

export {
    CycleMap,
    RotateParameters,
    RotationMatrix,
    Coordinate,
    NumericOperation,
    IntegerOperation,
    Vector,
    TwoDimensional,
    ThreeDimensional,
    Operands,
    ManyToOneOperation,
    // DifferenceOperation,
    // QuotientOperation,
}
