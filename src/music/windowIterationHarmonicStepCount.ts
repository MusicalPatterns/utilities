import { difference, negative } from '../math'
import { apply, Base, Cardinal, from, Ordinal, to } from '../nominal'

const windowIterationHarmonicStepCount: (window: Base, iteration: Ordinal) => Cardinal =
    (window: Base, iteration: Ordinal): Cardinal =>
        to.Cardinal(from.Base(difference(
            apply.Power(window, to.Power(from.Ordinal(iteration))),
            apply.Power(window, to.Power(from.Ordinal(apply.Translation(
                iteration,
                to.Translation(negative(1)),
            ))),
        ))))

export {
    windowIterationHarmonicStepCount,
}
