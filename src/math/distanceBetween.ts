import { apply, Coordinate, CoordinateElement, from, Length, to } from '../nominal'
import { SQUARE_ROOT, SQUARED } from './constants'

const distanceBetween: (pointA: Coordinate, pointB: Coordinate) => Length =
    (pointA: Coordinate, pointB: Coordinate): Length => {
        const sumOfSquaresOfDimensionalDistances: number = pointA.reduce(
            (sum: number, pointAElement: CoordinateElement, index: number): number => {
                const pointBElement: CoordinateElement = pointB[ index ]
                const dimensionalDistance: Length = to.Length(Math.abs(
                    from.CoordinateElement(pointAElement) - from.CoordinateElement(pointBElement),
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
