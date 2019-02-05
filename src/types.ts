interface DictionaryOf<T> {
    [ index: string ]: T
}

type Maybe<T> = T | undefined

interface AnyOtherProperties {
    // tslint:disable-next-line no-any
    [ index: string ]: any
}

enum Units {
    HERTZ = 'Hz',
    MILLISECONDS = 'ms',
    BARS = 'bars',
    EQUAL_DIVISION = 'ed',
    METERS = 'm',
    REPETITIONS = 'x',
}

export {
    DictionaryOf,
    Maybe,
    AnyOtherProperties,
    Units,
}
