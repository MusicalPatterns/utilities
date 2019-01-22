// tslint:disable:no-any

import { DictionaryOf } from '../types'

const deepCloneObject: <T>(objectToDeepClone: T) => T =
    <T>(objectToDeepClone: T): T => {
        const clonedObject: any = {} as any
        setAllPropertiesOfObjectOnAnother({ objectToChange: clonedObject, objectWithProperties: objectToDeepClone })

        // tslint:disable:no-unsafe-any
        return clonedObject
    }

const setAllPropertiesOfObjectOnAnother: <T>(_: { objectToChange: T, objectWithProperties: T }) => void =
    // tslint:disable-next-line:max-line-length
    <T extends DictionaryOf<any>>({ objectToChange, objectWithProperties }: { objectToChange: T, objectWithProperties: T }): void => {
        Object.entries(objectWithProperties)
            .forEach(([ key, value ]: [ string, any ]) => {
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
