import { OCTAVE, to, TRITAVE, windowIterationHarmonicStepCount } from '../../../src/indexForTest'

describe('window iteration harmonic step count', () => {
    it('given an iteration of a window, will figure how many steps of the harmonic series are in it', () => {
        expect(windowIterationHarmonicStepCount(OCTAVE, to.Ordinal(1)))
            .toBe(to.Cardinal(1))
        expect(windowIterationHarmonicStepCount(OCTAVE, to.Ordinal(2)))
            .toBe(to.Cardinal(2))
        expect(windowIterationHarmonicStepCount(OCTAVE, to.Ordinal(3)))
            .toBe(to.Cardinal(4))
        expect(windowIterationHarmonicStepCount(OCTAVE, to.Ordinal(4)))
            .toBe(to.Cardinal(8))

        expect(windowIterationHarmonicStepCount(TRITAVE, to.Ordinal(1)))
            .toBe(to.Cardinal(2))
        expect(windowIterationHarmonicStepCount(TRITAVE, to.Ordinal(2)))
            .toBe(to.Cardinal(6))
        expect(windowIterationHarmonicStepCount(TRITAVE, to.Ordinal(3)))
            .toBe(to.Cardinal(18))
        expect(windowIterationHarmonicStepCount(TRITAVE, to.Ordinal(4)))
            .toBe(to.Cardinal(54))
    })
})
