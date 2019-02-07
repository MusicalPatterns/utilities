import { INITIAL, slice } from '../code'
import { apply, Cycle, from, Ordinal, Scalar, to, Translation } from '../nominal'
import { Maybe } from '../types'
import { ADJUSTMENT_FOR_ROTATION_MATRIX_CYCLING_FROM_AXIS, TWO_DIMENSIONAL, Z_AXIS } from './constants'
import { difference, negative, sum } from './typedOperations'
import { CycleMap, RotateParameters, RotationMatrix, SpatialCoordinate } from './types'

const defaultFixedCoordinateToOriginOfDimensionalityOfCoordinate:
    (fixedCoordinate: Maybe<SpatialCoordinate>, coordinate: SpatialCoordinate) => SpatialCoordinate =
    (fixedCoordinate: Maybe<SpatialCoordinate>, coordinate: SpatialCoordinate): SpatialCoordinate =>
        fixedCoordinate || coordinate.length === from.Cardinal(TWO_DIMENSIONAL) ? [ 0, 0 ] : [ 0, 0, 0 ]

const buildArrayMapForScalingRotationMatrixToDimensionalityOfCoordinate: (coordinate: SpatialCoordinate) => CycleMap =
    (coordinate: SpatialCoordinate): CycleMap =>
        <T>(rotationVectorOrMatrix: Cycle<T>): Cycle<T> =>
            to.Cycle(slice(rotationVectorOrMatrix, INITIAL, to.Ordinal(coordinate.length)))

const buildArrayMapForCyclingRotationMatrixForAxis: (axis: Ordinal) => CycleMap =
    (axis: Ordinal): CycleMap =>
        <T>(rotationVectorOrMatrix: Cycle<T>): Cycle<T> => {
            const translation: Translation =
                to.Translation(difference(ADJUSTMENT_FOR_ROTATION_MATRIX_CYCLING_FROM_AXIS, from.Ordinal(axis)))

            return apply.Translation(rotationVectorOrMatrix, translation)
        }

const mapAcrossBothDimensions: (rotationMatrix: RotationMatrix, cycleMap: CycleMap) => RotationMatrix =
    (rotationMatrix: RotationMatrix, cycleMap: CycleMap): RotationMatrix =>
        cycleMap(to.Cycle(rotationMatrix.map(cycleMap)))

const scaleRotationMatrixToDimensionalityOfCoordinate:
    (rotationMatrix: RotationMatrix, coordinate: SpatialCoordinate) => RotationMatrix =
    (rotationMatrix: RotationMatrix, coordinate: SpatialCoordinate): RotationMatrix => {
        const cycleMap: CycleMap = buildArrayMapForScalingRotationMatrixToDimensionalityOfCoordinate(coordinate)

        return mapAcrossBothDimensions(rotationMatrix, cycleMap)
    }

const cycleRotationMatrixForAxis:
    (rotationMatrix: RotationMatrix, axis: Ordinal) => RotationMatrix =
    (rotationMatrix: RotationMatrix, axis: Ordinal): RotationMatrix => {
        const cycleMap: CycleMap = buildArrayMapForCyclingRotationMatrixForAxis(axis)

        return mapAcrossBothDimensions(rotationMatrix, cycleMap)
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

        const standardRotationMatrix: RotationMatrix = to.Cycle([
            to.Cycle([ cos, apply.Scalar(sin, to.Scalar(negative(1))), to.Scalar(0) ]),
            to.Cycle([ sin, cos, to.Scalar(0) ]),
            to.Cycle([ to.Scalar(0), to.Scalar(0), to.Scalar(1) ]),
        ])

        const rotationMatrix: RotationMatrix = scaleRotationMatrixToDimensionalityOfCoordinate(
            cycleRotationMatrixForAxis(standardRotationMatrix, axis),
            coordinate,
        )

        return rotationMatrix.map((rotationVector: Scalar[]): number =>
            rotationVector.reduce(
                (vector: number, rotationElement: Scalar, index: number): number =>
                    sum(vector, apply.Scalar(rawRelative[ index ], rotationElement)),
                0,
            ),
        ) as SpatialCoordinate
    }

export {
    rotate,
}
