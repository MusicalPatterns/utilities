const sum: <T extends number>(a: T, b: T) => T =
    <T extends number>(a: T, b: T): T =>
        a + b as T

const difference: <T extends number>(a: T, b: T) => T =
    <T extends number>(a: T, b: T): T =>
        a - b as T

const product: <T extends number>(a: T, b: T) => T =
    <T extends number>(a: T, b: T): T =>
        a * b as T

const quotient: <T extends number>(a: T, b: T) => T =
    <T extends number>(a: T, b: T): T =>
        a / b as T

export {
    sum,
    difference,
    product,
    quotient,
}
