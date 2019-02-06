import { apply, from, Ordinal, Scalar, to, Translation } from '../nominal'
import { Maybe } from '../types'
import { ADJUSTMENT_FOR_ROTATION_MATRIX_CYCLING_FROM_AXIS, TWO_DIMENSIONAL, Z_AXIS } from './constants'
import { cycle } from './cycle'
import { difference, negative, sum } from './typedOperations'
import { ArrayMap, RotateParameters, RotationMatrix, SpatialCoordinate } from './types'

const defaultFixedCoordinateToOriginOfDimensionalityOfCoordinate:
    (fixedCoordinate: Maybe<SpatialCoordinate>, coordinate: SpatialCoordinate) => SpatialCoordinate =
    (fixedCoordinate: Maybe<SpatialCoordinate>, coordinate: SpatialCoordinate): SpatialCoordinate =>
        fixedCoordinate || coordinate.length === from.Cardinal(TWO_DIMENSIONAL) ? [ 0, 0 ] : [ 0, 0, 0 ]

const buildArrayMapForScalingRotationMatrixToDimensionalityOfCoordinate: (coordinate: SpatialCoordinate) => ArrayMap =
    (coordinate: SpatialCoordinate): ArrayMap =>
        <T>(rotationVectorOrMatrix: T[]): T[] =>
            rotationVectorOrMatrix.slice(0, coordinate.length)

const buildArrayMapForCyclingRotationMatrixForAxis: (axis: Ordinal) => ArrayMap =
    (axis: Ordinal): ArrayMap =>
        <T>(rotationVectorOrMatrix: T[]): T[] => {
            const translation: Translation =
                to.Translation(difference(ADJUSTMENT_FOR_ROTATION_MATRIX_CYCLING_FROM_AXIS, from.Ordinal(axis)))

            return cycle(rotationVectorOrMatrix, translation)
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
    (rotationMatrix: RotationMatrix, axis: Ordinal) => RotationMatrix =
    (rotationMatrix: RotationMatrix, axis: Ordinal): RotationMatrix => {
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

        const sin: Scalar = to.Scalar(Math.sin(from.Radians(rotation)))
        const cos: Scalar = to.Scalar(Math.cos(from.Radians(rotation)))

        const rawRelative: number[] = coordinate.map(
            (coordinateElement: number, index: number): number => {
                const rawFixedCoordinateElement: number = fixedCoordinate[ index ]

                return difference(coordinateElement, rawFixedCoordinateElement)
            },
        )

        const standardRotationMatrix: RotationMatrix = [
            [ cos, apply.Scalar(sin, to.Scalar(negative(1))), to.Scalar(0) ],
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
                    sum(row, apply.Scalar(rawRelative[ index ], rotationElement)),
                0,
            ),
        ) as SpatialCoordinate
    }

export {
    rotate,
}
