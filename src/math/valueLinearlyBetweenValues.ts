import { apply, from, NormalScalar, to, Translation } from '../nominal'
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
            to.Translation(from.NormalScalar(apply.Scalar(
                progress,
                to.Scalar<NormalScalar>(apply.Translation(
                    endValue as unknown as number,
                    to.Translation(negative(startValue as unknown as number)),
                )),
            ))) as Translation<NumericValue>,
        )

export {
    valueLinearlyBetweenValues,
}
