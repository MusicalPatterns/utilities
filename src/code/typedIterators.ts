// tslint:disable max-file-line-count

import { NEXT } from '../math'
import { apply, Cycle, from, Ordinal } from '../nominal'
import { indexJustBeyondFinalElement, totalElements } from './finalElement'
import { isUndefined } from './isUndefined'

const slice: <ArrayType extends unknown[] | string>(
    arrayOrString: ArrayType,
    initial: Ordinal,
    terminal?: Ordinal,
) => ArrayType =
    <ArrayType extends unknown[] | string>(
        arrayOrString: ArrayType,
        initial: Ordinal,
        terminal?: Ordinal,
    ): ArrayType => {
        if (isUndefined(terminal)) {
            return arrayOrString.slice(from.Ordinal(initial)) as ArrayType
        }

        if (terminal > totalElements(arrayOrString)) {
            throw new Error(`You tried to slice up to index ${terminal} of a structure with length \
of only ${totalElements(arrayOrString)}: ${arrayOrString}`)
        }

        return arrayOrString.slice(from.Ordinal(initial), from.Ordinal(terminal)) as ArrayType
    }

const cycleSlice: <ElementType>(cycle: Cycle<ElementType>, initial: Ordinal, terminal?: Ordinal) => ElementType[] =
    <ElementType>(cycle: Cycle<ElementType>, initial: Ordinal, terminal?: Ordinal): ElementType[] => {
        const terminalForSlice: Ordinal = isUndefined(terminal) ? indexJustBeyondFinalElement(cycle) : terminal

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

const every: <ElementType>(
    array: ElementType[],
    callback: (element: ElementType, index: Ordinal, self: ElementType[]) => boolean,
) => boolean =
    <ElementType>(
        array: ElementType[],
        callback: (element: ElementType, index: Ordinal, self: ElementType[]) => boolean,
    ): boolean =>
        // @ts-ignore
        array.every(callback)

const findIndex: <ElementType>(
    array: ElementType[],
    callback: (element: ElementType, index: Ordinal, self: ElementType[]) => boolean,
) => Ordinal =
    <ElementType>(
        array: ElementType[],
        callback: (element: ElementType, index: Ordinal, self: ElementType[]) => boolean,
    ): Ordinal =>
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
