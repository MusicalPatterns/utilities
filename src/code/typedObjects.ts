// tslint:disable no-type-definitions-outside-types-modules

import { Map } from 'immutable'

interface TypedMap<ObjectType> extends Map<keyof ObjectType, ObjectType[keyof ObjectType]> {
    get<KeyType extends keyof ObjectType>(key: KeyType, notSetValue?: ObjectType[KeyType]): ObjectType[KeyType]

    set<KeyType extends keyof ObjectType>(key: KeyType, value: ObjectType[KeyType]): this

    toJS(): ObjectType
}

const typedMap: <ObjectType>(object: ObjectType) => TypedMap<ObjectType> =
    // @ts-ignore
    // tslint:disable-next-line no-unnecessary-callback-wrapper
    <ObjectType>(object: ObjectType): TypedMap<ObjectType> => Map(object)

const entries: <KeyType extends string, ValueType>(
    object: Partial<{ [Ordinal in KeyType]: ValueType }>,
) => Array<[ KeyType, ValueType ]> =
    <KeyType extends string, ValueType>(
        object: Partial<{ [Ordinal in KeyType]: ValueType }>,
    ): Array<[ KeyType, ValueType ]> =>
        Object.entries(object) as Array<[ KeyType, ValueType ]>

const keys: <KeyType extends string, ValueType>(object: { [Ordinal in KeyType]: ValueType }) => KeyType[] =
    <KeyType extends string, ValueType>(object: { [Ordinal in KeyType]: ValueType }): KeyType[] =>
        Object.keys(object) as KeyType[]

export {
    entries,
    keys,
    typedMap,
    TypedMap,
}
