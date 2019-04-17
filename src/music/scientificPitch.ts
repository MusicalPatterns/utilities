// tslint:disable no-magic-numbers

import { keys, ObjectOf, reduce } from '../code'
import { negative } from '../math'
import { apply, Base, Frequency, from, Hz, OCTAVE, Power, Scalar, to } from '../nominal'
import { ScientificPitches, ScientificPitchNoteName, ScientificPitchOctaveNumber } from './types'

const SCIENTIFIC_PITCH_OCTAVE_NUMBER_TO_POWER_MAP: {
    [Index in ScientificPitchOctaveNumber]: Power<Base<Frequency>>
} = {
    [ ScientificPitchOctaveNumber._NEGATIVE_1 ]: to.Power<Base<Frequency>>(negative(1)),
    [ ScientificPitchOctaveNumber._0 ]: to.Power<Base<Frequency>>(0),
    [ ScientificPitchOctaveNumber._1 ]: to.Power<Base<Frequency>>(1),
    [ ScientificPitchOctaveNumber._2 ]: to.Power<Base<Frequency>>(2),
    [ ScientificPitchOctaveNumber._3 ]: to.Power<Base<Frequency>>(3),
    [ ScientificPitchOctaveNumber._4 ]: to.Power<Base<Frequency>>(4),
    [ ScientificPitchOctaveNumber._5 ]: to.Power<Base<Frequency>>(5),
    [ ScientificPitchOctaveNumber._6 ]: to.Power<Base<Frequency>>(6),
    [ ScientificPitchOctaveNumber._7 ]: to.Power<Base<Frequency>>(7),
    [ ScientificPitchOctaveNumber._8 ]: to.Power<Base<Frequency>>(8),
    [ ScientificPitchOctaveNumber._9 ]: to.Power<Base<Frequency>>(9),
    [ ScientificPitchOctaveNumber._10 ]: to.Power<Base<Frequency>>(10),
}

const SCIENTIFIC_PITCH_NOTE_NAME_TO_ZEROTH_OCTAVE_FREQUENCY_MAP: { [Index in ScientificPitchNoteName]: Hz } = {
    [ ScientificPitchNoteName.C ]: to.Hz(16.352),
    [ ScientificPitchNoteName.C_SHARP_D_FLAT ]: to.Hz(17.324),
    [ ScientificPitchNoteName.D ]: to.Hz(18.354),
    [ ScientificPitchNoteName.D_SHARP_E_FLAT ]: to.Hz(19.445),
    [ ScientificPitchNoteName.E ]: to.Hz(20.602),
    [ ScientificPitchNoteName.F ]: to.Hz(21.827),
    [ ScientificPitchNoteName.F_SHARP_G_FLAT ]: to.Hz(23.125),
    [ ScientificPitchNoteName.G ]: to.Hz(24.5),
    [ ScientificPitchNoteName.G_SHARP_A_FLAT ]: to.Hz(25.957),
    [ ScientificPitchNoteName.A ]: to.Hz(27.5),
    [ ScientificPitchNoteName.A_SHARP_B_FLAT ]: to.Hz(29.135),
    [ ScientificPitchNoteName.B ]: to.Hz(30.868),
}

const scientificPitch: (noteName: ScientificPitchNoteName, octaveNumber: ScientificPitchOctaveNumber) => Hz =
    (noteName: ScientificPitchNoteName, octaveNumber: ScientificPitchOctaveNumber): Hz => {
        const octaveScalar: Scalar<Hz> =
            to.Scalar<Hz>(from.Base<Frequency>(apply.Power(
                OCTAVE,
                SCIENTIFIC_PITCH_OCTAVE_NUMBER_TO_POWER_MAP[ octaveNumber ],
            )))

        return apply.Scalar(SCIENTIFIC_PITCH_NOTE_NAME_TO_ZEROTH_OCTAVE_FREQUENCY_MAP[ noteName ], octaveScalar)
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
            const frequencies: ObjectOf<Hz> = reduce(
                keys(SCIENTIFIC_PITCH_OCTAVE_NUMBER_TO_POWER_MAP),
                (
                    frequenciesAccumulator: ObjectOf<Hz>,
                    octaveNumber: ScientificPitchOctaveNumber,
                ): ObjectOf<Hz> => ({
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
