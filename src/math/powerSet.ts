import { computeLength, computeReverse, isEmpty, isUndefined, Maybe } from '../code'
import { as, INCREMENT, Integer, ONE, use } from '../nominal'
import { difference, sum } from './typedOperations'

const recursiveCombinationsAllChooses: <MemberType>(
    remainingSet: MemberType[],
    activeSet?: MemberType[],
    output?: MemberType[][],
) => Maybe<MemberType[][]> =
    <MemberType>(
        remainingSet: MemberType[],
        activeSet: MemberType[] = [],
        output: MemberType[][] = [],
    ): Maybe<MemberType[][]> => {
        if (isEmpty(activeSet) && isEmpty(remainingSet)) {
            return undefined
        }
        if (isEmpty(remainingSet)) {
            output.push(activeSet)
        }
        else {
            recursiveCombinationsAllChooses(remainingSet.slice(1), activeSet.concat(remainingSet[ 0 ]), output)
            recursiveCombinationsAllChooses(remainingSet.slice(1), activeSet, output)
        }

        return output
    }

const powerSet: <MemberType>(set: MemberType[]) => MemberType[][] =
    <MemberType>(set: MemberType[]): MemberType[][] => {
        const combinations: Maybe<MemberType[][]> = recursiveCombinationsAllChooses(set)
        if (isUndefined(combinations)) {
            throw new Error(`no combinations for power set ${String(set)}`)
        }
        const emptySet: MemberType[] = []

        return [ emptySet ].concat(combinations)
    }

const computeCombinations: (max: Integer, choose: Integer) => Integer[][] =
    (max: Integer, choose: Integer): Integer[][] => {
        const combinations: Integer[][] = []

        const computeRecursiveCombinations: (integer: Integer, combination: Integer[]) => void =
            (integer: Integer, combination: Integer[]): void => {
                if (combination.length === choose) {
                    combinations.push(combination.slice())

                    return
                }

                if (sum(as.Integer(computeLength(combination)), difference(max, integer), ONE) < choose) {
                    return
                }

                computeRecursiveCombinations(use.Cardinal(integer, INCREMENT), combination)
                combination.push(integer)
                computeRecursiveCombinations(use.Cardinal(integer, INCREMENT), combination)
                combination.pop()
            }

        computeRecursiveCombinations(ONE, [])

        return computeReverse(combinations)
    }

export {
    powerSet,
    computeCombinations,
}
