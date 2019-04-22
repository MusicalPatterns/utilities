import { as, Base, Frequency, OCTAVE, TRITAVE, windowIterationHarmonicStepCount } from '../../../src/indexForTest'

describe('window iteration harmonic step count', () => {
    it('given an iteration of a window, will figure how many steps of the harmonic series are in it', () => {
        expect(windowIterationHarmonicStepCount(OCTAVE, as.Ordinal<Array<Base<Frequency>>>(1)))
            .toBe(as.Cardinal(1))
        expect(windowIterationHarmonicStepCount(OCTAVE, as.Ordinal<Array<Base<Frequency>>>(2)))
            .toBe(as.Cardinal(2))
        expect(windowIterationHarmonicStepCount(OCTAVE, as.Ordinal<Array<Base<Frequency>>>(3)))
            .toBe(as.Cardinal(4))
        expect(windowIterationHarmonicStepCount(OCTAVE, as.Ordinal<Array<Base<Frequency>>>(4)))
            .toBe(as.Cardinal(8))

        expect(windowIterationHarmonicStepCount(TRITAVE, as.Ordinal<Array<Base<Frequency>>>(1)))
            .toBe(as.Cardinal(2))
        expect(windowIterationHarmonicStepCount(TRITAVE, as.Ordinal<Array<Base<Frequency>>>(2)))
            .toBe(as.Cardinal(6))
        expect(windowIterationHarmonicStepCount(TRITAVE, as.Ordinal<Array<Base<Frequency>>>(3)))
            .toBe(as.Cardinal(18))
        expect(windowIterationHarmonicStepCount(TRITAVE, as.Ordinal<Array<Base<Frequency>>>(4)))
            .toBe(as.Cardinal(54))
    })
})
