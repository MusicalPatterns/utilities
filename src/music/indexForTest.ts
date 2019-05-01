// tslint:disable no-reaching-imports

import * as musicalAs from './musicalAs'
export { musicalAs }

export { centsTranslationToPitchScalar } from './conversions'
export { periodIterationHarmonicStepCount } from './periodIterationHarmonicStepCount'
export { octaveReduce, periodReduce } from './periodReduce'
export { computeEqualDivisionPitchScalars } from './equalDivisionPitchScalars'
export { computeOctaveRepeatingPitchScalars } from './octaveRepeatingPitchScalars'
export { SCIENTIFIC_PITCHES } from './scientificPitch'

export {
    ScientificPitchNoteName,
    ScientificPitchOctaveNumber,
    Pitch,
    Tone,
} from './types'
