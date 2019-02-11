// tslint:disable ban-types

import { Cycle, Integer, Ordinal, Radians, Scalar, Space } from '../nominal'

// tslint:disable-next-line no-magic-numbers
type TwoDimensional = 2
// tslint:disable-next-line no-magic-numbers
type ThreeDimensional = 3

type CycleMap = <T>(rotationVectorOrMatrix: Cycle<T>) => Cycle<T>

type Vector = Scalar[]

type RotationMatrix = Cycle<Cycle<Scalar>>

type Coordinate<T extends Number = Space, D extends Number = 0> =
    D extends TwoDimensional ?
        [ T, T ] :
        D extends ThreeDimensional ?
            [ T, T, T ] :
            T[]

interface RotateParameters<T extends Number, D extends Number> {
    axis?: Ordinal,
    coordinate: Coordinate<T, D>,
    fixedCoordinate?: Coordinate<T, D>,
    rotation: Radians,
}

type NumericOperation = (a: number, b: number) => number

type IntegerOperation = (a: Integer, b: Integer) => Integer

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
}
