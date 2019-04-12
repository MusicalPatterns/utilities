import { apply, DECIMAL, DEFAULT_PRECISION, from, ONE_HALF, to, Translation } from '../nominal'
import { absoluteValue, difference, negative, product, quotient, round } from './typedOperations'

const isCloseTo: <NumericType extends Number = number>(
    actual: NumericType,
    expected: NumericType,
    manualPrecision?: number,
) => boolean =
    <NumericType extends Number = number>(
        actual: NumericType,
        expected: NumericType,
        manualPrecision?: number,
    ): boolean => {
        const precision: number = manualPrecision || DEFAULT_PRECISION

        const pow: number = apply.Power(DECIMAL, to.Power(apply.Translation(precision, to.Translation(1))))
        const delta: number = absoluteValue(from.Translation(difference(actual, expected) as Translation))
        const maxDelta: number = apply.Scalar(apply.Power(DECIMAL, to.Power(negative(precision))), ONE_HALF)

        return from.Scalar(quotient(round(product(delta, pow)), pow)) <= maxDelta
    }

export {
    isCloseTo,
}
