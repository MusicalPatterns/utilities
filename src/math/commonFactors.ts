import { isSingleton } from '../code'
import { Cardinal, FIRST_FACTOR_NECESSARY_TO_CHECK_IF_COMMON, Integer, use, Whole } from '../nominal'
import { dividesEvenly } from './dividesEvenly'
import { max } from './typedOperations'
import { ManyToManyIntegerOperation } from './types'

const computeCommonFactors: ManyToManyIntegerOperation =
    <IntegerType extends Whole = Integer>(...values: IntegerType[]): Array<Integer | IntegerType> => {
        const commonFactors: IntegerType[] = [ 1 as unknown as IntegerType ]

        const maxValue: IntegerType = max(...values)

        for (
            let candidateFactor: IntegerType = FIRST_FACTOR_NECESSARY_TO_CHECK_IF_COMMON as unknown as IntegerType;
            candidateFactor <= maxValue;
            candidateFactor = use.Cardinal(candidateFactor, 1 as unknown as Cardinal<IntegerType>)
        ) {
            const isCommon: boolean = values.every((value: IntegerType) =>
                dividesEvenly(value, candidateFactor))
            if (isCommon) {
                commonFactors.push(candidateFactor)
            }
        }

        return commonFactors
    }

const areCoprime: <IntegerType extends Whole = Integer, OtherIntegerType extends Whole = Integer>(
    ...values: Array<Whole | OtherIntegerType>
) => boolean =
    <IntegerType extends Whole = Integer, OtherIntegerType extends Whole = Integer>(
        ...values: Array<Whole | OtherIntegerType>
    ): boolean =>
        isSingleton(computeCommonFactors(...values))

export {
    computeCommonFactors,
    areCoprime,
}
