// tslint:disable max-file-line-count

export {
    Base,
    Translation,
    Ordinal,
    Scalar,
    Time,
    Power,
    Cardinal,
    Coordinate,
    CoordinateElement,
    apply,
    from,
    to,
    Frequency,
    SumOfIndices,
    Length,
    Milliseconds,
    Radians,
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
    Cycle,
} from './nominal'
export {
    deepEqual,
    deepClone,
    isDefined,
    doAsync,
    logMessageToScreen,
    logMessageToConsole,
    translateFromOneIndexedToZeroIndexed,
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
    entries,
    keys,
    lastElement,
    indexOfLastElement,
    slice,
} from './code'
export {
    absoluteRatio,
    isCloseTo,
    positiveIntegers,
    zeroAndPositiveIntegers,
    X_AXIS,
    Y_AXIS,
    Z_AXIS,
    distanceBetween,
    rotate,
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
    sum,
    product,
    difference,
    quotient,
    modulus,
    round,
    floor,
    ceiling,
    absoluteValue,
    squareRoot,
    cubeRoot,
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
    reciprocal,
    negative,
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
    TWO,
    THREE,
    FOUR,
    FIVE,
    SIX,
    SEVEN,
    EIGHT,
    NINE,
    TEN,
    sine,
    cosine,
    tangent,
    PI,
    E,
    SQUARE_ROOT_OF_TWO,
    SQUARE_ROOT_OF_THREE,
    CUBE_ROOT_OF_TWO,
    CUBE_ROOT_OF_THREE,
    TWO_THIRDS,
    TWO_FIFTHS,
    THREE_FOURTHS,
    THREE_FIFTHS,
    FOUR_FIFTHS,
    THREE_HALVES,
    FIVE_HALVES,
    FOUR_THIRDS,
    FIVE_THIRDS,
    FIVE_FOURTHS,
    dividesEvenly,
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
