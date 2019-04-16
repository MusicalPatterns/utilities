import { reduce } from '../code'
import { apply, Index, Power, SQUARE_ROOT, SQUARED } from '../nominal'
import { absoluteValue, difference, sum } from './typedOperations'
import { Coordinate } from './types'

const distanceBetween: <NumericType extends Number>(
    pointA: Coordinate<NumericType>,
    pointB: Coordinate<NumericType>,
) => NumericType =
    <NumericType extends Number>(
        pointA: Coordinate<NumericType>,
        pointB: Coordinate<NumericType>,
    ): NumericType => {
        const sumOfSquaresOfDimensionalDistances: NumericType = reduce(
            pointA,
            (accumulator: NumericType, pointAElement: NumericType, index: Index<NumericType>) => {
                const pointBElement: NumericType =
                    apply.Index(pointB, index)
                const dimensionalDistance: NumericType =
                    absoluteValue(difference(pointAElement, pointBElement))
                const squareOfDimensionalDistance: NumericType = apply.Power(
                    dimensionalDistance,
                    SQUARED as unknown as Power<NumericType>,
                )

                return sum(accumulator, squareOfDimensionalDistance)
            },
            0 as unknown as NumericType,
        )

        return apply.Power(sumOfSquaresOfDimensionalDistances, SQUARE_ROOT as unknown as Power<NumericType>)
    }

export {
    distanceBetween,
}
