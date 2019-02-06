// tslint:disable ban-types

const reciprocal: <T extends Number>(n: T) => T =
    <T extends Number>(n: T): T =>
        // @ts-ignore
        1 / n

export {
    reciprocal,
}
