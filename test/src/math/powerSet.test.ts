import { powerSet, testArraysHaveSameElements } from '../../../src/indexForTest'

describe('power set', () => {
    it('returns an set of sets: all combinations of the elements of the passed set, plus the empty set', () => {
        const actualPowerSet: number[][] = powerSet([ 1, 2, 3 ])

        testArraysHaveSameElements(
            actualPowerSet,
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
})
