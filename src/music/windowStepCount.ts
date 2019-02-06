import { difference, negative } from '../math'
import { apply, Base, Cardinal, from, to } from '../nominal'

const windowStepCount: (window: Base, iteration: Cardinal) => Cardinal =
    (window: Base, iteration: Cardinal): Cardinal =>
        to.Cardinal(from.Base(difference(
            apply.Power(window, to.Power(from.Cardinal(iteration))),
            apply.Power(window, to.Power(apply.Translation(
                from.Cardinal(iteration),
                to.Translation(negative(1)),
            ))),
        )))

export {
    windowStepCount,
}
