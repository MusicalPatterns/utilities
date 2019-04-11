import { apply, from, NormalScalar, Scalar, to } from '../nominal'
import { negative } from './typedOperations'

const valueLinearlyBetweenValues:
    <NumericValue = Number>(startValue: NumericValue, endValue: NumericValue, progress: NormalScalar) => NumericValue =
    <NumericValue = Number>(startValue: NumericValue, endValue: NumericValue, progress: NormalScalar): NumericValue =>
        apply.Translation(
            startValue,
            to.Translation(from.NormalScalar<number, Scalar>(apply.Scalar(
                progress,
                to.Scalar(to.NormalScalar(apply.Translation(
                    endValue as unknown as number,
                    to.Translation(negative(startValue as unknown as number)),
                ))),
            )) as unknown as NumericValue),
        )

export {
    valueLinearlyBetweenValues,
}
