import { reduce } from '../code'
import { apply, Coordinate, CoordinateElement, from, Ordinal } from '../nominal'
import { SQUARE_ROOT, SQUARED } from './constants'
import { absoluteValue, difference, sum } from './typedOperations'

const distanceBetween: (pointA: Coordinate, pointB: Coordinate) => number =
    (pointA: Coordinate, pointB: Coordinate): number => {
        const sumOfSquaresOfDimensionalDistances: number = reduce(
            pointA,
            (accumulator: number, pointAElement: CoordinateElement, index: Ordinal): number => {
                const pointBElement: CoordinateElement = apply.Ordinal(pointB, index)
                const dimensionalDistance: number = from.CoordinateElement(absoluteValue(
                    difference(pointAElement, pointBElement)),
                )
                const squareOfDimensionalDistance: number = apply.Power(
                    dimensionalDistance,
                    SQUARED,
                )

                return sum(accumulator, squareOfDimensionalDistance)
            },
            0,
        )

        return apply.Power(sumOfSquaresOfDimensionalDistances, SQUARE_ROOT)
    }

export {
    distanceBetween,
}
