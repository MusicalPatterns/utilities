// tslint:disable:no-type-definitions-outside-types-modules

import { Map } from 'immutable'

type AllowedTypeValues<T, V> = {
    [K in keyof T]: V
}

// @ts-ignore
interface TypedMap<V, T extends AllowedTypeValues<T, V>> extends Map<string, V> {
    get<K extends keyof T>(key: K, notSetValue?: T[K]): T[K]

    set<K extends keyof T>(key: K, value: T[K]): this

    toJS(): T
}

const typedMap: <V, T extends AllowedTypeValues<T, V>>(data: T) => TypedMap<V, T> =
    // tslint:disable-next-line:no-any no-unsafe-any
    <V, T extends AllowedTypeValues<T, V>>(data: T): TypedMap<V, T> => Map(data) as any

export {
    typedMap,
    TypedMap,
}
