const camelCaseToLowerCase: (str: string) => string =
    (str: string): string =>
        str.replace(/([a-z\xE0-\xFF])([A-Z\xC0\xDF])/g, '$1 $2')
            .toLowerCase()

const camelCaseToConstantCase: (str: string) => string =
    (str: string): string =>
        str.replace(/([a-z\xE0-\xFF])([A-Z\xC0\xDF])/g, '$1_$2')
            .toUpperCase()

const constantCaseToUpperCase: (str: string) => string =
    (str: string): string => {
        const almost: string = str.toLowerCase()
            .replace(/(\_\w)/g, (m: string) => ` ${m[ 1 ].toUpperCase()}`)

        return almost.charAt(0)
            .toUpperCase() + almost.slice(1)
    }

export {
    camelCaseToLowerCase,
    camelCaseToConstantCase,
    constantCaseToUpperCase,
}
