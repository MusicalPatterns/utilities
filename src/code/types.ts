type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>

type Difference<T extends U, U> = Omit<T, keyof U>

type PropertyMap<ObjectWithProperties, NewValueType> = { [P in keyof ObjectWithProperties]: NewValueType }

export {
    Omit,
    Difference,
    PropertyMap,
}
