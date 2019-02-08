import { reduce } from '../code'
import { apply, Coordinate, CoordinateElement, from, Length, Ordinal, to } from '../nominal'
import { SQUARE_ROOT, SQUARED } from './constants'
import { absoluteValue, difference, sum } from './typedOperations'

const distanceBetween: (pointA: Coordinate, pointB: Coordinate) => Length =
    (pointA: Coordinate, pointB: Coordinate): Length => {
        const sumOfSquaresOfDimensionalDistances: number = reduce(
            pointA,
            (accumulator: number, pointAElement: CoordinateElement, index: Ordinal): number => {
                const pointBElement: CoordinateElement = apply.Ordinal(pointB, index)
                const dimensionalDistance: Length = to.Length(from.CoordinateElement(absoluteValue(
                    difference(pointAElement, pointBElement)),
                ))
                const squareOfDimensionalDistance: number = apply.Power(
                    from.Length(dimensionalDistance),
                    SQUARED,
                )

                return sum(accumulator, squareOfDimensionalDistance)
            },
            0,
        )

        return to.Length(apply.Power(sumOfSquaresOfDimensionalDistances, SQUARE_ROOT))
    }

export {
    distanceBetween,
}
