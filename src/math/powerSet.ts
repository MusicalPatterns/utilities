import { isEmpty, isUndefined, Maybe } from '../code'

const recursiveCombinations: <MemberType>(
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
            recursiveCombinations(remainingSet.slice(1), activeSet.concat(remainingSet[ 0 ]), output)
            recursiveCombinations(remainingSet.slice(1), activeSet, output)
        }

        return output
    }

const powerSet: <MemberType>(set: MemberType[]) => MemberType[][] =
    <MemberType>(set: MemberType[]): MemberType[][] => {
        const combinations: Maybe<MemberType[][]> = recursiveCombinations(set)
        if (isUndefined(combinations)) {
            throw new Error(`no combinations for power set ${set}`)
        }
        const emptySet: MemberType[] = []

        return [ emptySet ].concat(combinations)
    }

export {
    powerSet,
}
