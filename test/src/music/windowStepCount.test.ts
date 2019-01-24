import { OCTAVE, to, TRITAVE, windowStepCount } from '../../../src/indexForTest'

describe('window step count', () => {
    it('given a window and an iteration, will calculate how many steps are in that iteration of that window', () => {
        expect(windowStepCount(OCTAVE, to.Count(1)))
            .toBe(to.Count(1))
        expect(windowStepCount(OCTAVE, to.Count(2)))
            .toBe(to.Count(2))
        expect(windowStepCount(OCTAVE, to.Count(3)))
            .toBe(to.Count(4))
        expect(windowStepCount(OCTAVE, to.Count(4)))
            .toBe(to.Count(8))

        expect(windowStepCount(TRITAVE, to.Count(1)))
            .toBe(to.Count(2))
        expect(windowStepCount(TRITAVE, to.Count(2)))
            .toBe(to.Count(6))
        expect(windowStepCount(TRITAVE, to.Count(3)))
            .toBe(to.Count(18))
        expect(windowStepCount(TRITAVE, to.Count(4)))
            .toBe(to.Count(54))
    })
})
