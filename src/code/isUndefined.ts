const isUndefined: (value: unknown) => value is undefined =
    (value: unknown): value is undefined =>
        typeof value === 'undefined'

export {
    isUndefined,
}
