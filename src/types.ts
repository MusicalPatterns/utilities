interface DictionaryOf<T> {
    [ index: string ]: T
}

type Maybe<T> = T | undefined | null

interface AnyOtherProperties {
    // tslint:disable-next-line:no-any
    [ index: string ]: any
}

export {
    DictionaryOf,
    Maybe,
    AnyOtherProperties,
}
