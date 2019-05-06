import { ArrayedType } from '../nominal'
import { sequence } from './sequence'

const flatten:
    <ElementType, ArrayType extends ArrayedType<ElementType> = ElementType[]>(arrayOfArrays: ArrayType[]) => ArrayType =
    <ElementType, ArrayType extends ArrayedType<ElementType> = ElementType[]>(arrayOfArrays: ArrayType[]): ArrayType =>
        sequence(...arrayOfArrays)

export {
    flatten,
}
