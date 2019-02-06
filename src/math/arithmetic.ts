// tslint:disable ban-types

const sum: <T extends Number>(a: T, b: T) => T =
    <T extends Number>(a: T, b: T): T =>
        // @ts-ignore
        a + b

const difference: <T extends Number>(a: T, b: T) => T =
    <T extends Number>(a: T, b: T): T =>
        // @ts-ignore
        a - b

const product: <T extends Number>(a: T, b: T) => T =
    <T extends Number>(a: T, b: T): T =>
        // @ts-ignore
        a * b

const quotient: <T extends Number>(a: T, b: T) => T =
    <T extends Number>(a: T, b: T): T =>
        // @ts-ignore
        a / b

export {
    sum,
    difference,
    product,
    quotient,
}
