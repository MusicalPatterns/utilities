// tslint:disable ban-types max-file-line-count

import { isEmpty, isUndefined } from '../code'
import { Integer } from '../nominal'
import { ADDITIVE_IDENTITY, MULTIPLICATIVE_IDENTITY } from './constants'

const sum: <NumericType extends Number>(...values: NumericType[]) => NumericType =
    <NumericType extends Number>(...values: NumericType[]): NumericType => {
        const lastValue: NumericType = values.pop() as NumericType

        const nextSum: NumericType = isEmpty(values) ? ADDITIVE_IDENTITY as unknown as NumericType : sum(...values)

        return (nextSum as unknown as number) + (lastValue as unknown as number) as unknown as NumericType
    }

const difference: <NumericType extends Number>(minuend: NumericType, subtrahend: NumericType) => NumericType =
    <NumericType extends Number>(minuend: NumericType, subtrahend: NumericType): NumericType =>
        (minuend as unknown as number) - (subtrahend as unknown as number) as unknown as NumericType

const product: <NumericType extends Number>(...values: NumericType[]) => NumericType =
    <NumericType extends Number>(...values: NumericType[]): NumericType => {
        const lastValue: NumericType = values.pop() as NumericType

        const nextProduct: NumericType = isEmpty(values) ?
            MULTIPLICATIVE_IDENTITY as unknown as NumericType :
            product(...values)

        return (nextProduct as unknown as number) * (lastValue as unknown as number) as unknown as NumericType
    }

const quotient: <NumericType extends Number>(dividend: NumericType, divisor: NumericType) => NumericType =
    <NumericType extends Number>(dividend: NumericType, divisor: NumericType): NumericType =>
        (dividend as unknown as number) / (divisor as unknown as number) as unknown as NumericType

const modulus: <NumericType extends Number>(dividend: NumericType, divisor: NumericType) => NumericType =
    <NumericType extends Number>(dividend: NumericType, divisor: NumericType): NumericType =>
        (dividend as unknown as number) % (divisor as unknown as number) as unknown as NumericType

const reciprocal: <NumericType extends Number>(value: NumericType) => NumericType =
    <NumericType extends Number>(value: NumericType): NumericType =>
        1 / (value as unknown as number) as unknown as NumericType

const negative: <NumericType extends Number>(value: NumericType) => NumericType =
    <NumericType extends Number>(value: NumericType): NumericType =>
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

        // tslint:disable-next-line no-any prefer-template
        return +(Math.round(`${value}e+${precision}` as unknown as number) + 'e-' + precision) as unknown as NumericType
    }

const floor: <NumericType extends Number>(value: NumericType) => NumericType =
    <NumericType extends Number>(value: NumericType): NumericType =>
        Math.floor(value as unknown as number) as unknown as NumericType

const ceiling: <NumericType extends Number>(value: NumericType) => NumericType =
    <NumericType extends Number>(value: NumericType): NumericType =>
        Math.ceil(value as unknown as number) as unknown as NumericType

const absoluteValue: <NumericType extends Number>(value: NumericType) => NumericType =
    <NumericType extends Number>(value: NumericType): NumericType =>
        Math.abs(value as unknown as number) as unknown as NumericType

const squareRoot: <NumericType extends Number>(value: NumericType) => NumericType =
    <NumericType extends Number>(value: NumericType): NumericType =>
        Math.sqrt(value as unknown as number) as unknown as NumericType

const cubeRoot: <NumericType extends Number>(value: NumericType) => NumericType =
    <NumericType extends Number>(value: NumericType): NumericType =>
        Math.cbrt(value as unknown as number) as unknown as NumericType

const max: <NumericType extends Number>(...values: NumericType[]) => NumericType =
    <NumericType extends Number>(...values: NumericType[]): NumericType =>
        Math.max(...values as unknown as number[]) as unknown as NumericType

const min: <NumericType extends Number>(...values: NumericType[]) => NumericType =
    <NumericType extends Number>(...values: NumericType[]): NumericType =>
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
