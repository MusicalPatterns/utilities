// tslint:disable max-file-line-count

import { apply, Cycle, from, NEXT, Ordinal, to, Translation } from '../nominal'
import { indexJustBeyondFinalElement, totalElements } from './finalElement'
import { isUndefined } from './isUndefined'

const slice: <ElementType>(
    array: ElementType[],
    initial: Ordinal<ElementType>,
    terminal?: Ordinal<ElementType>,
) => ElementType[] =
    <ElementType>(
        array: ElementType[],
        initial: Ordinal<ElementType>,
        terminal?: Ordinal<ElementType>,
    ): ElementType[] => {
        if (isUndefined(terminal)) {
            return array.slice(from.Ordinal(initial as unknown as Ordinal))
        }

        if (terminal > (to.Ordinal(from.Cardinal(totalElements(array))) as unknown as Ordinal<ElementType>)) {
            throw new Error(`You tried to slice up to index ${terminal} of an array with length \
of only ${totalElements(array)}: ${array}`)
        }

        return array.slice(
            from.Ordinal(initial as unknown as Ordinal),
            from.Ordinal(terminal as unknown as Ordinal),
        )
    }

const stringSlice: (str: string, initial: Ordinal<string>, terminal?: Ordinal<string>) => string =
    (str: string, initial: Ordinal<string>, terminal?: Ordinal<string>): string => {
        if (isUndefined(terminal)) {
            return str.slice(from.Ordinal(initial as unknown as Ordinal))
        }

        if (terminal > to.Ordinal<string>(str.length)) {
            throw new Error(`You tried to slice up to index ${terminal} of a string with length \
of only ${str.length}: ${str}`)
        }

        return str.slice(from.Ordinal(initial as unknown as Ordinal), from.Ordinal(terminal as unknown as Ordinal))
    }

const cycleSlice: <ElementType>(
    cycle: Cycle<ElementType>,
    initial: Ordinal<ElementType>,
    terminal?: Ordinal<ElementType>,
) => ElementType[] =
    <ElementType>(
        cycle: Cycle<ElementType>,
        initial: Ordinal<ElementType>,
        terminal?: Ordinal<ElementType>,
    ): ElementType[] => {
        const terminalForSlice: Ordinal<ElementType> =
            isUndefined(terminal) ? indexJustBeyondFinalElement(cycle) : terminal

        const resultantSlice: ElementType[] = []

        for (
            let index: Ordinal<ElementType> = initial;
            index < terminalForSlice;
            index = apply.Translation(index, NEXT as unknown as Translation<Ordinal<ElementType>>)
        ) {
            resultantSlice.push(apply.Ordinal(cycle, index))
        }

        return resultantSlice
    }

const forEach: <ElementType>(
    array: ElementType[],
    callback: (element: ElementType, index: Ordinal<ElementType>, self: ElementType[]) => void,
) => void =
    <ElementType>(
        array: ElementType[],
        callback: (element: ElementType, index: Ordinal<ElementType>, self: ElementType[],
        ) => void): void => {
        // @ts-ignore
        array.forEach(callback)
    }

const map: <ElementType, MappedElementType>(
    array: ElementType[],
    callback: (element: ElementType, index: Ordinal<ElementType>, self: ElementType[]) => MappedElementType,
) => MappedElementType[] =
    <ElementType, MappedElementType>(
        array: ElementType[],
        callback: (element: ElementType, index: Ordinal<ElementType>, self: ElementType[],
        ) => MappedElementType): MappedElementType[] =>
        // @ts-ignore
        array.map(callback)

const reduce: <ElementType, ReducedType>(
    array: ElementType[],
    callback: (
        accumulator: ReducedType,
        element: ElementType,
        index: Ordinal<ElementType>,
        self: ElementType[],
    ) => ReducedType,
    accumulator: Partial<ReducedType>,
) => ReducedType =
    <ElementType, ReducedType>(
        array: ElementType[],
        callback: (
            accumulator: ReducedType,
            element: ElementType,
            index: Ordinal<ElementType>,
            self: ElementType[],
        ) => ReducedType,
        accumulator: Partial<ReducedType>,
    ): ReducedType =>
        // @ts-ignore
        array.reduce(callback, accumulator)

const filter: <ElementType>(
    array: ElementType[],
    callback: (element: ElementType, index: Ordinal<ElementType>, self: ElementType[]) => boolean,
) => ElementType[] =
    <ElementType>(
        array: ElementType[],
        callback: (element: ElementType, index: Ordinal<ElementType>, self: ElementType[],
        ) => boolean): ElementType[] =>
        // @ts-ignore
        array.filter(callback)

const every: <ElementType>(
    array: ElementType[],
    callback: (element: ElementType, index: Ordinal<ElementType>, self: ElementType[]) => boolean,
) => boolean =
    <ElementType>(
        array: ElementType[],
        callback: (element: ElementType, index: Ordinal<ElementType>, self: ElementType[]) => boolean,
    ): boolean =>
        // @ts-ignore
        array.every(callback)

const findIndex: <ElementType>(
    array: ElementType[],
    callback: (element: ElementType, index: Ordinal<ElementType>, self: ElementType[]) => boolean,
) => Ordinal<ElementType> =
    <ElementType>(
        array: ElementType[],
        callback: (element: ElementType, index: Ordinal<ElementType>, self: ElementType[]) => boolean,
    ): Ordinal<ElementType> =>
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
