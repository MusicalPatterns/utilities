import { apply, from, NormalScalar, Scalar, to } from '../nominal'
import { negative } from './typedOperations'

const valueLinearlyBetweenValues: <NumericType extends Number>(
    startValue: NumericType,
    endValue: NumericType,
    progress: NormalScalar<NumericType>,
) => NumericType =
    <NumericType extends Number>(
        startValue: NumericType,
        endValue: NumericType,
        progress: NormalScalar<NumericType>,
    ): NumericType =>
        apply.Translation(
            startValue,
            to.Translation<NumericType>(from.Scalar(apply.Scalar(
                to.Scalar<NumericType>(from.NormalScalar(progress)),
                to.Scalar<Scalar<NumericType>>(apply.Translation(
                    endValue as unknown as number,
                    to.Translation(negative(startValue as unknown as number)),
                )),
            ))),
        )

export {
    valueLinearlyBetweenValues,
}
