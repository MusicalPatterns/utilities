const keyExistsOnObject: <KeyType extends PropertyKey, ObjectType>(key: KeyType, object: ObjectType) => boolean =
    <KeyType extends PropertyKey, ObjectType>(key: KeyType, object: ObjectType): boolean =>
        key in object

export {
    keyExistsOnObject,
}
