const reciprocal: <T extends number>(n: T) => T =
    <T extends number>(n: T): T =>
        1 / n as T

const negative: <T extends number>(n: T) => T =
    <T extends number>(n: T): T =>
        -n as T

export {
    negative,
    reciprocal,
}
