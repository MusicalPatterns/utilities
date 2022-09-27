// tslint:disable no-type-definitions-outside-types-modules

import { Map } from 'immutable'

interface TypedMap<ObjectType extends { [key: string]: unknown }> extends Map<keyof ObjectType, ObjectType[keyof ObjectType]> {
    get<KeyType extends keyof ObjectType>(key: KeyType, notSetValue?: ObjectType[KeyType]): ObjectType[KeyType]

    set<KeyType extends keyof ObjectType>(key: KeyType, value: ObjectType[KeyType]): this

    toJS(): ObjectType | { [key: string]: unknown }
}

const typedMap: <ObjectType extends { [key: string]: unknown }>(object: ObjectType) => TypedMap<ObjectType> =
    // tslint:disable-next-line no-unnecessary-callback-wrapper
    <ObjectType extends { [key: string]: unknown }>(object: ObjectType): TypedMap<ObjectType> => Map(object) as Map<keyof ObjectType, ObjectType[keyof ObjectType]>

const entries: <KeyType extends string, ValueType>(
    object: Partial<{ [Index in KeyType]: ValueType }>,
) => Array<[ KeyType, ValueType ]> =
    <KeyType extends string, ValueType>(
        object: Partial<{ [Index in KeyType]: ValueType }>,
    ): Array<[ KeyType, ValueType ]> =>
        Object.entries(object) as Array<[ KeyType, ValueType ]>

const keys: <KeyType extends string, ValueType>(object: { [Index in KeyType]: ValueType }) => KeyType[] =
    <KeyType extends string, ValueType>(object: { [Index in KeyType]: ValueType }): KeyType[] =>
        Object.keys(object) as KeyType[]

export {
    entries,
    keys,
    typedMap,
    TypedMap,
}
