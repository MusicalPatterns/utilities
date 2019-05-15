import { ArrayedType, as } from '../nominal'
import { computeLength } from './finalElement'

const isEmpty: <ArrayType extends ArrayedType>(array: ArrayType) => boolean =
    <ArrayType extends ArrayedType>(array: ArrayType): boolean =>
        computeLength(array) === as.Cardinal<ArrayType>(0)

const isSingleton: <ArrayType extends ArrayedType>(array: ArrayType) => boolean =
    <ArrayType extends ArrayedType>(array: ArrayType): boolean =>
        computeLength(array) === as.Cardinal<ArrayType>(1)

export {
    isEmpty,
    isSingleton,
}
