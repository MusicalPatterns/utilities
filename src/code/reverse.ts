import { ArrayedType } from '../nominal'
import { deepClone } from './deepClone'
import { isArray, isString } from './typeGuards'

const reverse: <ArrayType extends ArrayedType>(arrayOrString: ArrayType) => ArrayType =
    <ArrayType extends ArrayedType>(arrayOrString: ArrayType): ArrayType => {
        if (isString(arrayOrString)) {
            return arrayOrString
                .split('')
                .reverse()
                .join('') as ArrayType
        }

        if (isArray(arrayOrString)) {
            return deepClone(arrayOrString as unknown[])
                .reverse() as ArrayType
        }

        throw new Error(`value was somehow neither a string nor an array: ${arrayOrString}`)
    }

export {
    reverse,
}
