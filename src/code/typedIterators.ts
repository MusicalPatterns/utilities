import { NEXT } from '../math'
import { apply, Cycle, from, Ordinal } from '../nominal'
import { isUndefined } from './isUndefined'
import { indexJustBeyondLastElement } from './lastElement'

const slice:
    <ArrayType extends unknown[] | string>(array: ArrayType, initial: Ordinal, terminal?: Ordinal) => ArrayType =
    <ArrayType extends unknown[] | string>(array: ArrayType, initial: Ordinal, terminal?: Ordinal): ArrayType => {
        if (isUndefined(terminal)) {
            return array.slice(from.Ordinal(initial)) as ArrayType
        }

        return array.slice(from.Ordinal(initial), from.Ordinal(terminal)) as ArrayType
    }

const cycleSlice: <ElementType>(cycle: Cycle<ElementType>, initial: Ordinal, terminal?: Ordinal) => ElementType[] =
    <ElementType>(cycle: Cycle<ElementType>, initial: Ordinal, terminal?: Ordinal): ElementType[] => {
        const terminalForSlice: Ordinal = isUndefined(terminal) ? indexJustBeyondLastElement(cycle) : terminal

        const resultantSlice: ElementType[] = []

        for (let index: Ordinal = initial; index < terminalForSlice; index = apply.Translation(index, NEXT)) {
            resultantSlice.push(apply.Ordinal(cycle, index))
        }

        return resultantSlice
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
    cycleSlice,
}
