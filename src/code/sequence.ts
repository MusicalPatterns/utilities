import { ArrayedType } from '../nominal'
import { exampleElement } from './exampleElement'
import { isArray, isString } from './typeGuards'
import { Difference } from './types'

const sequence: <ArrayType extends ArrayedType>(...arrays: ArrayType[]) => ArrayType =
    <ArrayType extends ArrayedType>(...arrays: ArrayType[]): ArrayType => {
        if (isString(exampleElement(arrays))) {
            return arrays.join('') as ArrayType
        }

        if (isArray(exampleElement(arrays))) {
            return (arrays as Array<Difference<ArrayedType, string>>).reduce(
                (accumulator: Difference<ArrayedType, string>, array: Difference<ArrayedType, string>) =>
                    accumulator.concat(array) as unknown as Difference<ArrayedType, string>,
                [] as unknown as Difference<ArrayedType, string>,
            ) as ArrayType
        }

        throw new Error('somehow array elements were neither strings nor arrays')
    }

export {
    sequence,
}
