import { negative } from '../math'
import { as, Base, Cardinal, DECREMENT, Frequency, insteadOf, Ordinal, use } from '../nominal'

const windowIterationHarmonicStepCount:
    (window: Base<Frequency>, iteration: Ordinal<Array<Base<Frequency>>>) => Cardinal =
    (window: Base<Frequency>, iteration: Ordinal<Array<Base<Frequency>>>): Cardinal =>
        insteadOf<Cardinal>(as.Cardinal(as.number(use.Cardinal(
            use.Power(
                window,
                as.Power<Base<Frequency>>(as.number(iteration)),
            ),
            as.Cardinal<Base<Frequency>>(as.number(negative(use.Power(
                window,
                as.Power<Base<Frequency>>(as.number(use.Cardinal(
                    iteration,
                    DECREMENT,
                )))),
            )))),
        )))

export {
    windowIterationHarmonicStepCount,
}
