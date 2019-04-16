import { negative } from '../math'
import { apply, Base, Cardinal, Frequency, from, Index, of, PREVIOUS, to } from '../nominal'

const windowIterationHarmonicStepCount: (window: Base<Frequency>, iteration: Index) => Cardinal =
    (window: Base<Frequency>, iteration: Index): Cardinal =>
        to.Cardinal(from.Base<Frequency>(apply.Translation(
            apply.Power(
                window,
                to.Power(of.Base<Frequency>(from.Index(iteration))),
            ),
            to.Translation(of.Base<Frequency>(from.Base<Frequency>(negative(apply.Power(
                window,
                to.Power(of.Base<Frequency>(from.Index(apply.Translation(
                    iteration,
                    PREVIOUS,
                )))),
            ))))),
        )))

export {
    windowIterationHarmonicStepCount,
}
