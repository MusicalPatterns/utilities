import { apply, Base, Cardinal, from, to } from '../nominal'

const windowStepCount: (window: Base, iteration: Cardinal) => Cardinal =
    (window: Base, iteration: Cardinal): Cardinal =>
        to.Cardinal(
            apply.Power(from.Base(window), to.Power(from.Cardinal(iteration))) -
            apply.Power(from.Base(window), to.Power(apply.Translation(from.Cardinal(iteration), to.Translation(-1)))),
        )

export {
    windowStepCount,
}
