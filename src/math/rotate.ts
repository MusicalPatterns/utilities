// tslint:disable max-file-line-count

import { indexJustBeyondFinalElement, map, Maybe, reduce, slice } from '../code'
import {
    apply,
    Cycle,
    from,
    Index,
    INITIAL,
    Of,
    of,
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
    <NumericType extends Number, Dimensionality extends number>(
        fixedCoordinate: Maybe<Coordinate<NumericType, Dimensionality>>,
        coordinate: Coordinate<NumericType, Dimensionality>,
    ) => Coordinate<NumericType, Dimensionality> =
    <NumericType extends Number, Dimensionality extends number>(
        fixedCoordinate: Maybe<Coordinate<NumericType, Dimensionality>>,
        coordinate: Coordinate<NumericType, Dimensionality>,
    ): Coordinate<NumericType, Dimensionality> => (
        fixedCoordinate || coordinate.length === from.Cardinal(TWO_DIMENSIONAL) ?
            [ 0, 0 ] :
            [ 0, 0, 0 ]
    ) as unknown as Coordinate<NumericType, Dimensionality>

const computeCycleMapForScalingRotationMatrixToDimensionalityOfCoordinate:
    <NumericType extends Number, Dimensionality extends number>(
        coordinate: Coordinate<NumericType, Dimensionality>,
    ) => CycleMap =
    <NumericType extends Number, Dimensionality extends number>(
        coordinate: Coordinate<NumericType, Dimensionality>,
    ): CycleMap =>
        <VectorOrMatrix>(rotationVectorOrMatrix: Cycle<VectorOrMatrix>): Cycle<VectorOrMatrix> =>
            to.Cycle(slice(
                rotationVectorOrMatrix,
                INITIAL as unknown as Index<VectorOrMatrix>,
                indexJustBeyondFinalElement(coordinate) as unknown as Index<VectorOrMatrix>,
            ))

const computeCycleMapForCyclingRotationMatrixForAxis: (axis: Index) => CycleMap =
    (axis: Index): CycleMap =>
        <VectorOrMatrix>(rotationVectorOrMatrix: Cycle<VectorOrMatrix>): Cycle<VectorOrMatrix> => {
            const translation: Translation<Cycle<VectorOrMatrix>> = apply.Translation(
                ROTATION_VECTOR_OR_MATRIX_BASE_TRANSLATION_FOR_CYCLING_FOR_AXIS as unknown as
                    Translation<Cycle<VectorOrMatrix>>,
                to.Translation(of.Translation(from.Index(axis)) as unknown as Of<Translation<Cycle<VectorOrMatrix>>>),
            )

            return apply.Translation(rotationVectorOrMatrix, translation)
        }

const mapAcrossBothDimensions: <NumericType extends Number>(
    rotationMatrix: RotationMatrix<NumericType>,
    cycleMap: CycleMap,
) => RotationMatrix<NumericType> =
    <NumericType extends Number>(
        rotationMatrix: RotationMatrix<NumericType>,
        cycleMap: CycleMap,
    ): RotationMatrix<NumericType> =>
        cycleMap(to.Cycle(rotationMatrix.map(cycleMap)))

const scaleRotationMatrixToDimensionalityOfCoordinate:
    <NumericType extends Number, Dimensionality extends number>(
        rotationMatrix: RotationMatrix<NumericType>,
        coordinate: Coordinate<NumericType, Dimensionality>,
    ) => RotationMatrix<NumericType> =
    <NumericType extends Number, Dimensionality extends number>(
        rotationMatrix: RotationMatrix<NumericType>, coordinate: Coordinate<NumericType, Dimensionality>,
    ): RotationMatrix<NumericType> => {
        const cycleMap: CycleMap = computeCycleMapForScalingRotationMatrixToDimensionalityOfCoordinate(coordinate)

        return mapAcrossBothDimensions(rotationMatrix, cycleMap)
    }

const cycleRotationMatrixForAxis:
    (rotationMatrix: RotationMatrix, axis: Index) => RotationMatrix =
    (rotationMatrix: RotationMatrix, axis: Index): RotationMatrix => {
        const cycleMap: CycleMap = computeCycleMapForCyclingRotationMatrixForAxis(axis)

        return mapAcrossBothDimensions(rotationMatrix, cycleMap)
    }

const rotate: <NumericType extends Number, Dimensionality extends number>(rotateParameters: {
    axis?: Index,
    coordinate: Coordinate<NumericType, Dimensionality>,
    fixedCoordinate?: Coordinate<NumericType, Dimensionality>,
    rotation: Radians,
}) => Coordinate<NumericType, Dimensionality> =
    <NumericType extends Number, Dimensionality extends number>(
        rotateParameters: RotateParameters<NumericType, Dimensionality>,
    ): Coordinate<NumericType, Dimensionality> => {
        const { fixedCoordinate: fixedCoordinateArgument, coordinate, rotation, axis = Z_AXIS } = rotateParameters
        const fixedCoordinate: Coordinate<NumericType, Dimensionality> =
            defaultFixedCoordinateToOriginOfDimensionalityOfCoordinate(
                fixedCoordinateArgument,
                coordinate,
            )

        const sin: Scalar<NumericType> = sine(rotation) as unknown as Scalar<NumericType>
        const cos: Scalar<NumericType> = cosine(rotation) as unknown as Scalar<NumericType>

        const relative: NumericType[] = map(
            coordinate,
            (coordinateElement: NumericType, index: Index<NumericType>): NumericType => {
                const rawFixedCoordinateElement: NumericType =
                    apply.Index(fixedCoordinate, index)

                return difference<NumericType>(coordinateElement, rawFixedCoordinateElement)
            },
        )

        const standardRotationMatrix: RotationMatrix<NumericType> = to.Cycle([
            to.Cycle([
                cos,
                apply.Scalar(sin, negative(1) as unknown as Scalar<Scalar<NumericType>>),
                0 as unknown as Scalar<NumericType>,
            ]),
            to.Cycle([
                sin,
                cos,
                0 as unknown as Scalar<NumericType>,
            ]),
            to.Cycle([
                0 as unknown as Scalar<NumericType>,
                0 as unknown as Scalar<NumericType>,
                1 as unknown as Scalar<NumericType>,
            ]),
        ])

        const rotationMatrix: RotationMatrix<NumericType> = scaleRotationMatrixToDimensionalityOfCoordinate(
            cycleRotationMatrixForAxis(standardRotationMatrix, axis),
            coordinate,
        ) as RotationMatrix<NumericType>

        return rotationMatrix.map((rotationVector: Vector<NumericType>): NumericType =>
            reduce(
                rotationVector,
                (
                    coordinateElement: NumericType,
                    rotationScalar: Scalar<NumericType>,
                    index: Index<Scalar<NumericType>>,
                ): NumericType =>
                    sum(
                        coordinateElement,
                        apply.Scalar(
                            apply.Index(relative, index as unknown as Index<NumericType>),
                            rotationScalar,
                        ),
                    ),
                0 as unknown as NumericType,
            ),
        ) as Coordinate<NumericType, Dimensionality>
    }

export {
    rotate,
}
