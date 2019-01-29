// tslint:disable:no-type-definitions-outside-types-modules

import { Map } from 'immutable'

// @ts-ignore
interface TypedMap<T> extends Map<string, T[keyof T]> {
    get<K extends keyof T>(key: K, notSetValue?: T[K]): T[K]

    set<K extends keyof T>(key: K, value: T[K]): this

    toJS(): T
}

const typedMap: <T>(data: T) => TypedMap<T> =
    // @ts-ignore
    // tslint:disable-next-line:no-unnecessary-callback-wrapper
    <T>(data: T): TypedMap<T> => Map(data)

export {
    typedMap,
    TypedMap,
}
