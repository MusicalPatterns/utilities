const unCamelCase: (str: string) => string =
    (str: string): string =>
        str.replace(/([a-z\xE0-\xFF])([A-Z\xC0\xDF])/g, '$1 $2')
            .replace(/pattern /g, '')
            .toLowerCase()

export {
    unCamelCase,
}
