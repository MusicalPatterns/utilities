import { Maybe } from '../types'

const recursiveCombinations: (remainingSet: number[], activeSet?: number[], output?: number[][]) => Maybe<number[][]> =
    (remainingSet: number[], activeSet: number[] = [], output: number[][] = []): Maybe<number[][]> => {
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

const powerSet: (set: number[]) => number[][] =
    (set: number[]): number[][] => {
        const combinations: number[][] = recursiveCombinations(set) as number[][]
        const emptySet: number[] = []

        return [ emptySet ].concat(combinations)
    }

export {
    powerSet,
}
