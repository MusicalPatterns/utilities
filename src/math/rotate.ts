// tslint:disable max-file-line-count

import { indexJustBeyondFinalElement, map, Maybe, reduce, slice } from '../code'
import {
    apply,
    Cycle,
    from,
    INITIAL,
    Ordinal,
    Radians,
    ROTATION_VECTOR_OR_MATRIX_BASE_TRANSLATION_FOR_CYCLING_FOR_AXIS,
    Scalar,
    to,
    Translation,
    TWO_DIMENSIONAL,
    Z_AXIS,
} from '../nominal'
import { cosine, sine } from './trigonometry'
import { difference, negative, sum } from './typedOperations'
import { Coordinate, CycleMap, RotateParameters, RotationMatrix, Vector } from './types'

const defaultFixedCoordinateToOriginOfDimensionalityOfCoordinate:
    <NumericType extends Number = Number, Dimensionality extends Number = Number>(
        fixedCoordinate: Maybe<Coordinate<NumericType, Dimensionality>>,
        coordinate: Coordinate<NumericType, Dimensionality>,
    ) => Coordinate<NumericType, Dimensionality> =
    <NumericType extends Number = Number, Dimensionality extends Number = Number>(
        fixedCoordinate: Maybe<Coordinate<NumericType, Dimensionality>>,
        coordinate: Coordinate<NumericType, Dimensionality>,
    ): Coordinate<NumericType, Dimensionality> => (
        fixedCoordinate || coordinate.length === from.Cardinal(TWO_DIMENSIONAL) ?
            [ 0, 0 ] :
            [ 0, 0, 0 ]
    ) as unknown as Coordinate<NumericType, Dimensionality>

const computeCycleMapForScalingRotationMatrixToDimensionalityOfCoordinate:
    <NumericType extends Number = Number, Dimensionality extends Number = Number>(
        coordinate: Coordinate<NumericType, Dimensionality>,
    ) => CycleMap =
    <NumericType extends Number = Number, Dimensionality extends Number = Number>(
        coordinate: Coordinate<NumericType, Dimensionality>,
    ): CycleMap =>
        <VectorOrMatrix>(rotationVectorOrMatrix: Cycle<VectorOrMatrix>): Cycle<VectorOrMatrix> =>
            to.Cycle(slice(rotationVectorOrMatrix, INITIAL, indexJustBeyondFinalElement(coordinate)))

const computeCycleMapForCyclingRotationMatrixForAxis: (axis: Ordinal) => CycleMap =
    (axis: Ordinal): CycleMap =>
        <VectorOrMatrix>(rotationVectorOrMatrix: Cycle<VectorOrMatrix>): Cycle<VectorOrMatrix> => {
            const translation: Translation = apply.Translation(
                ROTATION_VECTOR_OR_MATRIX_BASE_TRANSLATION_FOR_CYCLING_FOR_AXIS,
                to.Translation(to.Translation(from.Ordinal(axis))),
            ) as Translation

            return apply.Translation(rotationVectorOrMatrix, translation)
        }

const mapAcrossBothDimensions: <NumericType extends Number = Number>(
    rotationMatrix: RotationMatrix<NumericType>,
    cycleMap: CycleMap,
) => RotationMatrix<NumericType> =
    <NumericType extends Number = Number>(
        rotationMatrix: RotationMatrix<NumericType>,
        cycleMap: CycleMap,
    ): RotationMatrix<NumericType> =>
        cycleMap(to.Cycle(rotationMatrix.map(cycleMap)))

const scaleRotationMatrixToDimensionalityOfCoordinate:
    <NumericType extends Number, Dimensionality extends Number = Number>(
        rotationMatrix: RotationMatrix<NumericType>,
        coordinate: Coordinate<NumericType, Dimensionality>,
    ) => RotationMatrix<NumericType> =
    <NumericType extends Number, Dimensionality extends Number = Number>(
        rotationMatrix: RotationMatrix<NumericType>, coordinate: Coordinate<NumericType, Dimensionality>,
    ): RotationMatrix<NumericType> => {
        const cycleMap: CycleMap = computeCycleMapForScalingRotationMatrixToDimensionalityOfCoordinate(coordinate)

        return mapAcrossBothDimensions(rotationMatrix, cycleMap)
    }

const cycleRotationMatrixForAxis:
    (rotationMatrix: RotationMatrix, axis: Ordinal) => RotationMatrix =
    (rotationMatrix: RotationMatrix, axis: Ordinal): RotationMatrix => {
        const cycleMap: CycleMap = computeCycleMapForCyclingRotationMatrixForAxis(axis)

        return mapAcrossBothDimensions(rotationMatrix, cycleMap)
    }

const rotate: <NumericType extends Number = Number, Dimensionality extends Number = Number>(rotateParameters: {
    axis?: Ordinal,
    coordinate: Coordinate<NumericType, Dimensionality>,
    fixedCoordinate?: Coordinate<NumericType, Dimensionality>,
    rotation: Radians,
}) => Coordinate<NumericType, Dimensionality> =
    <NumericType extends Number = Number, Dimensionality extends Number = Number>(
        rotateParameters: RotateParameters<NumericType, Dimensionality>,
    ): Coordinate<NumericType, Dimensionality> => {
        const { fixedCoordinate: fixedCoordinateArgument, coordinate, rotation, axis = Z_AXIS } = rotateParameters
        const fixedCoordinate: Coordinate<NumericType, Dimensionality> =
            defaultFixedCoordinateToOriginOfDimensionalityOfCoordinate(
                fixedCoordinateArgument,
                coordinate,
            )

        const sin: Scalar<NumericType> = to.Scalar(sine(rotation) as unknown as NumericType)
        const cos: Scalar<NumericType> = to.Scalar(cosine(rotation) as unknown as NumericType)

        const relative: NumericType[] = map(
            coordinate,
            (coordinateElement: NumericType, index: Ordinal): NumericType => {
                const rawFixedCoordinateElement: NumericType =
                    apply.Index(fixedCoordinate, to.Index(from.Ordinal(index) as unknown as NumericType))

                return from.Translation(difference(coordinateElement, rawFixedCoordinateElement))
            },
        )

        const standardRotationMatrix: RotationMatrix<NumericType> = to.Cycle([
            to.Cycle([
                cos,
                apply.Scalar(sin, to.Scalar(to.Scalar(negative(1) as unknown as NumericType))),
                to.Scalar(0 as unknown as NumericType),
            ]),
            to.Cycle([
                sin,
                cos,
                to.Scalar(0 as unknown as NumericType),
            ]),
            to.Cycle([
                to.Scalar(0 as unknown as NumericType),
                to.Scalar(0 as unknown as NumericType),
                to.Scalar(1 as unknown as NumericType),
            ]),
        ])

        const rotationMatrix: RotationMatrix<NumericType> = scaleRotationMatrixToDimensionalityOfCoordinate(
            cycleRotationMatrixForAxis(standardRotationMatrix, axis),
            coordinate,
        ) as RotationMatrix<NumericType>

        return rotationMatrix.map((rotationVector: Vector<NumericType>): NumericType =>
            reduce(
                rotationVector,
                (coordinateElement: NumericType, rotationScalar: Scalar<NumericType>, index: Ordinal): NumericType =>
                    sum(
                        coordinateElement,
                        apply.Scalar(
                            apply.Index(relative, to.Index(from.Ordinal(index) as unknown as NumericType)),
                            rotationScalar,
                        ),
                    ) as unknown as NumericType,
                0 as unknown as NumericType,
            ),
        ) as Coordinate<NumericType, Dimensionality>
    }

export {
    rotate,
}
