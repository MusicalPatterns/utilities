import { ArrayOverload, Cycle, Ordinal } from '../nominal'

type Omit<ObjectType, KeyType extends keyof ObjectType> = Pick<ObjectType, Exclude<keyof ObjectType, KeyType>>

type Difference<ObjectType extends ObjectTypeWithPropertiesToSubtract, ObjectTypeWithPropertiesToSubtract> =
    Omit<ObjectType, keyof ObjectTypeWithPropertiesToSubtract>

type KeyMap<ObjectWithKeys extends ObjectOf<unknown>, NewValueType> =
    { [Index in keyof ObjectWithKeys]: NewValueType }

interface ObjectOf<ValueType> {
    [ index: string ]: ValueType
}

type Maybe<Type> = Type | undefined

type ArrayOfLength<Length extends Number, NumericType = number> = [ NumericType, ...NumericType[] ] & { length: Length }

interface IndexOf {
    <ElementType>(array: Cycle<ElementType>): Ordinal<Cycle<ElementType>>
    <ElementType, ArrayType extends ArrayOverload & ElementType[]>(array: ArrayType): Ordinal<ArrayType>
}

export {
    Omit,
    Difference,
    KeyMap,
    ObjectOf,
    Maybe,
    ArrayOfLength,
    IndexOf,
}
