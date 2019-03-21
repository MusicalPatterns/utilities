// tslint:disable no-any ban-types

import { apply, Integer, to } from '../nominal'
import { DECIMAL, DEFAULT_PRECISION, ONE_HALF } from './constants'
import { absoluteValue, difference, negative, product, quotient, round } from './typedOperations'

const isCloseTo: <NumericType extends Number = Number>(numberOne: NumericType, numberTwo: NumericType) => boolean =
    <NumericType extends Number = Number>(numberOne: NumericType, numberTwo: NumericType): boolean => {
        const precision: Integer = DEFAULT_PRECISION

        const pow: number = apply.Power(DECIMAL, to.Power(apply.Translation(precision, to.Translation(1))))
        const delta: Number = absoluteValue(difference(numberOne, numberTwo))
        const maxDelta: number = apply.Scalar(apply.Power(DECIMAL, to.Power(negative(precision))), ONE_HALF)

        return quotient(round(product(delta, pow)), pow) <= maxDelta
    }

export {
    isCloseTo,
}
