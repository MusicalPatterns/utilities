import { ArrayedType } from '../nominal'
import { sequence } from './sequence'

const flatten: <ArrayType extends ArrayedType>(arrayOfArrays: ArrayType[]) => ArrayType =
    <ArrayType extends ArrayedType>(arrayOfArrays: ArrayType[]): ArrayType =>
        sequence(...arrayOfArrays)

export {
    flatten,
}
