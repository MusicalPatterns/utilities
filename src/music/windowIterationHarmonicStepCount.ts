import { difference } from '../math'
import { apply, Base, Cardinal, from, Ordinal, PREVIOUS, to } from '../nominal'

const windowIterationHarmonicStepCount: (window: Base, iteration: Ordinal) => Cardinal =
    (window: Base, iteration: Ordinal): Cardinal => {
        const minuend: Base = apply.Power(
            window,
            to.Power(to.Base(from.Ordinal(iteration))),
        )
        const subtrahend: Base = apply.Power(
            window,
            to.Power(to.Base(from.Ordinal(apply.Translation(
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
