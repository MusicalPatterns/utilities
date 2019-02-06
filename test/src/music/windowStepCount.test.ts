import { OCTAVE, to, TRITAVE, windowStepCount } from '../../../src/indexForTest'

describe('window step count', () => {
    it('given a window and an iteration, will calculate how many steps are in that iteration of that window', () => {
        expect(windowStepCount(OCTAVE, to.Cardinal(1)))
            .toBe(to.Cardinal(1))
        expect(windowStepCount(OCTAVE, to.Cardinal(2)))
            .toBe(to.Cardinal(2))
        expect(windowStepCount(OCTAVE, to.Cardinal(3)))
            .toBe(to.Cardinal(4))
        expect(windowStepCount(OCTAVE, to.Cardinal(4)))
            .toBe(to.Cardinal(8))

        expect(windowStepCount(TRITAVE, to.Cardinal(1)))
            .toBe(to.Cardinal(2))
        expect(windowStepCount(TRITAVE, to.Cardinal(2)))
            .toBe(to.Cardinal(6))
        expect(windowStepCount(TRITAVE, to.Cardinal(3)))
            .toBe(to.Cardinal(18))
        expect(windowStepCount(TRITAVE, to.Cardinal(4)))
            .toBe(to.Cardinal(54))
    })
})
