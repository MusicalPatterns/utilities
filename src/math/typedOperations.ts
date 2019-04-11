// tslint:disable max-file-line-count

import { isEmpty, isUndefined } from '../code'
import { ADDITIVE_IDENTITY, Integer, MULTIPLICATIVE_IDENTITY, Scalar, Translation } from '../nominal'
import { VALUE_BELOW_WHICH_ROUNDING_IMPLEMENTATION_BREAKS } from './constants'

const sum: <NumericType extends Number = Number>(...values: NumericType[]) => number =
    <NumericType extends Number = Number>(...values: NumericType[]): number => {
        if (isEmpty(values)) {
            return ADDITIVE_IDENTITY as unknown as number
        }

        const previousValue: NumericType = values.pop() as NumericType

        const nextSum: number = isEmpty(values) ? ADDITIVE_IDENTITY as unknown as number : sum(...values)

        return nextSum + (previousValue as unknown as number) as unknown as number
    }

const difference: <NumericType extends Number = Number>(
    minuend: NumericType,
    subtrahend: NumericType,
) => Translation<NumericType> =
    <NumericType extends Number = Number>(minuend: NumericType, subtrahend: NumericType): Translation<NumericType> =>
        (minuend as unknown as number) - (subtrahend as unknown as number) as unknown as Translation<NumericType>

const product: <NumericType extends Number = Number>(...values: NumericType[]) => number =
    <NumericType extends Number = Number>(...values: NumericType[]): number => {
        if (isEmpty(values)) {
            return MULTIPLICATIVE_IDENTITY as unknown as number
        }

        const previousValue: NumericType = values.pop() as NumericType

        const nextProduct: number = isEmpty(values) ?
            MULTIPLICATIVE_IDENTITY as unknown as number :
            product(...values)

        return nextProduct * (previousValue as unknown as number) as unknown as number
    }

const quotient: <NumericType extends Number = Number>(
    dividend: NumericType,
    divisor: NumericType,
) => Scalar<NumericType> =
    <NumericType extends Number = Number>(dividend: NumericType, divisor: NumericType): Scalar<NumericType> =>
        (dividend as unknown as number) / (divisor as unknown as number) as unknown as Scalar<NumericType>

const modulus: <NumericType extends Number = Number>(dividend: NumericType, divisor: NumericType) => number =
    <NumericType extends Number = Number>(dividend: NumericType, divisor: NumericType): number =>
        (dividend as unknown as number) % (divisor as unknown as number) as unknown as number

const reciprocal: <NumericType extends Number = Number>(value: NumericType) => NumericType =
    <NumericType extends Number = Number>(value: NumericType): NumericType =>
        1 / (value as unknown as number) as unknown as NumericType

const negative: <NumericType extends Number = Number>(value: NumericType) => NumericType =
    <NumericType extends Number = Number>(value: NumericType): NumericType =>
        -(value as unknown as number) as unknown as NumericType

const round: <NumericType extends Number, IntegerType extends Integer>(
    value: NumericType,
    precision?: IntegerType,
) => NumericType =
    <NumericType extends Number, IntegerType extends Integer>(
        value: NumericType,
        precision?: IntegerType,
    ): NumericType => {
        if (isUndefined(precision)) {
            return Math.round(value as unknown as number) as unknown as NumericType
        }

        if (absoluteValue(value) < (VALUE_BELOW_WHICH_ROUNDING_IMPLEMENTATION_BREAKS as unknown as NumericType)) {
            return 0 as unknown as NumericType
        }

        // tslint:disable-next-line no-any prefer-template
        return +(Math.round(`${value}e+${precision}` as unknown as number) + 'e-' + precision) as unknown as NumericType
    }

const floor: <NumericType extends Number = Number>(value: NumericType) => NumericType =
    <NumericType extends Number = Number>(value: NumericType): NumericType =>
        Math.floor(value as unknown as number) as unknown as NumericType

const ceiling: <NumericType extends Number = Number>(value: NumericType) => NumericType =
    <NumericType extends Number = Number>(value: NumericType): NumericType =>
        Math.ceil(value as unknown as number) as unknown as NumericType

const absoluteValue: <NumericType extends Number = Number>(value: NumericType) => NumericType =
    <NumericType extends Number = Number>(value: NumericType): NumericType =>
        Math.abs(value as unknown as number) as unknown as NumericType

const squareRoot: <NumericType extends Number = Number>(value: NumericType) => NumericType =
    <NumericType extends Number = Number>(value: NumericType): NumericType =>
        Math.sqrt(value as unknown as number) as unknown as NumericType

const cubeRoot: <NumericType extends Number = Number>(value: NumericType) => NumericType =
    <NumericType extends Number = Number>(value: NumericType): NumericType =>
        Math.cbrt(value as unknown as number) as unknown as NumericType

const max: <NumericType extends Number = Number>(...values: NumericType[]) => NumericType =
    <NumericType extends Number = Number>(...values: NumericType[]): NumericType =>
        Math.max(...values as unknown as number[]) as unknown as NumericType

const min: <NumericType extends Number = Number>(...values: NumericType[]) => NumericType =
    <NumericType extends Number = Number>(...values: NumericType[]): NumericType =>
        Math.min(...values as unknown as number[]) as unknown as NumericType

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
}
