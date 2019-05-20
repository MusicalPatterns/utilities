const isUndefined: (value: unknown) => value is undefined =
    (value: unknown): value is undefined =>
        typeof value === 'undefined'

const isArray: (maybeArray: unknown) => maybeArray is Array<unknown> =
    (maybeArray: unknown): maybeArray is Array<unknown> =>
        maybeArray instanceof Array

const isString: (maybeString: unknown) => maybeString is string =
    (maybeString: unknown): maybeString is string =>
        typeof maybeString === 'string'

const isNumber: (maybeNumber: unknown) => maybeNumber is number =
    (maybeNumber: unknown): maybeNumber is number =>
        typeof maybeNumber === 'number'

const isObject: (maybeObject: object) => maybeObject is Object =
    (maybeObject: unknown): maybeObject is Object =>
        typeof maybeObject === 'object'

export {
    isArray,
    isUndefined,
    isString,
    isNumber,
    isObject,
}
