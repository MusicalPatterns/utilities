import { apply, from, NormalScalar, to } from '../nominal'
import { negative } from './typedOperations'

const valueLinearlyBetweenValues: <NumericValue extends number>(
    startValue: NumericValue,
    endValue: NumericValue,
    progress: NormalScalar<NumericValue>,
) => NumericValue =
    <NumericValue extends number>(
        startValue: NumericValue,
        endValue: NumericValue,
        progress: NormalScalar<NumericValue>,
    ): NumericValue =>
        apply.Translation(
            startValue,
            to.Translation(from.NormalScalar<NumericValue>(apply.Scalar(
                progress,
                to.Scalar<NormalScalar<NumericValue>>(apply.Translation(
                    endValue as unknown as number,
                    to.Translation(negative(startValue as unknown as number)),
                )),
            ))),
        )

export {
    valueLinearlyBetweenValues,
}
