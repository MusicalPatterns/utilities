// tslint:disable no-any

import { apply, to } from '../nominal'
import { DECIMAL, DEFAULT_PRECISION, ONE_HALF } from './constants'
import { absoluteValue, difference, negative, round } from './typedOperations'

const isCloseTo: <T>(numberOne: T, numberTwo: T) => boolean =
    <T>(numberOne: T, numberTwo: T): boolean => {
        const numberOneAsNumber: number = numberOne as any
        const numberTwoAsNumber: number = numberTwo as any

        const precision: number = DEFAULT_PRECISION

        const pow: number = apply.Power(DECIMAL, to.Power(apply.Translation(precision, to.Translation(1))))
        const delta: number = absoluteValue(difference(numberOneAsNumber, numberTwoAsNumber))
        const maxDelta: number = apply.Scalar(apply.Power(DECIMAL, to.Power(negative(precision))), ONE_HALF)

        return round(delta * pow) / pow <= maxDelta
    }

export {
    isCloseTo,
}
