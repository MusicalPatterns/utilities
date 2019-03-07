// tslint:disable ban-types max-file-line-count no-any

import { INITIAL, map, Maybe, reduce, slice } from '../code'
import { apply, Cycle, from, Ordinal, Scalar, to, Translation } from '../nominal'
import { ADJUSTMENT_FOR_ROTATION_MATRIX_CYCLING_FROM_AXIS, TWO_DIMENSIONAL, Z_AXIS } from './constants'
import { cosine, sine } from './trigonometry'
import { difference, negative, sum } from './typedOperations'
import { Coordinate, CycleMap, RotateParameters, RotationMatrix, Vector } from './types'

const defaultFixedCoordinateToOriginOfDimensionalityOfCoordinate:
    <T extends Number, D extends Number>(
        fixedCoordinate: Maybe<Coordinate<T, D>>,
        coordinate: Coordinate<T, D>,
    ) => Coordinate<T, D> =
    <T extends Number, D extends Number>(
        fixedCoordinate: Maybe<Coordinate<T, D>>,
        coordinate: Coordinate<T, D>,
    ): Coordinate<T, D> => (
        fixedCoordinate || coordinate.length === from.Cardinal(TWO_DIMENSIONAL) ?
            [ 0, 0 ] :
            [ 0, 0, 0 ]
    ) as any as Coordinate<T, D>

const buildArrayMapForScalingRotationMatrixToDimensionalityOfCoordinate:
    <T extends Number, D extends Number>(coordinate: Coordinate<T, D>) => CycleMap =
    <T extends Number, D extends Number>(coordinate: Coordinate<T, D>): CycleMap =>
        <U>(rotationVectorOrMatrix: Cycle<U>): Cycle<U> =>
            to.Cycle(slice(rotationVectorOrMatrix, INITIAL, to.Ordinal(coordinate.length)))

const buildArrayMapForCyclingRotationMatrixForAxis: (axis: Ordinal) => CycleMap =
    (axis: Ordinal): CycleMap =>
        <T>(rotationVectorOrMatrix: Cycle<T>): Cycle<T> => {
            const translation: Translation = apply.Translation(
                ADJUSTMENT_FOR_ROTATION_MATRIX_CYCLING_FROM_AXIS,
                to.Translation(from.Ordinal(axis)),
            )

            return apply.Translation(rotationVectorOrMatrix, translation)
        }

const mapAcrossBothDimensions: (rotationMatrix: RotationMatrix, cycleMap: CycleMap) => RotationMatrix =
    (rotationMatrix: RotationMatrix, cycleMap: CycleMap): RotationMatrix =>
        cycleMap(to.Cycle(rotationMatrix.map(cycleMap)))

const scaleRotationMatrixToDimensionalityOfCoordinate:
    <T extends Number, D extends Number>(
        rotationMatrix: RotationMatrix,
        coordinate: Coordinate<T, D>,
    ) => RotationMatrix =
    <T extends Number, D extends Number>(
        rotationMatrix: RotationMatrix, coordinate: Coordinate<T, D>,
    ): RotationMatrix => {
        const cycleMap: CycleMap = buildArrayMapForScalingRotationMatrixToDimensionalityOfCoordinate(coordinate)

        return mapAcrossBothDimensions(rotationMatrix, cycleMap)
    }

const cycleRotationMatrixForAxis:
    <T>(rotationMatrix: RotationMatrix, axis: Ordinal) => RotationMatrix =
    <T>(rotationMatrix: RotationMatrix, axis: Ordinal): RotationMatrix => {
        const cycleMap: CycleMap = buildArrayMapForCyclingRotationMatrixForAxis(axis)

        return mapAcrossBothDimensions(rotationMatrix, cycleMap)
    }

const rotate: <T extends Number, D extends Number>(rotateParameters: RotateParameters<T, D>) => Coordinate<T, D> =
    <T extends Number, D extends Number>(rotateParameters: RotateParameters<T, D>): Coordinate<T, D> => {
        const { fixedCoordinate: fixedCoordinateArgument, coordinate, rotation, axis = Z_AXIS } = rotateParameters
        const fixedCoordinate: Coordinate<T, D> = defaultFixedCoordinateToOriginOfDimensionalityOfCoordinate(
            fixedCoordinateArgument,
            coordinate,
        )

        const sin: Scalar = to.Scalar(sine(rotation))
        const cos: Scalar = to.Scalar(cosine(rotation))

        const relative: T[] = map(
            coordinate,
            (coordinateElement: T, index: Ordinal): T => {
                const rawFixedCoordinateElement: T = apply.Ordinal(fixedCoordinate, index) as T

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

        return rotationMatrix.map((rotationVector: Vector): T =>
            reduce(
                rotationVector,
                (coordinateElement: T, rotationScalar: Scalar, index: Ordinal): T =>
                    sum(coordinateElement, apply.Scalar(apply.Ordinal(relative, index) as T, rotationScalar)),
                0 as any as T,
            ),
        ) as Coordinate<T, D>
    }

export {
    rotate,
}
