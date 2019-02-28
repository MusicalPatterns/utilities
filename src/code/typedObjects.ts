// tslint:disable no-type-definitions-outside-types-modules

import { Map } from 'immutable'

// @ts-ignore
interface TypedMap<T> extends Map<string, T[keyof T]> {
    get<K extends keyof T>(key: K, notSetValue?: T[K]): T[K]

    set<K extends keyof T>(key: K, value: T[K]): this

    toJS(): T
}

const typedMap: <T>(data: T) => TypedMap<T> =
    // @ts-ignore
    // tslint:disable-next-line no-unnecessary-callback-wrapper
    <T>(data: T): TypedMap<T> => Map(data)

const entries: <K extends string, V>(object: { [key in K]: V }) => Array<[ K, V ]> =
    <K extends string, V>(object: { [key in K]: V }): Array<[ K, V ]> =>
        Object.entries(object) as Array<[ K, V ]>

const keys: <K extends string, V>(object: { [key in K]: V }) => K[] =
    <K extends string, V>(object: { [key in K]: V }): K[] =>
        Object.keys(object) as K[]

export {
    entries,
    keys,
    typedMap,
    TypedMap,
}
