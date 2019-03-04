// tslint:disable ban-types no-any

import { Integer } from '../nominal'
import { ADDITIVE_IDENTITY, MULTIPLICATIVE_IDENTITY } from './constants'

const sum: <T extends Number>(...values: T[]) => T =
    <T extends Number>(...values: T[]): T => {
        const lastValue: T = values.pop() as T

        const nextSum: T = values.length ? sum(...values) : ADDITIVE_IDENTITY as any as T

        return (nextSum as any as number) + (lastValue as any as number) as any as T
    }

const difference: <T extends Number>(minuend: T, subtrahend: T) => T =
    <T extends Number>(minuend: T, subtrahend: T): T =>
        (minuend as any as number) - (subtrahend as any as number) as any as T

const product: <T extends Number>(...values: T[]) => T =
    <T extends Number>(...values: T[]): T => {
        const lastValue: T = values.pop() as T

        const nextProduct: T = values.length ? product(...values) : MULTIPLICATIVE_IDENTITY as any as T

        return (nextProduct as any as number) * (lastValue as any as number) as any as T
    }

const quotient: <T extends Number>(dividend: T, divisor: T) => T =
    <T extends Number>(dividend: T, divisor: T): T =>
        (dividend as any as number) / (divisor as any as number) as any as T

const modulus: <T extends Number>(dividend: T, divisor: T) => T =
    <T extends Number>(dividend: T, divisor: T): T =>
        (dividend as any as number) % (divisor as any as number) as any as T

const reciprocal: <T extends Number>(value: T) => T =
    <T extends Number>(value: T): T =>
        1 / (value as any as number) as any as T

const negative: <T extends Number>(value: T) => T =
    <T extends Number>(value: T): T =>
        -(value as any as number) as any as T

const round: <T extends Number, U extends Integer>(value: T, precision?: U) => T =
    <T extends Number, U extends Integer>(value: T, precision?: U): T => {
        if (!precision) {
            return Math.round(value as any as number) as any as T
        }

        // tslint:disable-next-line no-any prefer-template
        return +(Math.round(`${value}e+${precision}` as any as number) + 'e-' + precision) as any as T
    }

const floor: <T extends Number>(value: T) => T =
    <T extends Number>(value: T): T =>
        Math.floor(value as any as number) as any as T

const ceiling: <T extends Number>(value: T) => T =
    <T extends Number>(value: T): T =>
        Math.ceil(value as any as number) as any as T

const absoluteValue: <T extends Number>(value: T) => T =
    <T extends Number>(value: T): T =>
        Math.abs(value as any as number) as any as T

const squareRoot: <T extends Number>(value: T) => T =
    <T extends Number>(value: T): T =>
        Math.sqrt(value as any as number) as any as T

const cubeRoot: <T extends Number>(value: T) => T =
    <T extends Number>(value: T): T =>
        Math.cbrt(value as any as number) as any as T

const max: <T extends Number>(...values: T[]) => T =
    <T extends Number>(...values: T[]): T =>
        Math.max(...values as any as number[]) as any as T

const min: <T extends Number>(...values: T[]) => T =
    <T extends Number>(...values: T[]): T =>
        Math.min(...values as any as number[]) as any as T

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
