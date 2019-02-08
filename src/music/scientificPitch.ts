// tslint:disable no-magic-numbers

import { keys } from '../code'
import { negative } from '../math'
import { apply, from, Hz, Power, Scalar, to } from '../nominal'
import { DictionaryOf } from '../types'
import { OCTAVE } from './constants'
import { ScientificPitches, ScientificPitchNoteName, ScientificPitchOctaveNumber } from './types'

const SCIENTIFIC_PITCH_OCTAVE_NUMBER_TO_POWER_MAP: { [key in ScientificPitchOctaveNumber]: Power } = {
    [ ScientificPitchOctaveNumber._NEGATIVE_1 ]: to.Power(negative(1)),
    [ ScientificPitchOctaveNumber._0 ]: to.Power(0),
    [ ScientificPitchOctaveNumber._1 ]: to.Power(1),
    [ ScientificPitchOctaveNumber._2 ]: to.Power(2),
    [ ScientificPitchOctaveNumber._3 ]: to.Power(3),
    [ ScientificPitchOctaveNumber._4 ]: to.Power(4),
    [ ScientificPitchOctaveNumber._5 ]: to.Power(5),
    [ ScientificPitchOctaveNumber._6 ]: to.Power(6),
    [ ScientificPitchOctaveNumber._7 ]: to.Power(7),
    [ ScientificPitchOctaveNumber._8 ]: to.Power(8),
    [ ScientificPitchOctaveNumber._9 ]: to.Power(9),
    [ ScientificPitchOctaveNumber._10 ]: to.Power(10),
}

const SCIENTIFIC_PITCH_NOTE_NAME_TO_ZEROTH_OCTAVE_FREQUENCY_MAP: { [key in ScientificPitchNoteName]: Hz } = {
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
        const octaveScalar: Scalar =
            to.Scalar(from.Base(apply.Power(OCTAVE, SCIENTIFIC_PITCH_OCTAVE_NUMBER_TO_POWER_MAP[ octaveNumber ])))

        return apply.Scalar(SCIENTIFIC_PITCH_NOTE_NAME_TO_ZEROTH_OCTAVE_FREQUENCY_MAP[ noteName ], octaveScalar)
    }

const SCIENTIFIC_PITCHES: ScientificPitches = keys(SCIENTIFIC_PITCH_NOTE_NAME_TO_ZEROTH_OCTAVE_FREQUENCY_MAP)
    .reduce(
        (accumulator: ScientificPitches, noteName: ScientificPitchNoteName): ScientificPitches => {
            // tslint:disable-next-line no-inferred-empty-object-type
            const frequencies: DictionaryOf<Hz> = keys(SCIENTIFIC_PITCH_OCTAVE_NUMBER_TO_POWER_MAP)
                .reduce(
                    (
                        frequenciesAccumulator: DictionaryOf<Hz>,
                        octaveNumber: ScientificPitchOctaveNumber,
                    ): DictionaryOf<Hz> => ({
                        ...frequenciesAccumulator,
                        [ octaveNumber ]: scientificPitch(noteName, octaveNumber),
                    }),
                    {},
                )

            return {
                ...accumulator,
                [ noteName ]: frequencies,
            }
        },
        // @ts-ignore
        {},
    )

export {
    SCIENTIFIC_PITCHES,
}
