// tslint:disable no-magic-numbers

import { keys, ObjectOf, reduce } from '../code'
import { negative } from '../math'
import { as, Base, Frequency, Hz, notAs, OCTAVE, Power, Scalar, use } from '../nominal'
import { Pitch, ScientificPitches, ScientificPitchNoteName, ScientificPitchOctaveNumber } from './types'

const SCIENTIFIC_PITCH_OCTAVE_NUMBER_TO_POWER_MAP: {
    [Index in ScientificPitchOctaveNumber]: Power<Base<Frequency>>
} = {
    [ ScientificPitchOctaveNumber._NEGATIVE_1 ]: as.Power<Base<Frequency>>(negative(1)),
    [ ScientificPitchOctaveNumber._0 ]: as.Power<Base<Frequency>>(0),
    [ ScientificPitchOctaveNumber._1 ]: as.Power<Base<Frequency>>(1),
    [ ScientificPitchOctaveNumber._2 ]: as.Power<Base<Frequency>>(2),
    [ ScientificPitchOctaveNumber._3 ]: as.Power<Base<Frequency>>(3),
    [ ScientificPitchOctaveNumber._4 ]: as.Power<Base<Frequency>>(4),
    [ ScientificPitchOctaveNumber._5 ]: as.Power<Base<Frequency>>(5),
    [ ScientificPitchOctaveNumber._6 ]: as.Power<Base<Frequency>>(6),
    [ ScientificPitchOctaveNumber._7 ]: as.Power<Base<Frequency>>(7),
    [ ScientificPitchOctaveNumber._8 ]: as.Power<Base<Frequency>>(8),
    [ ScientificPitchOctaveNumber._9 ]: as.Power<Base<Frequency>>(9),
    [ ScientificPitchOctaveNumber._10 ]: as.Power<Base<Frequency>>(10),
}

const SCIENTIFIC_PITCH_NOTE_NAME_TO_ZEROTH_OCTAVE_FREQUENCY_MAP: { [Index in ScientificPitchNoteName]: Pitch } = {
    [ ScientificPitchNoteName.C ]: as.Point<Hz>(16.352),
    [ ScientificPitchNoteName.C_SHARP_D_FLAT ]: as.Point<Hz>(17.324),
    [ ScientificPitchNoteName.D ]: as.Point<Hz>(18.354),
    [ ScientificPitchNoteName.D_SHARP_E_FLAT ]: as.Point<Hz>(19.445),
    [ ScientificPitchNoteName.E ]: as.Point<Hz>(20.602),
    [ ScientificPitchNoteName.F ]: as.Point<Hz>(21.827),
    [ ScientificPitchNoteName.F_SHARP_G_FLAT ]: as.Point<Hz>(23.125),
    [ ScientificPitchNoteName.G ]: as.Point<Hz>(24.5),
    [ ScientificPitchNoteName.G_SHARP_A_FLAT ]: as.Point<Hz>(25.957),
    [ ScientificPitchNoteName.A ]: as.Point<Hz>(27.5),
    [ ScientificPitchNoteName.A_SHARP_B_FLAT ]: as.Point<Hz>(29.135),
    [ ScientificPitchNoteName.B ]: as.Point<Hz>(30.868),
}

const scientificPitch: (noteName: ScientificPitchNoteName, octaveNumber: ScientificPitchOctaveNumber) => Pitch =
    (noteName: ScientificPitchNoteName, octaveNumber: ScientificPitchOctaveNumber): Pitch => {
        const octaveScalar: Scalar<Pitch> =
            as.Scalar<Pitch>(notAs.Base<Frequency>(use.Power(
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
            const frequencies: ObjectOf<Pitch> = reduce(
                keys(SCIENTIFIC_PITCH_OCTAVE_NUMBER_TO_POWER_MAP),
                (
                    frequenciesAccumulator: ObjectOf<Pitch>,
                    octaveNumber: ScientificPitchOctaveNumber,
                ): ObjectOf<Pitch> => ({
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
