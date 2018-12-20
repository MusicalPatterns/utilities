import { apply, from, Index, Offset, Scalar, to } from '../nominal'
import { Maybe } from '../types'
import { ADJUSTMENT_FOR_ROTATION_MATRIX_CYCLING_FROM_AXIS, TWO_DIMENSIONAL, Z_AXIS } from './constants'
import { cycle } from './cycle'
import { ArrayMap, RotateParameters, RotationMatrix, SpatialCoordinate } from './types'

const defaultFixedCoordinateToOriginOfDimensionalityOfCoordinate:
    (fixedCoordinate: Maybe<SpatialCoordinate>, coordinate: SpatialCoordinate) => SpatialCoordinate =
    (fixedCoordinate: Maybe<SpatialCoordinate>, coordinate: SpatialCoordinate): SpatialCoordinate =>
        fixedCoordinate || coordinate.length === from.Count(TWO_DIMENSIONAL) ? [ 0, 0 ] : [ 0, 0, 0 ]

const buildArrayMapForScalingRotationMatrixToDimensionalityOfCoordinate: (coordinate: SpatialCoordinate) => ArrayMap =
    (coordinate: SpatialCoordinate): ArrayMap =>
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
    (rotationMatrix: RotationMatrix, coordinate: SpatialCoordinate) => RotationMatrix =
    (rotationMatrix: RotationMatrix, coordinate: SpatialCoordinate): RotationMatrix => {
        const arrayMap: ArrayMap = buildArrayMapForScalingRotationMatrixToDimensionalityOfCoordinate(coordinate)

        return mapAcrossBothDimensions(rotationMatrix, arrayMap)
    }

const cycleRotationMatrixForAxis:
    (rotationMatrix: RotationMatrix, axis: Index) => RotationMatrix =
    (rotationMatrix: RotationMatrix, axis: Index): RotationMatrix => {
        const arrayMap: ArrayMap = buildArrayMapForCyclingRotationMatrixForAxis(axis)

        return mapAcrossBothDimensions(rotationMatrix, arrayMap)
    }

const rotate: (rotateParameters: RotateParameters) => SpatialCoordinate =
    (rotateParameters: RotateParameters): SpatialCoordinate => {
        const { fixedCoordinate: fixedCoordinateArgument, coordinate, rotation, axis = Z_AXIS } = rotateParameters
        const fixedCoordinate: SpatialCoordinate = defaultFixedCoordinateToOriginOfDimensionalityOfCoordinate(
            fixedCoordinateArgument,
            coordinate,
        )

        const sin: Scalar = to.Scalar(Math.sin(from.Radian(rotation)))
        const cos: Scalar = to.Scalar(Math.cos(from.Radian(rotation)))

        const rawRelative: number[] = coordinate.map(
            (coordinateElement: number, index: number): number => {
                const rawFixedCoordinateElement: number = fixedCoordinate[ index ]

                return coordinateElement - rawFixedCoordinateElement
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

        return rotationMatrix.map((rotationRow: Scalar[]): number =>
            rotationRow.reduce(
                (row: number, rotationElement: Scalar, index: number): number =>
                    row + apply.Scalar(rawRelative[ index ], rotationElement),
                0,
            ),
        ) as SpatialCoordinate
    }

export {
    rotate,
}
