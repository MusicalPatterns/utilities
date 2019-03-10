const sequence: <ElementType>(arrayOfArrays: ElementType[][]) => ElementType[] =
    <ElementType>(arrayOfArrays: ElementType[][]): ElementType[] =>
        arrayOfArrays.reduce(
            (accumulator: ElementType[], array: ElementType[]): ElementType[] =>
                accumulator.concat(array),
            [],
        )

export {
    sequence,
}
