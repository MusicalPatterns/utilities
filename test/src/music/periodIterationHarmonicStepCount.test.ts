import { as, Base, Frequency, OCTAVE, periodIterationHarmonicStepCount, TRITAVE } from '../../../src/indexForTest'

describe('period iteration harmonic step count', () => {
    it('given an iteration of a period, will figure how many steps of the harmonic series are in it', () => {
        expect(periodIterationHarmonicStepCount(OCTAVE, as.Ordinal<Array<Base<Frequency>>>(1)))
            .toBe(as.Cardinal(1))
        expect(periodIterationHarmonicStepCount(OCTAVE, as.Ordinal<Array<Base<Frequency>>>(2)))
            .toBe(as.Cardinal(2))
        expect(periodIterationHarmonicStepCount(OCTAVE, as.Ordinal<Array<Base<Frequency>>>(3)))
            .toBe(as.Cardinal(4))
        expect(periodIterationHarmonicStepCount(OCTAVE, as.Ordinal<Array<Base<Frequency>>>(4)))
            .toBe(as.Cardinal(8))

        expect(periodIterationHarmonicStepCount(TRITAVE, as.Ordinal<Array<Base<Frequency>>>(1)))
            .toBe(as.Cardinal(2))
        expect(periodIterationHarmonicStepCount(TRITAVE, as.Ordinal<Array<Base<Frequency>>>(2)))
            .toBe(as.Cardinal(6))
        expect(periodIterationHarmonicStepCount(TRITAVE, as.Ordinal<Array<Base<Frequency>>>(3)))
            .toBe(as.Cardinal(18))
        expect(periodIterationHarmonicStepCount(TRITAVE, as.Ordinal<Array<Base<Frequency>>>(4)))
            .toBe(as.Cardinal(54))
    })
})
