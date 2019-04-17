import { apply, Base, from, insteadOf, ofOperation, Power, to } from '../nominal'
import { negative, reciprocal } from './typedOperations'

const computePartialSumOfPowers: (base: Base, upperBound: Power) => number =
    (base: Base, upperBound: Power): number =>
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
            to.Scalar(ofOperation<Base>(reciprocal(apply.Translation(
                base,
                to.Translation<Base>(negative(1)),
            )))),
        ))

export {
    computePartialSumOfPowers,
}
