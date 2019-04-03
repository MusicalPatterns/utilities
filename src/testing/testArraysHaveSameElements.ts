import { isUndefined } from '../code'

const testArraysHaveSameElements: <ElementType>(
    actual: ElementType[],
    expected: ElementType[],
    message?: string,
) => void =
    <ElementType>(
        actual: ElementType[],
        expected: ElementType[],
        message?: string,
    ): void => {
        expect(expected.sort())
            .toEqual(
                actual.sort(),
                isUndefined(message) ? `arrays did not have same elements: ${expected} vs ${actual}` : message,
            )
    }

export {
    testArraysHaveSameElements,
}
