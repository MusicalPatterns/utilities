import { as, Scalar, UnitScalar, use } from '../nominal'
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
            as.Translation<NumericType>(as.number(use.Scalar(
                as.Scalar<NumericType>(as.number(progress)),
                as.Scalar<Scalar<NumericType>>(use.Translation(
                    endValue as unknown as number,
                    as.Translation(negative(startValue as unknown as number)),
                )),
            ))),
        )

export {
    valueLinearlyBetweenValues,
}
