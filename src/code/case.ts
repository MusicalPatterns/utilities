const camelCaseToLowerCase: (str: string) => string =
    (str: string): string =>
        str.replace(/([a-z\xE0-\xFF])([A-Z\xC0\xDF])/g, '$1 $2')
            .toLowerCase()

const camelCaseToConstantCase: (str: string) => string =
    (str: string): string =>
        str.replace(/([a-z\xE0-\xFF])([A-Z\xC0\xDF])/g, '$1_$2')
            .toUpperCase()

export {
    camelCaseToLowerCase,
    camelCaseToConstantCase,
}
