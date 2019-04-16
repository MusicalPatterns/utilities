import { negative } from '../math'
import { apply, Base, Cardinal, DECREMENT, Frequency, from, Index, to } from '../nominal'

const windowIterationHarmonicStepCount: (window: Base<Frequency>, iteration: Index<Base<Frequency>>) => Cardinal =
    (window: Base<Frequency>, iteration: Index<Base<Frequency>>): Cardinal =>
        to.Cardinal(from.Base<Frequency>(apply.Translation(
            apply.Power(
                window,
                to.Power<Base<Frequency>>(from.Index(iteration)),
            ),
            to.Translation<Base<Frequency>>(from.Base<Frequency>(negative(apply.Power(
                window,
                to.Power<Base<Frequency>>(from.Index(apply.Translation(
                    iteration,
                    DECREMENT,
                )))),
            )))),
        ))

export {
    windowIterationHarmonicStepCount,
}
