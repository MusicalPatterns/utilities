import { cycle, to } from '../../../src/indexForTest'

describe('cycle', () => {
    it('rotates a array cyclically, to the left', () => {
        expect(cycle([ 0, 1, 1, 0, 1 ], to.Offset(1)))
            .toEqual([ 1, 1, 0, 1, 0 ])
        expect(cycle([ 0, 1, 1, 0, 1 ], to.Offset(0)))
            .toEqual([ 0, 1, 1, 0, 1 ])
        expect(cycle([ 0, 1, 1, 0, 1 ], to.Offset(-1)))
            .toEqual([ 1, 0, 1, 1, 0 ])
    })
})
