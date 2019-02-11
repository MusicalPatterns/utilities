import { Cycle, Integer, Ordinal, Radians, Scalar } from '../nominal'

interface RotateParameters2d {
    axis?: Ordinal,
    coordinate: Coordinate2d,
    fixedCoordinate?: Coordinate2d,
    rotation: Radians,
}

interface RotateParameters3d {
    axis?: Ordinal,
    coordinate: Coordinate3d,
    fixedCoordinate?: Coordinate3d,
    rotation: Radians,
}

type RotateParameters = RotateParameters2d | RotateParameters3d

type CycleMap = <T>(rotationVectorOrMatrix: Cycle<T>) => Cycle<T>

type RotationMatrix = Cycle<Cycle<Scalar>>

type Coordinate2d = [ number, number ]

type Coordinate3d = [ number, number, number ]

type SpatialCoordinate = Coordinate2d | Coordinate3d

type NumericOperation = (a: number, b: number) => number

type IntegerOperation = (a: Integer, b: Integer) => Integer

export {
    CycleMap,
    RotateParameters,
    RotationMatrix,
    Coordinate2d,
    Coordinate3d,
    SpatialCoordinate,
    NumericOperation,
    IntegerOperation,
}
