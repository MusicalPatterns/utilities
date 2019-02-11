// tslint:disable ban-types max-file-line-count

import { Integer } from '../nominal'
import { ADDITIVE_IDENTITY, MULTIPLICATIVE_IDENTITY } from './constants'

const sum: <T extends Number>(...values: T[]) => T =
    <T extends Number>(...values: T[]): T => {
        const lastValue: T = values.pop() as T

        // tslint:disable-next-line no-any
        const nextSum: T = values.length ? sum(...values) : ADDITIVE_IDENTITY as any as T

        // @ts-ignore
        return nextSum + lastValue
    }

const difference: <T extends Number>(a: T, b: T) => T =
    <T extends Number>(a: T, b: T): T =>
        // @ts-ignore
        a - b as T

const product: <T extends Number>(...values: T[]) => T =
    <T extends Number>(...values: T[]): T => {
        const lastValue: T = values.pop() as T

        // tslint:disable-next-line no-any
        const nextProduct: T = values.length ? product(...values) : MULTIPLICATIVE_IDENTITY as any as T

        // @ts-ignore
        return nextProduct * lastValue
    }

const quotient: <T extends Number>(a: T, b: T) => T =
    <T extends Number>(a: T, b: T): T =>
        // @ts-ignore
        a / b as T

const modulus: <T extends Number>(a: T, b: T) => T =
    <T extends Number>(a: T, b: T): T =>
        // @ts-ignore
        a % b as T

const reciprocal: <T extends Number>(n: T) => T =
    <T extends Number>(n: T): T =>
        // @ts-ignore
        1 / n as T

const negative: <T extends Number>(n: T) => T =
    <T extends Number>(n: T): T =>
        // @ts-ignore
        -n as T

const round: <T extends Number, U extends Integer>(n: T, precision?: U) => T =
    <T extends Number, U extends Integer>(n: T, precision?: U): T => {
        if (!precision) {
            // @ts-ignore
            return Math.round(n) as T
        }

        // tslint:disable-next-line no-any prefer-template
        return +(Math.round(`${n}e+${precision}` as any as number) + 'e-' + precision) as any as T
    }

const floor: <T extends Number>(n: T) => T =
    <T extends Number>(n: T): T =>
        // @ts-ignore
        Math.floor(n) as T

const ceiling: <T extends Number>(n: T) => T =
    <T extends Number>(n: T): T =>
        // @ts-ignore
        Math.ceil(n) as T

const absoluteValue: <T extends Number>(n: T) => T =
    <T extends Number>(n: T): T =>
        // @ts-ignore
        Math.abs(n) as T

const squareRoot: <T extends Number>(n: T) => T =
    <T extends Number>(n: T): T =>
        // @ts-ignore
        Math.sqrt(n)

const cubeRoot: <T extends Number>(n: T) => T =
    <T extends Number>(n: T): T =>
        // @ts-ignore
        Math.cbrt(n)

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
}
