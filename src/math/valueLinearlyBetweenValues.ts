import { apply, from, NormalScalar, to } from '../nominal'
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
            to.Translation(from.NormalScalar<NumericType>(apply.NormalScalar(
                progress,
                to.NormalScalar<NormalScalar<NumericType>>(apply.Translation(
                    endValue as unknown as number,
                    to.Translation(negative(startValue as unknown as number)),
                )),
            ))),
        )

export {
    valueLinearlyBetweenValues,
}
