// tslint:disable no-reaching-imports max-file-line-count

import { computeIntervals } from './math'

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
    INITIAL,
    Maybe,
    keyExistsOnObject,
    cycleSlice,
    arraysHaveNoCommonValues,
    everyNthElement,
    isGreaterThanOrEqualTo,
    isLessThanOrEqualTo,
    forEach,
    isGreaterThan,
    isLessThan,
} from './code/indexForTest'
export {
    distanceBetween,
    rotate,
    X_AXIS,
    Y_AXIS,
    Coordinate,
    computeGreatestCommonDivisor,
    computeLeastCommonMultiple,
    powerSet,
    termialRoot,
    trapezoidalNumber,
    triangularNumber,
    triangularRoot,
    quarterSquareNumber,
    PI,
    negative,
    ONE_HALF,
    THREE_HALVES,
    FOUR_THIRDS,
    TWO_THIRDS,
    FIVE_HALVES,
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
    multiplyFractions,
    EIGHTH,
    FOURTH,
    THIRD,
    computeLowestCommonDenominator,
    computeCommonFactors,
    areCoprime,
    invertNormalScalar,
    computeDeltas,
    computeIntervals,
    computePartialSumOfPowers,
    goesMonotonically,
    goesMonotonicallyBetweenValueAndValue,
    goesMonotonicallyFromValueToValue,
    goesQuadratically,
    goesQuadraticallyBetweenValueAndValue,
    goesQuadraticallyFromValueToValue,
    inBounds,
    allValuesAreTheSame,
    isCloseTo,
} from './math/indexForTest'
export {
    centsTranslationToPitchScalar,
    windowIterationHarmonicStepCount,
    OCTAVE,
    TRITAVE,
    octaveReduce,
    windowReduce,
    SCIENTIFIC_PITCHES,
    ScientificPitchNoteName,
    ScientificPitchOctaveNumber,
    computeEqualDivisionScalars,
    computeOctaveRepeatingScalars,
} from './music/indexForTest'
export {
    apply,
    to,
    from,
    Scalar,
    Cycle,
    Cents,
    Ms,
    Hz,
    Semitones,
    Rotation,
    Base,
    Modulus,
    Ordinal,
    Power,
    Radians,
    Translation,
    Cardinal,
    Numerator,
    Denominator,
    Integer,
    Meters,
    Fraction,
    Space,
    Time,
    Frequency,
    Amplitude,
} from './nominal/indexForTest'
export {
    testConstantDelta,
} from './testing/indexForTest'
