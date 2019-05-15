import { ArrayedType, as } from '../nominal'
import { computeLength } from './finalElement'

const isEmpty:
    <ElementType, ArrayType extends ArrayedType<ElementType> = ElementType[]>(array: ArrayType) => boolean =
    <ElementType, ArrayType extends ArrayedType<ElementType> = ElementType[]>(array: ArrayType): boolean =>
        computeLength(array) === as.Cardinal<ArrayType>(0)

const isSingleton:
    <ElementType, ArrayType extends ArrayedType<ElementType> = ElementType[]>(array: ArrayType) => boolean =
    <ElementType, ArrayType extends ArrayedType<ElementType> = ElementType[]>(array: ArrayType): boolean =>
        computeLength(array) === as.Cardinal<ArrayType>(1)

export {
    isEmpty,
    isSingleton,
}
