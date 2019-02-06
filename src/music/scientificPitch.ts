// tslint:disable no-magic-numbers

import { keys } from '../code'
import { negative } from '../math'
import { apply, Frequency, from, Power, Scalar, to } from '../nominal'
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

const SCIENTIFIC_PITCH_NOTE_NAME_TO_ZEROTH_OCTAVE_FREQUENCY_MAP: { [key in ScientificPitchNoteName]: Frequency } = {
    [ ScientificPitchNoteName.C ]: to.Frequency(16.352),
    [ ScientificPitchNoteName.C_SHARP_D_FLAT ]: to.Frequency(17.324),
    [ ScientificPitchNoteName.D ]: to.Frequency(18.354),
    [ ScientificPitchNoteName.D_SHARP_E_FLAT ]: to.Frequency(19.445),
    [ ScientificPitchNoteName.E ]: to.Frequency(20.602),
    [ ScientificPitchNoteName.F ]: to.Frequency(21.827),
    [ ScientificPitchNoteName.F_SHARP_G_FLAT ]: to.Frequency(23.125),
    [ ScientificPitchNoteName.G ]: to.Frequency(24.5),
    [ ScientificPitchNoteName.G_SHARP_A_FLAT ]: to.Frequency(25.957),
    [ ScientificPitchNoteName.A ]: to.Frequency(27.5),
    [ ScientificPitchNoteName.A_SHARP_B_FLAT ]: to.Frequency(29.135),
    [ ScientificPitchNoteName.B ]: to.Frequency(30.868),
}

const scientificPitch: (noteName: ScientificPitchNoteName, octaveNumber: ScientificPitchOctaveNumber) => Frequency =
    (noteName: ScientificPitchNoteName, octaveNumber: ScientificPitchOctaveNumber): Frequency => {
        const octaveScalar: Scalar =
            to.Scalar(from.Base(apply.Power(OCTAVE, SCIENTIFIC_PITCH_OCTAVE_NUMBER_TO_POWER_MAP[ octaveNumber ])))

        return apply.Scalar(SCIENTIFIC_PITCH_NOTE_NAME_TO_ZEROTH_OCTAVE_FREQUENCY_MAP[ noteName ], octaveScalar)
    }

const SCIENTIFIC_PITCHES: ScientificPitches = keys(SCIENTIFIC_PITCH_NOTE_NAME_TO_ZEROTH_OCTAVE_FREQUENCY_MAP)
    .reduce(
        (accumulator: ScientificPitches, noteName: ScientificPitchNoteName): ScientificPitches => {
            // tslint:disable-next-line no-inferred-empty-object-type
            const frequencies: DictionaryOf<Frequency> = keys(SCIENTIFIC_PITCH_OCTAVE_NUMBER_TO_POWER_MAP)
                .reduce(
                    (
                        frequenciesAccumulator: DictionaryOf<Frequency>,
                        octaveNumber: ScientificPitchOctaveNumber,
                    ): DictionaryOf<Frequency> => ({
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
