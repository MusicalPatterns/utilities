import * as musicalAs from './musicalAs'

export { musicalAs }

export { centsTranslationToPitchScalar, semitonesToCents } from './conversions'
export { periodIterationHarmonicStepCount } from './periodIterationHarmonicStepCount'
export { octaveReduce, periodReduce } from './periodReduce'
export { computeEqualDivisionPitchScalars } from './equalDivisionPitchScalars'
export { computeOctaveRepeatingPitchScalars } from './octaveRepeatingPitchScalars'
export { SCIENTIFIC_PITCHES } from './scientificPitch'

export {
    ScientificPitchNoteName,
    ScientificPitchOctaveNumber,
    ScientificPitches,
    Value,
    Pitch,
    Position,
    Intensity,
    Duration,
    Tone,
    Location,
    Gain,
} from './types'
