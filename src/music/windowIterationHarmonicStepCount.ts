import { difference } from '../math'
import { apply, Base, Cardinal, from, Index, PREVIOUS, to } from '../nominal'

const windowIterationHarmonicStepCount: (window: Base, iteration: Index) => Cardinal =
    (window: Base, iteration: Index): Cardinal => {
        const minuend: Base = apply.Power(
            window,
            to.Power(to.Base(from.Index(iteration))),
        )
        const subtrahend: Base = apply.Power(
            window,
            to.Power(to.Base(from.Index(apply.Translation(
                iteration,
                PREVIOUS,
            )))),
        )

        const count: Base = from.Translation(difference(
            minuend,
            subtrahend,
        ))

        return to.Cardinal(from.Base(count))
    }

export {
    windowIterationHarmonicStepCount,
}
