// tslint:disable no-reaching-imports max-file-line-count

import { computeIntervals } from './math'
import { ArrayedOrStringType } from './nominal'

export {
    repeat,
    repeatCall,
    deepEqual,
    camelCaseToConstantCase,
    constantCaseToUpperCase,
    camelCaseToLowerCase,
    camelCaseToUpperCase,
    deepCloneObject,
    deepClone,
    isUndefined,
    allElementsEqual,
    finalElement,
    indexOfFinalElement,
    slice,
    Maybe,
    keyExistsOnObject,
    cycleSlice,
    arraysHaveNoCommonValues,
    everyNthElement,
    findIndex,
    isGreaterThanOrEqualTo,
    isLessThanOrEqualTo,
    forEach,
    isGreaterThan,
    isLessThan,
    range,
    computeReverse,
    flatten,
    sequence,
    areCyclicalTranslations,
    throws,
    noop,
} from './code/indexForTest'
export {
    distanceBetween,
    rotate,
    Coordinate,
    computeGreatestCommonDivisor,
    computeLeastCommonMultiple,
    powerSet,
    termialRoot,
    trapezoidalNumber,
    triangularNumber,
    triangularRoot,
    quarterSquareNumber,
    negative,
    round,
    sum,
    product,
    factorial,
    combinationCount,
    evaluate,
    computeLowestTerms,
    computeCommonTerms,
    getNumerator,
    getDenominator,
    multiplyRationals,
    setNumerator,
    setDenominator,
    computeLowestCommonDenominator,
    computeCommonFactors,
    areCoprime,
    invertNormalScalar,
    computeDeltas,
    computeIntervals,
    computePartialSumOfExponents,
    goesMonotonically,
    goesMonotonicallyBetweenValueAndValue,
    goesMonotonicallyFromValueToValue,
    goesQuadratically,
    goesQuadraticallyBetweenValueAndValue,
    goesQuadraticallyFromValueToValue,
    inBounds,
    allValuesAreTheSame,
    isCloseTo,
    difference,
    quotient,
    valueLinearlyBetweenValues,
    reciprocal,
    modulus,
    ceiling,
    floor,
    cubeRoot,
    squareRoot,
    pow,
    log,
    primeFactorize,
    computeCombinations,
    integerDivide,
    asRational,
    computeMetallicMean,
} from './math/indexForTest'
export {
    centsTranslationToPitchScalar,
    periodIterationHarmonicStepCount,
    octaveReduce,
    periodReduce,
    SCIENTIFIC_PITCHES,
    ScientificPitchNoteName,
    ScientificPitchOctaveNumber,
    computeEqualDivisionPitchScalars,
    computeOctaveRepeatingPitchScalars,
    Pitch,
    Tone,
    musicalAs,
} from './music/indexForTest'
export {
    use,
    as,
    Scalar,
    Cycle,
    Cents,
    Ms,
    Hz,
    Semitones,
    Rotation,
    Base,
    Modulus,
    Power,
    Radians,
    Translation,
    Cardinal,
    Numerator,
    Denominator,
    Integer,
    Meters,
    Rational,
    Space,
    Time,
    Frequency,
    Amplitude,
    OCTAVE,
    TRITAVE,
    INITIAL,
    X_AXIS,
    Y_AXIS,
    PI,
    ONE_HALF,
    THREE_HALVES,
    FOUR_THIRDS,
    TWO_THIRDS,
    FIVE_HALVES,
    EIGHTH,
    FOURTH,
    THIRD,
    Ordinal,
    Of,
    computeNominalInterface,
    NominalInterface,
    DUMMY_VALUE_FOR_COMPUTING_NOMINAL_INTERFACE,
    NominalInterfaceOptionObject,
    CustomAs,
    insteadOf,
    ofNotAs,
    NormalScalar,
    Multiple,
    Exponent,
    Logarithm,
    FIFTH,
    SIXTH,
    SEVENTH,
    Remaindee,
    Point,
    NO_SHIFT,
    Interval,
    Delta,
    Arc,
    Factor,
    Transition,
    Turn,
    Transposition,
    ArrayedType,
    ArrayedOrStringType,
    Block,
    ContourElement,
    ContourPiece,
    ContourWhole,
    Monzo,
    Val,
    isRational,
    isCycle,
    isInteger,
    Ator,
    PHI,
    VERY_HIGH_PRECISION,
} from './nominal/indexForTest'
