import { Cycle, Integer, Natural, NoOperation, Ordinal, Radians, Scalar, Space } from '../nominal'

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

interface ManyToOneOperation {
    <IntegerType extends Natural = Integer>(...values: IntegerType[]): IntegerType,
    (...values: number[]): number,
    <NumericType extends NoOperation | number>(...values: NumericType[]): NumericType,
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
    ManyToOneOperation,
    ManyToManyIntegerOperation,
    ManyToOneIntegerOperation,
}
