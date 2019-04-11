import { reduce } from '../code'
import { apply, from, Index, Power, SQUARE_ROOT, SQUARED } from '../nominal'
import { absoluteValue, difference, sum } from './typedOperations'
import { Coordinate } from './types'

const distanceBetween: <NumericType extends Number = Number>(
    pointA: Coordinate<NumericType>,
    pointB: Coordinate<NumericType>,
) => NumericType =
    <NumericType extends Number = Number>(
        pointA: Coordinate<NumericType>,
        pointB: Coordinate<NumericType>,
    ): NumericType => {
        const sumOfSquaresOfDimensionalDistances: NumericType = reduce(
            pointA,
            (accumulator: NumericType, pointAElement: NumericType, index: Index): NumericType => {
                const pointBElement: NumericType =
                    apply.Index(pointB, index as Index<NumericType>)
                const dimensionalDistance: NumericType =
                    absoluteValue(from.Translation(difference(pointAElement, pointBElement)))
                const squareOfDimensionalDistance: NumericType = apply.Power(
                    dimensionalDistance,
                    SQUARED as Power<NumericType>,
                )

                return sum(accumulator, squareOfDimensionalDistance) as unknown as NumericType
            },
            0 as unknown as NumericType,
        )

        return apply.Power(sumOfSquaresOfDimensionalDistances, SQUARE_ROOT as Power<NumericType>)
    }

export {
    distanceBetween,
}
