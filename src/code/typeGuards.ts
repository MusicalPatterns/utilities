const isUndefined: (value: unknown) => value is undefined =
    (value: unknown): value is undefined =>
        typeof value === 'undefined'

const isArray: (maybeArray: unknown) => maybeArray is unknown[] =
    (maybeArray: unknown): maybeArray is unknown[] =>
        maybeArray instanceof Array

const isString: (maybeString: unknown) => maybeString is string =
    (maybeString: unknown): maybeString is string =>
        typeof maybeString === 'string'

const isNumber: (maybeNumber: unknown) => maybeNumber is number =
    (maybeNumber: unknown): maybeNumber is number =>
        typeof maybeNumber === 'number'

const isObject: (maybeObject: unknown) => maybeObject is { [ index: string ]: unknown } =
    (maybeObject: unknown): maybeObject is { [ index: string ]: unknown } =>
        typeof maybeObject === 'object'

export {
    isArray,
    isUndefined,
    isString,
    isNumber,
    isObject,
}
