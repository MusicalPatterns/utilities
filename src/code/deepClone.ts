import { objectSet } from './set'
import { entries } from './typedObjects'
import { isArray, isObject } from './typeGuards'
import { ObjectOf } from './types'

const deepCloneObject: <ObjectType extends ObjectOf<unknown>>(objectToDeepClone: ObjectType) => ObjectType =
    <ObjectType extends ObjectOf<unknown>>(objectToDeepClone: ObjectType): ObjectType => {
        const clonedObject: ObjectType = {} as unknown as ObjectType
        setAllPropertiesOfObjectOnAnother({ objectToChange: clonedObject, objectWithProperties: objectToDeepClone })

        return clonedObject
    }

const setAllPropertiesOfObjectOnAnother:
    <KeyType extends string, ValueType>(setAllPropertiesOfObjectOnAnotherParameters: {
        objectToChange: { [Index in KeyType]: ValueType },
        objectWithProperties: { [Index in KeyType]: ValueType },
    }) => void =
    <KeyType extends string, ValueType>({ objectToChange, objectWithProperties }: {
        objectToChange: { [Index in KeyType]: ValueType },
        objectWithProperties: { [Index in KeyType]: ValueType },
    }): void => {
        (entries(objectWithProperties) as Array<[ KeyType, ValueType ]>)
            .forEach(([ key, value ]: [ KeyType, ValueType ]) => {
                objectSet(objectToChange, key, deepClone(value))
            })
    }

const deepClone: <ObjectType>(maybeObjectToDeepClone: ObjectType) => ObjectType =
    <ObjectType>(maybeObjectToDeepClone: ObjectType): ObjectType => {
        let clonedMaybeObject: ObjectType
        if (isArray(maybeObjectToDeepClone)) {
            clonedMaybeObject = maybeObjectToDeepClone.slice() as unknown as ObjectType
            setAllPropertiesOfObjectOnAnother({
                objectToChange: clonedMaybeObject as { [Index in string]: unknown },
                objectWithProperties: maybeObjectToDeepClone as unknown as { [Index in string]: unknown },
            })
        }
        else if (maybeObjectToDeepClone && isObject(maybeObjectToDeepClone)) {
            clonedMaybeObject = deepCloneObject(maybeObjectToDeepClone)
        }
        else {
            clonedMaybeObject = maybeObjectToDeepClone
        }

        return clonedMaybeObject
    }

export {
    deepCloneObject,
    deepClone,
}
