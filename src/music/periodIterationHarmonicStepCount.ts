import { negative, pow } from '../math'
import { as, Base, Cardinal, DECREMENT, Frequency, Ordinal, use } from '../nominal'

const periodIterationHarmonicStepCount:
    (period: Base<Frequency>, iteration: Ordinal<Array<Base<Frequency>>>) => Cardinal =
    (period: Base<Frequency>, iteration: Ordinal<Array<Base<Frequency>>>): Cardinal =>
        as.Cardinal(as.number(use.Cardinal(
            pow(
                period,
                as.Power<Frequency>(as.number(iteration)),
            ),
            as.Cardinal<Frequency>(as.number(negative(pow(
                period,
                as.Power<Frequency>(as.number(use.Cardinal(
                    iteration,
                    DECREMENT,
                )))),
            )))),
        ))

export {
    periodIterationHarmonicStepCount,
}
