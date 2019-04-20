import { reduce } from '../code'
import { Ordinal, SQUARE_ROOT, SQUARED, use } from '../nominal'
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
            (accumulator: NumericType, pointAElement: NumericType, index: Ordinal<NumericType>) => {
                const pointBElement: NumericType =
                    use.Ordinal(pointB, index)
                const dimensionalDistance: NumericType =
                    absoluteValue(difference(pointAElement, pointBElement))
                const squareOfDimensionalDistance: NumericType = use.Power(
                    dimensionalDistance,
                    SQUARED,
                )

                return sum(accumulator, squareOfDimensionalDistance)
            },
            0 as unknown as NumericType,
        )

        return use.Exponent(sumOfSquaresOfDimensionalDistances, SQUARE_ROOT)
    }

export {
    distanceBetween,
}
