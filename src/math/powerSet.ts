import { isUndefined, Maybe } from '../code'

const recursiveCombinations: <T>(remainingSet: T[], activeSet?: T[], output?: T[][]) => Maybe<T[][]> =
    <T>(remainingSet: T[], activeSet: T[] = [], output: T[][] = []): Maybe<T[][]> => {
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

const powerSet: <T>(set: T[]) => T[][] =
    <T>(set: T[]): T[][] => {
        const combinations: Maybe<T[][]> = recursiveCombinations(set)
        if (isUndefined(combinations)) {
            throw new Error(`no combinations for power set ${set}`)
        }
        const emptySet: T[] = []

        return [ emptySet ].concat(combinations)
    }

export {
    powerSet,
}
