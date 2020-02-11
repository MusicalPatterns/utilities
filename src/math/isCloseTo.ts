import { as, DECIMAL, DEFAULT_PRECISION, INCREMENT, ONE_HALF, use } from '../nominal'
import { absoluteValue, difference, negative, product, quotient, round } from './typedOperations'

const isCloseTo: <NumericType extends Number>(
    actual: NumericType,
    expected: NumericType,
    manualPrecision?: number,
) => boolean =
    <NumericType extends Number>(
        actual: NumericType,
        expected: NumericType,
        manualPrecision?: number,
    ): boolean => {
        if (as.number(actual) === Infinity && as.number(expected) === Infinity) {
            return true
        }

        const precision: number = manualPrecision || DEFAULT_PRECISION

        const pow: number = use.Power(DECIMAL, as.Power(use.Cardinal(precision, INCREMENT)))
        const delta: NumericType = absoluteValue(difference(actual, expected))
        const maxDelta: number = use.Scalar(use.Power(DECIMAL, as.Power(negative(precision))), ONE_HALF)

        return quotient(round(product(delta as unknown as number, pow)), pow) <= maxDelta
    }

export {
    isCloseTo,
}
