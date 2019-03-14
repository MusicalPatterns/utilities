import { NEXT } from '../math'
import { apply, Cycle, from, isCycle, Ordinal } from '../nominal'
import { isUndefined } from './isUndefined'
import { indexJustBeyondLastElement } from './lastElement'
import { Slice } from './types'

const slice: Slice =
    <Sliceable extends string | Cycle<ElementType> | ElementType[], ElementType>(
        sliceable: Sliceable, initial: Ordinal, terminal?: Ordinal,
    ): Sliceable => {
        const terminalForSlice: Ordinal = isUndefined(terminal) ?
            // @ts-ignore
            indexJustBeyondLastElement(sliceable) :
            terminal

        if (isCycle(sliceable)) {
            const resultantSlice: ElementType[] = []

            for (let index: Ordinal = initial; index < terminalForSlice; index = apply.Translation(index, NEXT)) {
                resultantSlice.push(apply.Ordinal(sliceable, index) as ElementType)
            }

            return resultantSlice as Sliceable
        }

        return sliceable.slice(from.Ordinal(initial), from.Ordinal(terminalForSlice)) as Sliceable
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
