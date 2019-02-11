// tslint:disable no-any ban-types

import { apply, Integer, to } from '../nominal'
import { DECIMAL, DEFAULT_PRECISION, ONE_HALF } from './constants'
import { absoluteValue, difference, negative, product, quotient, round } from './typedOperations'

const isCloseTo: <T extends Number>(numberOne: T, numberTwo: T) => boolean =
    <T extends Number>(numberOne: T, numberTwo: T): boolean => {
        const precision: Integer = DEFAULT_PRECISION

        const pow: number =
            apply.Power(DECIMAL, to.Power(apply.Translation(precision, to.Translation(1)))) as any as number
        const delta: number = absoluteValue(difference(numberOne, numberTwo)) as any as number
        const maxDelta: number =
            apply.Scalar(apply.Power(DECIMAL, to.Power(negative(precision))), ONE_HALF) as any as number

        return quotient(round(product(delta, pow)), pow) <= maxDelta
    }

export {
    isCloseTo,
}
