import { isSingleton } from '../code'
import { apply, FIRST_FACTOR_NECESSARY_TO_CHECK_IF_COMMON, Integer, Integerlike, Translation } from '../nominal'
import { dividesEvenly } from './dividesEvenly'
import { max } from './typedOperations'

const computeCommonFactors: <IntegerType extends Integerlike = Integer>(...values: IntegerType[]) => IntegerType[] =
    <IntegerType extends Integerlike = Integer>(...values: IntegerType[]): IntegerType[] => {
        const commonFactors: IntegerType[] = [ 1 as unknown as IntegerType ]

        const maxValue: IntegerType = max(...values)

        for (
            let candidateFactor: IntegerType = FIRST_FACTOR_NECESSARY_TO_CHECK_IF_COMMON as unknown as IntegerType;
            candidateFactor <= maxValue;
            candidateFactor = apply.Translation(candidateFactor, 1 as unknown as Translation<IntegerType>)
        ) {
            const isCommon: boolean = values.every((value: IntegerType) =>
                dividesEvenly(value, candidateFactor))
            if (isCommon) {
                commonFactors.push(candidateFactor)
            }
        }

        return commonFactors
    }

const areCoprime: <IntegerType extends Integerlike = Integer>(...values: IntegerType[]) => boolean =
    <IntegerType extends Integerlike = Integer>(...values: IntegerType[]): boolean =>
        isSingleton(computeCommonFactors(...values))

export {
    computeCommonFactors,
    areCoprime,
}
