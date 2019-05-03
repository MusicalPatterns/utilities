type Omit<ObjectType, KeyType extends keyof ObjectType> = Pick<ObjectType, Exclude<keyof ObjectType, KeyType>>

type Difference<ObjectType extends ObjectTypeWithPropertiesToSubtract, ObjectTypeWithPropertiesToSubtract> =
    Omit<ObjectType, keyof ObjectTypeWithPropertiesToSubtract>

type KeyMap<ObjectWithKeys extends ObjectOf<unknown>, NewValueType> =
    { [Index in keyof ObjectWithKeys]: NewValueType }

interface ObjectOf<ValueType> {
    [ index: string ]: ValueType
}

type Maybe<Type> = Type | undefined
type Just<Type, MaybeType extends Maybe<Type>> = Type

type ArrayOfLength<Length extends Number, NumericType = number> = [ NumericType, ...NumericType[] ] & { length: Length }

type NonPartial<T extends object> = { [Index in keyof T]-?: T[Index] }

export {
    Omit,
    Difference,
    KeyMap,
    ObjectOf,
    Maybe,
    ArrayOfLength,
    NonPartial,
    Just,
}
