import { negative } from '../math'
import { apply, Base, Cardinal, from, Index, PREVIOUS, to } from '../nominal'

const windowIterationHarmonicStepCount: (window: Base, iteration: Index) => Cardinal =
    (window: Base, iteration: Index): Cardinal =>
        to.Cardinal(from.Base(apply.Translation(
            apply.Power(
                window,
                to.Power(to.Base(from.Index(iteration))),
            ),
            to.Translation(negative(apply.Power(
                window,
                to.Power(to.Base(from.Index(apply.Translation(
                    iteration,
                    PREVIOUS,
                )))),
            ))),
        )))

export {
    windowIterationHarmonicStepCount,
}
