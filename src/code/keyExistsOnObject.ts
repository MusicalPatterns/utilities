const keyExistsOnObject: <K extends PropertyKey, T>(key: K, object: T) => boolean =
    <K extends PropertyKey, T>(key: K, object: T): boolean =>
        key in object

export {
    keyExistsOnObject,
}
