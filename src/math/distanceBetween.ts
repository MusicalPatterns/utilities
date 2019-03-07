// tslint:disable ban-types

import { reduce } from '../code'
import { apply, Ordinal } from '../nominal'
import { SQUARE_ROOT, SQUARED } from './constants'
import { absoluteValue, difference, sum } from './typedOperations'
import { Coordinate } from './types'

const distanceBetween: <T extends Number>(pointA: Coordinate<T>, pointB: Coordinate<T>) => T =
    <T extends Number>(pointA: Coordinate<T>, pointB: Coordinate<T>): T => {
        const sumOfSquaresOfDimensionalDistances: T = reduce(
            pointA,
            (accumulator: T, pointAElement: T, index: Ordinal): T => {
                const pointBElement: T = apply.Ordinal(pointB, index) as T
                const dimensionalDistance: T = absoluteValue(difference(pointAElement, pointBElement))
                const squareOfDimensionalDistance: T = apply.Power(
                    dimensionalDistance,
                    SQUARED,
                )

                return sum(accumulator, squareOfDimensionalDistance)
            },
            0 as unknown as T,
        )

        return apply.Power(sumOfSquaresOfDimensionalDistances, SQUARE_ROOT)
    }

export {
    distanceBetween,
}
