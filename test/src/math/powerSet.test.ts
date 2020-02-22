import { as, computeCombinations, Integer, powerSet } from '../../../src/indexForTest'

describe('power set', (): void => {
    it('returns an set of sets: all combinations of the elements of the passed set, plus the empty set', (): void => {
        const actualPowerSet: number[][] = powerSet([ 1, 2, 3 ])

        expect(actualPowerSet)
            .toHaveSameMembersAs(
                [
                    [],
                    [ 1 ],
                    [ 2 ],
                    [ 3 ],
                    [ 1, 2 ],
                    [ 1, 3 ],
                    [ 2, 3 ],
                    [ 1, 2, 3 ],
                ],
            )
    })

    describe('combinations', (): void => {
        it('works for choose 2', (): void => {
            expect(computeCombinations(as.Integer(3), as.Integer(2)))
                .toEqual([
                    [ 1, 2 ],
                    [ 1, 3 ],
                    [ 2, 3 ],
                ].map((combination: number[]): Integer[] => combination as Integer[]))
        })

        it('it works for choose 3', (): void => {
            expect(computeCombinations(as.Integer(4), as.Integer(3)))
                .toEqual([
                    [ 1, 2, 3 ],
                    [ 1, 2, 4 ],
                    [ 1, 3, 4 ],
                    [ 2, 3, 4 ],
                ].map((combination: number[]): Integer[] => combination as Integer[]))
        })
    })
})
