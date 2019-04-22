import { negative } from '../math'
import { as, Base, Cardinal, DECREMENT, Frequency, insteadOf, notAs, Ordinal, use } from '../nominal'

const windowIterationHarmonicStepCount: (window: Base<Frequency>, iteration: Ordinal<Base<Frequency>>) => Cardinal =
    (window: Base<Frequency>, iteration: Ordinal<Base<Frequency>>): Cardinal =>
        insteadOf<Cardinal>(as.Cardinal(notAs.Base<Frequency>(use.Cardinal(
            use.Power(
                window,
                as.Power<Base<Frequency>>(notAs.Ordinal(iteration)),
            ),
            as.Cardinal<Base<Frequency>>(notAs.Base<Frequency>(negative(use.Power(
                window,
                as.Power<Base<Frequency>>(notAs.Ordinal(use.Cardinal(
                    iteration,
                    DECREMENT,
                )))),
            )))),
        )))

export {
    windowIterationHarmonicStepCount,
}
