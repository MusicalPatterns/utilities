import { Ordinal, Radian, Scalar } from '../nominal'

interface RotateParameters2d {
    axis?: Ordinal,
    coordinate: Coordinate2d,
    fixedCoordinate?: Coordinate2d,
    rotation: Radian,
}

interface RotateParameters3d {
    axis?: Ordinal,
    coordinate: Coordinate3d,
    fixedCoordinate?: Coordinate3d,
    rotation: Radian,
}

type RotateParameters = RotateParameters2d | RotateParameters3d

type ArrayMap = <T>(rotationVectorOrMatrix: T[]) => T[]

type RotationMatrix = Scalar[][]

type Coordinate2d = [ number, number ]

type Coordinate3d = [ number, number, number ]

type SpatialCoordinate = Coordinate2d | Coordinate3d

type NumericOperation = (a: number, b: number) => number

export {
    ArrayMap,
    RotateParameters,
    RotationMatrix,
    Coordinate2d,
    Coordinate3d,
    SpatialCoordinate,
    NumericOperation,
}
