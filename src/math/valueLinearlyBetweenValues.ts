import { as, notAs, Scalar, UnitScalar, use } from '../nominal'
import { negative } from './typedOperations'

const valueLinearlyBetweenValues: <NumericType extends Number>(
    startValue: NumericType,
    endValue: NumericType,
    progress: UnitScalar<NumericType>,
) => NumericType =
    <NumericType extends Number>(
        startValue: NumericType,
        endValue: NumericType,
        progress: UnitScalar<NumericType>,
    ): NumericType =>
        use.Translation(
            startValue,
            as.Translation<NumericType>(notAs.Scalar(use.Scalar(
                as.Scalar<NumericType>(notAs.UnitScalar(progress)),
                as.Scalar<Scalar<NumericType>>(use.Translation(
                    endValue as unknown as number,
                    as.Translation(negative(startValue as unknown as number)),
                )),
            ))),
        )

export {
    valueLinearlyBetweenValues,
}
