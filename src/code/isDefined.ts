const isDefined: <T>(property: T) => boolean = <T>(property: T): boolean => typeof property !== 'undefined'

export {
    isDefined,
}
