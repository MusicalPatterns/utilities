// tslint:disable max-file-line-count

import { isEmpty, isUndefined } from '../code'
import { ADDITIVE_IDENTITY, Denature, Integer, MULTIPLICATIVE_IDENTITY, Natural, Nature, NoUse } from '../nominal'
import { VALUE_BELOW_WHICH_ROUNDING_IMPLEMENTATION_BREAKS } from './constants'
import { DifferenceOperation, ProductOperation, QuotientOperation, SumOperation } from './types'

const sum: SumOperation =
    <NumericType extends NoUse | number | Number & { _OperationType: 'Translation' }>(
        ...values: Array<number | NumericType>
    ): number | NumericType => {
        if (isEmpty(values)) {
            return ADDITIVE_IDENTITY as unknown as NumericType
        }

        const previousValue: NumericType = values.pop() as NumericType

        const nextSum: number | NumericType = isEmpty(values) ?
            ADDITIVE_IDENTITY as unknown as NumericType :
            sum(...values)

        return (nextSum as unknown as number) + (previousValue as unknown as number) as unknown as NumericType
    }

const difference: DifferenceOperation =
    <NumericType extends Number>(minuend: NumericType, subtrahend: NumericType): NumericType =>
        (minuend as unknown as number) - (subtrahend as unknown as number) as unknown as NumericType

const product: ProductOperation =
    <NumericType extends NoUse | number>(...values: Array<number | NumericType>): number | NumericType => {
        if (isEmpty(values)) {
            return MULTIPLICATIVE_IDENTITY as unknown as NumericType
        }

        const previousValue: NumericType = values.pop() as NumericType

        const nextProduct: number | NumericType = isEmpty(values) ?
            MULTIPLICATIVE_IDENTITY as unknown as NumericType :
            product(...values)

        return (nextProduct as unknown as number) * (previousValue as unknown as number) as unknown as NumericType
    }

const quotient: QuotientOperation =
    <NumericType extends Number>(dividend: NumericType, divisor: NumericType): NumericType =>
        (dividend as unknown as number) / (divisor as unknown as number) as unknown as NumericType

const modulus: <NumericType extends NoUse | number>(
    dividend: NumericType,
    divisor: NumericType,
) => Denature<NumericType> =
    <NumericType extends NoUse | number>(dividend: NumericType, divisor: NumericType): Denature<NumericType> =>
        (dividend as unknown as number) % (divisor as unknown as number) as unknown as Denature<NumericType>

const reciprocal: <NumericType extends Number>(value: NumericType) => Denature<NumericType> =
    <NumericType extends Number>(value: NumericType): Denature<NumericType> =>
        1 / (value as unknown as number) as unknown as Denature<NumericType>

const negative: <NumericType extends Number>(value: NumericType) => NumericType =
    <NumericType extends Number>(value: NumericType): NumericType =>
        -(value as unknown as number) as unknown as NumericType

const round: <NumericType extends Number, IntegerType extends Natural = Integer>(
    value: NumericType,
    precision?: IntegerType,
) => NumericType =
    <NumericType extends Number, IntegerType extends Natural = Integer>(
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

const floor: <NumericType extends Number>(value: NumericType) => Nature<NumericType> =
    <NumericType extends Number>(value: NumericType): Nature<NumericType> =>
        Math.floor(value as unknown as number) as unknown as Nature<NumericType>

const ceiling: <NumericType extends Number>(value: NumericType) => Nature<NumericType> =
    <NumericType extends Number>(value: NumericType): Nature<NumericType> =>
        Math.ceil(value as unknown as number) as unknown as Nature<NumericType>

const absoluteValue: <NumericType extends Number>(value: NumericType) => NumericType =
    <NumericType extends Number>(value: NumericType): NumericType =>
        Math.abs(value as unknown as number) as unknown as NumericType

const squareRoot: <NumericType extends Number>(value: NumericType) => Denature<NumericType> =
    <NumericType extends Number>(value: NumericType): Denature<NumericType> =>
        Math.sqrt(value as unknown as number) as unknown as Denature<NumericType>

const cubeRoot: <NumericType extends Number>(value: NumericType) => Denature<NumericType> =
    <NumericType extends Number>(value: NumericType): Denature<NumericType> =>
        Math.cbrt(value as unknown as number) as unknown as Denature<NumericType>

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
