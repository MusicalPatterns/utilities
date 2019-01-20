import { testIsCloseTo } from './testIsCloseTo'

const testArraysAreClose: <T>(actual: T[], expected: T[]) => void =
    <T>(actual: T[], expected: T[]): void => {
        expected.forEach((expectedElement: T, index: number): void => {
            expect(testIsCloseTo(actual[ index ], expectedElement))
                .toBeTruthy(
                    `Elements not close at index ${index}: actual ${actual[ index ]} vs expected ${expectedElement}`,
                )
        })
    }

export {
    testArraysAreClose,
}
