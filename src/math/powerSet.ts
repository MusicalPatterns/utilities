import { Maybe } from '../code'

const recursiveCombinations: <T>(remainingSet: T[], activeSet?: T[], output?: T[][]) => Maybe<T[][]> =
    <T>(remainingSet: T[], activeSet: T[] = [], output: T[][] = []): Maybe<T[][]> => {
        if (!activeSet.length && !remainingSet.length) {
            return undefined
        }
        if (!remainingSet.length) {
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
        const combinations: T[][] = recursiveCombinations(set) as T[][]
        const emptySet: T[] = []

        return [ emptySet ].concat(combinations)
    }

export {
    powerSet,
}
