import { apply, Exponent, from, insteadOf, Logarithm, ofFrom, to } from '../nominal'
import { negative, reciprocal } from './typedOperations'

const computePartialSumOfExponents: <NumericType extends Number>(
    logarithm: Logarithm<NumericType>,
    upperBound: Exponent<NumericType>,
) => number =
    <NumericType extends Number>(logarithm: Logarithm<NumericType>, upperBound: Exponent<NumericType>): number =>
        from.Logarithm<NumericType>(apply.Scalar(
            apply.Translation(
                apply.Exponent(
                    logarithm,
                    insteadOf<Exponent, Logarithm<NumericType>>(apply.Translation(
                        upperBound,
                        to.Translation<Exponent<NumericType>>(1),
                    )),
                ),
                to.Translation<Logarithm<NumericType>>(negative(1)),
            ),
            to.Scalar(ofFrom(reciprocal(apply.Translation(
                logarithm,
                to.Translation<Logarithm<NumericType>>(negative(1)),
            )))),
        ))

export {
    computePartialSumOfExponents,
}
