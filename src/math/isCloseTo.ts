// tslint:disable no-any

import { apply, to } from '../nominal'
import { DECIMAL, DEFAULT_PRECISION, ONE_HALF } from './constants'
import { absoluteValue, difference, negative, product, quotient, round } from './typedOperations'

const isCloseTo: <T extends number>(numberOne: T, numberTwo: T) => boolean =
    <T extends number>(numberOne: T, numberTwo: T): boolean => {
        const precision: number = DEFAULT_PRECISION

        const pow: number = apply.Power(DECIMAL, to.Power(apply.Translation(precision, to.Translation(1))))
        const delta: number = absoluteValue(difference(numberOne, numberTwo))
        const maxDelta: number = apply.Scalar(apply.Power(DECIMAL, to.Power(negative(precision))), ONE_HALF)

        return quotient(round(product(delta, pow)), pow) <= maxDelta
    }

export {
    isCloseTo,
}
