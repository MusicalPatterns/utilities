import { apply, Base, from, Power, to } from '../nominal'
import { negative, quotient } from './typedOperations'

const computePartialSumOfPowers: (base: Base, upperBound: Power) => number =
    (base: Base, upperBound: Power): number => {
        const dividend: Base = apply.Translation(
            apply.Power(
                base,
                apply.Translation(
                    upperBound,
                    to.Translation(to.Power(1)),
                ) as Power<Base>,
            ),
            to.Translation(to.Base(negative(1))),
        )
        const divisor: Base = apply.Translation(
            base,
            to.Translation(to.Base(negative(1))),
        )

        return from.Base<number, Base>(from.Scalar(quotient(dividend, divisor)))
    }

export {
    computePartialSumOfPowers,
}
