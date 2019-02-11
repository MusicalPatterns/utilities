// tslint:disable no-any

import { absoluteValue, DECIMAL, difference, negative, ONE_HALF, product, quotient, round } from '../math'
import { apply, to } from '../nominal'

const determineIfClose: (rawNumberOne: number, rawNumberTwo: number) => boolean =
    (rawNumberOne: number, rawNumberTwo: number): boolean => {
        const precision: number = 2

        const pow: number =
            apply.Power(DECIMAL, to.Power(apply.Translation(precision, to.Translation(1)))) as any as number
        const delta: number = absoluteValue(difference(rawNumberOne, rawNumberTwo))
        const maxDelta: number =
            apply.Scalar(apply.Power(DECIMAL, to.Power(negative(precision))), ONE_HALF) as any as number

        return quotient(round(product(delta, pow)), pow) <= maxDelta
    }

const maybeFail: (isClose: boolean, rawNumberOne: number, rawNumberTwo: number, negate: boolean) => void =
    (isClose: boolean, rawNumberOne: number, rawNumberTwo: number, negate: boolean = false): void => {
        if (!negate && !isClose) {
            fail(`expected ${rawNumberOne} to be close to ${rawNumberTwo}`)
        }
        else if (negate && isClose) {
            fail(`expected ${rawNumberOne} not to be close to ${rawNumberTwo}`)
        }
    }

// tslint:disable-next-line bool-param-default
const testIsCloseTo: <T>(numberOne: T, numberTwo: T, negate?: boolean) => boolean =
    <T>(numberOne: T, numberTwo: T, negate: boolean = false): boolean => {
        const rawNumberOne: number = numberOne as any
        const rawNumberTwo: number = numberTwo as any

        const isClose: boolean = determineIfClose(rawNumberOne, rawNumberTwo)

        maybeFail(isClose, rawNumberOne, rawNumberTwo, negate)

        return negate ? !isClose : isClose
    }

export {
    testIsCloseTo,
}
