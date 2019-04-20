import { isSingleton } from '../code'
import { FIRST_FACTOR_NECESSARY_TO_CHECK_IF_COMMON, Integer, Natural, Translation, use } from '../nominal'
import { dividesEvenly } from './dividesEvenly'
import { max } from './typedOperations'
import { ManyToManyIntegerOperation } from './types'

const computeCommonFactors: ManyToManyIntegerOperation =
    <IntegerType extends Natural = Integer>(...values: IntegerType[]): Array<Integer | IntegerType> => {
        const commonFactors: IntegerType[] = [ 1 as unknown as IntegerType ]

        const maxValue: IntegerType = max(...values)

        for (
            let candidateFactor: IntegerType = FIRST_FACTOR_NECESSARY_TO_CHECK_IF_COMMON as unknown as IntegerType;
            candidateFactor <= maxValue;
            candidateFactor = use.Translation(candidateFactor, 1 as unknown as Translation<IntegerType>)
        ) {
            const isCommon: boolean = values.every((value: IntegerType) =>
                dividesEvenly(value, candidateFactor))
            if (isCommon) {
                commonFactors.push(candidateFactor)
            }
        }

        return commonFactors
    }

const areCoprime: <IntegerType extends Natural = Integer, OtherIntegerType extends Natural = Integer>(
    ...values: Array<Natural | OtherIntegerType>
) => boolean =
    <IntegerType extends Natural = Integer, OtherIntegerType extends Natural = Integer>(
        ...values: Array<Natural | OtherIntegerType>
    ): boolean =>
        isSingleton(computeCommonFactors(...values))

export {
    computeCommonFactors,
    areCoprime,
}
