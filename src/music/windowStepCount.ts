import { apply, Base, Count, from, to } from '../nominal'

const windowStepCount: (window: Base, iteration: Count) => Count =
    (window: Base, iteration: Count): Count =>
        to.Count(
            apply.Power(from.Base(window), to.Power(from.Count(iteration))) -
            apply.Power(from.Base(window), to.Power(apply.Offset(from.Count(iteration), to.Offset(-1)))),
        )

export {
    windowStepCount,
}
