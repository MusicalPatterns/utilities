// tslint:disable no-any ban-types

import {
    absoluteValue,
    DECIMAL,
    DEFAULT_PRECISION,
    difference,
    negative,
    ONE_HALF,
    product,
    quotient,
    round,
} from '../math'
import { apply, to } from '../nominal'

const determineIfClose: <T extends Number>(numberOne: T, numberTwo: T) => boolean =
    <T extends Number>(numberOne: T, numberTwo: T): boolean => {
        const precision: number = DEFAULT_PRECISION

        const pow: number = apply.Power(DECIMAL, to.Power(apply.Translation(precision, to.Translation(1))))
        const delta: Number = absoluteValue(difference(numberOne, numberTwo))
        const maxDelta: number = apply.Scalar(apply.Power(DECIMAL, to.Power(negative(precision))), ONE_HALF)

        return quotient(round(product(delta, pow)), pow) <= maxDelta
    }

const maybeFail: <T extends Number>(isClose: boolean, numberOne: T, numberTwo: T, negate: boolean) => void =
    <T extends Number>(isClose: boolean, numberOne: T, numberTwo: T, negate: boolean = false): void => {
        if (!negate && !isClose) {
            fail(`expected ${numberOne} to be close to ${numberTwo}`)
        }
        else if (negate && isClose) {
            fail(`expected ${numberOne} not to be close to ${numberTwo}`)
        }
    }

// tslint:disable-next-line bool-param-default
const testIsCloseTo: <T extends Number>(numberOne: T, numberTwo: T, negate?: boolean) => boolean =
    <T extends Number>(numberOne: T, numberTwo: T, negate: boolean = false): boolean => {
        const isClose: boolean = determineIfClose(numberOne, numberTwo)

        maybeFail(isClose, numberOne, numberTwo, negate)

        return negate ? !isClose : isClose
    }

export {
    testIsCloseTo,
}
