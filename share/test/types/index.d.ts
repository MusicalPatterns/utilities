// tslint:disable

declare namespace jasmine {
    interface Matchers<T> {
        toBeCloseToTyped(expected: T, precision?: number, negate?: boolean, message?: string): CustomMatcherResult;
    }
}
