const testArraysHaveSameElements: <T>(actual: T[], expected: T[]) => void =
    <T>(actual: T[], expected: T[]): void => {
        expect(expected.sort())
            .toEqual(actual.sort())
    }

export {
    testArraysHaveSameElements,
}
