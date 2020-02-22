type ObjectDifference<ObjectType extends ObjectTypeWithPropertiesToSubtract, ObjectTypeWithPropertiesToSubtract> =
    Omit<ObjectType, keyof ObjectTypeWithPropertiesToSubtract>

type KeyMap<ObjectWithKeys extends ObjectOf<unknown>, NewValueType> =
    { [Index in keyof ObjectWithKeys]: NewValueType }

interface ObjectOf<ValueType> {
    [ index: string ]: ValueType
}

type Maybe<Type> = Type | undefined
type Just<Type, MaybeType extends Maybe<Type>> = Type

type ArrayOfLength<Length extends Number, NumericType = number> = [ NumericType, ...NumericType[] ] & { length: Length }

type NonPartial<PartialType> = { [Index in keyof PartialType]-?: PartialType[Index] }

type Difference<Type, TypeWithSubtypesToRemove> = Type extends TypeWithSubtypesToRemove ? never : Type

type Thunk<Type> = () => Type

export {
    ObjectDifference,
    KeyMap,
    ObjectOf,
    Maybe,
    ArrayOfLength,
    NonPartial,
    Just,
    Difference,
    Thunk,
}
