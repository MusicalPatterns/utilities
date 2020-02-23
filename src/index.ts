// tslint:disable max-file-line-count

import { ArrayedOrStringType } from './nominal'

export {
    elementCount,
    elementIds,
    elementChecked,
    elementInnerText,
    elementExists,
    elementValue,
    elementAttribute,
    findElement,
    press,
    loseFocus,
    selectOption,
    simulateDesktopViewport,
    simulateMobileViewport,
    clickElement,
    deleteCharacterFromInput,
    waitForHeadfulQaing,
    HtmlValue,
    HtmlValueOrChecked,
} from './browser'
export {
    deepEqual,
    deepClone,
    isUndefined,
    doAsync,
    logMessageToScreen,
    logMessageToConsole,
    translateFromOneIndexedToZeroIndexed,
    translateFromZeroIndexedToOneIndexed,
    typedMap,
    TypedMap,
    camelCaseToLowerCase,
    camelCaseToConstantCase,
    constantCaseToUpperCase,
    repeat,
    repeatCall,
    sequence,
    noop,
    random,
    entries,
    keys,
    finalElement,
    indexOfFinalElement,
    slice,
    map,
    forEach,
    reduce,
    ObjectDifference,
    numericSort,
    filter,
    uniqueFilter,
    sleep,
    KeyMap,
    ObjectOf,
    Maybe,
    keyExistsOnObject,
    ArrayOfLength,
    parseInteger,
    computeLength,
    indexJustBeyondFinalElement,
    cycleSlice,
    isEmpty,
    isSingleton,
    camelCaseToUpperCase,
    isGreaterThan,
    isLessThan,
    isGreaterThanOrEqualTo,
    isLessThanOrEqualTo,
    evenElements,
    oddElements,
    everyNthElement,
    arraysHaveNoCommonValues,
    initialElement,
    finalIndexFromElementsTotal,
    objectSet,
    arraySet,
    every,
    findIndex,
    range,
    isArray,
    isString,
    isNumber,
    isObject,
    computeReverse,
    NonPartial,
    Just,
    Difference,
    flatten,
    exampleElement,
    areCyclicalTranslations,
    throws,
    Thunk,
    AsyncThunk,
} from './code'
export {
    absoluteRatio,
    isCloseTo,
    distanceBetween,
    rotate,
    computeGreatestCommonDivisor,
    computeLeastCommonMultiple,
    TwoToOneNumericOperation,
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
    isOdd,
    isEven,
    powerSet,
    ARBITRARILY_LARGE_NUMBER,
    factorial,
    combinationCount,
    termialRoot,
    trapezoidalNumber,
    triangularNumber,
    triangularRoot,
    quarterSquareNumber,
    reciprocal,
    negative,
    sine,
    cosine,
    tangent,
    SQUARE_ROOT_OF_TWO,
    SQUARE_ROOT_OF_THREE,
    CUBE_ROOT_OF_TWO,
    CUBE_ROOT_OF_THREE,
    TwoToOneIntegerOperation,
    Coordinate,
    TwoDimensional,
    ThreeDimensional,
    dividesEvenly,
    max,
    min,
    evaluate,
    multiplyRationals,
    getDenominator,
    getNumerator,
    computeLowestTerms,
    computeCommonTerms,
    computeLowestCommonDenominator,
    areCoprime,
    computeCommonFactors,
    invertNormalScalar,
    valueLinearlyBetweenValues,
    computeDeltas,
    computeIntervals,
    isNegative,
    isPositive,
    computePartialSumOfExponents,
    goesMonotonically,
    goesMonotonicallyBetweenValueAndValue,
    goesMonotonicallyFromValueToValue,
    inBounds,
    allValuesAreTheSame,
    goesFromValueToValue,
    goesQuadratically,
    goesQuadraticallyBetweenValueAndValue,
    goesQuadraticallyFromValueToValue,
    pow,
    log,
    integerDivide,
    primeFactorize,
    PRIMES,
    computeCombinations,
    setNumerator,
    setDenominator,
    asRational,
    LARGISH_NUMBER,
} from './math'
export {
    centsTranslationToPitchScalar,
    periodIterationHarmonicStepCount,
    octaveReduce,
    periodReduce,
    SCIENTIFIC_PITCHES,
    ScientificPitchOctaveNumber,
    ScientificPitchNoteName,
    ScientificPitches,
    computeEqualDivisionPitchScalars,
    computeOctaveRepeatingPitchScalars,
    semitonesToCents,
    Value,
    Pitch,
    Position,
    Intensity,
    musicalAs,
    Duration,
    Tone,
    Location,
    Gain,
} from './music'
export {
    Base,
    Translation,
    Scalar,
    Power,
    Cardinal,
    use,
    as,
    Hz,
    Ms,
    Radians,
    Cents,
    Semitones,
    Block,
    ContourWhole,
    ContourPiece,
    ContourElement,
    Numerator,
    Denominator,
    Rational,
    Cycle,
    Modulus,
    Integer,
    Meters,
    Space,
    DUMMY_VALUE_FOR_COMPUTING_NOMINAL_INTERFACE,
    computeNominalInterface,
    NominalInterface,
    Time,
    Frequency,
    Amplitude,
    NominalNumber,
    NormalScalar,
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
    NEXT,
    PREVIOUS,
    UP_ONE,
    DOWN_ONE,
    NO_SHIFT,
    INCREMENT,
    DECREMENT,
    NUMERATOR_INDEX,
    DENOMINATOR_INDEX,
    ORIGIN,
    DOUBLE,
    TRIPLE,
    QUADRUPLE,
    PENTUPLE,
    SEXTUPLE,
    HEPTUPLE,
    OCTUPLE,
    NONTUPLE,
    FIRST_FACTOR_NECESSARY_TO_CHECK_IF_COMMON,
    ONE_FEWER,
    ONE_MORE,
    DECIMAL,
    ONE_HALF,
    ONE_THIRD,
    ONE_FOURTH,
    ONE_FIFTH,
    ONE_SIXTH,
    ONE_SEVENTH,
    ONE_EIGHTH,
    ONE_NINTH,
    ONE_TENTH,
    DEFAULT_PRECISION,
    ROTATION_VECTOR_OR_MATRIX_BASIS_TRANSLATION_FOR_CYCLING_FOR_AXIS,
    X_AXIS,
    Y_AXIS,
    Z_AXIS,
    SQUARE_ROOT,
    SQUARED,
    ONCE,
    TWICE,
    EVERY_OTHER,
    EVERY_THIRD,
    EVERY_FOURTH,
    EVERY_FIFTH,
    TWO_DIMENSIONAL,
    THREE_DIMENSIONAL,
    TWO,
    ADDITIVE_IDENTITY,
    MULTIPLICATIVE_IDENTITY,
    RATIONAL_IDENTITY,
    NEGATIVE,
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
    THREE,
    FOUR,
    FIVE,
    SIX,
    SEVEN,
    EIGHT,
    NINE,
    TEN,
    PI,
    E,
    GOOD_AMOUNT_OF_TIME_TO_SEE_WHAT_THE_SITUATION_IS_WHEN_HEADFULLY_DEBUGGING_TESTS,
    INCLUSIVE,
    EXCLUSIVE,
    INITIAL,
    SKIP_FIRST_ELEMENT,
    INCLUSIVE_TO_LEFT,
    EXCLUSIVE_TO_LEFT,
    COUNT_FROM_LENGTH_TO_FINAL_INDEX,
    EXAMPLE_ELEMENT_INDEX,
    NOT_FOUND,
    OCTAVE,
    TRITAVE,
    SEMITONE,
    CENTS_PER_OCTAVE,
    CENTS_PER_SEMITONE,
    BEGINNING,
    MAXIMUM_OCTAVE_RANGE_AUDIBLE_TO_HUMANS,
    NO_VALUE,
    NO_DURATION,
    MILLISECONDS_PER_SECOND,
    SECONDS_PER_MINUTE,
    ONE_MILLISECOND,
    ONE_SECOND,
    ONE_MINUTE,
    ONE_HOUR,
    ONE_DAY,
    VERY_HIGH_PRECISION,
    VERY_LOW_PRECISION,
    ONE,
    ZERO,
    NONE,
    Multiple,
    Ordinal,
    insteadOf,
    ofNotAs,
    Exponent,
    Logarithm,
    Transposition,
    Point,
    Interval,
    Delta,
    Arc,
    Factor,
    Transition,
    Turn,
    Rotation,
    Remaindee,
    ArrayedType,
    ArrayedOrStringType,
    AnyArrayedOrStringType,
    isRational,
    isCycle,
    isInteger,
    PHI,
} from './nominal'
export {
    ActionForState,
    computeReducer,
} from './state'

export {
    Units,
} from './types'
