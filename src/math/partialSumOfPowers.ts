import { apply, Base, from, insteadOf, ofFrom, Power, to } from '../nominal'
import { negative, reciprocal } from './typedOperations'

const computePartialSumOfPowers: <NumericType extends number>(
    base: Base<NumericType>,
    upperBound: Power<NumericType>,
) => number =
    <NumericType extends number>(base: Base<NumericType>, upperBound: Power<NumericType>): number =>
        from.Base(apply.Scalar(
            apply.Translation(
                apply.Power(
                    base,
                    insteadOf<Power, Base>(apply.Translation(
                        upperBound,
                        to.Translation<Power>(1),
                    )),
                ),
                to.Translation<Base>(negative(1)),
            ),
            to.Scalar(ofFrom(reciprocal(apply.Translation(
                base,
                to.Translation<Base>(negative(1)),
            )))),
        ))

export {
    computePartialSumOfPowers,
}
