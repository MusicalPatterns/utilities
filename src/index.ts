// tslint:disable:max-file-line-count

export {
    Base,
    Offset,
    Index,
    Scalar,
    Time,
    Power,
    Count,
    Coordinate,
    CoordinateElement,
    apply,
    from,
    to,
    Frequency,
    SumOfIndices,
    Length,
    Milliseconds,
    Radian,
    Cents,
    Semitones,
    Block,
    ContourWhole,
    ContourPiece,
    ContourElement,
    Numerator,
    Denominator,
    FractionalPart,
    Ratio,
} from './nominal'
export {
    deepEqual,
    deepClone,
    isDefined,
    doAsync,
    logMessageToScreen,
    logMessageToConsole,
    offsetFromOneIndexedToZeroIndexed,
    typedMap,
    TypedMap,
    camelCaseToLowerCase,
    camelCaseToConstantCase,
    constantCaseToUpperCase,
    repeat,
    repeatCall,
    sequence,
    INITIAL,
    INCLUSIVE,
    EXCLUSIVE,
    noop,
    random,
} from './code'
export {
    absoluteRatio,
    cycle,
    isCloseTo,
    positiveIntegers,
    zeroAndPositiveIntegers,
    wrapWithin,
    X_AXIS,
    Y_AXIS,
    Z_AXIS,
    distanceBetween,
    rotate,
    EVEN,
    ONCE,
    TWICE,
    EVERY_OTHER,
    ONE_HALF,
    ONE_THIRD,
    ONE_FOURTH,
    ONE_FIFTH,
    ONE_SIXTH,
    ONE_SEVENTH,
    ONE_EIGHTH,
    ONE_NINTH,
    ONE_TENTH,
    THREE_DIMENSIONAL,
    Coordinate2d,
    Coordinate3d,
    greatestCommonDivisor,
    lowestCommonMultiple,
    DECIMAL,
    NumericOperation,
    add,
    multiply,
    ADDITIVE_IDENTITY,
    MULTIPLICATIVE_IDENTITY,
    isOdd,
    isEven,
    ARBITRARILY_LARGE_NUMBER,
    powerSet,
    SQUARED,
    NEGATIVE,
    termialRoot,
    trapezoidalNumber,
    triangularNumber,
    triangularRoot,
    quarterSquareNumber,
    inverse,
    CUBE_ROOT,
    CUBED,
    THRICE,
    FRICE,
    FICE,
    ZEROTH,
    FIRST,
    SECOND,
    THIRD,
    FOURTH,
    FIFTH,
    SIXTH,
    SEVENTH,
    EIGHTH,
    NINTH,
    TENTH,
    ELEVENTH,
    TWELFTH,
} from './math'
export {
    centsToPitch,
    windowStepCount,
    TRITAVE,
    OCTAVE,
    SEMITONE,
    CENTS_PER_OCTAVE,
    CENTS_PER_SEMITONE,
    BEGINNING,
    octaveReduce,
    MAXIMUM_OCTAVE_RANGE_AUDIBLE_TO_HUMANS,
    SCIENTIFIC_PITCHES,
    ScientificPitchOctaveNumber,
    ScientificPitchNoteName,
    ScientificPitches,
} from './music'
export {
    testIsCloseTo,
    testArraysAreClose,
    testArraysHaveSameElements,
} from './testing'
export {
    MILLISECONDS_PER_SECOND,
    SECONDS_PER_MINUTE,
} from './time'
export {
    Maybe,
    DictionaryOf,
    AnyOtherProperties,
    Units,
} from './types'
