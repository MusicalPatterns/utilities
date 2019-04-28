import { isSingleton } from '../code'
import { Cardinal, FIRST_FACTOR_NECESSARY_TO_CHECK_IF_COMMON, Integer, use, Whole } from '../nominal'
import { dividesEvenly } from './dividesEvenly'
import { max } from './typedOperations'
import { ManyToManyIntegerOperation } from './types'

const computeCommonFactors: ManyToManyIntegerOperation =
    <WholeType extends Whole = Integer>(...values: WholeType[]): Array<Integer | WholeType> => {
        const commonFactors: WholeType[] = [ 1 as unknown as WholeType ]

        const maxValue: WholeType = max(...values)

        for (
            let candidateFactor: WholeType = FIRST_FACTOR_NECESSARY_TO_CHECK_IF_COMMON as unknown as WholeType;
            candidateFactor <= maxValue;
            candidateFactor = use.Cardinal(candidateFactor, 1 as unknown as Cardinal<WholeType>)
        ) {
            const isCommon: boolean = values.every((value: WholeType) =>
                dividesEvenly(value, candidateFactor))
            if (isCommon) {
                commonFactors.push(candidateFactor)
            }
        }

        return commonFactors
    }

const areCoprime: <WholeType extends Whole = Integer, OtherWholeType extends Whole = Integer>(
    ...values: Array<Whole | OtherWholeType>
) => boolean =
    <WholeType extends Whole = Integer, OtherWholeType extends Whole = Integer>(
        ...values: Array<Whole | OtherWholeType>
    ): boolean =>
        isSingleton(computeCommonFactors(...values))

export {
    computeCommonFactors,
    areCoprime,
}
