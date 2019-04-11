import { OCTAVE, to, TRITAVE, windowIterationHarmonicStepCount } from '../../../src/indexForTest'

describe('window iteration harmonic step count', () => {
    it('given an iteration of a window, will figure how many steps of the harmonic series are in it', () => {
        expect(windowIterationHarmonicStepCount(OCTAVE, to.Index(1)))
            .toBe(to.Cardinal(1))
        expect(windowIterationHarmonicStepCount(OCTAVE, to.Index(2)))
            .toBe(to.Cardinal(2))
        expect(windowIterationHarmonicStepCount(OCTAVE, to.Index(3)))
            .toBe(to.Cardinal(4))
        expect(windowIterationHarmonicStepCount(OCTAVE, to.Index(4)))
            .toBe(to.Cardinal(8))

        expect(windowIterationHarmonicStepCount(TRITAVE, to.Index(1)))
            .toBe(to.Cardinal(2))
        expect(windowIterationHarmonicStepCount(TRITAVE, to.Index(2)))
            .toBe(to.Cardinal(6))
        expect(windowIterationHarmonicStepCount(TRITAVE, to.Index(3)))
            .toBe(to.Cardinal(18))
        expect(windowIterationHarmonicStepCount(TRITAVE, to.Index(4)))
            .toBe(to.Cardinal(54))
    })
})
