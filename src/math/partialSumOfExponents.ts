import { as, Exponent, insteadOf, Logarithm, notAs, ofNotAs, use } from '../nominal'
import { negative, reciprocal } from './typedOperations'

const computePartialSumOfExponents: <NumericType extends Number>(
    logarithm: Logarithm<NumericType>,
    upperBound: Exponent<NumericType>,
) => number =
    <NumericType extends Number>(logarithm: Logarithm<NumericType>, upperBound: Exponent<NumericType>): number =>
        notAs.Logarithm<NumericType>(use.Scalar(
            use.Cardinal(
                use.Exponent(
                    logarithm,
                    insteadOf<Exponent, Logarithm<NumericType>>(use.Cardinal(
                        upperBound,
                        as.Cardinal<Exponent<NumericType>>(1),
                    )),
                ),
                as.Cardinal<Logarithm<NumericType>>(negative(1)),
            ),
            as.Scalar(ofNotAs(reciprocal(use.Cardinal(
                logarithm,
                as.Cardinal<Logarithm<NumericType>>(negative(1)),
            )))),
        ))

export {
    computePartialSumOfExponents,
}
