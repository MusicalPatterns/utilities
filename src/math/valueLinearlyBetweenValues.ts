import { as, NormalScalar, notAs, Scalar, use } from '../nominal'
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
        use.Translation(
            startValue,
            as.Translation<NumericType>(notAs.Scalar(use.Scalar(
                as.Scalar<NumericType>(notAs.NormalScalar(progress)),
                as.Scalar<Scalar<NumericType>>(use.Translation(
                    endValue as unknown as number,
                    as.Translation(negative(startValue as unknown as number)),
                )),
            ))),
        )

export {
    valueLinearlyBetweenValues,
}
