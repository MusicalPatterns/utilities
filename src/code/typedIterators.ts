// tslint:disable max-file-line-count

import { apply, Cycle, from, Index, NEXT, to } from '../nominal'
import { indexJustBeyondFinalElement, totalElements } from './finalElement'
import { isUndefined } from './isUndefined'

const slice: <ArrayType extends unknown[] | string>(
    arrayOrString: ArrayType,
    initial: Index,
    terminal?: Index,
) => ArrayType =
    <ArrayType extends unknown[] | string>(
        arrayOrString: ArrayType,
        initial: Index,
        terminal?: Index,
    ): ArrayType => {
        if (isUndefined(terminal)) {
            return arrayOrString.slice(from.Index(initial)) as ArrayType
        }

        if (terminal > to.Index(from.Cardinal(totalElements(arrayOrString)))) {
            throw new Error(`You tried to slice up to index ${terminal} of a structure with length \
of only ${totalElements(arrayOrString)}: ${arrayOrString}`)
        }

        return arrayOrString.slice(from.Index(initial), from.Index(terminal)) as ArrayType
    }

const cycleSlice: <ElementType>(cycle: Cycle<ElementType>, initial: Index, terminal?: Index) => ElementType[] =
    <ElementType>(cycle: Cycle<ElementType>, initial: Index, terminal?: Index): ElementType[] => {
        const terminalForSlice: Index = isUndefined(terminal) ? indexJustBeyondFinalElement(cycle) : terminal

        const resultantSlice: ElementType[] = []

        for (let index: Index = initial; index < terminalForSlice; index = apply.Translation(index, NEXT)) {
            resultantSlice.push(apply.Index(cycle, to.Index(from.Index(index) as unknown as ElementType)))
        }

        return resultantSlice
    }

const forEach: <ElementType>(
    array: ElementType[],
    callback: (element: ElementType, index: Index, self: ElementType[]) => void,
) => void =
    <ElementType>(
        array: ElementType[],
        callback: (element: ElementType, index: Index, self: ElementType[],
        ) => void): void => {
        // @ts-ignore
        array.forEach(callback)
    }

const map: <ElementType, MappedElementType>(
    array: ElementType[],
    callback: (element: ElementType, index: Index, self: ElementType[]) => MappedElementType,
) => MappedElementType[] =
    <ElementType, MappedElementType>(
        array: ElementType[],
        callback: (element: ElementType, index: Index, self: ElementType[],
        ) => MappedElementType): MappedElementType[] =>
        // @ts-ignore
        array.map(callback)

const reduce: <ElementType, ReducedType>(
    array: ElementType[],
    callback: (accumulator: ReducedType, element: ElementType, index: Index, self: ElementType[]) => ReducedType,
    accumulator: Partial<ReducedType>,
) => ReducedType =
    <ElementType, ReducedType>(
        array: ElementType[],
        callback: (accumulator: ReducedType, element: ElementType, index: Index, self: ElementType[]) => ReducedType,
        accumulator: Partial<ReducedType>,
    ): ReducedType =>
        // @ts-ignore
        array.reduce(callback, accumulator)

const filter: <ElementType>(
    array: ElementType[],
    callback: (element: ElementType, index: Index, self: ElementType[]) => boolean,
) => ElementType[] =
    <ElementType>(
        array: ElementType[],
        callback: (element: ElementType, index: Index, self: ElementType[],
        ) => boolean): ElementType[] =>
        // @ts-ignore
        array.filter(callback)

const every: <ElementType>(
    array: ElementType[],
    callback: (element: ElementType, index: Index, self: ElementType[]) => boolean,
) => boolean =
    <ElementType>(
        array: ElementType[],
        callback: (element: ElementType, index: Index, self: ElementType[]) => boolean,
    ): boolean =>
        // @ts-ignore
        array.every(callback)

const findIndex: <ElementType>(
    array: ElementType[],
    callback: (element: ElementType, index: Index, self: ElementType[]) => boolean,
) => Index =
    <ElementType>(
        array: ElementType[],
        callback: (element: ElementType, index: Index, self: ElementType[]) => boolean,
    ): Index =>
        // @ts-ignore
        array.findIndex(callback)

export {
    slice,
    forEach,
    map,
    reduce,
    filter,
    cycleSlice,
    every,
    findIndex,
}
