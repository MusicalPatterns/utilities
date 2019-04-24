import { ObjectOf } from '../code'
import { Hz, Ms, Point, Translation } from '../nominal'

enum ScientificPitchNoteName {
    C = 'C',
    C_SHARP_D_FLAT = 'C_SHARP_D_FLAT',
    D = 'D',
    D_SHARP_E_FLAT = 'D_SHARP_E_FLAT',
    E = 'E',
    F = 'F',
    F_SHARP_G_FLAT = 'F_SHARP_G_FLAT',
    G = 'G',
    G_SHARP_A_FLAT = 'G_SHARP_A_FLAT',
    A = 'A',
    A_SHARP_B_FLAT = 'A_SHARP_B_FLAT',
    B = 'B',
}

enum ScientificPitchOctaveNumber {
    _NEGATIVE_1 = '_NEGATIVE_1',
    _0 = '_0',
    _1 = '_1',
    _2 = '_2',
    _3 = '_3',
    _4 = '_4',
    _5 = '_5',
    _6 = '_6',
    _7 = '_7',
    _8 = '_8',
    _9 = '_9',
    _10 = '_10',
}

type ScientificPitches = { [Index in ScientificPitchNoteName]: ObjectOf<Point<Hz>> }

type Duration = Translation<Point<Ms>>

type Pitch = Point<Hz>

export {
    ScientificPitchNoteName,
    ScientificPitchOctaveNumber,
    ScientificPitches,
    Duration,
    Pitch,
}
