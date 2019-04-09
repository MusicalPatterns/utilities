import { Cycle, Integer, Ordinal, Radians, Scalar, Space } from '../nominal'

// tslint:disable-next-line no-magic-numbers
type TwoDimensional = 2
// tslint:disable-next-line no-magic-numbers
type ThreeDimensional = 3

type CycleMap = <VectorOrMatrix>(rotationVectorOrMatrix: Cycle<VectorOrMatrix>) => Cycle<VectorOrMatrix>

type Vector = Scalar[]

type RotationMatrix = Cycle<Cycle<Scalar>>

type Coordinate<ElementType extends Number = Space, Dimensionality extends Number = 0> =
    Dimensionality extends TwoDimensional ?
        [ ElementType, ElementType ] :
        Dimensionality extends ThreeDimensional ?
            [ ElementType, ElementType, ElementType ] :
            ElementType[]

interface RotateParameters<ElementType extends Number = Number, Dimensionality extends Number = Number> {
    axis?: Ordinal,
    coordinate: Coordinate<ElementType, Dimensionality>,
    fixedCoordinate?: Coordinate<ElementType, Dimensionality>,
    rotation: Radians,
}

type NumericOperation<NumericType extends Number = Number> =
    (firstValue: NumericType, secondValue: NumericType) => NumericType

type IntegerOperation<IntegerType extends Integer = Integer> =
    (firstValue: IntegerType, secondValue: IntegerType) => IntegerType

interface Operands {
    lhs: number,
    rhs: number,
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
}
