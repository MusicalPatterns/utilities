type Omit<ObjectType, KeyType extends keyof ObjectType> = Pick<ObjectType, Exclude<keyof ObjectType, KeyType>>

type Difference<ObjectType extends ObjectTypeWithPropertiesToSubtract, ObjectTypeWithPropertiesToSubtract> =
    Omit<ObjectType, keyof ObjectTypeWithPropertiesToSubtract>

type KeyMap<ObjectWithKeys, NewValueType> = { [Index in keyof ObjectWithKeys]: NewValueType }

interface ObjectOf<ValueType> {
    [ index: string ]: ValueType
}

type Maybe<Type> = Type | undefined

interface AnyOtherProperties {
    // tslint:disable-next-line no-any
    [ index: string ]: any
}

// tslint:disable-next-line ban-types
type ArrayOfLength<Length extends Number, NumericType = number> = [ NumericType, ...NumericType[] ] & { length: Length }

export {
    Omit,
    Difference,
    KeyMap,
    ObjectOf,
    Maybe,
    AnyOtherProperties,
    ArrayOfLength,
}
