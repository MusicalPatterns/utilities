import { isUndefined, Maybe } from '../code'

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
        if (activeSet.length === 0 && remainingSet.length === 0) {
            return undefined
        }
        if (remainingSet.length === 0) {
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
