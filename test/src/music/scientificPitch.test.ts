import { ScientificPitchNoteName, ScientificPitchOctaveNumber, SCIENTIFIC_PITCHES } from '../../../src/indexForTest'

describe('scientific pitch', (): void => {
    it('given a scientific pitch notation note name and an octave number, gives you the frequency in hz', (): void => {
        expect(SCIENTIFIC_PITCHES[ ScientificPitchNoteName.A ][ ScientificPitchOctaveNumber._4 ])
            .toBeCloseTo(440)

        expect(SCIENTIFIC_PITCHES[ ScientificPitchNoteName.C ][ ScientificPitchOctaveNumber._4 ])
            .toBeCloseTo(261.63)

        expect(SCIENTIFIC_PITCHES[ ScientificPitchNoteName.C ][ ScientificPitchOctaveNumber._0 ])
            .toBeCloseTo(16.352)

        expect(SCIENTIFIC_PITCHES[ ScientificPitchNoteName.D ][ ScientificPitchOctaveNumber._NEGATIVE_1 ])
            .toBeCloseTo(9.177)

        expect(SCIENTIFIC_PITCHES[ ScientificPitchNoteName.G_SHARP_A_FLAT ][ ScientificPitchOctaveNumber._6 ])
            .toBeCloseTo(1661.248)
    })
})
