const keyExistsOnObject: <T>(key: string, object: T) => boolean =
    <T>(key: string, object: T): boolean =>
        key in object

export {
    keyExistsOnObject,
}
