// tslint:disable:max-file-line-count comment-format

import { Coordinate, Frequency, Index, Offset, Scalar, Time } from '../nominal'

enum PatternId {
    BEATEN_PATH = 'BEATEN_PATH',
    HAFUHAFU = 'HAFUHAFU',
    HAFUHAFU_WITH_PITCH_CIRCULARITY = 'HAFUHAFU_WITH_PITCH_CIRCULARITY',
    XELT = 'XELT',
    ZDAUBYAOS = 'ZDAUBYAOS',
    STEPWISE = 'STEPWISE',
    TEMPLATE = 'TEMPLATE',
    HOUNDSTOOTHTOPIA_THEME = 'HOUNDSTOOTHTOPIA_THEME',
}

interface PatternMetadata {
    description: string,
    formattedName: string,
    musicalIdeaIllustrated: string,
}

interface PatternSpec {
    patternDurationScalar: Scalar,
    patternPitchScalar: Scalar,

    // tslint:disable-next-line:no-any
    [ index: string ]: any,
}

interface PatternMaterial {
    buildEntitiesFunction: BuildEntitiesFunction,
    buildScalesFunction: BuildScalesFunction,
}

interface Pattern {
    material: PatternMaterial,
    metadata: PatternMetadata,
    patternId: PatternId,
    spec: PatternSpec,
}

type AllPatterns = { [index in PatternId]: Pattern }

type Patterns = { [key in Partial<PatternId>]: Pattern }

// tslint:disable-next-line:no-any
type BuildEntitiesFunction = (patternSpec?: any) => Entity[]
// tslint:disable-next-line:no-any
type BuildScalesFunction = (patternSpec?: any) => Scale[]

interface Entity {
    partSpec?: PartSpec,
    voiceSpec?: VoiceSpec,
}

interface Scale extends Adjustable {
    scalars: Scalar[],
}
interface NoteSpec {
    durationSpec?: NotePropertySpec,
    gainSpec?: NotePropertySpec,
    pitchSpec?: NotePropertySpec,
    positionSpec?: NotePropertySpec | NotePropertySpec[],
    sustainSpec?: NotePropertySpec,
}

type PartSpec = NoteSpec[]

interface Adjustable {
    offset?: Offset,
    scalar?: Scalar,
}

interface NotePropertySpec extends Adjustable {
    index?: Index,
    scaleIndex?: Index,
}

interface VoiceSpec {
    spatialization?: SpatializationType,
    timbre: SampleName | OscillatorName,
    voiceType: VoiceType,
}

enum VoiceType {
    OSCILLATOR = 'OSCILLATOR',
    SAMPLE = 'SAMPLE',
}

enum SpatializationType {
    MONO = 'MONO',
    IMMERSIVE = 'IMMERSIVE',
}

enum SampleName {
    CELLO = 'CELLO',
    DOUBLE_BASS = 'DOUBLE_BASS',
    FLUTE = 'FLUTE',
    PIANO = 'PIANO',
    TROMBONE = 'TROMBONE',
    TRUMPET = 'TRUMPET',
    TUBA = 'TUBA',
    VIOLIN = 'VIOLIN',
    SNARE = 'SNARE',
    KICK = 'KICK',
    HIHAT = 'HIHAT',
}

enum OscillatorName {
    SQUARE = 'SQUARE',
    SINE = 'SINE',
    SAWTOOTH = 'SAWTOOTH',
    TRIANGLE = 'TRIANGLE',
    CUSTOM = 'CUSTOM',
}

interface Note {
    duration: Time,
    frequency: Frequency,
    gain: Scalar,
    position: Coordinate,
    sustain: Time,
}

type Part = Note[]

interface ThreadSpec {
    part: Part,
    voiceSpec: VoiceSpec,
}

export {
    // patterns
    PatternId,
    PatternMetadata,
    PatternSpec,
    PatternMaterial,
    Pattern,
    AllPatterns,
    Patterns,
    BuildEntitiesFunction,
    BuildScalesFunction,

    // compile
    Entity,
    Scale,
    NoteSpec,
    PartSpec,
    Adjustable,
    NotePropertySpec,

    // performer
    VoiceSpec,
    VoiceType,
    SpatializationType,
    SampleName,
    OscillatorName,
    Note,
    Part,
    ThreadSpec,
}
