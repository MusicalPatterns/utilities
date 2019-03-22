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

const determineIfClose: <NumericType extends Number = Number>(
    numberOne: NumericType,
    numberTwo: NumericType,
    manualPrecision?: number,
) => boolean =
    <NumericType extends Number = Number>(
        numberOne: NumericType,
        numberTwo: NumericType,
        manualPrecision?: number,
    ): boolean => {
        const precision: number = manualPrecision || DEFAULT_PRECISION

        const pow: number = apply.Power(DECIMAL, to.Power(apply.Translation(precision, to.Translation(1))))
        const delta: Number = absoluteValue(difference(numberOne, numberTwo))
        const maxDelta: number = apply.Scalar(apply.Power(DECIMAL, to.Power(negative(precision))), ONE_HALF)

        return quotient(round(product(delta, pow)), pow) <= maxDelta
    }

const testIsCloseTo: <NumericType extends Number = Number>(
    numberOne: NumericType,
    numberTwo: NumericType,
    precision?: number,
    // tslint:disable-next-line bool-param-default
    negate?: boolean,
) => void =
    <NumericType extends Number = Number>(
        numberOne: NumericType,
        numberTwo: NumericType,
        precision?: number,
        negate: boolean = false,
    ): void => {
        const isClose: boolean = determineIfClose(numberOne, numberTwo, precision)

        if (!negate && !isClose) {
            fail(`expected ${numberOne} to be close to ${numberTwo}`)
        }
        else if (negate && isClose) {
            fail(`expected ${numberOne} not to be close to ${numberTwo}`)
        }
    }

const testIsNotCloseTo:
    // tslint:disable-next-line bool-param-default
    <NumericType extends Number = Number>(numberOne: NumericType, numberTwo: NumericType, precision?: number) => void =
    <NumericType extends Number = Number>(numberOne: NumericType, numberTwo: NumericType, precision?: number): void => {
        testIsCloseTo(numberOne, numberTwo, precision, true)
    }

export {
    testIsCloseTo,
    testIsNotCloseTo,
}
