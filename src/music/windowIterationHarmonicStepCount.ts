import { negative } from '../math'
import { apply, Base, Cardinal, DECREMENT, Frequency, from, Ordinal, to } from '../nominal'

const windowIterationHarmonicStepCount: (window: Base<Frequency>, iteration: Ordinal<Base<Frequency>>) => Cardinal =
    (window: Base<Frequency>, iteration: Ordinal<Base<Frequency>>): Cardinal =>
        to.Cardinal(from.Base<Frequency>(apply.Translation(
            apply.Power(
                window,
                to.Power<Base<Frequency>>(from.Ordinal(iteration)),
            ),
            to.Translation<Base<Frequency>>(from.Base<Frequency>(negative(apply.Power(
                window,
                to.Power<Base<Frequency>>(from.Ordinal(apply.Translation(
                    iteration,
                    DECREMENT,
                )))),
            )))),
        ))

export {
    windowIterationHarmonicStepCount,
}
