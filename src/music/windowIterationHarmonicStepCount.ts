import { negative } from '../math'
import { apply, Base, Cardinal, from, Index, of, ofOperation, PREVIOUS, to } from '../nominal'

const windowIterationHarmonicStepCount: (window: Base, iteration: Index) => Cardinal =
    (window: Base, iteration: Index): Cardinal =>
        to.Cardinal(from.Base(apply.Translation(
            apply.Power(
                window,
                to.Power(of.Base(from.Index(iteration))),
            ),
            to.Translation(ofOperation<'Base'>(negative(apply.Power(
                window,
                to.Power(of.Base(from.Index(apply.Translation(
                    iteration,
                    PREVIOUS,
                )))),
            )))),
        )))

export {
    windowIterationHarmonicStepCount,
}
