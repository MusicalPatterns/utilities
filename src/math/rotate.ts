// tslint:disable ban-types max-file-line-count no-any

import { INITIAL, map, Maybe, reduce, slice, totalElements } from '../code'
import { apply, Cycle, from, Ordinal, Radians, Scalar, to, Translation } from '../nominal'
import { ROTATION_VECTOR_OR_MATRIX_BASE_TRANSLATION_FOR_CYCLING_FOR_AXIS, TWO_DIMENSIONAL, Z_AXIS } from './constants'
import { cosine, sine } from './trigonometry'
import { difference, negative, sum } from './typedOperations'
import { Coordinate, CycleMap, RotateParameters, RotationMatrix, Vector } from './types'

const defaultFixedCoordinateToOriginOfDimensionalityOfCoordinate:
    <ElementType extends Number = Number, Dimensionality extends Number = Number>(
        fixedCoordinate: Maybe<Coordinate<ElementType, Dimensionality>>,
        coordinate: Coordinate<ElementType, Dimensionality>,
    ) => Coordinate<ElementType, Dimensionality> =
    <ElementType extends Number = Number, Dimensionality extends Number = Number>(
        fixedCoordinate: Maybe<Coordinate<ElementType, Dimensionality>>,
        coordinate: Coordinate<ElementType, Dimensionality>,
    ): Coordinate<ElementType, Dimensionality> => (
        fixedCoordinate || coordinate.length === from.Cardinal(TWO_DIMENSIONAL) ?
            [ 0, 0 ] :
            [ 0, 0, 0 ]
    ) as any as Coordinate<ElementType, Dimensionality>

const computeCycleMapForScalingRotationMatrixToDimensionalityOfCoordinate:
    <ElementType extends Number = Number, Dimensionality extends Number = Number>(
        coordinate: Coordinate<ElementType, Dimensionality>,
    ) => CycleMap =
    <ElementType extends Number = Number, Dimensionality extends Number = Number>(
        coordinate: Coordinate<ElementType, Dimensionality>,
    ): CycleMap =>
        <VectorOrMatrix>(rotationVectorOrMatrix: Cycle<VectorOrMatrix>): Cycle<VectorOrMatrix> =>
            to.Cycle(slice(rotationVectorOrMatrix, INITIAL, totalElements(coordinate)))

const computeCycleMapForCyclingRotationMatrixForAxis: (axis: Ordinal) => CycleMap =
    (axis: Ordinal): CycleMap =>
        <VectorOrMatrix>(rotationVectorOrMatrix: Cycle<VectorOrMatrix>): Cycle<VectorOrMatrix> => {
            const translation: Translation = apply.Translation(
                ROTATION_VECTOR_OR_MATRIX_BASE_TRANSLATION_FOR_CYCLING_FOR_AXIS,
                to.Translation(from.Ordinal(axis)),
            )

            return apply.Translation(rotationVectorOrMatrix, translation)
        }

const mapAcrossBothDimensions: (rotationMatrix: RotationMatrix, cycleMap: CycleMap) => RotationMatrix =
    (rotationMatrix: RotationMatrix, cycleMap: CycleMap): RotationMatrix =>
        cycleMap(to.Cycle(rotationMatrix.map(cycleMap)))

const scaleRotationMatrixToDimensionalityOfCoordinate:
    <ElementType extends Number, Dimensionality extends Number = Number>(
        rotationMatrix: RotationMatrix,
        coordinate: Coordinate<ElementType, Dimensionality>,
    ) => RotationMatrix =
    <ElementType extends Number, Dimensionality extends Number = Number>(
        rotationMatrix: RotationMatrix, coordinate: Coordinate<ElementType, Dimensionality>,
    ): RotationMatrix => {
        const cycleMap: CycleMap = computeCycleMapForScalingRotationMatrixToDimensionalityOfCoordinate(coordinate)

        return mapAcrossBothDimensions(rotationMatrix, cycleMap)
    }

const cycleRotationMatrixForAxis:
    (rotationMatrix: RotationMatrix, axis: Ordinal) => RotationMatrix =
    (rotationMatrix: RotationMatrix, axis: Ordinal): RotationMatrix => {
        const cycleMap: CycleMap = computeCycleMapForCyclingRotationMatrixForAxis(axis)

        return mapAcrossBothDimensions(rotationMatrix, cycleMap)
    }

const rotate: <ElementType extends Number, Dimensionality extends Number = Number>(rotateParameters: {
    axis?: Ordinal,
    coordinate: Coordinate<ElementType, Dimensionality>,
    fixedCoordinate?: Coordinate<ElementType, Dimensionality>,
    rotation: Radians,
}) => Coordinate<ElementType, Dimensionality> =
    <ElementType extends Number, Dimensionality extends Number = Number>(
        rotateParameters: RotateParameters<ElementType, Dimensionality>,
    ): Coordinate<ElementType, Dimensionality> => {
        const { fixedCoordinate: fixedCoordinateArgument, coordinate, rotation, axis = Z_AXIS } = rotateParameters
        const fixedCoordinate: Coordinate<ElementType, Dimensionality> =
            defaultFixedCoordinateToOriginOfDimensionalityOfCoordinate(
                fixedCoordinateArgument,
                coordinate,
            )

        const sin: Scalar = to.Scalar(sine(rotation))
        const cos: Scalar = to.Scalar(cosine(rotation))

        const relative: ElementType[] = map(
            coordinate,
            (coordinateElement: ElementType, index: Ordinal): ElementType => {
                const rawFixedCoordinateElement: ElementType = apply.Ordinal(fixedCoordinate, index)

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

        return rotationMatrix.map((rotationVector: Vector): ElementType =>
            reduce(
                rotationVector,
                (coordinateElement: ElementType, rotationScalar: Scalar, index: Ordinal): ElementType =>
                    sum(coordinateElement, apply.Scalar(apply.Ordinal(relative, index), rotationScalar)),
                0 as any as ElementType,
            ),
        ) as Coordinate<ElementType, Dimensionality>
    }

export {
    rotate,
}
