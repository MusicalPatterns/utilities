import { Cycle, Ordinal } from '../nominal'

type Omit<ObjectType, KeyType extends keyof ObjectType> = Pick<ObjectType, Exclude<keyof ObjectType, KeyType>>

type Difference<ObjectType extends ObjectTypeWithPropertiesToSubtract, ObjectTypeWithPropertiesToSubtract> =
    Omit<ObjectType, keyof ObjectTypeWithPropertiesToSubtract>

type KeyMap<ObjectWithKeys extends ObjectOf<unknown>, NewValueType> = { [Index in keyof ObjectWithKeys]: NewValueType }

interface ObjectOf<ValueType> {
    [ index: string ]: ValueType
}

type Maybe<Type> = Type | undefined

// tslint:disable-next-line ban-types
type ArrayOfLength<Length extends Number, NumericType = number> = [ NumericType, ...NumericType[] ] & { length: Length }

interface LastElementSignature {
    <ArrayOrString extends string, ElementType>(str: ArrayOrString): string,
    <ArrayOrString extends Cycle<ElementType>, ElementType>(cycle: ArrayOrString): ElementType,
    <ArrayOrString extends ElementType[], ElementType>(array: ArrayOrString): ElementType,
}

interface IndexOfArrayOrString {
    <ArrayOrString extends string, ElementType>(str: ArrayOrString): Ordinal,
    <ArrayOrString extends Cycle<ElementType>, ElementType>(cycle: ArrayOrString): Ordinal,
    <ArrayOrString extends ElementType[], ElementType>(array: ArrayOrString): Ordinal,
}

interface Slice {
    <Sliceable extends string, ElementType>(str: Sliceable, initial: Ordinal, terminal?: Ordinal): Sliceable,
    <Sliceable extends Cycle<ElementType>, ElementType>(
        cycle: Sliceable, initial: Ordinal, terminal?: Ordinal,
    ): ElementType[],
    <Sliceable extends ElementType[], ElementType>(array: Sliceable, initial: Ordinal, terminal?: Ordinal): Sliceable,
}

export {
    Omit,
    Difference,
    KeyMap,
    ObjectOf,
    Maybe,
    ArrayOfLength,
    Slice,
    LastElementSignature,
    IndexOfArrayOrString,
}
