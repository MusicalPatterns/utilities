// tslint:disable max-file-line-count

import { indexJustBeyondFinalElement, map, Maybe, reduce, slice } from '../code'
import {
    as,
    Cardinal,
    Cycle,
    INITIAL,
    insteadOf,
    notAs,
    Ordinal,
    Radians,
    ROTATION_VECTOR_OR_MATRIX_BASE_TRANSLATION_FOR_CYCLING_FOR_AXIS,
    Scalar,
    Translation,
    TWO_DIMENSIONAL,
    use,
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
        fixedCoordinate || coordinate.length === notAs.Cardinal(TWO_DIMENSIONAL) ?
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
            as.Cycle(slice(
                rotationVectorOrMatrix,
                INITIAL,
                insteadOf<Ordinal, Cycle<VectorOrMatrix>>(indexJustBeyondFinalElement(coordinate)),
            ))

const computeCycleMapForCyclingRotationMatrixForAxis: (axis: Ordinal) => CycleMap =
    (axis: Ordinal): CycleMap =>
        <VectorOrMatrix>(rotationVectorOrMatrix: Cycle<VectorOrMatrix>): Cycle<VectorOrMatrix> => {
            const cycling: Cardinal<Cycle<VectorOrMatrix>> = use.Cardinal(
                insteadOf<Cardinal, Cycle<VectorOrMatrix>>(
                    ROTATION_VECTOR_OR_MATRIX_BASE_TRANSLATION_FOR_CYCLING_FOR_AXIS,
                ),
                insteadOf<Cardinal, Cardinal<Cycle<VectorOrMatrix>>>(as.Cardinal(notAs.Ordinal(axis))),
            )

            return use.Cardinal(rotationVectorOrMatrix, cycling)
        }

const mapAcrossBothDimensions: <NumericType extends Number>(
    rotationMatrix: RotationMatrix<NumericType>,
    cycleMap: CycleMap,
) => RotationMatrix<NumericType> =
    <NumericType extends Number>(
        rotationMatrix: RotationMatrix<NumericType>,
        cycleMap: CycleMap,
    ): RotationMatrix<NumericType> =>
        cycleMap(as.Cycle(rotationMatrix.map(cycleMap)))

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
    (rotationMatrix: RotationMatrix, axis: Ordinal) => RotationMatrix =
    (rotationMatrix: RotationMatrix, axis: Ordinal): RotationMatrix => {
        const cycleMap: CycleMap = computeCycleMapForCyclingRotationMatrixForAxis(axis)

        return mapAcrossBothDimensions(rotationMatrix, cycleMap)
    }

const rotate: <NumericType extends Number, Dimensionality extends number>(rotateParameters: {
    axis?: Ordinal,
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

        const sin: Scalar<NumericType> = as.Scalar<NumericType>(sine(rotation))
        const cos: Scalar<NumericType> = as.Scalar<NumericType>(cosine(rotation))

        const relative: NumericType[] = map(
            coordinate,
            (coordinateElement: NumericType, index: Ordinal<NumericType[]>): NumericType => {
                const rawFixedCoordinateElement: NumericType =
                    use.Ordinal(fixedCoordinate, index)

                return difference<NumericType>(coordinateElement, rawFixedCoordinateElement)
            },
        )

        const standardRotationMatrix: RotationMatrix<NumericType> = as.Cycle([
            as.Cycle([
                cos,
                use.Scalar(sin, as.Scalar<Scalar<NumericType>>(negative(1))),
                as.Scalar<NumericType>(0),
            ]),
            as.Cycle([
                sin,
                cos,
                as.Scalar<NumericType>(0),
            ]),
            as.Cycle([
                as.Scalar<NumericType>(0),
                as.Scalar<NumericType>(0),
                as.Scalar<NumericType>(1),
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
                    index: Ordinal<Array<Scalar<NumericType>>>,
                ): NumericType =>
                    sum(
                        coordinateElement,
                        use.Scalar(
                            use.Ordinal(relative, insteadOf<Ordinal, NumericType[]>(index)),
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
