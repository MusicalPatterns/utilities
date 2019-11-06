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
    multiplyFractions,
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
    Fraction,
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
    NOT_FOUND,
    SKIP_FIRST_ELEMENT,
    INITIAL,
    INCLUSIVE,
    EXCLUSIVE,
    INCLUSIVE_TO_LEFT,
    EXCLUSIVE_TO_LEFT,
    COUNT_FROM_LENGTH_TO_FINAL_INDEX,
    MILLISECONDS_PER_SECOND,
    SECONDS_PER_MINUTE,
    ONE_MILLISECOND,
    ONE_SECOND,
    ONE_MINUTE,
    ONE_HOUR,
    ONE_DAY,
    TRITAVE,
    OCTAVE,
    SEMITONE,
    CENTS_PER_OCTAVE,
    CENTS_PER_SEMITONE,
    BEGINNING,
    NO_DURATION,
    NO_VALUE,
    MAXIMUM_OCTAVE_RANGE_AUDIBLE_TO_HUMANS,
    X_AXIS,
    Y_AXIS,
    Z_AXIS,
    ONCE,
    TWICE,
    EVERY_OTHER,
    EVERY_THIRD,
    EVERY_FOURTH,
    EVERY_FIFTH,
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
    DECIMAL,
    MULTIPLICATIVE_IDENTITY,
    ADDITIVE_IDENTITY,
    FRACTIONAL_IDENTITY,
    SQUARED,
    NEGATIVE,
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
    ONE_FEWER,
    ONE_MORE,
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
    PI,
    E,
    Multiple,
    Ordinal,
    insteadOf,
    ofNotAs,
    Exponent,
    Logarithm,
    VERY_HIGH_PRECISION,
    VERY_LOW_PRECISION,
    Transposition,
    Point,
    Interval,
    Delta,
    Arc,
    Factor,
    Transition,
    Turn,
    ONE,
    ZERO,
    Rotation,
    Remaindee,
    ArrayedType,
    ArrayedOrStringType,
} from './nominal'
export {
    ActionForState,
    computeReducer,
} from './state'

export {
    Units,
} from './types'
