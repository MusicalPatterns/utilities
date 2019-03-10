import { from, Ordinal } from '../nominal'
import { isUndefined } from './isUndefined'

// tslint:disable-next-line no-any
const slice: <ArrayType extends any[] | string>(array: ArrayType, initial: Ordinal, terminal?: Ordinal) => ArrayType =
    // tslint:disable-next-line no-any
    <ArrayType extends any[] | string>(array: ArrayType, initial: Ordinal, terminal?: Ordinal): ArrayType => {
        if (isUndefined(terminal)) {
            return array.slice(from.Ordinal(initial)) as ArrayType
        }
        else {
            return array.slice(from.Ordinal(initial), from.Ordinal(terminal)) as ArrayType
        }
    }

const forEach: <ElementType>(
    array: ElementType[],
    callback: (element: ElementType, index: Ordinal, self: ElementType[]) => void,
) => void =
    <ElementType>(
        array: ElementType[],
        callback: (element: ElementType, index: Ordinal, self: ElementType[],
        ) => void): void => {
        // @ts-ignore
        array.forEach(callback)
    }

const map: <ElementType, MappedElementType>(
    array: ElementType[],
    callback: (element: ElementType, index: Ordinal, self: ElementType[]) => MappedElementType,
) => MappedElementType[] =
    <ElementType, MappedElementType>(
        array: ElementType[],
        callback: (element: ElementType, index: Ordinal, self: ElementType[],
        ) => MappedElementType): MappedElementType[] =>
        // @ts-ignore
        array.map(callback)

const reduce: <ElementType, ReducedType>(
    array: ElementType[],
    callback: (accumulator: ReducedType, element: ElementType, index: Ordinal, self: ElementType[]) => ReducedType,
    accumulator: Partial<ReducedType>,
) => ReducedType =
    <ElementType, ReducedType>(
        array: ElementType[],
        callback: (accumulator: ReducedType, element: ElementType, index: Ordinal, self: ElementType[]) => ReducedType,
        accumulator: Partial<ReducedType>,
    ): ReducedType =>
        // @ts-ignore
        array.reduce(callback, accumulator)

const filter: <ElementType>(
    array: ElementType[],
    callback: (element: ElementType, index: Ordinal, self: ElementType[]) => boolean,
) => ElementType[] =
    <ElementType>(
        array: ElementType[],
        callback: (element: ElementType, index: Ordinal, self: ElementType[],
        ) => boolean): ElementType[] =>
        // @ts-ignore
        array.filter(callback)

export {
    slice,
    forEach,
    map,
    reduce,
    filter,
}
