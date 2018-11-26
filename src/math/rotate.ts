import { apply, Coordinate, CoordinateElement, from, Index, Offset, Scalar, to } from '../nominal'
import { Maybe } from '../types'
import { ADJUSTMENT_FOR_ROTATION_MATRIX_CYCLING_FROM_AXIS, Z_AXIS } from './constants'
import { cycle } from './cycle'
import { ArrayMap, RotateParameters, RotationMatrix } from './types'

const defaultFixedCoordinateToOriginOfDimensionalityOfCoordinate:
    (fixedCoordinate: Maybe<Coordinate>, coordinate: Coordinate) => Coordinate =
    (fixedCoordinate: Maybe<Coordinate>, coordinate: Coordinate): Coordinate =>
        fixedCoordinate || coordinate.map((): CoordinateElement =>
            to.CoordinateElement(0))

const buildArrayMapForScalingRotationMatrixToDimensionalityOfCoordinate: (coordinate: Coordinate) => ArrayMap =
    (coordinate: Coordinate): ArrayMap =>
        <T>(rotationVectorOrMatrix: T[]): T[] =>
            rotationVectorOrMatrix.slice(0, coordinate.length)

const buildArrayMapForCyclingRotationMatrixForAxis: (axis: Index) => ArrayMap =
    (axis: Index): ArrayMap =>
        <T>(rotationVectorOrMatrix: T[]): T[] => {
            const offset: Offset = to.Offset(ADJUSTMENT_FOR_ROTATION_MATRIX_CYCLING_FROM_AXIS - from.Index(axis))

            return cycle(rotationVectorOrMatrix, offset)
        }

const mapAcrossBothDimensions: (rotationMatrix: RotationMatrix, arrayMap: ArrayMap) => RotationMatrix =
    (rotationMatrix: RotationMatrix, arrayMap: ArrayMap): RotationMatrix =>
        arrayMap(rotationMatrix.map(arrayMap))

const scaleRotationMatrixToDimensionalityOfCoordinate:
    (rotationMatrix: RotationMatrix, coordinate: Coordinate) => RotationMatrix =
    (rotationMatrix: RotationMatrix, coordinate: Coordinate): RotationMatrix => {
        const arrayMap: ArrayMap = buildArrayMapForScalingRotationMatrixToDimensionalityOfCoordinate(coordinate)

        return mapAcrossBothDimensions(rotationMatrix, arrayMap)
    }

const cycleRotationMatrixForAxis:
    (rotationMatrix: RotationMatrix, axis: Index) => RotationMatrix =
    (rotationMatrix: RotationMatrix, axis: Index): RotationMatrix => {
        const arrayMap: ArrayMap = buildArrayMapForCyclingRotationMatrixForAxis(axis)

        return mapAcrossBothDimensions(rotationMatrix, arrayMap)
    }

const rotate: (rotateParameters: RotateParameters) => Coordinate =
    (rotateParameters: RotateParameters): Coordinate => {
        const { fixedCoordinate: fixedCoordinateArgument, coordinate, rotation, axis = Z_AXIS } = rotateParameters
        const fixedCoordinate: Coordinate = defaultFixedCoordinateToOriginOfDimensionalityOfCoordinate(
            fixedCoordinateArgument,
            coordinate,
        )

        const sin: Scalar = to.Scalar(Math.sin(from.Radian(rotation)))
        const cos: Scalar = to.Scalar(Math.cos(from.Radian(rotation)))

        const rawRelative: number[] = coordinate.map(
            (coordinateElement: CoordinateElement, index: number): number => {
                const rawFixedCoordinateElement: number = from.CoordinateElement(fixedCoordinate[ index ])

                return from.CoordinateElement(coordinateElement) - rawFixedCoordinateElement
            },
        )

        const standardRotationMatrix: RotationMatrix = [
            [ cos, apply.Scalar(sin, to.Scalar(-1)), to.Scalar(0) ],
            [ sin, cos, to.Scalar(0) ],
            [ to.Scalar(0), to.Scalar(0), to.Scalar(1) ],
        ]

        const rotationMatrix: RotationMatrix = scaleRotationMatrixToDimensionalityOfCoordinate(
            cycleRotationMatrixForAxis(standardRotationMatrix, axis),
            coordinate,
        )

        return rotationMatrix.map((rotationRow: Scalar[]): CoordinateElement =>
            rotationRow.reduce(
                (row: CoordinateElement, rotationElement: Scalar, index: number): CoordinateElement =>
                    to.CoordinateElement(
                        from.CoordinateElement(row) + apply.Scalar(rawRelative[ index ], rotationElement),
                    ),
                to.CoordinateElement(0),
            ))
    }

export {
    rotate,
}
