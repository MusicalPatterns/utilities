import { isSingleton } from '../code'
import { apply, FIRST_FACTOR_NECESSARY_TO_CHECK_IF_COMMON, Integer, to } from '../nominal'
import { dividesEvenly } from './dividesEvenly'
import { max } from './typedOperations'

const computeCommonFactors: <IntegerType extends Integer>(...values: IntegerType[]) => IntegerType[] =
    <IntegerType extends Integer>(...values: IntegerType[]): IntegerType[] => {
        const commonFactors: IntegerType[] = [ 1 as IntegerType ]

        const maxValue: IntegerType = max(...values)

        for (
            let candidateFactor: IntegerType = FIRST_FACTOR_NECESSARY_TO_CHECK_IF_COMMON as IntegerType;
            candidateFactor <= maxValue;
            candidateFactor = apply.Translation(candidateFactor, to.Translation(1 as IntegerType))
        ) {
            const isCommon: boolean = values.every((value: IntegerType) =>
                dividesEvenly(value, candidateFactor))
            if (isCommon) {
                commonFactors.push(candidateFactor)
            }
        }

        return commonFactors
    }

const areCoprime: <IntegerType extends Integer>(...values: IntegerType[]) => boolean =
    <IntegerType extends Integer>(...values: IntegerType[]): boolean =>
        isSingleton(computeCommonFactors(...values))

export {
    computeCommonFactors,
    areCoprime,
}
