import { apply, Base, from, Power, to } from '../nominal'
import { negative, reciprocal } from './typedOperations'

const computePartialSumOfPowers: (base: Base, upperBound: Power) => number =
    (base: Base, upperBound: Power): number =>
        from.Base<number, Base>(apply.Scalar(
            apply.Translation(
                apply.Power(
                    base,
                    apply.Translation(
                        upperBound,
                        to.Translation(to.Power(1)),
                    ) as Power<Base>,
                ),
                to.Translation(to.Base(negative(1))),
            ),
            to.Scalar(reciprocal(apply.Translation(
                base,
                to.Translation(to.Base(negative(1))),
            ))),
        ))

export {
    computePartialSumOfPowers,
}
