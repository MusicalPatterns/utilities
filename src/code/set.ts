import { Ordinal } from '../nominal'
import { ObjectOf } from './types'

const arraySet: <ElementType>(array: ElementType[], index: Ordinal, value: ElementType) => ElementType[] =
    <ElementType>(array: ElementType[], index: Ordinal, value: ElementType): ElementType[] => {
        array[ index ] = value

        return array
    }

const objectSet: <ElementType>(obj: ObjectOf<ElementType>, index: string, value: ElementType) => ObjectOf<ElementType> =
    <ElementType>(obj: ObjectOf<ElementType>, index: string, value: ElementType): ObjectOf<ElementType> => {
        obj[ index ] = value

        return obj
    }

export {
    arraySet,
    objectSet,
}
