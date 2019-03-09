const keyExistsOnObject: <T>(key: PropertyKey, object: T) => boolean =
    <T>(key: PropertyKey, object: T): boolean =>
        key in object

export {
    keyExistsOnObject,
}
