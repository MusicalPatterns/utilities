import { entries } from './typedObjects'
import { DictionaryOf } from './types'

const deepCloneObject: <T extends DictionaryOf<unknown>>(objectToDeepClone: T) => T =
    <T extends DictionaryOf<unknown>>(objectToDeepClone: T): T => {
        const clonedObject: T = {} as unknown as T
        setAllPropertiesOfObjectOnAnother({ objectToChange: clonedObject, objectWithProperties: objectToDeepClone })

        return clonedObject
    }

const setAllPropertiesOfObjectOnAnother: <K extends string, V>(setAllPropertiesOfObjectOnAnotherParameters: {
    objectToChange: { [key in K]: V },
    objectWithProperties: { [key in K]: V },
}) => void =
    <K extends string, V>({ objectToChange, objectWithProperties }: {
        objectToChange: { [key in K]: V },
        objectWithProperties: { [key in K]: V },
    }): void => {
        entries(objectWithProperties)
            .forEach(([ key, value ]: [ K, V ]) => {
                objectToChange[ key ] = deepClone(value)
            })
    }

const deepClone: <T>(maybeObjectToDeepClone: T) => T =
    <T>(maybeObjectToDeepClone: T): T => {
        let clonedMaybeObject: T
        if (maybeObjectToDeepClone instanceof Array) {
            clonedMaybeObject = maybeObjectToDeepClone.slice() as unknown as T
        }
        else if (maybeObjectToDeepClone && typeof maybeObjectToDeepClone === 'object') {
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
