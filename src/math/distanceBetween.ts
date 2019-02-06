import { apply, Coordinate, CoordinateElement, from, Length, to } from '../nominal'
import { SQUARE_ROOT, SQUARED } from './constants'
import { absoluteValue, difference } from './typedOperations'

const distanceBetween: (pointA: Coordinate, pointB: Coordinate) => Length =
    (pointA: Coordinate, pointB: Coordinate): Length => {
        const sumOfSquaresOfDimensionalDistances: number = pointA.reduce(
            (sum: number, pointAElement: CoordinateElement, index: number): number => {
                const pointBElement: CoordinateElement = pointB[ index ]
                const dimensionalDistance: Length = to.Length(from.CoordinateElement(absoluteValue(
                    difference(pointAElement, pointBElement)),
                ))
                const squareOfDimensionalDistance: number = apply.Power(
                    from.Length(dimensionalDistance),
                    SQUARED,
                )

                return sum + squareOfDimensionalDistance
            },
            0,
        )

        return to.Length(apply.Power(sumOfSquaresOfDimensionalDistances, SQUARE_ROOT))
    }

export {
    distanceBetween,
}
