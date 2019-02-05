// tslint:disable no-any

import { entries } from './typedObjects'

const deepCloneObject: <T>(objectToDeepClone: T) => T =
    <T>(objectToDeepClone: T): T => {
        const clonedObject: any = {} as any
        setAllPropertiesOfObjectOnAnother({ objectToChange: clonedObject, objectWithProperties: objectToDeepClone })

        return clonedObject
    }

const setAllPropertiesOfObjectOnAnother: <K extends string, V>(_: {
    objectToChange: { [key in K]: V },
    objectWithProperties: { [key in K]: V },
}) => void =
    // tslint:disable-next-line max-line-length
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
            clonedMaybeObject = maybeObjectToDeepClone.slice() as any
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
