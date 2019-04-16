// tslint:disable max-file-line-count

import { apply, Cycle, from, Index, NEXT, of, to, Translation } from '../nominal'
import { indexJustBeyondFinalElement, totalElements } from './finalElement'
import { isUndefined } from './isUndefined'

const slice: <ElementType>(
    array: ElementType[],
    initial: Index<ElementType>,
    terminal?: Index<ElementType>,
) => ElementType[] =
    <ElementType>(
        array: ElementType[],
        initial: Index<ElementType>,
        terminal?: Index<ElementType>,
    ): ElementType[] => {
        if (isUndefined(terminal)) {
            return array.slice(from.Index(initial as unknown as Index))
        }

        if (terminal > (to.Index(from.Cardinal(totalElements(array))) as unknown as Index<ElementType>)) {
            throw new Error(`You tried to slice up to index ${terminal} of an array with length \
of only ${totalElements(array)}: ${array}`)
        }

        return array.slice(
            from.Index(initial as unknown as Index),
            from.Index(terminal as unknown as Index),
        )
    }

const stringSlice: (str: string, initial: Index<string>, terminal?: Index<string>) => string =
    (str: string, initial: Index<string>, terminal?: Index<string>): string => {
        if (isUndefined(terminal)) {
            return str.slice(from.Index(initial as unknown as Index))
        }

        if (terminal > to.Index(of.string(str.length))) {
            throw new Error(`You tried to slice up to index ${terminal} of a string with length \
of only ${str.length}: ${str}`)
        }

        return str.slice(from.Index(initial as unknown as Index), from.Index(terminal as unknown as Index))
    }

const cycleSlice: <ElementType>(
    cycle: Cycle<ElementType>,
    initial: Index<ElementType>,
    terminal?: Index<ElementType>,
) => ElementType[] =
    <ElementType>(
        cycle: Cycle<ElementType>,
        initial: Index<ElementType>,
        terminal?: Index<ElementType>,
    ): ElementType[] => {
        const terminalForSlice: Index<ElementType> =
            isUndefined(terminal) ? indexJustBeyondFinalElement(cycle) : terminal

        const resultantSlice: ElementType[] = []

        for (
            let index: Index<ElementType> = initial;
            index < terminalForSlice;
            index = apply.Translation(index, NEXT as unknown as Translation<Index<ElementType>>)
        ) {
            resultantSlice.push(apply.Index(cycle, index))
        }

        return resultantSlice
    }

const forEach: <ElementType>(
    array: ElementType[],
    callback: (element: ElementType, index: Index<ElementType>, self: ElementType[]) => void,
) => void =
    <ElementType>(
        array: ElementType[],
        callback: (element: ElementType, index: Index<ElementType>, self: ElementType[],
        ) => void): void => {
        // @ts-ignore
        array.forEach(callback)
    }

const map: <ElementType, MappedElementType>(
    array: ElementType[],
    callback: (element: ElementType, index: Index<ElementType>, self: ElementType[]) => MappedElementType,
) => MappedElementType[] =
    <ElementType, MappedElementType>(
        array: ElementType[],
        callback: (element: ElementType, index: Index<ElementType>, self: ElementType[],
        ) => MappedElementType): MappedElementType[] =>
        // @ts-ignore
        array.map(callback)

const reduce: <ElementType, ReducedType>(
    array: ElementType[],
    callback: (
        accumulator: ReducedType,
        element: ElementType,
        index: Index<ElementType>,
        self: ElementType[],
    ) => ReducedType,
    accumulator: Partial<ReducedType>,
) => ReducedType =
    <ElementType, ReducedType>(
        array: ElementType[],
        callback: (
            accumulator: ReducedType,
            element: ElementType,
            index: Index<ElementType>,
            self: ElementType[],
        ) => ReducedType,
        accumulator: Partial<ReducedType>,
    ): ReducedType =>
        // @ts-ignore
        array.reduce(callback, accumulator)

const filter: <ElementType>(
    array: ElementType[],
    callback: (element: ElementType, index: Index<ElementType>, self: ElementType[]) => boolean,
) => ElementType[] =
    <ElementType>(
        array: ElementType[],
        callback: (element: ElementType, index: Index<ElementType>, self: ElementType[],
        ) => boolean): ElementType[] =>
        // @ts-ignore
        array.filter(callback)

const every: <ElementType>(
    array: ElementType[],
    callback: (element: ElementType, index: Index<ElementType>, self: ElementType[]) => boolean,
) => boolean =
    <ElementType>(
        array: ElementType[],
        callback: (element: ElementType, index: Index<ElementType>, self: ElementType[]) => boolean,
    ): boolean =>
        // @ts-ignore
        array.every(callback)

const findIndex: <ElementType>(
    array: ElementType[],
    callback: (element: ElementType, index: Index<ElementType>, self: ElementType[]) => boolean,
) => Index =
    <ElementType>(
        array: ElementType[],
        callback: (element: ElementType, index: Index<ElementType>, self: ElementType[]) => boolean,
    ): Index =>
        // @ts-ignore
        array.findIndex(callback)

export {
    slice,
    stringSlice,
    cycleSlice,
    forEach,
    map,
    reduce,
    filter,
    every,
    findIndex,
}
