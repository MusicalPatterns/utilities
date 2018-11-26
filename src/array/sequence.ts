const sequence: <T>(arrayOfArrays: T[][]) => T[] =
    <T>(arrayOfArrays: T[][]): T[] =>
        arrayOfArrays.reduce(
            (accumulator: T[], array: T[]): T[] =>
                accumulator.concat(array),
            [],
        )

export {
    sequence,
}
