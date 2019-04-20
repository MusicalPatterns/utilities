import { as, Exponent, insteadOf, Logarithm, notAs, ofNotAs, use } from '../nominal'
import { negative, reciprocal } from './typedOperations'

const computePartialSumOfExponents: <NumericType extends Number>(
    logarithm: Logarithm<NumericType>,
    upperBound: Exponent<NumericType>,
) => number =
    <NumericType extends Number>(logarithm: Logarithm<NumericType>, upperBound: Exponent<NumericType>): number =>
        notAs.Logarithm<NumericType>(use.Scalar(
            use.Translation(
                use.Exponent(
                    logarithm,
                    insteadOf<Exponent, Logarithm<NumericType>>(use.Translation(
                        upperBound,
                        as.Translation<Exponent<NumericType>>(1),
                    )),
                ),
                as.Translation<Logarithm<NumericType>>(negative(1)),
            ),
            as.Scalar(ofNotAs(reciprocal(use.Translation(
                logarithm,
                as.Translation<Logarithm<NumericType>>(negative(1)),
            )))),
        ))

export {
    computePartialSumOfExponents,
}
