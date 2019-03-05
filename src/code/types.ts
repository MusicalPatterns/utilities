type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>

type Difference<T extends U, U> = Omit<T, keyof U>

type PropertyMap<ObjectWithProperties, NewValueType> = { [P in keyof ObjectWithProperties]: NewValueType }

interface DictionaryOf<T> {
    [ index: string ]: T
}

type Maybe<T> = T | undefined

interface AnyOtherProperties {
    // tslint:disable-next-line no-any
    [ index: string ]: any
}

export {
    Omit,
    Difference,
    PropertyMap,
    DictionaryOf,
    Maybe,
    AnyOtherProperties,
}
