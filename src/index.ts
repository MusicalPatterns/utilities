// tslint:disable max-file-line-count

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
    INITIAL,
    INCLUSIVE,
    EXCLUSIVE,
    INCLUSIVE_TO_LEFT,
    EXCLUSIVE_TO_LEFT,
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
    Omit,
    Difference,
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
    totalElements,
    indexJustBeyondFinalElement,
    TRANSLATION_FROM_LENGTH_TO_FINAL_INDEX,
    EXAMPLE_ELEMENT_INDEX,
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
    SKIP_FIRST_ELEMENT,
    arraysHaveNoCommonValues,
    initialElement,
    finalIndexFromElementsTotal,
    objectSet,
    arraySet,
    every,
    NOT_FOUND,
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
    computeGreatestCommonDivisor,
    computeLeastCommonMultiple,
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
    FRACTIONAL_IDENTITY,
    isOdd,
    isEven,
    ARBITRARILY_LARGE_NUMBER,
    powerSet,
    SQUARED,
    NEGATIVE,
    factorial,
    combinationCount,
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
    NEXT,
    PREVIOUS,
    UP_ONE,
    DOWN_ONE,
    NO_TRANSLATION,
    INCREMENT,
    DECREMENT,
    NUMERATOR_INDEX,
    DENOMINATOR_INDEX,
    IntegerOperation,
    Coordinate,
    TwoDimensional,
    ThreeDimensional,
    ORIGIN,
    max,
    min,
    DOUBLE,
    TRIPLE,
    QUADRUPLE,
    PENTUPLE,
    SEXTUPLE,
    HEPTUPLE,
    OCTUPLE,
    NONTUPLE,
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
    ONE_FEWER,
    ONE_MORE,
    computePartialSumOfPowers,
    goesMonotonically,
    goesMonotonicallyBetweenValueAndValue,
    goesMonotonicallyFromValueToValue,
    inBounds,
    allValuesAreTheSame,
    goesFromValueToValue,
    goesQuadratically,
    goesQuadraticallyBetweenValueAndValue,
    goesQuadraticallyFromValueToValue,
} from './math'
export {
    centsTranslationToPitchScalar,
    windowIterationHarmonicStepCount,
    TRITAVE,
    OCTAVE,
    SEMITONE,
    CENTS_PER_OCTAVE,
    CENTS_PER_SEMITONE,
    BEGINNING,
    octaveReduce,
    windowReduce,
    MAXIMUM_OCTAVE_RANGE_AUDIBLE_TO_HUMANS,
    SCIENTIFIC_PITCHES,
    ScientificPitchOctaveNumber,
    ScientificPitchNoteName,
    ScientificPitches,
    computeEqualDivisionScalars,
    computeOctaveRepeatingScalars,
    NO_DURATION,
} from './music'
export {
    Base,
    Translation,
    Ordinal,
    Scalar,
    Power,
    Cardinal,
    apply,
    from,
    to,
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
    NoOperation,
    NoUnits,
    DUMMY_VALUE_FOR_COMPUTING_NOMINAL_INTERFACE,
    computeNominalInterface,
    NominalInterface,
    Time,
    Frequency,
    Amplitude,
    NominalNumber,
    NormalScalar,
} from './nominal'
export {
    ActionForState,
    computeReducer,
} from './state'
export {
    testIsCloseTo,
    testIsNotCloseTo,
    testArraysAreClose,
    testArraysAreCloseSoFar,
    testArraysHaveSameElements,
    elementCount,
    elementIds,
    elementChecked,
    elementInnerText,
    elementExists,
    elementValue,
    findElement,
    press,
    loseFocus,
    selectOption,
    simulateDesktopViewport,
    simulateMobileViewport,
    clickElement,
    deleteCharacterFromInput,
    waitForHeadfulQaing,
    testAllValuesAreTheSame,
    testGoesMonotonicallyFromValueToValue,
    testGoesMonotonicallyBetweenValueAndValue,
    testGoesMonotonically,
    testConstantDelta,
    testGoesQuadratically,
    testGoesQuadraticallyBetweenValueAndValue,
    testGoesQuadraticallyFromValueToValue,
    VERY_HIGH_PRECISION,
    VERY_LOW_PRECISION,
    testGreaterThanOrCloseTo,
    testLessThanOrCloseTo,
    testIsGreaterThan,
    testIsGreaterThanOrEqualTo,
    testIsLessThan,
    testIsLessThanOrEqualTo,
} from './testing'
export {
    MILLISECONDS_PER_SECOND,
    SECONDS_PER_MINUTE,
    ONE_MILLISECOND,
    ONE_SECOND,
    ONE_MINUTE,
    ONE_HOUR,
    ONE_DAY,
} from './time'
export {
    HtmlValue,
    HtmlValueOrChecked,
} from './web'

export {
    Units,
} from './types'
