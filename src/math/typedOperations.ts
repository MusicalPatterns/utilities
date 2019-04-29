// tslint:disable max-file-line-count

import { isEmpty, isUndefined } from '../code'
import {
    ADDITIVE_IDENTITY,
    Base,
    Exponent,
    Integer,
    Logarithm,
    MULTIPLICATIVE_IDENTITY,
    NoUse,
    Power,
    UnwholeVersion,
    Whole,
    WholeVersion,
} from '../nominal'
import { VALUE_BELOW_WHICH_ROUNDING_IMPLEMENTATION_BREAKS } from './constants'
import { DifferenceOperation, ProductOperation, QuotientOperation, SumOperation } from './types'

const sum: SumOperation =
    <NumericType extends NoUse | number | Number & { _OperationType: 'Translation' }>(
        ...numerals: Array<number | NumericType>
    ): number | NumericType => {
        if (isEmpty(numerals)) {
            return ADDITIVE_IDENTITY as unknown as NumericType
        }

        const previousValue: NumericType = numerals.pop() as NumericType

        const nextSum: number | NumericType = isEmpty(numerals) ?
            ADDITIVE_IDENTITY as unknown as NumericType :
            sum(...numerals)

        return (nextSum as unknown as number) + (previousValue as unknown as number) as unknown as NumericType
    }

const difference: DifferenceOperation =
    <NumericType extends Number>(minuend: NumericType, subtrahend: NumericType): NumericType =>
        (minuend as unknown as number) - (subtrahend as unknown as number) as unknown as NumericType

const product: ProductOperation =
    <NumericType extends NoUse | number>(...numerals: Array<number | NumericType>): number | NumericType => {
        if (isEmpty(numerals)) {
            return MULTIPLICATIVE_IDENTITY as unknown as NumericType
        }

        const previousValue: NumericType = numerals.pop() as NumericType

        const nextProduct: number | NumericType = isEmpty(numerals) ?
            MULTIPLICATIVE_IDENTITY as unknown as NumericType :
            product(...numerals)

        return (nextProduct as unknown as number) * (previousValue as unknown as number) as unknown as NumericType
    }

const quotient: QuotientOperation =
    <NumericType extends Number>(dividend: NumericType, divisor: NumericType): NumericType =>
        (dividend as unknown as number) / (divisor as unknown as number) as unknown as NumericType

const modulus: <NumericType extends NoUse | number>(
    dividend: NumericType,
    divisor: NumericType,
) => UnwholeVersion<NumericType> =
    <NumericType extends NoUse | number>(dividend: NumericType, divisor: NumericType): UnwholeVersion<NumericType> =>
        (dividend as unknown as number) % (divisor as unknown as number) as unknown as UnwholeVersion<NumericType>

const reciprocal: <NumericType extends Number>(numeral: NumericType) => UnwholeVersion<NumericType> =
    <NumericType extends Number>(numeral: NumericType): UnwholeVersion<NumericType> =>
        1 / (numeral as unknown as number) as unknown as UnwholeVersion<NumericType>

const negative: <NumericType extends Number>(numeral: NumericType) => NumericType =
    <NumericType extends Number>(numeral: NumericType): NumericType =>
        -(numeral as unknown as number) as unknown as NumericType

const round: <NumericType extends Number, WholeType extends Whole = Integer>(
    numeral: NumericType,
    precision?: WholeType,
) => NumericType =
    <NumericType extends Number, WholeType extends Whole = Integer>(
        numeral: NumericType,
        precision?: WholeType,
    ): NumericType => {
        if (isUndefined(precision)) {
            return Math.round(numeral as unknown as number) as unknown as NumericType
        }

        if (absoluteValue(numeral) < (VALUE_BELOW_WHICH_ROUNDING_IMPLEMENTATION_BREAKS as unknown as NumericType)) {
            return 0 as unknown as NumericType
        }

        // tslint:disable-next-line no-any prefer-template max-line-length
        return +(Math.round(`${numeral}e+${precision}` as unknown as number) + 'e-' + precision) as unknown as NumericType
    }

const floor: <NumericType extends Number>(numeral: NumericType) => WholeVersion<NumericType> =
    <NumericType extends Number>(numeral: NumericType): WholeVersion<NumericType> =>
        Math.floor(numeral as unknown as number) as unknown as WholeVersion<NumericType>

const ceiling: <NumericType extends Number>(numeral: NumericType) => WholeVersion<NumericType> =
    <NumericType extends Number>(numeral: NumericType): WholeVersion<NumericType> =>
        Math.ceil(numeral as unknown as number) as unknown as WholeVersion<NumericType>

const absoluteValue: <NumericType extends Number>(numeral: NumericType) => NumericType =
    <NumericType extends Number>(numeral: NumericType): NumericType =>
        Math.abs(numeral as unknown as number) as unknown as NumericType

const squareRoot: <NumericType extends Number>(numeral: NumericType) => UnwholeVersion<NumericType> =
    <NumericType extends Number>(numeral: NumericType): UnwholeVersion<NumericType> =>
        Math.sqrt(numeral as unknown as number) as unknown as UnwholeVersion<NumericType>

const cubeRoot: <NumericType extends Number>(numeral: NumericType) => UnwholeVersion<NumericType> =
    <NumericType extends Number>(numeral: NumericType): UnwholeVersion<NumericType> =>
        Math.cbrt(numeral as unknown as number) as unknown as UnwholeVersion<NumericType>

const max: <NumericType extends Number>(...numerals: NumericType[]) => NumericType =
    <NumericType extends Number>(...numerals: NumericType[]): NumericType =>
        Math.max(...numerals as unknown as number[]) as unknown as NumericType

const min: <NumericType extends Number>(...numerals: NumericType[]) => NumericType =
    <NumericType extends Number>(...numerals: NumericType[]): NumericType =>
        Math.min(...numerals as unknown as number[]) as unknown as NumericType

const pow: {
    <NumericType extends Number = number>(base: Base<NumericType>, power: Power<NumericType>): NumericType,
    <NumericType extends Number = number>(base: Logarithm<NumericType>, power: Exponent<NumericType>): NumericType,
} =
    <NumericType extends Number = number>(
        base: Base<NumericType> | Logarithm<NumericType>,
        power: Power<NumericType> | Exponent<NumericType>,
    ): NumericType =>
        Math.pow(base as unknown as number, power as unknown as number) as unknown as NumericType

const log: {
    <NumericType extends Number = number>(numeral: NumericType, base: Base<NumericType>): Power<NumericType>,
    <NumericType extends Number = number>(numeral: NumericType, base: Logarithm<NumericType>): Exponent<NumericType>,
} =
    <NumericType extends Number = number>(
        numeral: NumericType,
        base: Base<NumericType> | Logarithm<NumericType>,
    ): Power<NumericType> & Exponent<NumericType> =>
        Math.log(numeral as unknown as number) / Math.log(base as unknown as number) as
            unknown as Power<NumericType> & Exponent<NumericType>

export {
    sum,
    difference,
    product,
    quotient,
    modulus,
    reciprocal,
    negative,
    round,
    floor,
    ceiling,
    absoluteValue,
    squareRoot,
    cubeRoot,
    max,
    min,
    pow,
    log,
}
