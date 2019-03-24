import { apply, Base, from, Power, to } from '../nominal'
import { negative, quotient } from './typedOperations'

const computePartialSumOfPowers: (base: Base, upperBound: Power) => number =
    (base: Base, upperBound: Power): number =>
        from.Base(quotient(
            apply.Translation(
                apply.Power(
                    base,
                    apply.Translation(
                        upperBound,
                        to.Translation(1),
                    ),
                ),
                to.Translation(negative(1)),
            ),
            apply.Translation(
                base,
                to.Translation(negative(1)),
            ),
        ))

export {
    computePartialSumOfPowers,
}
