// tslint:disable no-any ban-types

import { apply, to } from '../nominal'
import { DECIMAL, DEFAULT_PRECISION, ONE_HALF } from './constants'
import { absoluteValue, difference, negative, product, quotient, round } from './typedOperations'

const isCloseTo: <NumericType extends Number = Number>(
    actual: NumericType,
    expected: NumericType,
    manualPrecision?: number,
) => boolean =
    <NumericType extends Number = Number>(
        actual: NumericType,
        expected: NumericType,
        manualPrecision?: number,
    ): boolean => {
        const precision: number = manualPrecision || DEFAULT_PRECISION

        const pow: number = apply.Power(DECIMAL, to.Power(apply.Translation(precision, to.Translation(1))))
        const delta: Number = absoluteValue(difference(actual, expected))
        const maxDelta: number = apply.Scalar(apply.Power(DECIMAL, to.Power(negative(precision))), ONE_HALF)

        return quotient(round(product(delta, pow)), pow) <= maxDelta
    }

export {
    isCloseTo,
}
