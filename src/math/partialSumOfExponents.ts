import { as, Exponent, Logarithm, use } from '../nominal'
import { negative, pow, reciprocal } from './typedOperations'

const computePartialSumOfExponents: <NumericType extends Number>(
    logarithm: Logarithm<NumericType>,
    upperBound: Exponent<NumericType>,
) => NumericType =
    <NumericType extends Number>(logarithm: Logarithm<NumericType>, upperBound: Exponent<NumericType>): NumericType =>
        use.Scalar(
            use.Cardinal(
                pow(
                    logarithm,
                    use.Cardinal(
                        upperBound,
                        as.Cardinal<Exponent<NumericType>>(1),
                    ),
                ),
                as.Cardinal<NumericType>(negative(1)),
            ),
            as.Scalar<NumericType>(as.number(reciprocal(use.Cardinal(
                logarithm,
                as.Cardinal<Logarithm<NumericType>>(negative(1)),
            )))),
        )

export {
    computePartialSumOfExponents,
}
