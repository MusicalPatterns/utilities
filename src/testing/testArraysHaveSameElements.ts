const testArraysHaveSameElements: <ElementType>(actual: ElementType[], expected: ElementType[]) => void =
    <ElementType>(actual: ElementType[], expected: ElementType[]): void => {
        expect(expected.sort())
            .toEqual(actual.sort())
    }

export {
    testArraysHaveSameElements,
}
