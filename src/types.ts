interface DictionaryOf<T> {
    [ index: string ]: T
}

type Maybe<T> = T | undefined | null

export {
    DictionaryOf,
    Maybe,
}
