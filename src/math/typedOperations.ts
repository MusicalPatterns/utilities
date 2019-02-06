// tslint:disable ban-types

const sum: <T extends Number>(a: T, b: T) => T =
    <T extends Number>(a: T, b: T): T =>
        // @ts-ignore
        a + b as T

const difference: <T extends Number>(a: T, b: T) => T =
    <T extends Number>(a: T, b: T): T =>
        // @ts-ignore
        a - b as T

const product: <T extends Number>(a: T, b: T) => T =
    <T extends Number>(a: T, b: T): T =>
        // @ts-ignore
        a * b as T

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

const round: <T extends Number>(n: T) => T =
    <T extends Number>(n: T): T =>
        // @ts-ignore
        Math.round(n) as T

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
