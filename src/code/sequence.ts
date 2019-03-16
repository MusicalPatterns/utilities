const sequence: <ElementType>(...arrays: ElementType[][]) => ElementType[] =
    <ElementType>(...arrays: ElementType[][]): ElementType[] =>
        arrays.reduce(
            (accumulator: ElementType[], array: ElementType[]): ElementType[] =>
                accumulator.concat(array),
            [],
        )

export {
    sequence,
}
