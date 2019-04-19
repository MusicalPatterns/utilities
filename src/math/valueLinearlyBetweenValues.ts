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
            to.Translation(from.Scalar<NumericType>(apply.Scalar(
                to.Scalar(from.NormalScalar<NumericType>(progress)),
                to.Scalar<Scalar<NumericType>>(apply.Translation(
                    endValue as unknown as number,
                    to.Translation(negative(startValue as unknown as number)),
                )),
            ))),
        )

export {
    valueLinearlyBetweenValues,
}
