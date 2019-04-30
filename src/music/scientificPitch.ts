// tslint:disable no-magic-numbers

import { keys, ObjectOf, reduce } from '../code'
import { negative, pow } from '../math'
import { as, Frequency, OCTAVE, Power, Scalar, use } from '../nominal'
import * as musicalAs from './musicalAs'
import { ScientificPitches, ScientificPitchNoteName, ScientificPitchOctaveNumber, Tone } from './types'

const SCIENTIFIC_PITCH_OCTAVE_NUMBER_TO_POWER_MAP: {
    [Index in ScientificPitchOctaveNumber]: Power<Frequency>
} = {
    [ ScientificPitchOctaveNumber._NEGATIVE_1 ]: as.Power<Frequency>(negative(1)),
    [ ScientificPitchOctaveNumber._0 ]: as.Power<Frequency>(0),
    [ ScientificPitchOctaveNumber._1 ]: as.Power<Frequency>(1),
    [ ScientificPitchOctaveNumber._2 ]: as.Power<Frequency>(2),
    [ ScientificPitchOctaveNumber._3 ]: as.Power<Frequency>(3),
    [ ScientificPitchOctaveNumber._4 ]: as.Power<Frequency>(4),
    [ ScientificPitchOctaveNumber._5 ]: as.Power<Frequency>(5),
    [ ScientificPitchOctaveNumber._6 ]: as.Power<Frequency>(6),
    [ ScientificPitchOctaveNumber._7 ]: as.Power<Frequency>(7),
    [ ScientificPitchOctaveNumber._8 ]: as.Power<Frequency>(8),
    [ ScientificPitchOctaveNumber._9 ]: as.Power<Frequency>(9),
    [ ScientificPitchOctaveNumber._10 ]: as.Power<Frequency>(10),
}

const SCIENTIFIC_PITCH_NOTE_NAME_TO_ZEROTH_OCTAVE_FREQUENCY_MAP: { [Index in ScientificPitchNoteName]: Tone } = {
    [ ScientificPitchNoteName.C ]: musicalAs.Tone(16.352),
    [ ScientificPitchNoteName.C_SHARP_D_FLAT ]: musicalAs.Tone(17.324),
    [ ScientificPitchNoteName.D ]: musicalAs.Tone(18.354),
    [ ScientificPitchNoteName.D_SHARP_E_FLAT ]: musicalAs.Tone(19.445),
    [ ScientificPitchNoteName.E ]: musicalAs.Tone(20.602),
    [ ScientificPitchNoteName.F ]: musicalAs.Tone(21.827),
    [ ScientificPitchNoteName.F_SHARP_G_FLAT ]: musicalAs.Tone(23.125),
    [ ScientificPitchNoteName.G ]: musicalAs.Tone(24.5),
    [ ScientificPitchNoteName.G_SHARP_A_FLAT ]: musicalAs.Tone(25.957),
    [ ScientificPitchNoteName.A ]: musicalAs.Tone(27.5),
    [ ScientificPitchNoteName.A_SHARP_B_FLAT ]: musicalAs.Tone(29.135),
    [ ScientificPitchNoteName.B ]: musicalAs.Tone(30.868),
}

const scientificPitch: (noteName: ScientificPitchNoteName, octaveNumber: ScientificPitchOctaveNumber) => Tone =
    (noteName: ScientificPitchNoteName, octaveNumber: ScientificPitchOctaveNumber): Tone => {
        const octaveScalar: Scalar<Tone> =
            as.Scalar<Tone>(as.number(pow(
                OCTAVE,
                SCIENTIFIC_PITCH_OCTAVE_NUMBER_TO_POWER_MAP[ octaveNumber ],
            )))

        return use.Scalar(SCIENTIFIC_PITCH_NOTE_NAME_TO_ZEROTH_OCTAVE_FREQUENCY_MAP[ noteName ], octaveScalar)
    }

const scientificPitchesInitialAccumulator: ScientificPitches = {
    A: {},
    A_SHARP_B_FLAT: {},
    B: {},
    C: {},
    C_SHARP_D_FLAT: {},
    D: {},
    D_SHARP_E_FLAT: {},
    E: {},
    F: {},
    F_SHARP_G_FLAT: {},
    G: {},
    G_SHARP_A_FLAT: {},
}

const SCIENTIFIC_PITCHES: ScientificPitches = keys(SCIENTIFIC_PITCH_NOTE_NAME_TO_ZEROTH_OCTAVE_FREQUENCY_MAP)
    .reduce(
        (pitchesAccumulator: ScientificPitches, noteName: ScientificPitchNoteName): ScientificPitches => {
            const frequencies: ObjectOf<Tone> = reduce(
                keys(SCIENTIFIC_PITCH_OCTAVE_NUMBER_TO_POWER_MAP),
                (
                    frequenciesAccumulator: ObjectOf<Tone>,
                    octaveNumber: ScientificPitchOctaveNumber,
                ): ObjectOf<Tone> => ({
                    ...frequenciesAccumulator,
                    [ octaveNumber ]: scientificPitch(noteName, octaveNumber),
                }),
                {},
            )

            return {
                ...pitchesAccumulator,
                [ noteName ]: frequencies,
            }
        },
        scientificPitchesInitialAccumulator,
    )

export {
    SCIENTIFIC_PITCHES,
}
